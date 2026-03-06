"use client"
import React from 'react';



export default function Page() {
  const tasks = [
    {
      title: "الإرشاد الديني وإدارة المساجد",
      icon: "",
      items: [
        "نشر الرسالة الحضارية للمسجد وتحقيق وظائفه الروحية والتربوية.",
        "الالتزام بالخطاب الديني الوسطي المعتدل ومحاربة التطرف.",
        "ضمان نشاط الفتوى ومتابعة لجنة التأهيل العلمي.",
        "السهر على احترام الخريطة المسجدية ونمطية بناء المساجد.",
        "إصلاح ذات البين والإسهام في حماية الأسرة.",
        "إعداد شهادات إثبات واعتناق الإسلام طبقا للتنظيم المعمول به."
      ]
    },
    {
      title: "التعليم القرآني والزوايا",
      icon: "",
      items: [
        "تنفيذ برامج التعليم القرآني ومناهجه والسهر على احترام المرجعية.",
        "تشجيع المدارس القرآنية والزوايا على خدمة القرآن والسنة.",
        "الإسهام في إنجاح المسابقات الوطنية للقرآن الكريم.",
        "المساهمة في تطوير نشاطات محو الأمية وتعليم الكبار.",
        "ضمان احترام نمطية بناء المدارس القرآنية والزوايا وتحيينها."
      ]
    },
    {
      title: "الأوقاف والشعائر الدينية",
      icon: "",
      items: [
        "تشجيع الحركة الوقفية محلياً وتوجيه إرادة الخير في الأمة.",
        "تنظيم حملات التوعية بالشعائر الدينية (زكاة، حج، عمرة).",
        "رصد الأهلة ومتابعة لجان المراقبة واحترام مواقيت الصلاة.",
        "المساهمة في تسوية وضعية المساجد والمدارس القرآنية قانونياً.",
        "المشاركة في الاحتفاء بالأعياد والمناسبات الدينية والوطنية."
      ]
    },
    {
      title: "الثقافة الإسلامية والتراث",
      icon: "",
      items: [
        "ترسيخ قيم الإسلام ومبادئه وإحياء مآثر العلماء الأجلاء.",
        "حماية التراث الثقافي الديني والمخطوطات الإسلامية.",
        "ترقية السياحة الدينية بالتنسيق مع المصالح والمؤسسات المعنية.",
        "تنظيم التظاهرات والمسابقات العلمية والثقافية.",
        "رصد الكتب الدينية المخالفة للمرجعية الوطنية."
      ]
    },
    {
      title: "الموارد البشرية والرقمنة",
      icon: "",
      items: [
        "تنفيذ مخطط تسيير الموارد البشرية وتكوين المستخدمين.",
        "تنفيذ آليات رقمنة وعصرنة الإدارة وتسهيل الخدمات.",
        "معالجة الشكاوى والعرائض ذات الصلة بالقطاع.",
        "متابعة إنجاز المشاريع وإعداد الحصائل الدورية."
      ]
    }
  ];

  return (
    <div className="tasks-container" dir="rtl">
      {/* رأس الصفحة */}
      <header className="tasks-header">
        <h1>مهام مديرية الشؤون الدينية والأوقاف</h1>
        <p>بموجب المرسوم التنفيذي رقم 23-214 المؤرخ في 7 يونيو 2023</p>
      </header>

      {/* شبكة المهام */}
      <div className="tasks-grid">
        {tasks.map((task, index) => (
          <div key={index} className="task-card">
            <div className="task-icon">{task.icon}</div>
            <h2 className="task-title">{task.title}</h2>
            <ul className="task-list">
              {task.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tasks-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9f9f9;
        }

        .tasks-header {
          text-align: center;
          margin-bottom: 50px;
          border-bottom: 3px solid #b8860b;
          display: inline-block;
          width: 100%;
          padding-bottom: 20px;
        }

        .tasks-header h1 {
          color: #1a4d2e;
          font-size: 2.2rem;
          margin-bottom: 10px;
        }

        .tasks-header p {
          color: #666;
          font-size: 1.1rem;
        }

        .tasks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }

        .task-card {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
          border-top: 5px solid #b8860b;
        }

        .task-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }

        .task-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .task-title {
          color: #1a4d2e;
          font-size: 1.4rem;
          margin-bottom: 15px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }

        .task-list {
          list-style: none;
          padding: 0;
        }

        .task-list li {
          position: relative;
          padding-right: 25px;
          margin-bottom: 12px;
          color: #444;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .task-list li::before {
          content: "•";
          color: #b8860b;
          font-weight: bold;
          position: absolute;
          right: 0;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .tasks-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}