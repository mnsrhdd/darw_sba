"use client"
import React from 'react';

// إعداد عنوان الصفحة (Metadata)


export default function OrganizationalStructure() {
  const structure = [
    {
      mصلحة: "مصلحة التوجيه الديني والأوقاف والشعائر الدينية",
      icon: "",
      offices: [
        "مكتب التوجيه الديني وإدارة المساجد",
        "مكتب الأوقاف والشعائر الدينية"
      ]
    },
    {
      mصلحة: "مصلحة التعليم القرآني والتكوين",
      icon: "",
      offices: [
        "مكتب التعليم القرآني ومتابعة هياكله",
        "مكتب المسابقات القرآنية والإقراء",
        "مكتب التكوين وتحسين المستوى"
      ]
    },
    {
      mصلحة: "مصلحة الثقافة الإسلامية والإعلام والوثائق",
      icon: "",
      offices: [
        "مكتب الثقافة الإسلامية والإعلام",
        "مكتب المخطوطات وإحياء التراث",
        "مكتب الأرشيف والوثائق"
      ]
    },
    {
      mصلحة: "مصلحة المستخدمين والوسائل والمحاسبة والرقمنة",
      icon: "",
      offices: [
        "مكتب المستخدمين ومتابعة المنازعات",
        "مكتب الميزانية والمحاسبة",
        "مكتب الوسائل العامة والرقمنة"
      ]
    }
  ];

  return (
    <div className="structure-container" dir="rtl">
      <header className="structure-header">
        <h1>الهيكل التنظيمي للمديرية</h1>
        <p>بموجب القرار الوزاري المشترك المؤرخ في 20 مارس 2023</p>
      </header>

      {/* قسم المصالح والمكاتب */}
      <section className="org-chart">
        <div className="director-node">
          <div className="node-content">السيد مدير الشؤون الدينية والأوقاف</div>
        </div>

        <div className="departments-grid">
          {structure.map((dept, index) => (
            <div key={index} className="dept-card">
              <div className="dept-header">
                <span className="dept-icon">{dept.icon}</span>
                <h3>{dept.mصلحة}</h3>
              </div>
              <ul className="offices-list">
                {dept.offices.map((office, idx) => (
                  <li key={idx}>{office}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* المؤسسات تحت الوصاية */}
      <section className="sub-entities">
        <h2 className="section-title">المؤسسات تحت الوصاية</h2>
        <div className="entities-grid">
          <div className="entity-item">
            <h4>فرع المركز الثقافي الإسلامي</h4>
            <p>الإمام المجاهد أحمد شقرون</p>
          </div>
          <div className="entity-item">
            <h4>مؤسسة المسجد</h4>
            <p>المجلس العلمي</p>
            <p>مجلس إقرأ</p>
            <p>مجلس سبل الخيرات</p>
            <p>مجلس البناء والتجهيز</p>
          </div>
          <div className="entity-item">
            <h4>الديوان الوطني للأوقاف والزكاة</h4>
            <p>الفرع الولائي</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .structure-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: 'Segoe UI', Tahoma, sans-serif;
          background-color: #fcfcfc;
        }
        .structure-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .structure-header h1 {
          color: #1a4d2e;
          font-size: 2.2rem;
          border-bottom: 3px solid #b8860b;
          display: inline-block;
          padding-bottom: 10px;
        }
        .director-node {
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
          position: relative;
        }
        .node-content {
          background: #1a4d2e;
          color: white;
          padding: 15px 30px;
          border-radius: 8px;
          font-weight: bold;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        .departments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }
        .dept-card {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          transition: 0.3s;
        }
        .dept-card:hover {
          border-color: #b8860b;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .dept-header {
          background: #f8f5e6;
          padding: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 2px solid #b8860b;
        }
        .dept-header h3 {
          font-size: 1.1rem;
          color: #1a4d2e;
          margin: 0;
        }
        .offices-list {
          list-style: none;
          padding: 15px;
          margin: 0;
        }
        .offices-list li {
          padding: 8px 0;
          border-bottom: 1px dashed #eee;
          font-size: 0.95rem;
          color: #555;
        }
        .offices-list li:last-child { border: none; }
        
        .section-title {
          text-align: center;
          color: #1a4d2e;
          margin-bottom: 30px;
        }
        .entities-grid {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .entity-item {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #b8860b;
          text-align: center;
          min-width: 250px;
        }
        .entity-item h4 { color: #b8860b; margin-bottom: 5px; }
      `}</style>
    </div>
  );
}