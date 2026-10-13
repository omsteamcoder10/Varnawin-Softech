import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varnawin Softech",
  description:
    "Varnawin Softech is a leading IT training and corporate learning institute offering Full Stack Development, Data Science, Cloud Computing, AI, Cyber Security, and professional skill development programs.",
  icons: {
    icon: "/logo/1.png",
    apple: "/logo/1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
