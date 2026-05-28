import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://translima.com.br"),
  title: {
    default: "Translima Campinas Transportes e Turismo",
    template: "%s | Translima Campinas"
  },
  description:
    "Fretamento empresarial, executivo, contínuo, eventual e turístico em Campinas desde 1993.",
  openGraph: {
    title: "Translima Campinas Transportes e Turismo",
    description:
      "Transporte de passageiros com conforto, segurança e pontualidade.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
