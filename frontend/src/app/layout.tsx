import type { Metadata } from "next";
import "./styles/globals.scss";
import Header from "@/components/Header/header";

export const metadata: Metadata = {
  title: "OneBitFood",
  description: "Peça comidas e receba no conforto de casa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
