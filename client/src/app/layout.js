import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "./components/Hero Section/HeroSection";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Footer/>
      <main>{children}</main>
    </div>
  );
}
