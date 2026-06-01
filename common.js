/* =========================================================
   ВетБиом · common.js
   Общая логика для всех страниц: header, footer, переводы,
   переключатель языка, scroll reveal.
   ========================================================= */

/* ---- Language handling ---- */

function getCurrentLang() {
  const params = new URLSearchParams(location.search);
  const urlLang = params.get('lang');
  if (urlLang && I18N[urlLang]) return urlLang;
  const saved = localStorage.getItem('vetbiom_lang');
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('ru')) return 'ru';
  if (nav.startsWith('zh')) return 'zh';
  return 'en';
}

function getBrandForLang(lang) {
  return CONFIG['brand_' + lang] || CONFIG.brand_en;
}

function tr(key, lang) {
  lang = lang || getCurrentLang();
  return (I18N[lang] && I18N[lang][key]) !== undefined ? I18N[lang][key] : (I18N.en[key] || key);
}

function applyTranslations(lang) {
  const dict = I18N[lang] || I18N.en;
  const brand = getBrandForLang(lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    let val = dict[key];
    if (val === undefined) return;
    val = val.replace(/\{BRAND\}/g, brand);
    el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-brand]').forEach(el => {
    el.textContent = brand;
  });

  // Meta tags by page key (data-meta-key="home" → meta.title.home / meta.desc.home)
  const metaKey = document.body.dataset.page;
  if (metaKey) {
    const title = dict['meta.title.' + metaKey];
    const desc  = dict['meta.desc.' + metaKey];
    if (title) document.title = title;
    if (desc) {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute('content', desc);
    }
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
}

function setLang(lang) {
  if (!I18N[lang]) return;
  localStorage.setItem('vetbiom_lang', lang);
  const url = new URL(location.href);
  url.searchParams.set('lang', lang);
  history.replaceState(null, '', url);
  applyTranslations(lang);
  // Re-render dynamic content (reports, articles, stages) if pages call it
  if (typeof onLangChange === 'function') onLangChange(lang);
}

/* ---- Config injection ---- */

function applyConfig() {
  const lang = getCurrentLang();

  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.getAttribute('data-config');
    let val = CONFIG[key];
    // Lang-aware fields
    if (val === undefined && CONFIG[key + '_' + lang] !== undefined) {
      val = CONFIG[key + '_' + lang];
    }
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-link]').forEach(el => {
    const type = el.getAttribute('data-link');
    let href = '#';
    switch (type) {
      case 'email-info':       href = 'mailto:' + CONFIG.email_info; break;
      case 'email-suppliers':  href = 'mailto:' + CONFIG.email_suppliers; break;
      case 'email-vet':        href = 'mailto:' + CONFIG.email_vet; break;
      case 'email-legal':      href = 'mailto:' + CONFIG.email_legal; break;
      case 'whatsapp':         if (CONFIG.whatsapp_number) href = 'https://wa.me/' + CONFIG.whatsapp_number; break;
      case 'telegram':         if (CONFIG.telegram_username) href = 'https://t.me/' + CONFIG.telegram_username; break;
      case 'wechat':           el.setAttribute('title', 'WeChat ID: ' + CONFIG.wechat_id); break;
    }
    if (el.tagName === 'A' && href !== '#') el.setAttribute('href', href);
  });
}

/* ---- Header / Footer injection ---- */

function renderHeader() {
  const current = document.body.dataset.page || 'home';
  const html = `
    <div class="container header-inner">
      <a href="index.html" class="logo" aria-label="VetBiom">
        <svg class="logo-mark" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="2.2" fill="currentColor"/>
          <circle cx="6"  cy="14" r="2.6" fill="currentColor" opacity="0.85"/>
          <circle cx="34" cy="13" r="2.2" fill="currentColor" opacity="0.7"/>
          <circle cx="32" cy="30" r="2.8" fill="currentColor" opacity="0.9"/>
          <circle cx="9"  cy="31" r="2"   fill="currentColor" opacity="0.6"/>
          <line x1="8"  y1="15" x2="15" y2="18" stroke="currentColor" stroke-width="1" opacity="0.5"/>
          <line x1="33" y1="14" x2="24" y2="18" stroke="currentColor" stroke-width="1" opacity="0.5"/>
          <line x1="30" y1="29" x2="24" y2="23" stroke="currentColor" stroke-width="1" opacity="0.5"/>
          <line x1="11" y1="30" x2="17" y2="24" stroke="currentColor" stroke-width="1" opacity="0.5"/>
        </svg>
        <span class="logo-text" data-i18n-brand>VetBiom</span>
      </a>
      <nav class="main-nav" aria-label="Main">
        <a href="index.html"        class="${current==='home'?'is-active':''}"        data-i18n="nav.home">Home</a>
        <a href="about.html"        class="${current==='about'?'is-active':''}"       data-i18n="nav.about">About</a>

        <a href="knowledge.html"    class="${current==='knowledge'?'is-active':''}"   data-i18n="nav.knowledge">Knowledge</a>
        <a href="partners.html"     class="${current==='partners'?'is-active':''}"    data-i18n="nav.partners">Partners</a>
      </nav>
      <div class="header-controls">
        <div class="lang-switcher" role="group" aria-label="Language">
          <button type="button" data-lang="en" class="lang-btn">EN</button>
          <button type="button" data-lang="ru" class="lang-btn">RU</button>
          <button type="button" data-lang="zh" class="lang-btn">中文</button>
        </div>
        <button class="menu-toggle" aria-label="Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>`;
  const header = document.querySelector('.site-header');
  if (header) header.innerHTML = html;
}

