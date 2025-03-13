"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { eduChainTestnet } from "viem/chains";
import { BlockchainProvider } from "./BlockchainProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_KEY;
  return (
    <PrivyProvider
      appId={appId as string}
      config={{
        supportedChains: [eduChainTestnet],
      }}
    >
      <BlockchainProvider>{children}</BlockchainProvider>
    </PrivyProvider>
  );
}
