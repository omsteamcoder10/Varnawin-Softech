import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varnawin Softech ",
  description:
    "Varnawin Softech is a leading IT training and corporate learning institute offering Full Stack Development, Data Science, Cloud Computing, AI, Cyber Security, and professional skill development programs.",
  icons: {
    icon: "/logo/2.webp",
    apple: "/logo/2.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} ${geistMono.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
