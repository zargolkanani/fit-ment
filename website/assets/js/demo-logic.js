// فهرست نمونه غذا (داده فرضی برای دمو)
const FOOD_MENU = [
  { name: 'سینه مرغ گریل با سبزیجات بخارپز', calories: 320, protein: 38, fat: 6, sugar: 2, price: 1 },
  { name: 'سالاد سزار با مرغ', calories: 410, protein: 28, fat: 18, sugar: 4, price: 1 },
  { name: 'چلوکباب کوبیده', calories: 780, protein: 32, fat: 42, sugar: 3, price: 0 },
  { name: 'پیتزا پپرونی متوسط', calories: 850, protein: 30, fat: 38, sugar: 6, price: 0 },
  { name: 'ماهی سالمون کبابی با کینوا', calories: 460, protein: 36, fat: 20, sugar: 1, price: 1 },
  { name: 'برگر گوشت با پنیر', calories: 690, protein: 34, fat: 36, sugar: 5, price: 0 },
  { name: 'سوپ جو با سبزیجات', calories: 220, protein: 9, fat: 4, sugar: 3, price: 1 },
  { name: 'استیک گوشت گوساله با سیب‌زمینی', calories: 720, protein: 44, fat: 34, sugar: 2, price: 0 },
  { name: 'ساندویچ بوقلمون با نان سبوس‌دار', calories: 380, protein: 26, fat: 10, sugar: 4, price: 1 },
  { name: 'پاستا آلفردو با مرغ', calories: 650, protein: 28, fat: 30, sugar: 7, price: 0 },
  { name: 'کاسه برنج قهوه‌ای با عدس و سبزی', calories: 340, protein: 16, fat: 5, sugar: 2, price: 1 },
  { name: 'دسر چیزکیک', calories: 410, protein: 6, fat: 24, sugar: 28, price: 0 },
];

let selectedGoal = null;
let selectedRestriction = null;
let selectedPrice = null;

document.addEventListener('DOMContentLoaded', () => {
  setupChipGroup('goal-chips', (val) => selectedGoal = val);
  setupChipGroup('restriction-chips', (val) => selectedRestriction = val);
  setupChipGroup('price-chips', (val) => selectedPrice = val);
});

function setupChipGroup(groupId, onSelect) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      group.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      onSelect(chip.dataset.value);
    });
  });
}

function scoreFood(food, goal, restriction) {
  let score = 50;

  // امتیازدهی بر اساس هدف
  if (goal === 'lose') {
    score += (400 - food.calories) / 8;
  } else if (goal === 'gain') {
    score += food.protein * 1.2;
  } else if (goal === 'maintain') {
    score += 20 - Math.abs(food.calories - 450) / 20;
  }

  // امتیازدهی بر اساس محدودیت غذایی
  if (restriction === 'diabetes') {
    score -= food.sugar * 3;
  } else if (restriction === 'lowfat') {
    score -= food.fat * 1.5;
  } else if (restriction === 'highprotein') {
    score += food.protein * 1.5;
  }

  return score;
}

function getFitLevel(score) {
  if (score >= 65) return { label: 'بسیار مناسب', cls: 'fit-high' };
  if (score >= 40) return { label: 'نسبتاً مناسب', cls: 'fit-mid' };
  return { label: 'نامناسب', cls: 'fit-low' };
}

function runRecommendation() {
  const resultsArea = document.getElementById('results-area');

  if (!selectedGoal || !selectedRestriction) {
    resultsArea.innerHTML = '<div class="empty-state">لطفاً هدف و محدودیت غذایی را انتخاب کن.</div>';
    return;
  }

  let menu = [...FOOD_MENU];
  if (selectedPrice === 'budget') {
    menu = menu.filter(f => f.price === 1).concat(menu.filter(f => f.price === 0));
  }

  const scored = menu.map(food => {
    const score = scoreFood(food, selectedGoal, selectedRestriction);
    const fit = getFitLevel(score);
    return { ...food, score, fit };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 6);

  resultsArea.innerHTML = top.map(food => `
    <div class="food-result-card">
      <div>
        <div class="fname">${food.name}</div>
        <div class="fmeta">${food.calories} کالری · ${food.protein}g پروتئین · ${food.fat}g چربی · ${food.sugar}g قند</div>
      </div>
      <div class="fit-badge ${food.fit.cls}">${food.fit.label}</div>
    </div>
  `).join('');
}
