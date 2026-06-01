/* =========================================================
   BIOMA LAB Chat Widget (self-contained, no API calls)
   Handles FAQ client-side; fallback links to full chat.
   ========================================================= */
(function () {
  'use strict';

  // ── FAQ with broad keyword coverage ──
  const FAQ = [
    {
      a: 'BIOMA LAB — R&D компания, разрабатывающая ветеринарные синбиотики (пробиотики + пребиотики) для сельскохозяйственных и домашних животных.',
      kw: ['bioma', 'lab', 'компания', 'кто', 'чем', 'занимается', 'это', 'что', 'такое', 'расскажи', 'расскажите', 'представь', 'инфо', 'о вас']
    },
    {
      a: 'Синбиотик — комбинация пробиотика (полезных бактерий) и пребиотика (питательной среды). BIOMA LAB использует S. boulardii + FOS.',
      kw: ['синбиотик', 'пробиотик', 'пребиотик', 'boulardii', 'fos', 'это', 'что', 'такое']
    },
    {
      a: 'Разработки BIOMA LAB предназначены для сельскохозяйственных животных (КРС, свиньи, птица) и домашних питомцев (собаки, кошки).',
      kw: ['животные', 'собаки', 'кошки', 'крс', 'свиньи', 'птица', 'поросят', 'телят', 'цыплят', 'для кого', 'кому', 'подходит']
    },
    {
      a: 'BIOMA LAB работает B2B. Для коммерческого предложения — напишите нам в Telegram @BiomaLab_bot.',
      kw: ['купить', 'цена', 'заказать', 'где', 'приобрести', 'стоимость', 'заказ']
    },
    {
      a: 'Ключевое отличие — патентованный штамм S. boulardii и научно-обоснованная комбинация с FOS.',
      kw: ['конкурент', 'отличие', 'уникальный', 'патент', 'штамм', 'уникальность', 'почему']
    },
    {
      a: 'Telegram: @BiomaLab_bot · Сайт: vetbiom.ru',
      kw: ['контакт', 'связаться', 'написать', 'телефон', 'email', 'почта', 'адрес', 'чат']
    },
    {
      a: 'FOS (фруктоолигосахариды) — натуральные пребиотики, питательная среда для полезных бактерий.',
      kw: ['fos', 'фруктоолигосахарид', 'пребиотик']
    },
    {
      a: 'Наши синбиотики на основе S. boulardii + FOS поддерживают здоровье кишечника у кошек и собак. Для точной схемы — обратитесь к ветеринару.',
      kw: ['кот', 'кошк', 'собак', 'срет', 'понос', 'диаре', 'расстройств', 'живот', 'жкт', 'поносит', 'какает', 'стул']
    },
    {
      a: 'Дозировки зависят от вида, возраста и формы выпуска. Для коммерческого предложения напишите в Telegram @BiomaLab_bot, указав вид и поголовье.',
      kw: ['дозировк', 'сколько', 'давать', 'грамм', 'мл', 'норм', 'доза', 'принимать']
    },
    {
      a: 'Здравствуйте! Чем могу помочь? Спросите о синбиотиках, здоровье животных или продукции BIOMA LAB.',
      kw: ['здравствуй', 'привет', 'добрый', 'день', 'утро', 'вечер']
    },
    {
      a: 'У нас есть синбиотики для кошек, собак, сельскохозяйственных животных. Для коммерческого предложения — напишите в Telegram @BiomaLab_bot.',
      kw: ['продукция', 'ассортимент', 'линейк', 'каталог', 'есть', 'имеется']
    },
  ];

  // SERVER_HOST — accessible from outside
  const SERVER_HOST = '45.67.129.187:8080';

  const CHAT_LINK = window.location.hostname === 'maxusoff1.github.io'
    ? 'http://' + SERVER_HOST + '/chat/'
    : '/chat/';

  const COLORS = {
    bg: '#f1ece3',
    primary: '#335341',
    text: '#2c2c2c',
    border: '#d4cfc6',
  };

  // ── Find FAQ answer (lower threshold = 1) ──
  function findFAQ(text) {
    const words = text.toLowerCase().match(/\w+/g) || [];
    let bestEntry = null, bestScore = 0;
    for (const entry of FAQ) {
      let score = 0;
      for (const w of words) {
        for (const kw of entry.kw) {
          if (kw.length >= 2 && w.length >= 2 && (w.startsWith(kw) || kw.startsWith(w))) {
            score++;
            break;
          }
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestEntry = entry;
      }
    }
    return bestScore >= 1 ? bestEntry.a : null;
  }

  // ── CSS ──
  const css = `
#bioma-widget-btn {
  position: fixed; bottom: 24px; right: 24px; z-index: 999999;
  width: 56px; height: 56px; border-radius: 50%;
  background: ${COLORS.primary}; border: none; cursor: pointer;
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
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; animation: bioma-pulse 2s infinite;
}
@keyframes bioma-pulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

#bioma-widget-panel {
  position: fixed; bottom: 92px; right: 24px; z-index: 999998;
  width: 360px; max-width: calc(100vw - 48px);
  height: 500px; max-height: calc(100vh - 120px);
  background: ${COLORS.bg}; border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  display: none; flex-direction: column;
  overflow: hidden; font-family: -apple-system, 'Onest', 'DM Sans', sans-serif;
  border: 1px solid ${COLORS.border};
}
#bioma-widget-panel.open { display: flex; }

#bioma-widget-header {
  background: ${COLORS.primary}; color: white; padding: 14px 18px;
  display: flex; justify-content: space-between; align-items: center;
  font-size: 15px; font-weight: 600; flex-shrink: 0;
}
#bioma-widget-close {
  background: none; border: none; color: white; cursor: pointer;
  font-size: 20px; padding: 4px; line-height: 1;
}

#bioma-widget-msgs {
  flex: 1; overflow-y: auto; padding: 14px;
  display: flex; flex-direction: column; gap: 10px;
  scroll-behavior: smooth;
}
.bioma-w-msg {
  max-width: 88%; padding: 10px 14px; border-radius: 12px;
  font-size: 14px; line-height: 1.45; color: ${COLORS.text};
  animation: bioma-w-fade 0.25s ease;
}
.bioma-w-msg.user {
  align-self: flex-end; background: ${COLORS.primary}; color: white;
  border-bottom-right-radius: 4px;
}
.bioma-w-msg.bot {
  align-self: flex-start; background: white;
  border-bottom-left-radius: 4px;
  border: 1px solid ${COLORS.border};
}
.bioma-w-msg.fallback {
  align-self: flex-start; background: #fff3cd; color: #856404;
  border-bottom-left-radius: 4px; font-size: 13px;
}
.bioma-w-msg .bioma-w-time {
  font-size: 11px; opacity: 0.6; margin-top: 4px;
}

@keyframes bioma-w-fade {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

#bioma-widget-input-area {
  display: flex; padding: 10px; gap: 8px;
  border-top: 1px solid ${COLORS.border};
  background: white; border-radius: 0 0 16px 16px; flex-shrink: 0;
}
#bioma-widget-input {
  flex: 1; border: 1px solid ${COLORS.border}; border-radius: 20px;
  padding: 8px 14px; font-size: 14px; outline: none; font-family: inherit;
}
#bioma-widget-input:focus { border-color: ${COLORS.primary}; }
#bioma-widget-send {
  background: ${COLORS.primary}; color: white; border: none;
  border-radius: 50%; width: 36px; height: 36px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; transition: opacity 0.2s;
}
#bioma-widget-send:disabled { opacity: 0.4; cursor: default; }
#bioma-widget-send svg { width: 16px; height: 16px; fill: white; }

.bioma-w-typing {
  align-self: flex-start; display: flex; gap: 4px;
  padding: 12px 18px; background: white; border-radius: 12px;
  border-bottom-left-radius: 4px; border: 1px solid ${COLORS.border};
}
.bioma-w-typing span {
  width: 8px; height: 8px; border-radius: 50%; background: #999;
  animation: bioma-w-bounce 1.4s infinite;
}
.bioma-w-typing span:nth-child(2) { animation-delay: 0.2s; }
.bioma-w-typing span:nth-child(3) { animation-delay: 0.4s; }
@keyframes bioma-w-bounce {
  0%,80%,100% { transform: translateY(0); }
  40% { transform: translateY(-6px); }
}
`;

  // ── Inject styles ──
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── Build HTML ──
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

  // ── State ──
  let isOpen = false;
  const msgsEl = document.getElementById('bioma-widget-msgs');
  const inputEl = document.getElementById('bioma-widget-input');
  const sendBtn = document.getElementById('bioma-widget-send');

  function addMsg(text, role, cls) {
    const div = document.createElement('div');
    div.className = 'bioma-w-msg ' + role;
    if (cls) div.className += ' ' + cls;
    const now = new Date();
    const time = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
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
        const fallback = 'Я не нашёл точный ответ. '
          + '<br><br><a href="' + CHAT_LINK + '" target="_blank" rel="noopener" '
          + 'style="color:#335341;font-weight:600;text-decoration:underline;">'
          + 'Открыть подробную консультацию →</a>'
          + '<br><br>Или напишите в <a href="https://t.me/BiomaLab_bot" '
          + 'style="color:#335341;font-weight:600;text-decoration:underline;" target="_blank">'
          + 'Telegram @BiomaLab_bot</a>';
        addMsg(fallback, 'bot', 'fallback');
      }

      sendBtn.disabled = false;
      inputEl.focus();
    }, 400);
  }

  // ── Events ──
  btn.addEventListener('click', () => {
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    btn.style.display = isOpen ? 'none' : 'flex';
    if (isOpen) inputEl.focus();
    const badge = btn.querySelector('.badge');
    if (badge) badge.remove();
  });

  document.getElementById('bioma-widget-close').addEventListener('click', () => {
    isOpen = false;
    panel.classList.remove('open');
    btn.style.display = 'flex';
  });

  inputEl.addEventListener('input', () => {
    sendBtn.disabled = !inputEl.value.trim();
  });

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      ask(inputEl.value);
    }
  });

  sendBtn.addEventListener('click', () => ask(inputEl.value));

  console.log('BIOMA LAB Chat Widget loaded');
})();
