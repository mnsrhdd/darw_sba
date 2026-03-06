import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <style>{`
        .main-header {
          background-color: white; 
          display: flex;
          justify-content: space-between; /* توزيع: يمين - وسط - يسار */
          align-items: center;
          padding: 10px 20px; /* تقليل البادينج قليلاً لترك مساحة للشعارات */
          height: 100px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          width: 100%;
          box-sizing: border-box;
        }

        .logo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1; /* جعل كل قسم يأخذ مساحة متساوية لضمان التوسيط الدقيق */
        }

        .circular-logo {
          width: 70px;
          height: 70px; 
          border-radius: 50%;
          object-fit: cover;
          cursor: pointer;
          border: 2px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .center-logo {
          width: 180px;
          height: auto;
          max-height: 80px;
          object-fit: contain;
          cursor: pointer;
        }

        /* تنسيق خاص للشاشات الصغيرة جداً */
        @media (max-width: 480px) {
          .main-header {
            padding: 5px 10px;
            height: 85px;
            gap: 5px; /* مسافة صغيرة بين الشعارات لمنع التلاصق */
          }

          .circular-logo {
            width: 50px; /* تصغير الشعارات الجانبية لتناسب العرض */
            height: 50px;
          }

          .center-logo {
            width: 130px; /* تصغير الشعار الأوسط ليناسب العرض */
          }
        }

        /* منع الصور من الانضغاط */
        img {
          flex-shrink: 0;
        }
      `}</style>

      <header className="main-header" dir="rtl">
        {/* القسم الأيمن */}
        <div className="logo-wrapper">
          <Link href="/">
            <img src="/img/logo_right.png" alt="Right Logo" className="circular-logo" />
          </Link>
        </div>

        {/* القسم الأوسط */}
        <div className="logo-wrapper">
          <Link href="/">
            <img src="/img/logo.png" alt="Main Logo" className="center-logo" />
          </Link>
        </div>

        {/* القسم الأيسر */}
        <div className="logo-wrapper">
          <Link href="/">
            <img src="/img/logo_left.png" alt="Left Logo" className="circular-logo" />
          </Link>
        </div>
      </header>
    </>
  );
}