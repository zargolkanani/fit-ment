// ==========================================================================
// demo-filter.js
// منطق فیلتر منو، امتیازدهی تناسب غذا، پروفایل بیومتریک و رندر دسته‌بندی‌ها
// این فایل باید قبل از تگ‌های دیگری که از این داده‌ها استفاده می‌کنند لود شود
// ==========================================================================

const baseFoodMenu = [
  { id: 2, name: "بشقاب فیله مرغ بخارپز و کینوا", category: "diet", catLabel: "🥗 رژیمی و کتو", restaurant: "رستوران سلامت", price: 1950000, goal: "lose", restriction: "diabetes", cal: 410, p: 45, c: 28, f: 6, desc: "کربوهیدرات پیچیده با شاخص قند بسیار پایین، غنی از کینوا ارگانیک و سبزیجات هیدروپونیک.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80", rating: 4.8, reviewCount: 52, review: "طاهره : برای دیابت نوع ۲ من عالی بود، قند خونم کاملا پایدار موند و طعم بسیار لذیذی داشت." },
  { id: 4, name: "ماهی سالمون نروژی با مارچوبه", category: "diet", catLabel: "🥗 رژیمی و کتو", restaurant: "کترینگ ساحل", price: 1450000, goal: "lose", restriction: "lowfat", cal: 390, p: 38, c: 8, f: 11, desc: "سرشار از اسیدهای چرب امگا ۳ و آنتی‌اکسیدان، پخته شده به روش مایکرو-استیم.", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=300&q=80", rating: 4.7, reviewCount: 29, review: "رضا : بافت ماهی سالمون کاملاً آبدار بود و ادویه‌های رژیمی مخصوصش فوق‌العاده‌اش کرده بودن." },
  { id: 6, name: "استیک بوقلمون ارگانیک با بروکلی", category: "diet", catLabel: "🥗 رژیمی و کتو", restaurant: "رستوران ویوا", price: 2100000, goal: "maintain", restriction: "lowfat", cal: 440, p: 40, c: 20, f: 8, desc: "چربی ترانس zero، منبع خالص آهن و روی، مناسب حفظ توده عضلانی و کنترل وزن.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80", rating: 4.3, reviewCount: 17, review: "سکینه: استیک اصلاً سفت نبود و سس قارچ رژیمی کنارش طعمش رو عالی کرده بود." },
  { id: 11, name: "بشقاب آووکادو و تخم‌مرغ پوچد (کتو)", category: "diet", catLabel: "🥗 رژیمی و کتو", restaurant: "کافه سلامت", price: 990000, goal: "lose", restriction: "diabetes", cal: 350, p: 18, c: 5, f: 28, desc: "مناسب رژیم‌های کتوژنیک استاندارد، فیبر بالا و کربوهیدرات خالص نزدیک به صفر.", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=300&q=80", rating: 4.9, reviewCount: 61, review: "علی : برای کتوژنیک هیچی بهتر از این بشقاب نیست. چربی‌های سالمش انرژی کل روزم رو تامین می‌کنه." },
  { id: 5, name: "میکس کباب گوسفندی با برنج قهوه‌ای", category: "persian", catLabel: "🍢 سنتی ایرانی", restaurant: "رستوران ارگانیک", price: 2850000, goal: "gain", restriction: "none", cal: 690, p: 58, c: 70, f: 16, desc: "کباب لقمه خالص گوسفندی کم چربی به همراه برنج قهوه‌ای معطر ایرانی.", img: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=300&q=80", rating: 4.5, reviewCount: 44, review: "ثمین : کیفیت گوشت عالی بود و برنج قهوه‌ای هم کاملاً نرم و لذیذ طبخ شده بود." },
  { id: 8, name: "جوجه کباب زعفرانی بدون روغن با کته", category: "persian", catLabel: "🍢 سنتی ایرانی", restaurant: "رستوران سنتی اخوان", price: 1800000, goal: "maintain", restriction: "lowfat", cal: 520, p: 46, c: 65, f: 7, desc: "سینه مرغ مرینت شده در ماست و زعفران غلیظ، پخته شده بدون یک قطره روغن کاذب.", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80", rating: 4.6, reviewCount: 31, review: "زرگل : جوجه‌ها اصلاً خشک نبودن و عطر زعفران واقعی کاملاً حس می‌شد." },
  { id: 12, name: "چلو خورشت قورمه‌سبزی رژیمی (گوشت بوقلمون)", category: "persian", catLabel: "🍢 سنتی ایرانی", restaurant: "رستوران ارگانیک", price: 997000, goal: "maintain", restriction: "lowfat", cal: 490, p: 35, c: 55, f: 12, desc: "سبزیجات تفت داده شده با اسپری روغن زیتون و گوشت لذیذ و بدون چربی بوقلمون.", img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=300&q=80", rating: 4.4, reviewCount: 19, review: "پیمان : فکر نمی‌کردم قورمه‌سبزی رژیمی اینقدر خوب بشه! چربی اضافه اصلاً نداشت." },
  { id: 3, name: "پاستا پنه آلفردو با فیله مرغ گریل", category: "italian", catLabel: "🍝 ایتالیایی و پاستا", restaurant: "کافه الانژا", price: 895000, goal: "gain", restriction: "none", cal: 780, p: 52, c: 85, f: 18, desc: "پاستای تهیه شده از غلات کامل، سس هماهنگ شده با شیر بادام کم‌چرب و پنیر به اندازه.", img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=300&q=80", rating: 4.4, reviewCount: 21, review: "عسل : حجم کربوهیدرات و پروتئینش برای بعد از تمرین من عالیه. همیشه این رو سفارش میدم." },
  { id: 9, name: "پیتزا چیکن پستو با آرد چاودار", category: "italian", catLabel: "🍝 ایتالیایی و پاستا", restaurant: "ایتالیانو پاستا", price: 1040000, goal: "gain", restriction: "none", cal: 650, p: 44, c: 68, f: 14, desc: "خمیر نازک آرد چاودار سیاه با شاخص گلایسمیک ایده آل، فیله مرغ تکه‌ای و سس پستو ارگانیک.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80", rating: 4.7, reviewCount: 55, review: "فاطمه : بهترین جایگزین پیتزاهای چرب فست‌فودی! اصلاً سنگین نبود و فوق‌العاده لذیذه." },
  { id: 13, name: "پاستا لاهور تند با میگو گریل", category: "italian", catLabel: "🍝 ایتالیایی و پاستا", restaurant: "ایتالیانو پاستا", price: 760000, goal: "gain", restriction: "highprotein", cal: 580, p: 48, c: 72, f: 9, desc: "میگوهای دریای جنوب غنی از فسفر، نودل گندم کامل و سس تند پاکستانی چربی‌سوز.", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=300&q=80", rating: 4.2, reviewCount: 14, review: "فائزه : تندی متعادلی داشت و میگوها کاملاً تمیز و ترد گریل شده بودن." },
  { id: 1, name: "سالاد سزار ویژه فیت‌منت", category: "salad", catLabel: "🌿 سالادهای غنی", restaurant: "کترینگ برگ سبز", price: 650000, goal: "lose", restriction: "none", cal: 320, p: 32, c: 12, f: 14, desc: "کاهو رسمی پیچ، فیله مرغ گریل شده تکه‌ای، پنیر پارمزان سوئیسی و سس سزار بر پایه ماست ایسلندی.", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=300&q=80", rating: 4.6, reviewCount: 38, review: "بهار : سس ماستش اصلاً حس سنگینی سس‌های مایونز رو نداره و برای کاهش وزن ایده آله." },
  { id: 10, name: "سالاد کینوا و اسفناج با پنیر فتا", category: "salad", catLabel: "🌿 سالادهای غنی", restaurant: "گرین هاوس", price: 578000, goal: "lose", restriction: "diabetes", cal: 270, p: 14, c: 22, f: 10, desc: "ترکیب بی نظیر اسفناج مینیاتوری، دانه کینوا سه رنگ، رمانتیک و پنیر کم‌نمک فتا.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80", rating: 4.8, reviewCount: 40, review: "مریم : یه بمب فیبر و ویتامینه. سس لیمو و سرکه سیب کنارش غوغا می‌کنه." },
  { id: 14, name: "سالاد مدیترانه‌ای با تن ماهی رژیمی", category: "salad", catLabel: "🌿 سالادهای غنی", restaurant: "کترینگ ساحل", price: 780000, goal: "lose", restriction: "highprotein", cal: 310, p: 35, c: 15, f: 8, desc: "تن ماهی نجوشیده بدون روغن, زیتون سیاه، کاهو فر، خیار و گوجه گیلاسی ارگانیک.", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80", rating: 4.5, reviewCount: 22, review: "هاتف : بسیار سیرکننده است و پروتئینش برای یک وعده ناهار کاملاً کافی و سبکه." },
  { id: 7, name: "سوپ بروکلی با پروتئین وی (Whey)", category: "soup", catLabel: "🥣 سوپ و پیش‌غذا", restaurant: "کترینگ برگ سبز", price: 250000, goal: "lose", restriction: "none", cal: 180, p: 14, c: 10, f: 4, desc: "سوپ غلیظ شده با کلم بروکلی تازه و ایزوله پروتئین وی جهت بهبود ریکاوری تارهای عضلانی.", img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=300&q=80", rating: 4.5, reviewCount: 12, review: "حسین : طعمش عالیه و پروتئین هیدرولیز شده توش برای بعد تمرین فوق‌العاده جذب بالایی داره." },
  { id: 15, name: "سوپ عدس قهوه‌ای و قارچ دکمه‌ای", category: "soup", catLabel: "🥣 سوپ و پیش‌غذا", restaurant: "گرین هاوس", price: 150000, goal: "maintain", restriction: "diabetes", cal: 210, p: 12, c: 32, f: 2, desc: "منبع غنی فیبر محلول و آهن گیاهی، کنترل کننده ایده آل ترشح انسولین در بدن.", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=300&q=80", rating: 4.3, reviewCount: 16, review: "میکائیل : برای افطار یا پیش‌غذا گرم و عالیه، غلظت مناسبی داره." },
  { id: 16, name: "سوپ استخوان گاو (بون براث) مغذی", category: "soup", catLabel: "🥣 سوپ و پیش‌غذا", restaurant: "رستوران سلامت", price: 350000, goal: "lose", restriction: "highprotein", cal: 150, p: 22, c: 2, f: 6, desc: "عصاره ۳۶ ساعته استخوان گاو، سرشار از کلاژن نوع ۱ و ۳ جهت بهبود مفاصل و روده.", img: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=300&q=80", rating: 4.9, reviewCount: 34, review: "خسرو : ببب کلاژن واقعی! برای مفاصل من که سنگین تمرین می‌کنم معجزه می‌کنه." }
];

const categoryList = [
  { key: 'all', label: '🗂 همه گزینه‌ها' },
  { key: 'diet', label: '🥗 رژیمی و کتو' },
  { key: 'persian', label: '🍢 سنتی ایرانی' },
  { key: 'italian', label: '🍝 ایتالیایی و پاستا' },
  { key: 'salad', label: '🌿 سالادهای غنی' },
  { key: 'soup', label: '🥣 سوپ و پیش‌غذا' }
];

const goalLabels = { lose: 'کاهش وزن چربی', gain: 'افزایش حجم (Bulk)', maintain: 'تثبیت وزن' };
const restLabels = { none: 'بدون محدودیت', diabetes: 'کنترل قند خون', lowfat: 'رژیم کم چربی', highprotein: 'رژیم پرپروتئین' };
const genderLabels = { female: 'زن', male: 'مرد' };

let selectedGoal = 'lose';
let selectedRestriction = 'none';
let activeCategory = 'all';

let userAge = 22;
let userHeight = 158;
let userWeight = 53;
let userGender = 'female';

function openProfileModal() { document.getElementById('profile-modal').style.display = 'flex'; }
function closeProfileModal() { document.getElementById('profile-modal').style.display = 'none'; }

function selectProfileChip(el, type) {
  el.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active-green'));
  el.classList.add('active-green');
  if (type === 'goal') selectedGoal = el.dataset.value;
  if (type === 'restriction') selectedRestriction = el.dataset.value;
}

function saveProfile() {
  userAge = parseInt(document.getElementById('profile-age').value) || 22;
  userHeight = parseInt(document.getElementById('profile-height').value) || 158;
  userGender = document.getElementById('profile-gender').value;

  document.getElementById('summary-goal').innerText = goalLabels[selectedGoal];
  document.getElementById('summary-rest').innerText = restLabels[selectedRestriction];
  document.getElementById('summary-biometrics').innerText = `${genderLabels[userGender]} · ${userAge} سال · ${userHeight} کیلوگرم`;

  closeProfileModal();
  buildMarketplaceMenu();
  updateSuggestion();
  showToast("پروفایل بیومتریک شما آپدیت شد");
}

function scoreFood(food) {
  let score = 50;
  let baseBmr = (userGender === 'male')
    ? (10 * 70 + 6.25 * userHeight - 5 * userAge + 5)
    : (10 * 55 + 6.25 * userHeight - 5 * userAge - 161);

  if (selectedGoal === 'lose') {
    let idealCaloryForMeal = baseBmr * 0.25;
    score += Math.abs(idealCaloryForMeal - food.cal) < 100 ? 15 : 0;
    score += (500 - food.cal) / 6;
  } else if (selectedGoal === 'gain') {
    score += food.p * 1.5;
    score += food.cal > 500 ? 10 : 0;
  }

  if (selectedRestriction === 'diabetes') score -= food.c > 25 ? 30 : 0;
  if (selectedRestriction === 'lowfat') score -= food.f * 2;
  if (selectedRestriction === 'highprotein') score += food.p * 1.5;
  if (food.goal === selectedGoal) score += 20;

  return score;
}

function getMatchInfo(food) {
  const score = scoreFood(food);
  if (score >= 65) return { label: '✓ کاملاً متناسب', cls: 'match-high' };
  if (score >= 42) return { label: '◐ نسبتاً مناسب (کالری آزاد)', cls: 'match-mid' };
  return { label: '✕ کاملاً نامناسب ', cls: 'match-low' };
}

function updateSuggestion() {
  const best = baseFoodMenu
    .map(f => ({ f, score: scoreFood(f) }))
    .sort((a, b) => b.score - a.score)[0].f;

  document.getElementById('suggestion-img').style.backgroundImage = `url('${best.img}')`;
  document.getElementById('suggestion-name').innerText = best.name;
  document.getElementById('suggestion-meta').innerText = `${best.cal} ک‌کالری · اولویت در هدف ${goalLabels[selectedGoal]}`;
  document.getElementById('suggestion-add-btn').onclick = () => addFoodToCart(best.id);
}

function buildCategoryPills() {
  const wrap = document.getElementById('category-pills');
  wrap.innerHTML = categoryList.map(c =>
    `<div class="cat-pill ${c.key === activeCategory ? 'active' : ''}" data-cat="${c.key}" onclick="filterCategory('${c.key}')">${c.label}</div>`
  ).join('');
}

function filterCategory(key) {
  activeCategory = key;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.toggle('active', p.dataset.cat === key));
  buildMarketplaceMenu();
}

function buildMarketplaceMenu() {
  const wrapper = document.getElementById('categories-wrapper');
  wrapper.innerHTML = '';
  const order = categoryList.filter(c => c.key !== 'all').map(c => c.key);

  order.forEach(catKey => {
    if (activeCategory !== 'all' && catKey !== activeCategory) return;
    const items = baseFoodMenu.filter(f => f.category === catKey);
    if (items.length === 0) return;

    const catLabel = items[0].catLabel;
    let html = `<div class="category-block">
      <div class="category-block-title"><span>${catLabel}</span><span class="category-block-count">${items.length} آیتم فعال</span></div>
      <div class="food-grid">`;

    items.forEach(food => {
      const match = getMatchInfo(food);
      html += `
        <div class="food-card" id="food-card-${food.id}" onclick="toggleFoodDetails(event, ${food.id})">
          <div class="food-card-top">
            <div class="food-img" style="background-image:url('${food.img}')"></div>
            <div class="food-details">
              <span class="match-badge ${match.cls}">${match.label}</span>
              <h4>${food.name}</h4>
              <div class="food-meta">${food.restaurant} · <strong>${food.cal} کالری</strong></div>
              <div class="rating-row">★ ${food.rating} <span class="rcount">(${food.reviewCount} نظر)</span></div>
            </div>
          </div>
          <div class="food-hover-info">
            <div class="food-desc">${food.desc}</div>
            <div class="macro-grid">
              <div class="macro-item">انرژی کل<strong>${food.cal} ک‌کالری</strong></div>
              <div class="macro-item">پروتئین<strong>${food.p} گرم</strong></div>
              <div class="macro-item">کربوهیدرات<strong>${food.c} گرم</strong></div>
              <div class="macro-item">چربی کل<strong>${food.f} گرم</strong></div>
            </div>
            <div class="review-box"><span style="color:var(--fm-green); font-weight:bold; margin-left:4px;">"</span><span>${food.review}</span></div>
          </div>
          <div class="food-bottom-row">
            <span class="food-price">${food.price.toLocaleString()} تومان</span>
            <button class="add-btn" onclick="event.stopPropagation(); addFoodToCart(${food.id})">＋ افزودن به سبد</button>
          </div>
          <div class="details-toggle-hint">💡 جهت بررسی کالری‌شمار و دیدگاه بقیه کلیک کنید</div>
        </div>
      `;
    });
    html += `</div></div>`;
    wrapper.innerHTML += html;
  });
}

function toggleFoodDetails(event, id) {
  const card = document.getElementById(`food-card-${id}`);
  if (!card) return;
  const isOpen = card.classList.contains('touch-open');
  document.querySelectorAll('.food-card.touch-open').forEach(c => c.classList.remove('touch-open'));
  if (!isOpen) card.classList.add('touch-open');
}
