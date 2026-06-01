/* =========================================================
   article.js — рендеринг статьи из markdown
   ========================================================= */

(function() {
  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');
  const lang = getCurrentLang ? getCurrentLang() : 'ru';

  // Helper: get value for current language, fallback ru → en
  const l10n = v => (v && typeof v === 'object') ? (v[lang] || v.ru || v.en) : v;

  // Find article in index
  const article = ARTICLES_INDEX.find(a => a.slug === slug);

  if (!article) {
    document.getElementById('articleTitle').textContent = l10n({ ru: 'Статья не найдена', en: 'Article not found', zh: '文章未找到' });
    document.getElementById('articleDesc').textContent = l10n({ ru: 'Запрошенный материал отсутствует в базе знаний.', en: 'The requested material is not in the knowledge base.', zh: '所请求的资料不在知识库中。' });
    document.getElementById('articleBody').innerHTML = '<p><a href="knowledge.html">' + l10n({ ru: '← Вернуться к базе знаний', en: '← Back to knowledge base', zh: '← 返回知识库' }) + '</a></p>';
    return;
  }

  // Set title and meta
  const title = l10n(article.title);
  const desc = l10n(article.description);
  document.title = title + ' · VetBiom';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', desc);

  document.getElementById('articleTitle').textContent = title;
  document.getElementById('articleDesc').textContent = desc;

  const metaHtml = `
    <span class="article-meta-tag">${l10n(article.category)}</span>
    <span>${fmtDate(article.date, lang)}</span>
    <span>${l10n(article.reading_time)} ${l10n({ ru: 'мин чтения', en: 'min read', zh: '分钟阅读' })}</span>
  `;
  document.getElementById('articleMeta').innerHTML = metaHtml;

  // Fetch markdown content for current language
  const body = document.getElementById('articleBody');
  const langExt = lang === 'ru' ? '' : '.' + lang;
  fetch('articles/' + article.slug + langExt + '.md', { cache: 'no-cache' })
    .then(r => {
      if (!r.ok) throw new Error('Not found');
      return r.text();
    })
    .then(md => {
      // Strip frontmatter if present
      const cleaned = md.replace(/^---[\s\S]*?---\s*/, '');
      // Check if it's a placeholder (very short)
      if (cleaned.trim().length < 200) {
        body.innerHTML = `
          ${marked.parse(cleaned)}
          <div class="article-placeholder">
            ${tr ? tr('kb.article.placeholder') : 'Эта статья находится в подготовке.'}
            <br/><br/>
            <a href="partners.html#vet" class="btn btn-primary btn-sm">Связаться</a>
          </div>
        `;
      } else {
        body.innerHTML = marked.parse(cleaned);
      }
    })
    .catch(() => {
      body.innerHTML = `
        <div class="article-placeholder">
          Полный текст статьи временно недоступен. Если вы хотите получить материалы по этой теме — напишите нам.
          <br/><br/>
          <a href="partners.html#vet" class="btn btn-primary btn-sm">Связаться</a>
        </div>
      `;
    });
})();
