"use client";

import { UserStudyFund } from "@/libs/UserStudyFund";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { TransactionReceipt } from "ethers";
import { ethers } from "ethers";
import React, { ReactNode, useEffect } from "react";
import { createContext, useContext, useMemo, useState } from "react";

// Define the type for context
type BlockchainContextType = {
  wallet?: { address: string; usdtBalance: string };
  donate: (amount: number) => Promise<[TransactionReceipt, TransactionReceipt]>;
  requestTestTokens: (amount: number) => Promise<TransactionReceipt>;
  getUSDTBalance: () => Promise<string | null>;
};

const BlockchainContext = createContext<BlockchainContextType | null>(null);

export const BlockchainProvider = ({ children }: { children: ReactNode }) => {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const [studyFund, setStudyFund] = useState<UserStudyFund | null>(null);
  const [usdtBalance, setUsdtBalance] = useState<string>("0");

  const wallet = useMemo(
    () => wallets.find((wallet) => wallet.walletClientType === "privy"),
    [wallets],
  );

  useEffect(() => {
    const getBalance = async () => {
      if (studyFund && wallet) {
        const balance = await getUSDTBalance();
        setUsdtBalance(balance!);
      }
    };

    const interval = setInterval(getBalance, 30000);
    getBalance();

    return () => clearInterval(interval);
  }, [studyFund, setUsdtBalance]);

  // Create StudyFund instance with useMemo to prevent unnecessary re-creation

  useEffect(() => {
    // Connect wallet when authenticated
    const connectWallet = async () => {
      if (ready && authenticated && wallets.length > 0) {
        try {
          // Get the embedded wallet from Privy

          if (wallet) {
            // Create an ethers signer from the Privy wallet
            const provider = new ethers.BrowserProvider(
              await wallet?.getEthereumProvider(),
            );

            setStudyFund(
              new UserStudyFund({
                provider,
                network: "testnet",
                contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS!,
                usdtContractAddress: process.env.NEXT_PUBLIC_USDT_ADDRESS!,
              }),
            );

            const newSigner = await provider.getSigner();

            // Connect the signer to StudyFund
            await studyFund?.connect(newSigner);
            console.log("Wallet connected successfully");
          }
        } catch (error) {
          console.error("Failed to connect wallet:", error);
        }
      }
    };

    connectWallet();
  }, [ready, authenticated, wallets, studyFund]);

  // Request test tokens
  const requestTestTokens = async (amount: number) => {
    try {
      if (!studyFund?.isConnected()) {
        throw new Error("Wallet not connected");
      }

      // Request USDT (ERC20) and EDU (native token)
      const usdtTx = await studyFund?.requestTestUSDT(amount); // Request 50 USDT

      const eduTx = await studyFund?.requestTestEDU(0.001); // Request 500 EDU (native token)

      const rsp = await Promise.all([usdtTx.wait(), eduTx.wait()]);

      if (rsp[0]?.status === 1) {
        setUsdtBalance((await getUSDTBalance())!);
      }

      return rsp;
      //   console.log('Test tokens received!');
    } catch (error) {
      console.error("Failed to get test tokens:", error);
    }
  };

  // Make a donation
  const donate = async (amount: number) => {
    try {
      if (!studyFund?.isConnected()) {
        throw new Error("Wallet not connected");
      }
      const tx = await studyFund?.donate(amount); // Donate 10 USDT
      return await tx.wait();
      //   console.log("Donation successful!");
    } catch (error) {
      console.error("Donation failed:", error);
    }
  };

  const getUSDTBalance = async () => {
    try {
      if (!studyFund?.isConnected()) {
        throw new Error("Wallet not connected");
      }

      const balance = await studyFund?.getUSDTBalance();
      return balance;
    } catch (error) {
      console.error("Failed to get USDT balance:", error);
    }
  };

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
