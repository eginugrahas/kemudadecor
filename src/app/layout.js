import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Kemuda Decor",
  description: "Solusi Decoratif inovatif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      <Analytics />
      </body>
    </html>
  );
}
