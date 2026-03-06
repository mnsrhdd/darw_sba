"use client"

export default function Page() {
  return (
    <main className="mainContainer"> 
      <div className="wrapper">
        {/* السلايدر */}
        <section className="sliderSection">
          <div className="slide">
            <img src="/img/slider1.jpg" alt="نشاطات المديرية" />
            <div className="caption">
              <h2>نشاطات مديرية الشؤون الدينية</h2>
              <p>تغطية شاملة لآخر الندوات والملتقيات العلمية بالولاية.</p>
            </div>
          </div>
        </section>

        {/* تقسيم المحتوى */}
        <div className="contentGrid">
          {/* الجانب الأيمن: الأخبار */}
          <section className="newsSection">
            <h3 className="sectionTitle">آخر الأخبار</h3>
            <ul className="newsList">
              <li>🔹 انطلاق مسابقة المؤذن المتميز لشهر رمضان.</li>
              <li>🔹 ندوة علمية حول تاريخ المساجد بمدينة سيدي بلعباس.</li>
              <li>🔹 إعلان نتائج امتحانات التعليم القرآني.</li>
            </ul>
          </section>

          {/* الجانب الأيسر: الإعلانات */}
          <section className="adsSection">
            <h3 className="sectionTitle">الإعلانات والتبليغات</h3>
            <div className="adCard warning">
              <strong>هام:</strong> فتح التسجيلات لقرعة الحج لموسم 2026.
            </div>
            <div className="adCard info">
              <strong>تذكير:</strong> موعد صلاة الجمعة بمساجد الولاية.
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .mainContainer {
          background-color: #f4f7f6;
          min-height: 100vh;
          padding: 40px 20px;
          direction: rtl;
        }
        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }
        .sliderSection {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 30px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .sliderSection img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .caption {
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 30px;
        }
        .contentGrid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 25px;
        }
        @media (max-width: 768px) {
          .contentGrid { grid-template-columns: 1fr; }
        }
        .newsSection, .adsSection {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        .sectionTitle {
          color: #004a99;
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .newsList { list-style: none; padding: 0; }
        .newsList li {
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          color: #444;
        }
        .adCard {
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 15px;
          font-size: 0.9rem;
        }
        .warning {
          background-color: #fff3cd;
          color: #856404;
          border-right: 5px solid #ffc107;
        }
        .info {
          background-color: #d1ecf1;
          color: #0c5460;
          border-right: 5px solid #17a2b8;
        }
      `}</style>
    </main>
  );
}