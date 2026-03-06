"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // دالة لإغلاق القائمة
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <style>{`
        /* ... نفس الستايل السابق الخاص بك دون تغيير ... */
        .nav-header { background-color: #1a4d2e; padding: 10px 30px; position: sticky; top: 0; z-index: 1000; shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
        .nav-links { display: flex; gap: 20px; align-items: center; }
        .nav-link { color: white; text-decoration: none; font-size: 15px; font-weight: 600; white-space: nowrap; cursor: pointer; }
        .dropdown { position: relative; padding-bottom: 10px; margin-bottom: -10px; }
        .dropdown-menu { display: none; position: absolute; top: 100%; right: 0; background-color: white; min-width: 200px; box-shadow: 0px 8px 16px rgba(0,0,0,0.15); border-radius: 4px; z-index: 101; }
        .dropdown:hover .dropdown-menu { display: block; }
        .dropdown-item { display: block; padding: 12px 15px; color: #333; text-decoration: none; font-size: 14px; text-align: right; border-bottom: 1px solid #f1f1f1; }
        .dropdown-item:hover { background-color: #f9f9f9; color: #008080; }
        .menu-icon { display: none; flex-direction: column; cursor: pointer; gap: 5px; }
        .menu-icon span { width: 25px; height: 3px; background-color: white; border-radius: 2px; }

        @media (max-width: 992px) {
          .menu-icon { display: flex; }
          .nav-links {
            display: ${isOpen ? "flex" : "none"};
            flex-direction: column; position: absolute; top: 100%; left: 0; right: 0;
            background-color: #1a4d2e; padding: 20px; gap: 15px; border-top: 1px solid rgba(255,255,255,0.1);
          }
          .dropdown-menu { position: static; width: 100%; background-color: rgba(255,255,255,0.05); box-shadow: none; }
          .dropdown-item { color: #eee; }
        }
      `}</style>

      <header dir="rtl" className="nav-header">
        <nav className="nav-container">
          <div style={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}>
            <Link href="/" onClick={closeMenu} style={{ color: "inherit", textDecoration: "none" }}>
              مديرية الشؤون الدينية والأوقاف
            </Link>
          </div>

          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <span></span><span></span><span></span>
          </div>

          <div className="nav-links">
            <Link href="/" className="nav-link" onClick={closeMenu}>الرئيسية</Link>

            <div className="dropdown">
              <span className="nav-link">المديــريـة ▾</span>
              <div className="dropdown-menu">
                <Link href="/Direction/Historique" className="dropdown-item" onClick={closeMenu}>نبذة تاريخية</Link>
                <Link href="/Direction/Organigramme" className="dropdown-item" onClick={closeMenu}>الهيكل التنظيمي</Link>
                <Link href="/Direction/Fonction" className="dropdown-item" onClick={closeMenu}>مــهام المديرية</Link>
              </div>
            </div>

            <div className="dropdown">
              <span className="nav-link">المديــر ▾</span>
              <div className="dropdown-menu">
                <Link href="/Directeur/CV" className="dropdown-item" onClick={closeMenu}>السيرة الذاتية</Link>
                <Link href="/Directeur/Powers" className="dropdown-item" onClick={closeMenu}>صلاحيات المدير</Link>
                <Link href="/Directeur/Activities" className="dropdown-item" onClick={closeMenu}>نشاطات المدير</Link>
              </div>
            </div>

            <Link href="/Ensegnement" className="nav-link" onClick={closeMenu}>التعليم القرآني</Link>

            <div className="dropdown">
              <span className="nav-link">خدمات إلكترونية ▾</span>
              <div className="dropdown-menu">
                <Link href="/ServiceElectronique/Fatwa" className="dropdown-item" onClick={closeMenu}>الفتوى الالكترونية</Link>
                <a href="https://khadamates.marw.dz/home" target="_blank" className="dropdown-item" onClick={closeMenu}>بوابة الخدمات الالكترونية</a>
                <Link href="/ServiceElectronique/I3tina9" className="dropdown-item" onClick={closeMenu}>فضاء اعتناق الاسلام</Link>
                <Link href="/ServiceElectronique/PrayerTimes" className="dropdown-item" onClick={closeMenu}>مواقيت الصلاة</Link>
              </div>
            </div>

            <Link href="/Contact" className="nav-link" onClick={closeMenu}>اتصل بنا</Link>
          </div>
        </nav>
      </header>
    </>
  );
}