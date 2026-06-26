// لیست صفحات سایت برای ساخت ناوبری
const PAGES = [
  { num: '۰۱', file: 'index.html', title: 'صفحه اصلی', group: 'شروع' },
  { num: '۰۲', file: 'idea-spark.html', title: 'جرقه اولیه ایده', group: 'ایده و تحلیل' },
  { num: '۰۳', file: 'idea-maturity.html', title: 'بلوغ ایده', group: 'ایده و تحلیل' },
  { num: '۰۴', file: 'value-creation.html', title: 'تحلیل ارزش‌آفرینی', group: 'ایده و تحلیل' },
  { num: '۰۵', file: 'business-model.html', title: 'مدل و بوم کسب‌وکار', group: 'ایده و تحلیل' },
  { num: '۰۶', file: 'market-customer.html', title: 'تحلیل بازار و مشتری', group: 'بازار و رقبا' },
  { num: '۰۷', file: 'competitors.html', title: 'تحلیل صنعت و رقبا', group: 'بازار و رقبا' },
  { num: '۰۸', file: 'marketing.html', title: 'طرح بازاریابی', group: 'استراتژی' },
  { num: '۰۹', file: 'revenue.html', title: 'مدل درآمدی', group: 'استراتژی' },
  { num: '۱۰', file: 'intermediation.html', title: 'تحلیل واسطه‌گری', group: 'استراتژی' },
  { num: '۱۱', file: 'demo.html', title: 'دموی تعاملی', group: 'پیاده‌سازی' },
  { num: '۱۲', file: 'roadmap.html', title: 'نقشه راه توسعه', group: 'پیاده‌سازی' },
];

function renderSidebar(activeFile) {
  let groups = {};
  PAGES.forEach(p => {
    if (!groups[p.group]) groups[p.group] = [];
    groups[p.group].push(p);
  });

  // ۱. بررسی وضعیت ذخیره شده سایدبار در مرورگر
  const isCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  const appContainer = document.querySelector('.app');
  if (appContainer) {
    if (isCollapsed) {
      appContainer.classList.add('sidebar-collapsed');
    } else {
      appContainer.classList.remove('sidebar-collapsed');
    }
  }

  let navHtml = '';
  for (const groupName in groups) {
    navHtml += `<div class="nav-section-label">${groupName}</div>`;
    groups[groupName].forEach(p => {
      const isActive = p.file === activeFile ? 'active' : '';
      navHtml += `
        <a href="${p.file}" class="nav-link ${isActive}">
          <span class="nav-num">${p.num}</span>
          <span class="nav-text">${p.title}</span>
        </a>`;
    });
  }

  // ۲. ساختار تمیز سایدبار
  const sidebarHtml = `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-brand">
        <div class="brand-wrapper">
          <div class="logo-mark">fit</div>
          <div class="brand-info">
            <div class="brand-text">فيت‌منت</div>
            <div class="brand-sub">سفارش غذای هوشمند</div>
          </div>
        </div>
      </div>
      <nav>${navHtml}</nav>
    </aside>
  `;
  
  const mountEl = document.getElementById('sidebar-mount');
  if (mountEl) {
    mountEl.outerHTML = sidebarHtml;
  }

  // ⚡ تزریق یا اصلاح خودکار دکمه منو با آیکون جذاب جدید در Topbar
  setTimeout(() => {
    const topbar = document.querySelector('.topbar');
    if (topbar) {
      // اگر دکمه قدیمی از قبل وجود داشت آن را پاک می‌کند تا دکمه جدید جایگزین شود
      const oldToggle = topbar.querySelector('.menu-toggle') || topbar.querySelector('.toggle-sidebar-btn') || topbar.querySelector('button[onclick*="toggle"]');
      if (oldToggle) oldToggle.remove();

      // ساخت دکمه مدرن با آیکون لوکس لایه‌ای (SVG)
      const btn = document.createElement('button');
      btn.className = 'menu-toggle';
      btn.title = 'منوی ناوبری';
      btn.onclick = toggleMobileSidebar;
      btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="15" y2="6"></line>
          <line x1="3" y1="18" x2="18" y2="18"></line>
        </svg>
      `;
      // دکمه را به ابتدای هدبار (سمت راست در RTL) اضافه می‌کند
      topbar.insertBefore(btn, topbar.firstChild);
    }
  }, 50);
}

// تابع تغییر وضعیت سایدبار دسکتاپ
function toggleSidebarLayout() {
  const appContainer = document.querySelector('.app');
  if (!appContainer) return;

  const willCollapse = !appContainer.classList.contains('sidebar-collapsed');
  appContainer.classList.toggle('sidebar-collapsed');
  
  localStorage.setItem('sidebar-collapsed', willCollapse);
}

// هندلر دکمه سه خط بالای صفحه (Topbar)
function toggleMobileSidebar() {
  if (window.innerWidth > 880) {
    toggleSidebarLayout();
  } else {
    document.getElementById('sidebar').classList.toggle('open');
  }
}

function getPageNav(currentFile) {
  const idx = PAGES.findIndex(p => p.file === currentFile);
  const prev = idx > 0 ? PAGES[idx - 1] : null;
  const next = idx < PAGES.length - 1 ? PAGES[idx + 1] : null;
  return { prev, next };
}

function renderFooterNav(currentFile) {
  const { prev, next } = getPageNav(currentFile);
  const el = document.getElementById('footer-nav-mount');
  if (!el) return;
  el.innerHTML = `
    <div>${prev ? `<a href="${prev.file}" class="btn btn-secondary">‹ ${prev.title}</a>` : ''}</div>
    <div>${next ? `<a href="${next.file}" class="btn btn-primary">${next.title} ›</a>` : ''}</div>
  `;
}