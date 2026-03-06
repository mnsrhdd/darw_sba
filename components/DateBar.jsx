export default function DateBar() {
  const today = new Date();
  // إعداد موحد لضمان استخدام الأرقام العربية الغربية (123)
  const options = { numberingSystem: "latn" };

  // 1. اسم اليوم (الجمعة)
  const dayName = new Intl.DateTimeFormat("ar-SA", {
    ...options,
    weekday: "long",
  }).format(today);

  // 2. التاريخ الهجري (16 رمضان 1447)
  const hijriDate = new Intl.DateTimeFormat("ar-SA-u-ca-islamic-uma", {
    ...options,
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(today);

  // 3. التاريخ الميلادي (06 مارس 2026)
  const gregorianDate = new Intl.DateTimeFormat("ar-SA", {
    ...options,
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(today);

  // تجميع السطر النهائي
  const fullDate = `${dayName} ${hijriDate} هـ الموافق لـ ${gregorianDate} م`;

  return (
    <div dir="rtl" style={containerStyle}>
      {/* قسم التاريخ */}
      <div style={dateStyle}>
        <span>📅 {fullDate}</span>
      </div>

      {/* قسم شريط البحث */}
      <div style={searchContainerStyle}>
        <input type="text" placeholder="ابحث في الموقع..." style={inputStyle} />
        <button style={buttonStyle}>بحث</button>
      </div>
    </div>
  );
}

// تنسيقات CSS سريعة (Inline Styles) لتبسيط المثال:
const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "green",
  borderBottom: "1px solid #ddd",
  gap: "20px",
  flexWrap: "wrap",
};

const dateStyle = {
  fontSize: "14px",
  color: "white",
  fontWeight: "bold",
  //margin:"20 px"
};

const searchContainerStyle = {
  display: "flex",
  //gap: '5px',
  flexGrow: 1,
  maxWidth: "400px",
};

const inputStyle = {
  width: "100%",
  padding: "8px 12px",

  border: "1px solid #ccc",
  outline: "none",
};

const buttonStyle = {
  padding: "8px 15px",
  backgroundColor: "#c39e47",
  color: "white",
  border: "none",

  cursor: "pointer",
};
