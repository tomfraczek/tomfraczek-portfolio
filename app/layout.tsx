// import type { Metadata } from "next";
// import { Nunito, Fjalla_One } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";

// export const fjala = Fjalla_One({
//   subsets: ["latin"],
//   weight: ["400"],
//   preload: false,
// });

// export const nunito = Nunito({
//   subsets: ["latin"],
//   weight: ["400"],
//   preload: false,
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
