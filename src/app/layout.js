// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Xeylous | Portfolio",
  description: "Portfolio of Xeylous - Web Developer & Blockchain Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+CA:wght@100..400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+CA:wght@100..400&family=Satisfy&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+CA:wght@100..400&family=Roboto+Slab:wght@100..900&family=Rochester&family=Satisfy&display=swap" rel="stylesheet"></link>
      </head>
      <body className="bg-slate-900 text-slate-100">
        <Navbar />
        <div className=" sm:pt-14 md:pt-14 lg:pt-14">{children}</div>
      </body>
    </html>
  );
}
