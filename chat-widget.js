/* =========================================================
   BIOMA LAB Chat Widget (self-contained FAQ + server link)
   ========================================================= */
(function () {
  'use strict';

  // FAQ entries: {answer, kw[], minScore}
  const FAQ = [
    { a: 'Здравствуйте! Чем могу помочь? Спросите о синбиотиках, здоровье животных или продукции BIOMA LAB.', kw: ['здравствуй', 'привет', 'добрый', 'утро', 'вечер', 'хай'], min: 2 },
    { a: 'BIOMA LAB — R&D компания, разрабатывающая ветеринарные синбиотики (пробиотики + пребиотики).', kw: ['bioma', 'lab', 'компания', 'занимается'], min: 3 },
    { a: 'Синбиотик — комбинация пробиотика (полезных бактерий) и пребиотика (питательной среды). BIOMA LAB использует S. boulardii + FOS.', kw: ['синбиотик', 'пробиотик', 'пребиотик', 'boulardii', 'fos'], min: 2 },
    { a: 'Разработки BIOMA LAB предназначены для сельскохозяйственных животных (КРС, свиньи, птица) и домашних питомцев (собаки, кошки).', kw: ['животные', 'собаки', 'кошки', 'крс', 'свиньи', 'птица', 'телята'], min: 2 },
    { a: 'BIOMA LAB работает B2B. Для коммерческого предложения и цен — напишите в Telegram @BiomaLab_bot.', kw: ['купить', 'цена', 'заказать', 'приобрести', 'стоимость', 'заказ'], min: 2 },
    { a: 'Ключевое отличие — патентованный штамм S. boulardii и научно-обоснованная комбинация с FOS.', kw: ['конкурент', 'отличие', 'уникальный', 'патент', 'штамм'], min: 2 },
    { a: 'Telegram: @BiomaLab_bot | Сайт: vetbiom.ru', kw: ['контакт', 'связаться', 'написать', 'телефон', 'email', 'почта', 'адрес'], min: 2 },
    { a: 'FOS (фруктоолигосахариды) — натуральные пребиотики, питательная среда для полезных бактерий.', kw: ['fos', 'фруктоолигосахарид', 'пребиотик'], min: 2 },
    { a: 'Дозировки зависят от вида, возраста и формы выпуска. Для коммерческого предложения напишите в Telegram @BiomaLab_bot.', kw: ['дозировка', 'сколько', 'давать', 'грамм', 'доза', 'принимать'], min: 2 },
    { a: 'У нас есть синбиотики для кошек, собак, сельскохозяйственных животных. Для коммерческого предложения — напишите в Telegram @BiomaLab_bot.', kw: ['продукция', 'ассортимент', 'линейка', 'каталог', 'имеется'], min: 2 },
    { a: 'Наши синбиотики на основе S. boulardii + FOS поддерживают здоровье кишечника. Уточните вид животного, возраст и симптомы. Для схемы — обратитесь к ветеринару.', kw: ['понос', 'диарея', 'поносит', 'срет', 'жидкий', 'жопа', 'расстройство'], min: 4 },
    { a: 'При запоре важны моторика ЖКТ и микрофлора. Наши синбиотики могут помочь. Какой вид животного? Для схемы — к ветеринару.', kw: ['запор', 'не какает', 'тужится', 'твердый', 'сухой', 'не ходит'], min: 4 },
    { a: 'Отказ от еды — неспецифичный симптом. Какой вид животного? Какие ещё симптомы? Нужна диагностика.', kw: ['не ест', 'не кушает', 'отказ', 'аппетит', 'плохо', 'не берет'], min: 4 },
  ];

  const SERVER_HOST = '45.67.129.187:8080';
  const CHAT_LINK = window.location.hostname === 'maxusoff1.github.io'
    ? 'http://' + SERVER_HOST + '/chat/'
    : '/chat/';

  // ── Fuzzy match ──
  function levDist(a, b, maxD) {
    if (Math.abs(a.length - b.length) > maxD) return maxD + 1;
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, (_, i) => i);
    for (let j = 1; j <= n; j++) {
      let prev = dp[0];
      dp[0] = j;
      for (let i = 1; i <= m; i++) {
        const tmp = dp[i];
        dp[i] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(dp[i], dp[i - 1], prev);
        prev = tmp;
      }
    }
    return dp[m];
  }

  function wordScore(w, kw) {
    if (w.length < 2 || kw.length < 2) return 0;
    if (kw.startsWith(w) || w.startsWith(kw)) {
      const shorter = Math.min(w.length, kw.length);
      const longer = Math.max(w.length, kw.length);
      return (shorter >= 3 && shorter >= longer * 0.4) ? 2 : 0;
    }
    if (Math.abs(w.length - kw.length) <= 2 && Math.max(w.length, kw.length) >= 3) {
      return levDist(w, kw, 2) <= 2 ? 1 : 0;
    }
    return 0;
  }

  function findFAQ(text) {
    const words = text.toLowerCase().match(/\w+/g) || [];
    let best = null, bestScore = 0;
    for (const entry of FAQ) {
      let score = 0;
      for (const w of words) {
        for (const kw of entry.kw) {
          const s = wordScore(w, kw);
          if (s > 0) { score += s; break; }
        }
      }
      if (score > bestScore) { bestScore = score; best = entry; }
    }
    return best && bestScore >= best.min ? best.a : null;
  }

  // ── CSS ──
  const css = `
#bioma-widget-btn {
  position: fixed; bottom: 24px; right: 24px; z-index: 999999;
  width: 56px; height: 56px; border-radius: 50%;
  background: #335341; border: none; cursor: pointer;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.2s;
}
#bioma-widget-btn:hover { transform: scale(1.08); }
#bioma-widget-btn svg { width: 28px; height: 28px; fill: white; }
#bioma-widget-btn .badge {
  position: absolute; top: -4px; right: -4px;
  width: 20px; height: 20px; border-radius: 50%;
  background: #d97706; color: white; font-size: 11px;
  font-weight: 700; animation: bioma-pulse 2s infinite;
}
@keyframes bioma-pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }

#bioma-widget-panel {
  position: fixed; bottom: 92px; right: 24px; z-index: 999998;
  width: 360px; max-width: calc(100vw - 48px);
  height: 500px; max-height: calc(100vh - 120px);
  background: #f1ece3; border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  display: none; flex-direction: column;
  overflow: hidden; font-family: -apple-system, 'Onest', 'DM Sans', sans-serif;
  border: 1px solid #d4cfc6;
}
#bioma-widget-panel.open { display: flex; }

#bioma-widget-header {
  background: #335341; color: white; padding: 14px 18px;
  display: flex; justify-content: space-between; align-items: center;
  font-size: 15px; font-weight: 600; flex-shrink: 0;
}
#bioma-widget-close { background: none; border: none; color: white; cursor: pointer; font-size: 20px; padding: 4px; line-height: 1; }

#bioma-widget-msgs {
  flex: 1; overflow-y: auto; padding: 14px;
  display: flex; flex-direction: column; gap: 10px; scroll-behavior: smooth;
}
.bioma-w-msg {
  max-width: 88%; padding: 10px 14px; border-radius: 12px;
  font-size: 14px; line-height: 1.45; color: #2c2c2c;
  animation: bioma-w-fade 0.25s ease;
}
.bioma-w-msg.user { align-self: flex-end; background: #335341; color: white; border-bottom-right-radius: 4px; }
.bioma-w-msg.bot { align-self: flex-start; background: white; border-bottom-left-radius: 4px; border: 1px solid #d4cfc6; }
.bioma-w-msg.fallback { align-self: flex-start; background: #fff3cd; color: #856404; border-bottom-left-radius: 4px; font-size: 13px; }
.bioma-w-msg .bioma-w-time { font-size: 11px; opacity: 0.6; margin-top: 4px; }

@keyframes bioma-w-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

#bioma-widget-input-area {
  display: flex; padding: 10px; gap: 8px;
  border-top: 1px solid #d4cfc6; background: white; border-radius: 0 0 16px 16px; flex-shrink: 0;
}
#bioma-widget-input {
  flex: 1; border: 1px solid #d4cfc6; border-radius: 20px;
  padding: 8px 14px; font-size: 14px; outline: none; font-family: inherit;
}
#bioma-widget-input:focus { border-color: #335341; }
#bioma-widget-send {
  background: #335341; color: white; border: none;
  border-radius: 50%; width: 36px; height: 36px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; transition: opacity 0.2s;
}
#bioma-widget-send:disabled { opacity: 0.4; cursor: default; }
#bioma-widget-send svg { width: 16px; height: 16px; fill: white; }

.bioma-w-typing {
  align-self: flex-start; display: flex; gap: 4px;
  padding: 12px 18px; background: white; border-radius: 12px;
  border-bottom-left-radius: 4px; border: 1px solid #d4cfc6;
}
.bioma-w-typing span {
  width: 8px; height: 8px; border-radius: 50%; background: #999;
  animation: bioma-w-bounce 1.4s infinite;
}
.bioma-w-typing span:nth-child(2) { animation-delay: 0.2s; }
.bioma-w-typing span:nth-child(3) { animation-delay: 0.4s; }
@keyframes bioma-w-bounce { 0%,80%,100% { transform: translateY(0); } 40% { transform: translateY(-6px); } }
`;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const panel = document.createElement('div');
  panel.id = 'bioma-widget-panel';
  panel.innerHTML = `
    <div id="bioma-widget-header">
      <span>BIOMA LAB · Чат</span>
      <button id="bioma-widget-close">✕</button>
    </div>
    <div id="bioma-widget-msgs">
      <div class="bioma-w-msg bot">
        Здравствуйте! Спросите о синбиотиках, здоровье животных или продукции BIOMA LAB.
        <div class="bioma-w-time">только что</div>
      </div>
    </div>
    <div id="bioma-widget-input-area">
      <input id="bioma-widget-input" placeholder="Ваш вопрос..." />
      <button id="bioma-widget-send" disabled>
        <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </div>
  `;

  const btn = document.createElement('button');
  btn.id = 'bioma-widget-btn';
  btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>'
    + '<div class="badge">?</div>';

  document.body.appendChild(btn);
  document.body.appendChild(panel);

  let isOpen = false;
  const msgsEl = document.getElementById('bioma-widget-msgs');
  const inputEl = document.getElementById('bioma-widget-input');
  const sendBtn = document.getElementById('bioma-widget-send');

  function addMsg(text, role, cls) {
    const div = document.createElement('div');
    div.className = 'bioma-w-msg ' + role;
    if (cls) div.className += ' ' + cls;
    const time = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    div.innerHTML = text + '<div class="bioma-w-time">' + time + '</div>';
    msgsEl.appendChild(div);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'bioma-w-typing';
    div.id = 'bioma-w-typing-id';
    div.innerHTML = '<span></span><span></span><span></span>';
    msgsEl.appendChild(div);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById('bioma-w-typing-id');
    if (el) el.remove();
  }

  function ask(text) {
    if (!text.trim()) return;
    addMsg(text, 'user');
    inputEl.value = '';
    sendBtn.disabled = true;
    showTyping();
    setTimeout(() => {
      hideTyping();
      const faq = findFAQ(text);
      if (faq) {
        addMsg(faq, 'bot');
      } else {
        addMsg('Я не нашёл точный ответ.<br><br>'
          + '<a href="' + CHAT_LINK + '" target="_blank" rel="noopener" '
          + 'style="color:#335341;font-weight:600;text-decoration:underline;">'
          + 'Открыть подробную консультацию →</a>', 'bot', 'fallback');
      }
      sendBtn.disabled = false;
      inputEl.focus();
    }, 400);
  }

  btn.addEventListener('click', () => {
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    btn.style.display = isOpen ? 'none' : 'flex';
    if (isOpen) inputEl.focus();
    const badge = btn.querySelector('.badge');
    if (badge) badge.remove();
  });

  document.getElementById('bioma-widget-close').addEventListener('click', () => { isOpen = false; panel.classList.remove('open'); btn.style.display = 'flex'; });
  inputEl.addEventListener('input', () => { sendBtn.disabled = !inputEl.value.trim(); });
  inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(inputEl.value); } });
  sendBtn.addEventListener('click', () => ask(inputEl.value));
})();
