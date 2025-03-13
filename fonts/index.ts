import localFont from "next/font/local";

export const redditSans = localFont({
  src: [
    {
      path: "./RedditSans-VariableFont_wght.ttf",
      weight: "300 900",
      style: "normal",
    },
  ],
  variable: "--reddit-sans-font",
  display: "swap",
});
