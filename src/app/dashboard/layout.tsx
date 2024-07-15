import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../Providers";
import { SiderBar } from "@/components/Dashboard";

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
          <div className="flex bg-muted/40">
            <SiderBar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
