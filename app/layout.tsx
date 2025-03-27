import type { Metadata } from "next";
import "./globals.css";
import AOSAnimation from "@/utils/AosInit";
import NextTopLoader from "nextjs-toploader";
import Providers from "@/context/PrivyProvider";

import { redditSans } from "@/fonts";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://studyfund.org"),
  title: {
    default: "Studyfund",
    template: "%s | Studyfund",
  },
  description:
    "Every contribution fuels a dream. Every donation creates a scholar. With StudyFund, your generosity doesn’t just fund education, it gives you the chance to win big! Donate, support students, and enter our raffle for a massive cash prize!",

  openGraph: {
    title: "Studyfund",
    description:
      "Every contribution fuels a dream. Every donation creates a scholar. With StudyFund, your generosity doesn’t just fund education, it gives you the chance to win big! Donate, support students, and enter our raffle for a massive cash prize!",
    type: "website",
    locale: "en_US",
    url: "https://studyfund.org",
    siteName: "Studyfund",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={redditSans?.variable}>
        <NextTopLoader showSpinner={false} />

        <Providers>
          <AOSAnimation>{children}</AOSAnimation>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
