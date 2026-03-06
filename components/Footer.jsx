"use client"

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer" dir="rtl">
      <div className="footer-container">
        
        {/* العمود الأول: الشعار */}
        <div className="footer-column logo-col">
          <Link href="/">
            <img 
              src="/img/logo_right.png" 
              alt="شعار المديرية" 
              className="footer-logo-img" 
            />
          </Link>
          <p className="footer-description">
            مديرية الشؤون الدينية والأوقاف <br/> لولاية سيدي بلعباس
          </p>
        </div>

     

        {/* العمود الثاني: خدمات إلكترونية */}
        <div className="footer-column services-col">
          <h3 className="footer-title">خدمات إلكترونية</h3>
          <ul className="footer-links-list">
            <li>
              <a href="https://khadamates.marw.dz/home" target="_blank" rel="noopener noreferrer">
                بوابة الخدمات الرقمية
              </a>
            </li>
            <li><Link href="/ServiceElectronique/I3tina9">فضاء اعتناق الإسلام</Link></li>
            <li><Link href="/ServiceElectronique/PrayerTimes">مواقيت الصلاة</Link></li>
          </ul>
        </div>

        {/* العمود الرابع: الاتصال */}
        <div className="footer-column contact-col">
          <h3 className="footer-title">معلومات الاتصال</h3>
          <div className="contact-details">
            <p>📍 43 شارع قاضي بن قاضي، سيدي بلعباس</p>
            <p>📞 048.71.51.79</p>
           {/*  <p>📧 dsidibelabbes@marw.dz</p> */}
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>جميع الحقوق محفوظة &copy; {currentYear} مديرية الشؤون الدينية والأوقاف</p>
      </div>

      <style jsx>{`
        .main-footer {
          background-color: #1a4d2e; /* الأخضر الرسمي */
          color: #ffffff; /* النص الأساسي أبيض */
          padding: 50px 0 20px 0;
          margin-top: 60px;
          border-top: 4px solid #D4AF37; /* ذهبي للحد العلوي */
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 25px;
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
          gap: 30px;
          align-items: start;
        }

        /* تنسيق الشعار */
        .footer-logo-img {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #D4AF37; /* إطار ذهبي للشعار */
          cursor: pointer;
          transition: transform 0.3s ease;
          margin-bottom: 15px;
          background-color: white; /* خلفية بيضاء للشعار ليبرز */
        }

        .footer-logo-img:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
        }

        /* العناوين باللون الذهبي */
        .footer-title {
          color: #D4AF37; /* لون ذهبي نقي */
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 50px;
          height: 2px;
          background-color: #D4AF37; /* خط ذهبي تحت العنوان */
        }

        .footer-description {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #ffffff; /* أبيض ناصع للوصف */
        }

        .footer-links-list {
          list-style: none;
          
          padding: 0;
        }

        .footer-links-list li {
          margin-bottom: 15px;
          list-style: none;
          text-decoration : none;
        }

        /* الروابط باللون الأبيض */
        .footer-links-list a {
          color: #ffffff; /* أبيض ناصع لسهولة القراءة */
          text-decoration: none;
          font-size: 0.95rem;
          transition: 0.3s;
          opacity: 0.9;
        }

        .footer-links-list a:hover {
          color: #D4AF37; /* يتحول للذهبي عند التمرير */
          opacity: 1;
          padding-right: 10px;
        }

        .contact-details p {
          font-size: 0.95rem;
          margin-bottom: 15px;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-copyright {
          text-align: center;
          margin-top: 50px;
          padding-top: 20px;
          border-top: 1px solid rgba(212, 175, 55, 0.2); /* خط ذهبي شفاف جداً */
          font-size: 0.9rem;
          color: #ffffff;
        }

        /* التجاوب (Responsive) */
        @media (max-width: 992px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-title::after {
            right: 50%;
            transform: translateX(50%);
          }
          .footer-logo-img {
            margin: 0 auto 15px auto;
            display: block;
          }
        }
      `}</style>
    </footer>
  );
}