/* =========================================================
   article.js — рендеринг статьи из markdown
   ========================================================= */

(function() {
  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');

  // Find article in index
  const article = ARTICLES_INDEX.find(a => a.slug === slug);

  if (!article) {
    document.getElementById('articleTitle').textContent = 'Статья не найдена';
    document.getElementById('articleDesc').textContent = 'Запрошенный материал отсутствует в базе знаний.';
    document.getElementById('articleBody').innerHTML = '<p><a href="knowledge.html">← Вернуться к базе знаний</a></p>';
    return;
  }

  // Set title and meta
  document.title = article.title + ' · VetBiom';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', article.description);

  document.getElementById('articleTitle').textContent = article.title;
  document.getElementById('articleDesc').textContent = article.description;

  const lang = getCurrentLang ? getCurrentLang() : 'ru';
  const metaHtml = `
    <span class="article-meta-tag">${article.category}</span>
    <span>${fmtDate(article.date, lang)}</span>
    <span>${article.reading_time} мин чтения</span>
  `;
  document.getElementById('articleMeta').innerHTML = metaHtml;

  // Fetch markdown content
  const body = document.getElementById('articleBody');
  fetch('articles/' + article.slug + '.md', { cache: 'no-cache' })
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
