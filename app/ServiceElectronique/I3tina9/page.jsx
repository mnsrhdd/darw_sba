import React from "react";

export default function IslamicProceduresPage() {
  return (
    <div dir="rtl" style={containerStyle}>
      <style>{`
        .section-card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          border-right: 5px solid teal;
        }
        .main-title {
          color: teal;
          border-bottom: 2px solid #f0f0f0;
          padding-bottom: 10px;
          margin-bottom: 20px;
          font-size: 1.5rem;
        }
        .sub-title {
          color: #b8860b; /* Goldenrod color */
          margin: 20px 0 10px 0;
          font-size: 1.2rem;
        }
        .content-text {
          line-height: 1.8;
          color: #444;
          font-size: 1.05rem;
        }
        .styled-list {
          padding-right: 20px;
          margin: 15px 0;
        }
        .styled-list li {
          margin-bottom: 12px;
          color: #555;
        }
        .download-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }
        .download-btn {
          background: #f8f9fa;
          color: teal;
          padding: 15px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          border: 1px solid #e0e0e0;
          transition: all 0.3s;
          text-align: center;
        }
        .download-btn:hover {
          background: teal;
          color: white;
          transform: translateY(-2px);
        }
          .online-service-btn {
          display: inline-block;
          background: linear-gradient(135deg, #008080 0%, #006666 100%);
          color: white;
          padding: 18px 30px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          box-shadow: 0 4px 15px rgba(0, 128, 128, 0.3);
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        .online-service-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 128, 128, 0.4);
          background: linear-gradient(135deg, #006666 0%, #004d4d 100%);
          color: #ffd700; /* تغيير طفيف للون النص عند الهوفر */
        }
      `}</style>

      {/* القسم الأول: اعتناق الإسلام */}
      <section className="section-card">
        <h2 className="main-title">أولاً: شروط وإجراءات اعتناق الإسلام</h2>
        <p className="content-text">
          تعتبر شهادة اعتناق الإسلام شهادة رسمية تثبت الدين الإسلامي لحاملها
          وتخوله الحق في استعمالها في مجال الأحوال الشخصية.
        </p>

        <h3 className="sub-title">شروط تكوين ملف اعتناق الإسلام:</h3>
        <ol className="styled-list content-text">
          <li>طلب خطي.</li>
          <li>شهادة الميلاد الأصلية للمعني.</li>
          <li>شهادة الجنسية الحالية.</li>
          <li>شهادة الإقامة بالجزائر.</li>
          <li>
            استمارة معلومات شخصية تملأ من طرف صاحب الطلب ويتم التصديق عليها
            (متاحة للتحميل أدناه).
          </li>
          <li>خمس (5) صور شمسية حديثة.</li>
        </ol>

        <h3 className="sub-title">إجراءات الحصول على الشهادة:</h3>
        <ul className="styled-list content-text">
          <li>
            تختص مديريات الشؤون الدينية والأوقاف عبر كامل ولايات الوطن بإصدار
            هذه الشهادات.
          </li>
          <li>
            يتم إرسال الملف للجهات المختصة للدراسة، وفي حال الرد الإيجابي يتم
            تحديد موعد لتلقين الشهادتين.
          </li>
          <li>يجب حضور شاهدين بالغين يعرفان المعني مع وثائق هويتهما.</li>
          <li>
            إذا كان المعني يملك شهادة من هيئة أجنبية، تقدم للمديرية للنظر في
            اعتمادها من الوزارة الوصية.
          </li>
        </ul>
      </section>

      {/* القسم الثاني: إثبات الإسلام */}
      <section className="section-card">
        <h2 className="main-title">ثانياً: شروط وإجراءات إثبات الإسلام</h2>
        <p className="content-text">
          تعتبر شهادة إثبات الإسلام شهادة رسمية تثبت لحاملها أنه مسلم (للأشخاص
          المسلمين أصلاً والذين يحتاجون للوثيقة إدارياً).
        </p>

        <h3 className="sub-title">شروط تكوين ملف إثبات الإسلام:</h3>
        <ol className="styled-list content-text">
          <li>شهادة شاهدين مرافقين للمعني.</li>
          <li>طلب خطي مبرر يذكر فيه سبب طلب الشهادة.</li>
          <li>شهادة الميلاد الأصلية.</li>
          <li>نسخة من بطاقة الهوية أو جواز سفر ساري المفعول.</li>
          <li>استمارة معلومات شخصية مصدق عليها.</li>
          <li>صورتان (2) شمسيتان حديثتان.</li>
          <li>
            للمرأة: نسخة من شهادة ميلاد الزوج المسلم أو شهادة اعتناقه الإسلام
            (في حال عقد الزواج).
          </li>
        </ol>
      </section>

      {/* قسم التواصل والتحميل والطلب الإلكتروني */}
      <section
        className="section-card"
        style={{ borderRightColor: "#b8860b", backgroundColor: "#fffdf5" }}
      >
        <h2 className="main-title">الطلب الإلكتروني والتواصل</h2>

        {/* زر الخدمة الإلكترونية البارز */}
        <div style={{ marginBottom: "25px", textAlign: "center" }}>
          <p
            className="content-text"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            يمكنكم الآن تقديم الطلب مباشرة عبر المنصة الرقمية:
          </p>
          <a
            href="https://khadamates.marw.dz/service-detail/6"
            target="_blank"
            rel="noopener noreferrer"
            className="online-service-btn"
          >
            🌐 الذهاب إلى صفحة الطلب الإلكتروني لاعتناق الإسلام
          </a>
        </div>

        <hr
          style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }}
        />

        <p className="content-text">
          للاستفسارات وطرح انشغالاتكم، مراسلتنا عبر البريد الإلكتروني:
          
          <a
            href="mailto:cislam@marw.dz"
            style={{ color: "teal", fontWeight: "bold", marginRight: "5px" }}
          >
            dsidibelabbes@marw.dz
          </a>
        </p>

        <h3 className="sub-title" style={{ fontSize: "1rem" }}>
          نماذج التحميل اليدوي (PDF/Doc):
        </h3>
        <div className="download-links">
          <a
            href="https://docs.google.com/document/d/1s8fYGCpdwyDE_MZxzVRV8e7tz5LVTu0u/edit"
            className="download-btn"
          >
            📄 طلب شهادة اعتناق الإسلام (عربي)
          </a>
          <a
            href="https://docs.google.com/document/d/1GEFw5db4WaV5KHxlW-JuasAEDDWIJZc4/edit"
            className="download-btn"
          >
            📄 طلب شهادة اعتناق الإسلام (فرنسي)
          </a>
          <a
            href="https://docs.google.com/document/d/1iQxvIwPaYTybZyK3HFj8K0EBWPGxiAP2/edit"
            className="download-btn"
          >
            📄 طلب شهادة إثبات الإسلام (عربي)
          </a>
          <a
            href="https://docs.google.com/document/d/1I0PPxkBUOAK1-HYv8K7rdODoFP7FKxyJ/edit"
            className="download-btn"
          >
            📄 طلب شهادة إثبات الإسلام (فرنسي)
          </a>
        </div>
      </section>
    </div>
  );
}

const containerStyle = {
  backgroundColor: "#f4f7f6",
  padding: "40px 20px",
  minHeight: "100vh",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};
