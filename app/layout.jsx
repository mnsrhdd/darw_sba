import Link from "next/link";
import DateBar from "../components/DateBar";
import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "الرئيسية | مديرية الشؤون الدينية والأوقاف لولاية سيدي بلعباس",
  description: "معلومات عن المديرية",
  icons: {
    icon: "/img/logo_right.png", // تأكد من وضع ملف logo.png داخل مجلد public
    shortcut: "/img/logo_right.png",
    apple: "/img/logo_right.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ selection: 'none', userSelect: 'none' }}>
      <body>
        <DateBar />
        <Header />
        <Navbar />
        <h4>News Bar</h4>
        {children}
        <Footer />
      </body>
    </html>
  );
}
