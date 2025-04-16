import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
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
  title: "Anish Kunwar - Developer",
  description: "Anish Kunwar is a software developer with a passion for building innovative and user-friendly applications. With a strong foundation in computer science and software engineering, Anish is dedicated to creating efficient and effective solutions that meet the needs of his clients and users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
