// script.js
// رسالة ترحيب تظهر عند دخول الموقع

document.addEventListener("DOMContentLoaded", function() {
    // 1️⃣ خيار بسيط — رسالة تنبيه (Popup)
    alert("👋 مرحباً بك في موقع وليد العماري للبكالوريا والدراسة!");

    // 2️⃣ خيار إضافي — رسالة تظهر في أعلى الصفحة (بدون نافذة منبثقة)
    const welcome = document.createElement("div");
    welcome.textContent = "👋 مرحباً بك في موقع وليد العماري 🎓 نتمنى لك زيارة مفيدة!";
    welcome.style.position = "fixed";
    welcome.style.top = "0";
    welcome.style.right = "0";
    welcome.style.left = "0";
    welcome.style.padding = "15px";
    welcome.style.background = "linear-gradient(90deg, #0078d7, #00b4d8)";
    welcome.style.color = "white";
    welcome.style.textAlign = "center";
    welcome.style.fontWeight = "bold";
    welcome.style.fontFamily = "Tahoma, sans-serif";
    welcome.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    welcome.style.zIndex = "9999";
    welcome.style.transition = "0.5s";
    
    document.body.appendChild(welcome);

    // تخفي الرسالة بعد 4 ثوانٍ
    setTimeout(() => {
        welcome.style.opacity = "0";
        welcome.style.transform = "translateY(-20px)";
        setTimeout(() => welcome.remove(), 600);
    }, 4000);
});
