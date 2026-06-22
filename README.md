# 🥗 Fit-ment (فیت‌منت)

<p align="center">
  <a href="#-english-version">English</a> •
  <a href="#-نسخه-فارسی">فارسی</a>
</p>

---

## 🇺🇸 English Version

### Smart Food Ordering & Personalized Diet Platform

**Fit-ment** is a modern e-commerce and smart food ordering platform designed to improve healthy eating habits and simplify access to personalized nutrition. It helps users analyze, select, and order meals based on their specific health goals, body metrics (BMI), and dietary preferences (e.g., Low-Calorie, High-Protein, Ketogenic).

This repository serves as the technical demo, business analysis, and final project for the **E-Commerce (Electronic Commerce)** course.

### ✨ Key Features
- **E-Commerce Business Model Canvas (BMC):** A fully responsive dynamic grid showing value propositions, customer segments, cost structures, and revenue streams.
- **Interactive Filtering Demo:** Simulated B2C/O2O (Online-to-Offline) e-commerce workflow to filter healthy food items based on calories, proteins, and diet types.
- **Modern UI/UX Layout:** - Desktop-fixed sidebar (`position: fixed`) with smooth dynamic collapsing mechanism controlled via topbar.
  - Custom SVG line-art navigation icon for an elegant, modern feel.
  - 100% case-safe layouts avoiding horizontal scrolling or layout cuts (`min-width: 0`).
- **State Persistence:** Automatically remembers sidebar collapse state across sessions using `localStorage`.

### 🛠️ Tech Stack
- **HTML5:** Semantic architecture.
- **CSS3:** Advanced Flexbox layout, dynamic CSS variables, and modern responsiveness.
- **JavaScript (ES6):** Automated sidebar rendering, live DOM filtering, and reactive component injections.

### 🧑‍💻 Developer & Credits
- **Zargol (Zahra) Kanani** - Computer Engineering Undergraduate, Yazd University.
- Course: **E-Commerce (Electronic Commerce)**

---

## 🇮🇷 نسخه فارسی

### پلتفرم هوشمند سفارش غذا و رژیم شخصی‌سازی شده

**فیت‌منت** یک راهکار هوشمند و بستر تجارت الکترونیک مدرن است که با هدف ارتقای سلامت جامعه و تسهیل دسترسی به تغذیه سالم طراحی شده است. این پلتفرم به کاربران کمک می‌کند تا بر اساس اهداف سلامتی، شاخص‌های بدنی و رژیم‌های غذایی خود، وعده‌های غذایی متناسب را تحلیل، انتخاب و به صورت آنلاین سفارش دهند.

این پروژه به عنوان مستندسازی، تحلیل تجاری و دموی فنی برای پروژه پایانی درس **تجارت الکترونیکی** توسعه یافته است.

### ✨ ویژگی‌های کلیدی پروژه
- **بوم مدل کسب‌وکار الکترونیکی (BMC):** پیاده‌سازی کامل ساختار ارزش‌آفرینی، کانال‌های توزیع آنلاین، جریان‌های درآمدی و ساختار هزینه‌ها به صورت گرید کاملاً پاسخگو (Responsive).
- **دموی تعاملی و هوشمند:** شبیه‌سازی فرآیند فروشگاه‌های نسل جدید O2O (Online-to-Offline) و فیلترینگ محصولات بر اساس میزان کالری، پروتئین و رژیم‌های خاص (کم‌کالری، پرپروتئین، کتوژنیک).
- **معماری مدرن و بهینه (UI/UX):**
  - سایدبار ثابت و چسبان (`position: fixed`) در دسکتاپ با قابلیت منقبض/منبسط شدن پویا از طریق هدر.
  - منوی ناوبری مدرن با آیکون لایه‌ای و خطی شیک (SVG).
  - طراحی کاملاً واکنش‌گرا بدون تداخل عرضی صفحات یا کات شدن باکس‌ها (`min-width: 0`).
- **ناوبری خودکار:** مدیریت هوشمند وضعیت صفحات و ذخیره‌سازی وضعیت سایدبار در مرورگر کاربر (`localStorage`).

### 🛠️ تکنولوژی‌های به کار رفته
- **HTML5:** ساختاردهی معنایی به صفحات و فرم‌های تعاملی.
- **CSS3:** استفاده از متغیرهای پویا (CSS Variables)، معماری Flexbox و ابزارهای پیشرفته لایه‌بندی لایوت.
- **JavaScript (ES6):** رندر خودکار سایدبار، کنترل پویای کامپوننت‌ها و مدیریت سیستم فیلترینگ دمو.

### 📂 ساختار پوشه‌بندی پروژه (Project Structure)
```text
├── index.html               # صفحه اصلی و معرفی ایده / Home Page
├── idea-spark.html          # جرقه اولیه ایده / Idea Spark
├── idea-maturity.html       # بلوغ ایده / Idea Maturity
├── value-creation.html      # تحلیل ارزش‌آفرینی / Value Creation
├── business-model.html      # مدل و بوم کسب‌وکار / Business Model Canvas
├── market-customer.html     # تحلیل بازار و مشتری / Market & Customer Analysis
├── competitors.html         # تحلیل صنعت و رقبا / Competitors Analysis
├── marketing.html           # طرح بازاریابی (فانل فروش) / Marketing Plan
├── revenue.html             # مدل درآمدی / Revenue Model
├── intermediation.html      # تحلیل واسطه‌گری / Intermediation Analysis
├── demo.html                # دموی تعاملی سفارش غذا / Interactive Demo
├── roadmap.html             # نقشه راه توسعه سیستم / Development Roadmap
└── assets/
    ├── css/
    │   └── style.css        # کدهای استایل‌دهی و لایه‌بندی منوها
    └── js/
        ├── nav.js           # مدیریت خودکار ناوبری و سایدبار چسبان
        └── demo-filter.js   # منطق فیلترینگ دموی تعاملی
