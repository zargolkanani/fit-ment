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

### 👤 Student & Project Info
- **Developer:** Zahra Kanani
- **Student ID:** 40139413
- **Field of Study:** Computer Engineering Undergraduate, Yazd University
- **Live Demo Link:** [Fit-ment on Vercel](https://fit-ment.vercel.app/)

### ✨ Key Features
- **E-Commerce Business Model Canvas (BMC):** A fully responsive dynamic grid showing value propositions, customer segments, cost structures, and revenue streams.
- **Interactive Filtering Demo:** Simulated B2C/O2O (Online-to-Offline) e-commerce workflow to filter healthy food items based on calories, proteins, and diet types.
- **Modern UI/UX Layout:**
  - Fixed sidebar navigation (`position: fixed`) shared across all pages via a single reusable script.
  - Clean card-based layout for the Business Model Canvas, competitor comparison tables, and marketing funnel.
  - Fully responsive design avoiding horizontal scrolling or layout cuts on mobile.
- **Persistent Cart & Wallet State (in-session):** The demo cart, wallet balance, and order history update live within a session using Vanilla JS state, without page reloads.

### 🛠️ Tech Stack
- **HTML5:** Semantic architecture across 12 standalone pages.
- **CSS3:** Flexbox/Grid layout, CSS variables for theming, and Vazirmatn typography for full RTL support.
- **JavaScript (ES6):** Automated sidebar rendering (`nav.js`), DOM-based food filtering and recommendation scoring (`demo-filter.js`), and cart/wallet/payment logic (Vanilla JS, no frameworks).

### 📊 Contribution & AI Use Disclosure
- **Student Contribution:** Conceptualized the entire business model, designed the structural information architecture, formulated financial calculations (LTV/CAC and break-even analysis), and structured the filtering rules and scoring logic for the 16-item mock database.
- **AI Tools (Claude/Anthropic):** Used to speed up text-to-HTML conversion, layout polishing (sidebar, tables, and marketing funnel visuals), writing the JavaScript matching the evaluation algorithm, and refining sentence phrasing across pages. All outputs were reviewed and adjusted by the developer.

### ⚠️ Current Limitations
- Features a mock 16-item menu database rather than live restaurant integration.
- Online payment processing and delivery logistics are simulated for presentation purposes.
- The recommendation logic is educational and not a substitute for clinical medical/dietary advice.
- Cart, wallet, and order history reset on page reload (no backend or persistent storage is implemented).

---

## 🇮🇷 نسخه فارسی

### پلتفرم هوشمند سفارش غذا و رژیم شخصی‌سازی شده

**فیت‌منت** یک راهکار هوشمند و بستر تجارت الکترونیک مدرن است که با هدف ارتقای سلامت جامعه و تسهیل دسترسی به تغذیه سالم طراحی شده است. این پلتفرم به کاربران کمک می‌کند تا بر اساس اهداف سلامتی، شاخص‌های بدنی و رژیم‌های غذایی خود، وعده‌های غذایی متناسب را تحلیل، انتخاب و به صورت آنلاین سفارش دهند.

این پروژه به عنوان مستندسازی، تحلیل تجاری و دموی فنی برای پروژه پایانی درس **تجارت الکترونیکی** توسعه یافته است.

### 👤 مشخصات دانشجو و پروژه
- **نام دانشجو:** زهرا کنعانی
- **شماره دانشجویی:** 40139413
- **رشته و دانشگاه:** مهندسی کامپیوتر - دانشگاه یزد
- **نسخه آنلاین دمو:** [مشاهده زنده پلتفرم فیت‌منت در Vercel](https://fit-ment.vercel.app/)

### ✨ ویژگی‌های کلیدی پروژه
- **بوم مدل کسب‌وکار الکترونیکی (BMC):** پیاده‌سازی کامل ساختار ارزش‌آفرینی، کانال‌های توزیع آنلاین، جریان‌های درآمدی و ساختار هزینه‌ها به صورت گرید کاملاً پاسخگو (Responsive).
- **دموی تعاملی و هوشمند:** شبیه‌سازی فرآیند فروشگاه‌های نسل جدید O2O (Online-to-Offline) و فیلترینگ محصولات بر اساس میزان کالری، پروتئین و رژیم‌های خاص (کم‌کالری، پرپروتئین، کتوژنیک).
- **معماری مدرن و بهینه (UI/UX):**
  - سایدبار ثابت (`position: fixed`) که در تمام صفحات از طریق یک اسکریپت مشترک رندر می‌شود.
  - طراحی کارت‌محور برای بوم کسب‌وکار، جدول مقایسه رقبا و قیف بازاریابی.
  - طراحی کاملاً واکنش‌گرا بدون تداخل عرضی یا کات‌شدن باکس‌ها در موبایل.
- **وضعیت زنده سبد خرید و کیف پول (در طول نشست):** سبد خرید، موجودی کیف پول و تاریخچه سفارش در دمو به‌صورت آنی و بدون رفرش صفحه با جاوااسکریپت خام به‌روزرسانی می‌شوند.

### 🛠️ تکنولوژی‌های به کار رفته
- **HTML5:** ساختاردهی معنایی به ۱۲ صفحه مستقل پروژه.
- **CSS3:** استفاده از متغیرهای پویا (CSS Variables)، معماری Flexbox و Grid، و فونت بومی وزیرمتن برای پشتیبانی کامل از راست‌به‌چپ.
- **JavaScript (ES6):** رندر خودکار سایدبار (`nav.js`)، فیلترینگ و امتیازدهی غذا بر پایه DOM (`demo-filter.js`)، و منطق سبد خرید/کیف پول/پرداخت به‌صورت جاوااسکریپت خام بدون فریم‌ورک.

### 📊 سهم مشارکت و نحوه توسعه (AI Use)
- **توسعه انفرادی (توسط دانشجو):** استخراج ایده محوری، تدوین تمام داده‌های استراتژیک، فرمول‌نویسی محاسبات مالی مربوط به نرخ وفاداری، نسبت LTV/CAC، تعیین فرمول نقطه سر‌به‌سر و پایه‌ریزی منطق فیلترینگ بر اساس اهداف بیومتریک در دیتابیس ۱۶ تایی نمونه.
- **ابزارهای کمکی هوش مصنوعی:** از مدل هوش مصنوعی Claude (Anthropic) جهت تسریع در تبدیل متون تحلیل‌شده به تگ‌های HTML/CSS، فرمت‌دهی به ساختارهای بصری (مانند سایدبار، جدول مقایسه‌ای و قیف بازاریابی) و توسعه کدهای JavaScript الگوریتم امتیازدهی استفاده شده است. همچنین بهبود جمله‌بندی و روان‌سازی عبارات بخش‌های مختلف پروژه با کمک هوش مصنوعی انجام گرفته و در نهایت تمامی خروجی‌ها توسط اینجانب بازبینی و ممیزی شده است.

### ⚠️ محدودیت‌های نسخه فعلی
- بانک اطلاعاتی دمو محدود به ۱۶ آیتم غذایی نمونه است و به منوی زنده کترینگ‌ها متصل نیست.
- درگاه پرداخت آنلاین مالی و سیستم لجستیک توزیع شهری به صورت شبیه‌سازی‌شده (Mock) بوده و تراکنش واقعی انجام نمی‌شود.
- الگوریتم توصیه‌گر فعلی جنبه آموزشی و نمایش ساختار دمو را داشته و هرگز جایگزین توصیه‌های تخصصی پزشک تغذیه نمی‌باشد.
- سبد خرید، کیف پول و تاریخچه سفارش با رفرش صفحه ریست می‌شوند، چون هیچ بک‌اند یا ذخیره‌سازی پایداری در نسخه فعلی پیاده‌سازی نشده است.

### 📂 ساختار پوشه‌بندی پروژه (Project Structure)
```text
├── index.html                # صفحه اصلی و معرفی ایده / Home Page
├── idea-spark.html           # جرقه اولیه ایده / Idea Spark
├── idea-maturity.html        # بلوغ ایده / Idea Maturity
├── value-creation.html       # تحلیل ارزش‌آفرینی / Value Creation
├── business-model.html       # مدل و بوم کسب‌وکار / Business Model Canvas
├── market-customer.html      # تحلیل بازار و مشتری / Market & Customer Analysis
├── competitors.html          # تحلیل صنعت و رقبا / Competitors Analysis
├── marketing.html            # طرح بازاریابی (فانل فروش) / Marketing Plan
├── revenue.html              # مدل درآمدی / Revenue Model
├── intermediation.html       # تحلیل واسطه‌گری / Intermediation Analysis
├── demo.html                 # دموی تعاملی سفارش غذا / Interactive Demo
├── roadmap.html              # نقشه راه توسعه سیستم / Development Roadmap
└── assets/
    ├── css/
    │   └── style.css         # کدهای استایل‌دهی و لایه‌بندی صفحات
    └── js/
        ├── nav.js            # مدیریت خودکار ناوبری و سایدبار ثابت
        └── demo-filter.js    # منطق فیلترینگ، امتیازدهی و رندر منوی دموی تعاملی
```
