import React from 'react';

export default function NewsBar() {
  const newsItems = [
    "🌙 موعد عيد الفطر المبارك سيكون بعد رؤية الهلال",
    "💰 بلاغ زكاة الفطر: تم تحديد قيمتها بـ 170 دج لهذا العام",
    "🏆 إعلان عن نتائج مسابقة مؤذن الولاية - مبروك للفائزين",
    "🏫 موعد فتح المدرسة القرآنية الصيفية سيكون مطلع شهر جوان",
    "📢 تنبيه: يرجى من الأئمة الالتزام بمواقيت الأذان الموحدة"
  ];

  return (
    <div className="news-container">
      <div className="news-label">آخر الأخبار</div>
      <div className="news-ticker">
        <div className="ticker-content">
          {newsItems.map((item, index) => (
            <span key={index} className="news-item">
              {item}
              <span className="separator"> | </span>
            </span>
          ))}
          {/* تكرار الأخبار لضمان حركة مستمرة بدون فراغات */}
          {newsItems.map((item, index) => (
            <span key={`dup-${index}`} className="news-item">
              {item}
              <span className="separator"> | </span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .news-container {
          display: flex;
          /* background: #004a99; */
          background :transparent;
          color: green;
          height: 40px;
          align-items: center;
          overflow: hidden;
          direction: rtl;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          margin-bottom: 10px;
        }

        .news-label {
          background: #e67e22;
          padding: 0 20px;
          height: 100%;
          display: flex;
          align-items: center;
          font-weight: bold;
          white-space: nowrap;
          z-index: 2;
          position: relative;
        }

        .news-ticker {
          flex: 1;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .ticker-content {
          display: inline-flex;
          white-space: nowrap;
          animation: ticker 30s linear infinite;
        }

        .news-item {
          padding: 0 20px;
          font-size: 0.95rem;
        }

        .separator {
          margin-right: 20px;
          color: #ffcc00;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); } /* التحريك باتجاه اليمين بما أن الاتجاه RTL */
        }

        /* توقف الحركة عند تمرير الماوس */
        .news-ticker:hover .ticker-content {
          animation-play-state: paused;
          
        }
      `}</style>
    </div>
  );
}