import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/styles/globals.css";
import {Header} from "@/src/app/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Osman Ahmed',
  description: 'Portfolio website',
};

function Footer() {
  return (
    <footer className={'h-[50px]'}>
      <div className={'container flex h-full items-center'}>
        <p>Copyright &#169; 2024 Osman Ahmed</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
