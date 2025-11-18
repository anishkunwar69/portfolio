import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Web Development Agency - High-Converting Websites & MVPs",
  description:
    "We build high-converting websites and MVPs for founders and businesses. Launch your digital product in 7 days or less and start growing your business online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${lato.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-R7F2ZKPPL1" />
      </body>
    </html>
  );
}