function renderFooter() {
  const html = `
    <div class="container footer-grid">
      <div class="footer-col footer-col-wide">
        <div class="footer-brand">
          <svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
            <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="20" cy="20" r="2.2" fill="currentColor"/>
            <circle cx="6"  cy="14" r="2.6" fill="currentColor"/>
            <circle cx="34" cy="13" r="2.2" fill="currentColor"/>
            <circle cx="32" cy="30" r="2.8" fill="currentColor"/>
            <circle cx="9"  cy="31" r="2"   fill="currentColor"/>
          </svg>
          <span class="logo-text" data-i18n-brand>VetBiom</span>
        </div>
        <p class="footer-about" data-i18n="footer.about">—</p>
      </div>

      <div class="footer-col">
        <h4 data-i18n="footer.linksBlock">Sections</h4>
        <a href="index.html" data-i18n="nav.home">Home</a>
        <a href="about.html" data-i18n="nav.about">About</a>

        <a href="knowledge.html" data-i18n="nav.knowledge">Knowledge</a>
        <a href="partners.html" data-i18n="nav.partners">Partners</a>
      </div>

      <div class="footer-col">
        <h4 data-i18n="footer.contactBlock">Contacts</h4>
        <a href="#" data-link="email-info" data-config="email_info">info@vetbiom.ru</a>
        <a href="#" data-link="email-suppliers" data-config="email_suppliers">suppliers@vetbiom.ru</a>
        <a href="#" data-link="wechat">WeChat: <span data-config="wechat_display">—</span></a>
      </div>

      <div class="footer-col footer-col-wide">
        <h4 data-i18n="footer.legalBlock">Legal</h4>
        <div class="footer-legal">
          <span data-config="company_short_ru">ООО «БИОМА ЛАБ»</span><br/>
          ИНН <span data-config="inn">9723273920</span> · 
          ОГРН <span data-config="ogrn">1267700174060</span><br/>
          <span data-config="city_ru">Москва, Россия</span>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span data-i18n="footer.copy">© 2026 BIOMA LAB LLC.</span>
    </div>`;
  const footer = document.querySelector('.site-footer');
  if (footer) footer.innerHTML = html;
}

/* ---- Interactions ---- */

function setupLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav    = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  if (window.__revealIo) return;
  window.__revealIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        window.__revealIo.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  // Observe all current and future [data-reveal] elements
  observeRevealChildren(document);
}

function observeRevealChildren(container) {
  if (!window.__revealIo) setupScrollReveal();
  if (window.__revealIo) {
    container.querySelectorAll('[data-reveal]').forEach(el => window.__revealIo.observe(el));
  }
}

/* ---- Schema.org ---- */

function injectSchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": CONFIG.company_full_en,
    "alternateName": [CONFIG.brand_en, CONFIG.company_short_ru, CONFIG.brand_ru],
    "url": "https://vetbiom.ru",
    "logo": "https://vetbiom.ru/favicon.svg",
    "foundingDate": CONFIG.founded,
    "address": { "@type": "PostalAddress", "addressLocality": "Moscow", "addressCountry": "RU" },
    "taxID": CONFIG.inn,
    "identifier": [
      { "@type": "PropertyValue", "propertyID": "INN", "value": CONFIG.inn },
      { "@type": "PropertyValue", "propertyID": "OGRN", "value": CONFIG.ogrn },
      { "@type": "PropertyValue", "propertyID": "KPP", "value": CONFIG.kpp }
    ],
    "email": CONFIG.email_info,
    "founder": { "@type": "Person", "name": CONFIG.director_en, "jobTitle": "CEO, Founder" },
    "description": "R&D company in veterinary synbiotics. Develops S. boulardii + FOS formulations in 1 g sachets for dogs, cats and other companion animals."
  };
  let el = document.getElementById('schema-org');
  if (!el) {
    el = document.createElement('script');
    el.id = 'schema-org';
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
}

/* ---- Utility: format date ---- */

function fmtDate(iso, lang) {
  lang = lang || getCurrentLang();
  const d = new Date(iso);
  const locale = lang === 'ru' ? 'ru-RU' : (lang === 'zh' ? 'zh-CN' : 'en-US');
  return d.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}

/* ---- Init ---- */

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  applyConfig();
  const lang = getCurrentLang();
  applyTranslations(lang);
  setupLangButtons();
  setupMobileMenu();
  setupScrollReveal();
  injectSchemaOrg();
  // Page-specific init
  if (typeof initPage === 'function') initPage(lang);
});
