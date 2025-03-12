import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import AOSAnimation from "@/utils/AosInit";
import NextTopLoader from "nextjs-toploader";
import Providers from "@/context/PrivyProvider";

const redditSans = localFont({
  src: [
    {
      path: "../allfonts/RedditSans-VariableFont_wght.ttf",
      weight: "300 900",
      style: "normal",
    },
  ],
  variable: "--reddit-sans-font",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://textworld.vercel.app"),
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
    url: "https://textworld.vercel.app",
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
      </body>
    </html>
  );
}
