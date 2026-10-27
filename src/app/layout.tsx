import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shahmir Khan | Full Stack Developer",
  description:
    "Portfolio of Shahmir Khan, a full stack developer from Peshawar, Pakistan. MERN, Django, PHP and more.",
};

// This wraps EVERY page: Header on top, the page itself in the middle, Footer at the bottom.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
