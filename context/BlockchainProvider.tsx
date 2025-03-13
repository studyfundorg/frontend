"use client";

import { UserStudyFund } from "@/libs/UserStudyFund";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { TransactionReceipt } from "ethers";
import { ethers } from "ethers";
import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import { createContext, useContext, useMemo, useState } from "react";

// Define the type for context
type BlockchainContextType = {
  wallet?: { address: string; usdtBalance: string };
  donate: (amount: number) => Promise<TransactionReceipt | null>;
  requestTestTokens: (amount: number) => Promise<boolean>;
  getUSDTBalance: () => Promise<string>;
};

const BlockchainContext = createContext<BlockchainContextType | null>(null);

export const BlockchainProvider = ({ children }: { children: ReactNode }) => {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const [usdtBalance, setUsdtBalance] = useState<string>("0");
  const studyFundRef = useRef<UserStudyFund | null>(null);

  const wallet = useMemo(
    () => wallets.find((wallet) => wallet.walletClientType === "privy"),
    [wallets],
  );

  useEffect(() => {
    // Connect wallet when authenticated
    const connectWallet = async () => {
      console.log("connectWallet", ready, authenticated, wallet);
      if (ready && authenticated && wallet) {
        try {
          // Create an ethers signer from the Privy wallet
          const provider = new ethers.BrowserProvider(
            await wallet?.getEthereumProvider(),
          );

          studyFundRef.current =
            new UserStudyFund({
              provider,
              network: "testnet",
              contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
              usdtContractAddress: process.env.NEXT_PUBLIC_USDT_ADDRESS!,
            });

          const newSigner = await provider.getSigner();
          console.log("newSigner", newSigner, provider);

          // Connect the signer to StudyFund
          await studyFundRef.current?.connect(newSigner);
          console.log("Wallet connected successfully");
        } catch (error) {
          console.error("Failed to connect wallet:", error);
        }
      }
    };

    connectWallet();
  }, [ready, authenticated, wallet]);

  // Request test tokens
  const requestTestTokens = async (amount: number) => {
    try {
      if (!studyFundRef.current?.isConnected()) {
        throw new Error("Wallet not connected");
      }

      let estimatedFee = "0.001"; // Default value if estimation fails
      
      try {
        const estimate = await studyFundRef.current?.estimateDonationGasFee(amount);
        console.log("Gas estimate:", estimate);
        estimatedFee = estimate.feeInEDU;
      } catch (estimateError) {
        console.warn("Failed to estimate gas, using default value:", estimateError);
        // Continue with default value
      }
      
      // Request USDT (ERC20) and EDU (native token)
      const usdtTx = await studyFundRef.current?.requestTestUSDT(amount);
      const eduTx = await studyFundRef.current?.requestTestEDU(parseFloat(estimatedFee));

      const rsp = await Promise.all([usdtTx.wait(), eduTx.wait()]);

      if (rsp[0]?.status === 1) {
        setUsdtBalance((await getUSDTBalance())!);
      } else {
        console.error("Failed to get test USDT tokens:", rsp[0]);
      }

      if (rsp[1]?.status !== 1) {
        console.error("Failed to get test EDU tokens:", rsp[1]);
      }

      return rsp[0]?.status === 1 && rsp[1]?.status === 1;
    } catch (error) {
      console.error("Failed to get test tokens:", error);
      return false;
    }
  };

  // Make a donation
  const donate = async (amount: number) => {
    try {
      if (!studyFundRef.current?.isConnected()) {
        throw new Error("Wallet not connected");
      }
      const tx = await studyFundRef.current?.donate(amount); // Donate 10 USDT
      return await tx.wait();
    } catch (error) {
      console.error("Donation failed:", error);
      return null;
    }
  };

  const getUSDTBalance = async () => {
    try {
      if (!studyFundRef.current?.isConnected()) {
        throw new Error("Wallet not connected");
      }

      const balance = await studyFundRef.current?.getUSDTBalance();
      setUsdtBalance(balance!);
      return balance;
    } catch (error) {
      console.error("Failed to get USDT balance:", error);
      return "0";
    }
  };

  useEffect(() => {
    getUSDTBalance();
    const interval = setInterval(getUSDTBalance, 10000);

    return () => clearInterval(interval);
  }, [getUSDTBalance]);

  const blockchain: BlockchainContextType = {
    wallet: wallet ? { address: wallet.address, usdtBalance } : undefined,
    donate,
    requestTestTokens,
    getUSDTBalance,
  };

  return (
    <BlockchainContext.Provider value={blockchain}>
      {children}
    </BlockchainContext.Provider>
  );
};

// Custom hook
export const useBlockchain = (): BlockchainContextType => {
  const context = useContext(BlockchainContext);
  if (!context) {
    throw new Error("useBlockchain must be used within a BlockchainProvider");
  }
  return context;
};
