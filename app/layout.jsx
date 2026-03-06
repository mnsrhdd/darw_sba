"use client"
import Link from "next/link";
import DateBar from "../components/DateBar";
import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsBar from "../components/NewsBar";



export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ selection: 'none', userSelect: 'none' }}>
      <body>
        <DateBar />
        <Header />
        <Navbar />
        <NewsBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
