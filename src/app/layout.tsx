import { Montserrat } from "next/font/google";
import './styles/app.scss';
import { Nav } from "@/components/organisms/";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FIAP Teste", 
  description: "Teste para Frontend",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-stack",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.variable}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
