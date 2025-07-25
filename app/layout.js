import { Work_Sans } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "Stratalytic | %s",
    default: "Stratalytic | Welcome",
  },
  description:
    "Stratalytic is a web development agency specializing in creating innovative and user-friendly digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${workSans.variable} antialiased`}
    >
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
