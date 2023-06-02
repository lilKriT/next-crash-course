import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "lilKriT's Next Crash",
  description: "Crash Course of Next.js",
  keywords: "coding, next, lilKriT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
