import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../Providers";
import { SiderBar } from "@/components/Dashboard/SiderBard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard - Share QR",
  description: "Share information for QR code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div>
            <SiderBar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
