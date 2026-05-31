/* =========================================================
   ВетБиом / BIOMA LAB · data.js
   ВСЕ ДАННЫЕ САЙТА — В ЭТОМ ОДНОМ ФАЙЛЕ.
   Меняйте здесь — изменения применятся ко всему сайту.
   =========================================================

   Содержание:
   1. CONFIG          — реквизиты компании, контакты, бренд
   2. REPORTS         — 3 карточки «Актуальные результаты» на главной
   3. STAGES          — этапы разработки продукта
   4. ARTICLES_INDEX  — индекс всех статей базы знаний
   5. I18N            — переводы интерфейса на RU / EN / ZH

   ========================================================= */


/* === 1. CONFIG: реквизиты и контакты === */
const CONFIG = {
  // Бренд (рабочее название сайта, можно менять)
  brand_ru: 'ВетБиом',
  brand_en: 'VetBiom',
  brand_zh: 'VetBiom',

  // Юридическое лицо (из ЕГРЮЛ)
  company_full_ru: 'Общество с ограниченной ответственностью «БИОМА ЛАБ»',
  company_short_ru: 'ООО «БИОМА ЛАБ»',
  company_full_en: 'BIOMA LAB Limited Liability Company',
  company_short_en: 'BIOMA LAB LLC',

  // Реквизиты
  inn:    '9723273920',
  kpp:    '772301001',
  ogrn:   '1267700174060',
  city_ru: 'Москва, Россия',
  city_en: 'Moscow, Russia',
  city_zh: '俄罗斯莫斯科',
  founded: '2026',
  oked_main: '10.91.3 — Производство кормового микробиологического белка, премиксов, кормовых витаминов',
  oked_rnd:  '72.19 — Научные исследования и разработки в области естественных наук',

  // Руководитель
  director_ru: 'Желудков Максим Сергеевич',
  director_en: 'Maksim Zheludkov',
  director_title_ru: 'Генеральный директор · Основатель',
  director_title_en: 'CEO · Founder',
  director_title_zh: '总经理 · 创始人',

  // Контакты
  email_info:        'info@vetbiom.ru',
  email_suppliers:   'suppliers@vetbiom.ru',
  email_vet:         'vet@vetbiom.ru',
  email_legal:       'biomalab@yandex.ru',         // юридический (из ЕГРЮЛ)

  wechat_id:         'wxid_xvlqim4aq97f22',
  wechat_display:    'Maksim Zheludkov',
  whatsapp_number:   '',                            // заполните, например: '79991234567'
  whatsapp_display:  '',                            // как показывать: '+7 999 123-45-67'
  telegram_username: '',                            // без @, например: 'vetbiom'

  // Соцсети (опционально, оставьте пустыми если не используете)
  social_vk:        '',
  social_linkedin:  '',
};


/* === 2. REPORTS: 3 карточки на главной "Актуальные результаты" === */
/* Это публичные R&D-отчёты компании. Подача — деловая, фактическая. */
const REPORTS = [
  {
    date: '2026-06-15',
    tag: { ru: 'R&D-отчёт', en: 'R&D Report', zh: 'R&D 报告' },
    title: {
      ru: 'Выбор штамма: обоснование Saccharomyces boulardii для ветеринарного синбиотика',
      en: 'Strain selection: rationale for Saccharomyces boulardii in a veterinary synbiotic',
      zh: '菌株选择:兽用合生元中 Saccharomyces boulardii 的理论依据'
    },
    summary: {
      ru: 'Сравнительный анализ S. boulardii и бактериальных пробиотиков. Ключевые критерии: устойчивость к желудочному соку, совместимость с антибиотиками, стабильность в сухой форме. Источники: PMC, EFSA, ветеринарные обзоры 2023–2025.',
      en: 'Comparative analysis of S. boulardii vs bacterial probiotics. Key criteria: gastric acid resistance, antibiotic compatibility, dry-form stability. Sources: PMC, EFSA, 2023–2025 veterinary reviews.',
      zh: 'S. boulardii 与细菌益生菌的比较分析。关键标准:抗胃酸性、与抗生素的兼容性、干燥形式稳定性。来源:PMC、EFSA、2023–2025 兽医综述。'
    }
  },
  {
    date: '2026-07-22',
    tag: { ru: 'Тест стабильности', en: 'Stability Test', zh: '稳定性测试' },
    title: {
      ru: 'Программа стабильности, месяц 1: жизнеспособность КОЕ при +25 °C сохранена',
      en: 'Stability programme, month 1: CFU viability maintained at +25°C',
      zh: '稳定性项目第一个月:+25°C 下保持 CFU 活力'
    },
    summary: {
      ru: 'Первый контрольный замер прототипа в 4-слойной фольге с EVOH-барьером. Показатели КОЕ соответствуют закладке. Активность воды (aw) удерживается в диапазоне 0,15–0,20. Программа продолжается до месяца 24.',
      en: 'First measurement of the prototype in 4-layer EVOH-barrier foil. CFU counts match formulation targets. Water activity (aw) held within 0.15–0.20. Programme continues through month 24.',
      zh: '使用 4 层 EVOH 阻隔铝箔的原型首次测量。CFU 数符合配方目标。水分活度 (aw) 保持在 0.15–0.20 范围内。项目持续至第 24 个月。'
    }
  },
  {
    date: '2026-08-10',
    tag: { ru: 'Партнёрам', en: 'For Suppliers', zh: '供应商' },
    title: {
      ru: 'Технические требования к субстанции S. boulardii: спецификация для поставщиков',
      en: 'Technical specification for S. boulardii substance: supplier requirements',
      zh: 'S. boulardii 原料技术规格:供应商要求'
    },
    summary: {
      ru: 'Открытый перечень параметров, которые мы запрашиваем у производителей сырья: штамм (предпочтительно CNCM I-745 или валидированный аналог), активность ≥ 10¹⁰ КОЕ/г, влажность, отсутствие лактозы, сертификаты ISO 22000 / GMP, CoA на партию.',
      en: 'Public list of parameters we request from raw material producers: strain (preferably CNCM I-745 or validated equivalent), activity ≥ 10¹⁰ CFU/g, moisture, lactose-free, ISO 22000 / GMP certificates, CoA per batch.',
      zh: '我们向原料生产商索取的参数公开清单:菌株(优选 CNCM I-745 或经验证的等效菌株)、活力 ≥ 10¹⁰ CFU/g、水分、无乳糖、ISO 22000 / GMP 证书、每批次 CoA。'
    }
  }
];


/* === 3. STAGES: этапы разработки продукта === */
const STAGES = [
  {
    n: 1,
    title: {
      ru: 'Аналитика рынка и выбор штамма',
      en: 'Market analysis and strain selection',
      zh: '市场分析和菌株选择'
    },
    body: {
      ru: 'Анализ научной литературы и доступных коммерческих штаммов. Выбор Saccharomyces boulardii обусловлен: устойчивостью к антибиотикам (дрожжевая природа), способностью проходить транзитом через ЖКТ, доказанной эффективностью при диарее различной этиологии. Опорный штамм для сопоставления — CNCM I-745.',
      en: 'Review of scientific literature and available commercial strains. Saccharomyces boulardii was selected based on: antibiotic resistance (yeast nature), ability to transit through the GI tract, proven efficacy in diarrhea of various etiologies. Reference strain for comparison — CNCM I-745.',
      zh: '审查科学文献和可用的商业菌株。选择 Saccharomyces boulardii 基于:对抗生素的抗性(酵母菌性质)、能够通过胃肠道的能力、对各种病因引起的腹泻的证实疗效。参考菌株为 CNCM I-745。'
    }
  },
  {
    n: 2,
    title: {
      ru: 'Оптимизация технологии: контроль активности воды',
      en: 'Process optimization: water activity control',
      zh: '工艺优化:水分活度控制'
    },
    body: {
      ru: 'На этапе подбора технологии смешивания выявлен ключевой фактор сохранности — активность воды (aw) в готовой смеси. Решение: раздельное кондиционирование компонентов перед фасовкой и поддержание aw в диапазоне 0,15–0,20.',
      en: 'During the mixing technology development, water activity (aw) in the final blend was identified as the key viability factor. Solution: separate conditioning of components before packaging and maintaining aw within 0.15–0.20.',
      zh: '在混合工艺开发过程中,水分活度 (aw) 被确定为关键的活力因素。解决方案:在包装前对组分进行单独调理,并将 aw 保持在 0.15–0.20 范围内。'
    }
  },
  {
    n: 3,
    title: {
      ru: 'Барьерная упаковка для саше 1 г',
      en: 'Barrier packaging for 1 g sachets',
      zh: '1 克小袋阻隔包装'
    },
    body: {
      ru: 'Сравнительное тестирование 4 типов упаковочных материалов. По результатам выбрана 4-слойная фольга с EVOH-барьером — оптимальное соотношение барьерных свойств (кислород, влага, свет) и совместимости с автоматами стик-пак-формата.',
      en: 'Comparative testing of 4 packaging material types. A 4-layer foil with EVOH barrier was selected — optimal balance of barrier properties (oxygen, moisture, light) and compatibility with stick-pack format automation.',
      zh: '4 种包装材料的比较测试。选择了带 EVOH 阻隔的 4 层铝箔——阻隔性能(氧气、水分、光线)与条状包装格式自动化设备兼容性的最佳平衡。'
    }
  },
  {
    n: 4,
    title: {
      ru: 'Подбор вспомогательных компонентов',
      en: 'Excipient selection',
      zh: '辅料选择'
    },
    body: {
      ru: 'Тестирование совместимости S. boulardii с пребиотиком FOS и вспомогательными агентами. Введён трикальцийфосфат (0,5%) как антислёживатель для FOS — улучшение сыпучести без влияния на жизнеспособность штамма.',
      en: 'Testing S. boulardii compatibility with FOS prebiotic and excipients. Tricalcium phosphate (0.5%) added as an anti-caking agent for FOS — improved flowability without impact on strain viability.',
      zh: '测试 S. boulardii 与 FOS 益生元和辅料的兼容性。添加磷酸三钙 (0.5%) 作为 FOS 的抗结块剂——改善流动性,不影响菌株活力。'
    }
  },
  {
    n: 5,
    title: {
      ru: 'Спецификация на сырьё для поставщиков',
      en: 'Raw material specification for suppliers',
      zh: '供应商原料规格'
    },
    body: {
      ru: 'Сформирован открытый технический запрос на субстанцию S. boulardii: штамм (приоритет CNCM I-745 или валидированный аналог), активность ≥ 10¹⁰ КОЕ/г к моменту поставки, остаточная влажность ≤ 5%, отсутствие лактозы, сертификаты ISO 22000 / GMP, CoA на партию, доступность образцов для тестирования.',
      en: 'Public technical request for S. boulardii substance formed: strain (priority CNCM I-745 or validated equivalent), activity ≥ 10¹⁰ CFU/g at delivery, residual moisture ≤ 5%, lactose-free, ISO 22000 / GMP certificates, CoA per batch, sample availability for testing.',
      zh: '已形成对 S. boulardii 原料的公开技术要求:菌株(优先 CNCM I-745 或经验证的等效菌株)、交付时活力 ≥ 10¹⁰ CFU/g、残留水分 ≤ 5%、无乳糖、ISO 22000 / GMP 证书、每批次 CoA、可提供测试样品。'
    }
  },
  {
    n: 6,
    title: {
      ru: 'Программа стабильности прототипа',
      en: 'Prototype stability programme',
      zh: '原型稳定性项目'
    },
    body: {
      ru: 'Запущена 24-месячная программа стабильности первого прототипа при условиях хранения +25 °C / 60% RH (ICH Zone II). Контрольные точки: 0, 1, 3, 6, 12, 18, 24 мес. Параметры: КОЕ, влажность, aw, органолептика, целостность упаковки. Месяц 1 пройден без значимых отклонений.',
      en: '24-month stability programme of the first prototype launched under +25°C / 60% RH storage (ICH Zone II). Check points: 0, 1, 3, 6, 12, 18, 24 months. Parameters: CFU, moisture, aw, organoleptic, package integrity. Month 1 passed without significant deviations.',
      zh: '在 +25°C / 60% 相对湿度储存条件下(ICH 第二区)启动了首个原型 24 个月稳定性项目。检查点:0、1、3、6、12、18、24 个月。参数:CFU、水分、aw、感官特性、包装完整性。第 1 个月通过,无重大偏差。'
    }
  }
];


/* === 4. ARTICLES_INDEX: индекс статей базы знаний ===
   Каждой статье соответствует файл в папке articles/[slug].md
   Чтобы добавить новую статью:
     1. Положите [slug].md в articles/
     2. Добавьте запись в этот массив
*/
const ARTICLES_INDEX = [
  {
    slug: '01-polza-s-boulardii',
    title: 'В чём польза Saccharomyces boulardii для животных',
    description: 'Механизмы действия пробиотических дрожжей, применение при диарее, антибиотикотерапии и стрессовых состояниях у животных-компаньонов.',
    category: 'Основы',
    date: '2026-06-01',
    reading_time: 5,
    tags: ['s.boulardii', 'обзор', 'механизм']
  },
  {
    slug: '02-s-boulardii-diareya-koshek',
    title: 'S. boulardii при диарее у кошек',
    description: 'Применение пробиотических дрожжей у кошек: дозировки, длительность курса, особенности при разных типах диареи.',
    category: 'Кошки',
    date: '2026-06-05',
    reading_time: 4,
    tags: ['кошки', 'диарея']
  },
  {
    slug: '03-diareya-koshek',
    title: 'Диарея у кошек: классификация и подходы',
    description: 'Причины диареи у кошек, классификация по продолжительности и тяжести, когда нужен ветеринарный осмотр.',
    category: 'Кошки',
    date: '2026-06-08',
    reading_time: 6,
    tags: ['кошки', 'диарея', 'клиника']
  },
  {
    slug: '04-s-boulardii-diareya-sobak',
    title: 'S. boulardii при диарее у собак',
    description: 'Клинические данные по применению S. boulardii у собак с острой и хронической энтеропатией.',
    category: 'Собаки',
    date: '2026-06-12',
    reading_time: 5,
    tags: ['собаки', 'диарея']
  },
  {
    slug: '05-s-boulardii-antibiotiki',
    title: 'Почему S. boulardii дают вместе с антибиотиками',
    description: 'Дрожжевая природа S. boulardii обеспечивает устойчивость к антибиотикам — это основа стратегии профилактики антибиотик-ассоциированной диареи.',
    category: 'Антибиотики',
    date: '2026-06-15',
    reading_time: 5,
    tags: ['антибиотики', 'AAD']
  },
  {
    slug: '06-enterol-ne-vyhod',
    title: 'Энтерол — не выход для животных: что не так с человеческим препаратом',
    description: 'Почему адаптация человеческих препаратов S. boulardii для животных — компромисс по дозировке, форме и составу.',
    category: 'Сравнение',
    date: '2026-06-18',
    reading_time: 4,
    tags: ['энтерол', 'сравнение']
  },
  {
    slug: '07-veterinarnyj-vs-chelovecheskij',
    title: 'Почему для животных лучше ветеринарный S. boulardii',
    description: 'Преимущества формы и состава, разработанных под видоспецифичные потребности кошек и собак.',
    category: 'Сравнение',
    date: '2026-06-20',
    reading_time: 4,
    tags: ['ветеринарная форма']
  },
  {
    slug: '08-sashe-vs-kapsuly',
    title: 'Почему саше удобнее капсул для кошек и собак',
    description: 'Анализ форматов выпуска: точность дозирования, гигиена, совместимость с кормом, удобство для владельца.',
    category: 'Форматы',
    date: '2026-06-22',
    reading_time: 4,
    tags: ['саше', 'формат']
  },
  {
    slug: '09-dozirovka-po-vesu',
    title: 'Как дозировать S. boulardii по весу животного',
    description: 'Таблицы доз для кошек и собак разных весовых категорий с привязкой к КОЕ/кг массы тела.',
    category: 'Дозирование',
    date: '2026-06-25',
    reading_time: 6,
    tags: ['дозировка', 'кошки', 'собаки']
  },
  {
    slug: '10-s-boulardii-fos',
    title: 'S. boulardii + FOS: зачем нужна комбинация',
    description: 'Синбиотический принцип: как ФОС служит селективным субстратом и усиливает эффект пробиотика.',
    category: 'Синбиотик',
    date: '2026-06-28',
    reading_time: 5,
    tags: ['ФОС', 'синбиотик']
  },
  {
    slug: '11-smena-korma',
    title: 'S. boulardii при смене корма',
    description: 'Поддержка кишечника в период адаптации к новому рациону — схема применения и ожидаемые эффекты.',
    category: 'Питание',
    date: '2026-07-01',
    reading_time: 4,
    tags: ['смена корма']
  },
  {
    slug: '12-stressovaya-diareya',
    title: 'S. boulardii при стрессовой диарее',
    description: 'Транспортировка, переезд, новые условия — применение пробиотика для коррекции стресс-индуцированных нарушений.',
    category: 'Стресс',
    date: '2026-07-04',
    reading_time: 4,
    tags: ['стресс']
  },
  {
    slug: '13-kishechnyj-barjer',
    title: 'Как S. boulardii поддерживает кишечный барьер',
    description: 'Механизмы укрепления плотных контактов, продукция бутирата, защита от транслокации патогенов.',
    category: 'Механизмы',
    date: '2026-07-07',
    reading_time: 6,
    tags: ['кишечный барьер', 'механизм']
  },
  {
    slug: '14-otlichie-ot-bakterial',
    title: 'Чем S. boulardii отличается от бактериальных пробиотиков',
    description: 'Дрожжевая природа: устойчивость к антибиотикам, температуре, желудочной кислоте — ключевые отличия.',
    category: 'Сравнение',
    date: '2026-07-10',
    reading_time: 5,
    tags: ['сравнение', 'дрожжи']
  },
  {
    slug: '15-kotyata-schenki',
    title: 'S. boulardii у котят и щенков',
    description: 'Особенности применения у молодых животных с формирующимся микробиомом, скорректированные дозы.',
    category: 'Котята / щенки',
    date: '2026-07-13',
    reading_time: 5,
    tags: ['котята', 'щенки']
  },
  {
    slug: '16-pozhilye',
    title: 'S. boulardii у пожилых животных',
    description: 'Поддержка ЖКТ при возрастных изменениях микробиома, хронических заболеваниях и сниженном иммунитете.',
    category: 'Гериатрия',
    date: '2026-07-16',
    reading_time: 5,
    tags: ['пожилые']
  },
  {
    slug: '17-ne-zamena-veterinara',
    title: 'Когда S. boulardii не заменяет ветеринара',
    description: 'Тревожные симптомы и клинические ситуации, при которых пробиотик не достаточен и требуется ветеринарная помощь.',
    category: 'Безопасность',
    date: '2026-07-19',
    reading_time: 5,
    tags: ['безопасность', 'тревожные симптомы']
  },
  {
    slug: '18-kak-ponyat-pomogaet',
    title: 'Как понять, что S. boulardii помогает',
    description: 'Объективные критерии эффективности: консистенция стула, частота, аппетит, активность животного.',
    category: 'Оценка эффекта',
    date: '2026-07-22',
    reading_time: 4,
    tags: ['эффективность']
  },
  {
    slug: '19-s-sorbentami',
    title: 'Можно ли давать S. boulardii вместе с сорбентами',
    description: 'Совместимость с активированным углём, смектитом и другими сорбентами — интервалы и схема приёма.',
    category: 'Совместимость',
    date: '2026-07-25',
    reading_time: 4,
    tags: ['сорбенты', 'совместимость']
  },
  {
    slug: '20-posle-antibiotikov',
    title: 'S. boulardii при восстановлении после антибиотиков',
    description: 'Протокол поддержки микробиоты в постантибиотический период: длительность, дозы, ожидаемые сроки восстановления.',
    category: 'Восстановление',
    date: '2026-07-28',
    reading_time: 5,
    tags: ['восстановление', 'антибиотики']
  },
  {
    slug: '21-kak-vybrat',
    title: 'Как выбрать S. boulardii для кошек и собак',
    description: 'Что смотреть на упаковке: штамм, активность, форма, состав, регистрационный статус, доказательная база.',
    category: 'Выбор',
    date: '2026-07-31',
    reading_time: 6,
    tags: ['выбор', 'упаковка']
  },
  {
    slug: '22-chastye-oshibki',
    title: 'Частые ошибки при даче S. boulardii животным',
    description: 'Типичные ошибки владельцев и ветеринаров: смешивание с горячей пищей, нарушение схемы, неподходящая форма.',
    category: 'Практика',
    date: '2026-08-03',
    reading_time: 4,
    tags: ['ошибки', 'практика']
  },
  {
    slug: '23-faq',
    title: 'FAQ: популярные вопросы о S. boulardii для животных',
    description: 'Ответы на 20 наиболее частых вопросов владельцев и ветеринаров о применении S. boulardii.',
    category: 'FAQ',
    date: '2026-08-06',
    reading_time: 8,
    tags: ['FAQ']
  },
  {
    slug: '24-poslebioticheskij-effect',
    title: 'S. boulardii: постбиотические эффекты',
    description: 'Метаболиты и пептиды S. boulardii, обладающие самостоятельной активностью даже без живых клеток.',
    category: 'Механизмы',
    date: '2026-08-09',
    reading_time: 5,
    tags: ['постбиотик', 'механизм']
  }
];


/* === 5. I18N: переводы интерфейса === */
const I18N = {
  ru: {
    "lang.code": "ru-RU",

    "nav.home":         "Главная",
    "nav.about":        "О компании",
    "nav.development":  "Разработка",
    "nav.knowledge":    "Ветеринарам",
    "nav.partners":     "Партнёрам",

    "meta.title.home":         "ВетБиом — ветеринарные синбиотики на основе S. boulardii",
    "meta.desc.home":          "R&D-компания BIOMA LAB разрабатывает ветеринарные синбиотики: S. boulardii + FOS в саше 1 г. Стабильность подтверждена тестами.",
    "meta.title.about":        "О компании · ВетБиом",
    "meta.desc.about":         "BIOMA LAB — R&D-компания в области ветеринарных синбиотиков. Москва, Россия. Регистрация ФНС, ОКВЭД 72.19 (научные исследования).",
    "meta.title.development":  "Разработка продукта · ВетБиом",
    "meta.desc.development":   "Этапы разработки ветеринарного синбиотика на основе S. boulardii: выбор штамма, активность воды, барьерная упаковка, тесты стабильности.",
    "meta.title.knowledge":    "База знаний о S. boulardii · ВетБиом",
    "meta.desc.knowledge":     "Систематизированные данные о применении S. boulardii в ветеринарии. Открытые материалы для ветеринаров, фермеров и владельцев животных.",
    "meta.title.partners":     "Партнёрам и поставщикам · ВетБиом",
    "meta.desc.partners":      "Закупаем сырьё для ветеринарных синбиотиков: S. boulardii, FOS, бактериофаги. Требования, контакты для поставщиков.",

    /* Главная */
    "home.hero.eyebrow":  "R&D · Ветеринарные синбиотики",
    "home.hero.title":    "Ветеринарные синбиотики:<br/>стабильность доказана тестом",
    "home.hero.subtitle": "Разрабатываем сухие формы пробиотиков для животных на основе Saccharomyces boulardii и FOS. Открыто публикуем этапы работы и результаты тестов стабильности.",
    "home.hero.cta1":     "Процесс разработки",
    "home.hero.cta2":     "Партнёрам",

    "home.anchors.eyebrow":   "Что мы делаем",
    "home.anchor1.title":     "Кто мы и почему это важно",
    "home.anchor1.text":      "R&D-компания, сфокусированная на одной задаче: стабильный ветеринарный синбиотик с подтверждённым КОЕ к концу срока годности.",
    "home.anchor1.link":      "О компании",
    "home.anchor2.title":     "Как мы создаём продукт",
    "home.anchor2.text":      "Этапы разработки от выбора штамма до программы стабильности — деловая прозрачность для партнёров и ветеринаров.",
    "home.anchor2.link":      "К процессу разработки",
    "home.anchor3.title":     "Сырьё и поставщики",
    "home.anchor3.text":      "Открытая спецификация на S. boulardii, FOS, бактериофаги и упаковочные материалы для поставщиков из Китая и других стран.",
    "home.anchor3.link":      "К разделу для партнёров",

    "home.reports.eyebrow":   "Актуальные результаты",
    "home.reports.title":     "Публичные отчёты о ходе разработки",
    "home.reports.subtitle":  "Мы не публикуем личные заметки. Мы публикуем результаты этапов, чтобы партнёры и ветеринары видели: продукт создаётся на основе данных.",
    "home.reports.all":       "Все материалы базы знаний →",

    /* О компании */
    "about.hero.eyebrow":     "О компании",
    "about.hero.title":       "R&D-компания в области ветеринарных синбиотиков",
    "about.block1.title":     "Компания",
    "about.block2.title":     "Специализация",
    "about.block2.text":      "Мы решаем конкретную задачу: создать стабильный при комнатной температуре синбиотик для животных в форме саше 1 г. Сочетание Saccharomyces boulardii и ФОС, подтверждённое тестами на выживаемость.",
    "about.block3.title":     "Почему мы это делаем",
    "about.block3.text":      "На рынке ветеринарных пробиотиков мы видим разрыв между заявленными КОЕ на упаковке и реальной выживаемостью штамма к концу срока годности. Часто проблема не в штамме, а в технологии смешивания и упаковки. Мы сфокусировались на этом этапе: активность воды, барьерные свойства материалов, совместимость компонентов. Цель — продукт, чьи характеристики подтверждены тестом, а не только спецификацией.",
    "about.block4.title":     "Руководство",
    "about.block5.title":     "Текущий статус",
    "about.block5.text":      "R&D и тестирование прототипов. Формирование пула поставщиков сырья и упаковочных материалов. Программа стабильности первого прототипа — в активной фазе. Плановый выход на регистрацию: 2027.",

    /* Разработка */
    "dev.hero.eyebrow":       "Разработка продукта",
    "dev.hero.title":         "От выбора штамма до программы стабильности",
    "dev.hero.subtitle":      "Шесть этапов работы над первым прототипом ветеринарного синбиотика. Каждый этап задокументирован, каждое решение обосновано данными.",

    /* Знания */
    "kb.hero.eyebrow":        "База знаний",
    "kb.hero.title":          "S. boulardii в ветеринарии",
    "kb.hero.subtitle":       "Мы собираем и систематизируем данные о применении штамма. Эти материалы — основа нашей разработки. Делаем их открытыми для ветеринаров, фермеров и владельцев животных.",
    "kb.filterAll":           "Все материалы",
    "kb.readMore":            "Читать →",
    "kb.readingTime":         "мин чтения",
    "kb.cta.title":           "Тестируете S. boulardii в клинике?",
    "kb.cta.text":            "Мы разрабатываем продукт на основе S. boulardii и приглашаем ветеринаров к тестированию прототипа на условиях R&D.",
    "kb.cta.btn":             "Связаться",
    "kb.article.back":        "← К базе знаний",
    "kb.article.published":   "Опубликовано",
    "kb.article.share":       "Поделиться",
    "kb.article.placeholder": "Эта статья находится в подготовке. Если вы ветеринар или специалист и хотите получить материалы по этой теме раньше публикации — напишите нам.",

    /* Партнёрам */
    "p.hero.eyebrow":         "Партнёрам и поставщикам",
    "p.hero.title":           "Сырьё, упаковка, тестирование",
    "p.hero.subtitle":        "Раздел для производителей сырья, поставщиков упаковочных материалов, ветеринаров и технологов. Открытая спецификация и прямые контакты.",

    "p.suppliers.title":      "Для поставщиков сырья",
    "p.suppliers.urgent":     "Сейчас активно ищем",
    "p.suppliers.urgent1":    "Saccharomyces boulardii — штамм фарм-категории, активность ≥ 10¹⁰ КОЕ/г",
    "p.suppliers.urgent2":    "FOS (фруктоолигосахариды) — pet-grade, стабильные поставки",
    "p.suppliers.urgent3":    "Бактериофаги — целевые препараты для ветеринарного применения",
    "p.suppliers.also":       "Также интересует",
    "p.suppliers.list1":      "Инулин, ГОС, МОС, β-глюканы, псиллиум",
    "p.suppliers.list2":      "Постбиотики, термоинактивированные штаммы",
    "p.suppliers.list3":      "Ламинированная фольга с EVOH-барьером для саше 1 г",
    "p.suppliers.list4":      "Технологии инкапсуляции",
    "p.suppliers.list5":      "Мальтодекстрин, микрокристаллическая целлюлоза, антислёживатели",
    "p.suppliers.reqs":       "Требования",
    "p.suppliers.reqsText":   "ISO 9001, ISO 22000, HACCP, GMP. CoA на каждую партию. Доступность образцов для R&D-тестов. Опыт экспорта в РФ — преимущество.",
    "p.suppliers.send":       "Предложения направляйте на",

    "p.vet.title":            "Для ветеринаров и технологов",
    "p.vet.text":             "Приглашаем ветеринаров и технологов к тестированию прототипа на условиях R&D-исследования (не для продажи). Условия и протокол — по запросу.",
    "p.vet.contact":          "Запрос на тестирование",

    "p.contact.title":        "Общие контакты",
    "p.contact.text":         "Заполните форму или напишите напрямую. Указывайте, по какому направлению обращаетесь — это ускорит ответ.",

    "form.name":              "Ваше имя",
    "form.company":           "Компания",
    "form.email":             "Email",
    "form.subject":           "Тип обращения",
    "form.subj1":             "Поставщик сырья",
    "form.subj2":             "Ветеринар / технолог",
    "form.subj3":             "Партнёрство",
    "form.subj4":             "Общий вопрос",
    "form.message":           "Сообщение",
    "form.submit":            "Отправить",
    "form.note":              "Отвечаем в течение 1–2 рабочих дней.",

    /* Footer */
    "footer.about":           "BIOMA LAB — R&D-компания в области ветеринарных синбиотиков. Сайт — часть нашей работы: мы документируем процесс разработки, чтобы партнёры и ветеринары видели, как формируется продукт.",
    "footer.legalBlock":      "Юридическая информация",
    "footer.contactBlock":    "Контакты",
    "footer.linksBlock":      "Разделы",
    "footer.copy":            "© 2026 ООО «БИОМА ЛАБ». Все права защищены."
  },

  en: {
    "lang.code": "en-US",

    "nav.home":         "Home",
    "nav.about":        "About",
    "nav.development":  "Development",
    "nav.knowledge":    "Knowledge Base",
    "nav.partners":     "Partners",

    "meta.title.home":         "VetBiom — veterinary synbiotics based on S. boulardii",
    "meta.desc.home":          "BIOMA LAB R&D company develops veterinary synbiotics: S. boulardii + FOS in 1 g sachets. Stability proven through testing.",
    "meta.title.about":        "About · VetBiom",
    "meta.desc.about":         "BIOMA LAB — R&D company in veterinary synbiotics. Moscow, Russia. Registered with Russian Federal Tax Service. OKVED 72.19 (scientific research).",
    "meta.title.development":  "Product Development · VetBiom",
    "meta.desc.development":   "Veterinary synbiotic development stages based on S. boulardii: strain selection, water activity, barrier packaging, stability tests.",
    "meta.title.knowledge":    "S. boulardii Knowledge Base · VetBiom",
    "meta.desc.knowledge":     "Systematized data on S. boulardii application in veterinary medicine. Open materials for vets, farmers and pet owners.",
    "meta.title.partners":     "For Partners & Suppliers · VetBiom",
    "meta.desc.partners":      "We source raw materials for veterinary synbiotics: S. boulardii, FOS, bacteriophages. Requirements and contacts for suppliers.",

    /* Home */
    "home.hero.eyebrow":  "R&D · Veterinary synbiotics",
    "home.hero.title":    "Veterinary synbiotics:<br/>stability proven through testing",
    "home.hero.subtitle": "We develop dry-form probiotics for animals based on Saccharomyces boulardii and FOS. We openly publish development stages and stability test results.",
    "home.hero.cta1":     "Development process",
    "home.hero.cta2":     "For Suppliers",

    "home.anchors.eyebrow":   "What we do",
    "home.anchor1.title":     "Who we are and why it matters",
    "home.anchor1.text":      "An R&D company focused on a single task: a stable veterinary synbiotic with verified CFU through end of shelf life.",
    "home.anchor1.link":      "About the company",
    "home.anchor2.title":     "How we create the product",
    "home.anchor2.text":      "Development stages from strain selection to the stability programme — business transparency for partners and veterinarians.",
    "home.anchor2.link":      "To the development process",
    "home.anchor3.title":     "Raw materials and suppliers",
    "home.anchor3.text":      "Open specification for S. boulardii, FOS, bacteriophages and packaging materials for suppliers from China and other countries.",
    "home.anchor3.link":      "To the partners section",

    "home.reports.eyebrow":   "Latest results",
    "home.reports.title":     "Public reports on development progress",
    "home.reports.subtitle":  "We don't publish personal notes. We publish stage results so partners and veterinarians can see: the product is built on data.",
    "home.reports.all":       "All knowledge base materials →",

    /* About */
    "about.hero.eyebrow":     "About",
    "about.hero.title":       "R&D company in veterinary synbiotics",
    "about.block1.title":     "Company",
    "about.block2.title":     "Specialization",
    "about.block2.text":      "We solve a concrete problem: create a room-temperature stable synbiotic for animals in 1 g sachet format. Combination of Saccharomyces boulardii and FOS, verified by viability testing.",
    "about.block3.title":     "Why we do this",
    "about.block3.text":      "In the veterinary probiotics market we see a gap between CFU claims on the label and the actual strain viability at the end of shelf life. Often the issue is not the strain itself, but the mixing technology and packaging. We focused on this stage: water activity, barrier properties of materials, component compatibility. Our goal — a product whose characteristics are proven by test, not just by specification.",
    "about.block4.title":     "Leadership",
    "about.block5.title":     "Current status",
    "about.block5.text":      "R&D and prototype testing. Building a pool of suppliers for raw materials and packaging. The first prototype stability programme is in active phase. Planned registration: 2027.",

    /* Dev */
    "dev.hero.eyebrow":       "Product development",
    "dev.hero.title":         "From strain selection to stability programme",
    "dev.hero.subtitle":      "Six stages of work on the first veterinary synbiotic prototype. Every stage is documented, every decision is data-driven.",

    /* KB */
    "kb.hero.eyebrow":        "Knowledge base",
    "kb.hero.title":          "S. boulardii in veterinary medicine",
    "kb.hero.subtitle":       "We collect and systematize data on strain application. These materials form the foundation of our development. We make them open for veterinarians, farmers and pet owners.",
    "kb.filterAll":           "All materials",
    "kb.readMore":            "Read →",
    "kb.readingTime":         "min read",
    "kb.cta.title":           "Testing S. boulardii in your clinic?",
    "kb.cta.text":            "We develop a product based on S. boulardii and invite veterinarians to test the prototype under R&D conditions.",
    "kb.cta.btn":             "Contact us",
    "kb.article.back":        "← Back to knowledge base",
    "kb.article.published":   "Published",
    "kb.article.share":       "Share",
    "kb.article.placeholder": "This article is in preparation. If you're a veterinarian or specialist and would like to receive materials on this topic earlier — please contact us.",

    /* Partners */
    "p.hero.eyebrow":         "For Partners & Suppliers",
    "p.hero.title":           "Raw materials, packaging, testing",
    "p.hero.subtitle":        "Section for raw material producers, packaging suppliers, veterinarians and technologists. Open specification and direct contacts.",

    "p.suppliers.title":      "For raw material suppliers",
    "p.suppliers.urgent":     "Currently sourcing — priority",
    "p.suppliers.urgent1":    "Saccharomyces boulardii — pharmaceutical-grade strain, activity ≥ 10¹⁰ CFU/g",
    "p.suppliers.urgent2":    "FOS (fructooligosaccharides) — pet-grade, stable supply",
    "p.suppliers.urgent3":    "Bacteriophages — targeted preparations for veterinary applications",
    "p.suppliers.also":       "Also interested in",
    "p.suppliers.list1":      "Inulin, GOS, MOS, β-glucans, psyllium",
    "p.suppliers.list2":      "Postbiotics, heat-killed strains",
    "p.suppliers.list3":      "Laminated foil with EVOH barrier for 1 g sachets",
    "p.suppliers.list4":      "Encapsulation technologies",
    "p.suppliers.list5":      "Maltodextrin, microcrystalline cellulose, anti-caking agents",
    "p.suppliers.reqs":       "Requirements",
    "p.suppliers.reqsText":   "ISO 9001, ISO 22000, HACCP, GMP. CoA per batch. Sample availability for R&D testing. Export experience to Russian Federation — a plus.",
    "p.suppliers.send":       "Send proposals to",

    "p.vet.title":            "For veterinarians and technologists",
    "p.vet.text":             "We invite veterinarians and technologists to test the prototype under R&D study conditions (not for sale). Terms and protocol — upon request.",
    "p.vet.contact":          "Testing request",

    "p.contact.title":        "General contacts",
    "p.contact.text":         "Fill out the form or reach out directly. Please indicate the type of inquiry — this speeds up the response.",

    "form.name":              "Your name",
    "form.company":           "Company",
    "form.email":             "Email",
    "form.subject":           "Inquiry type",
    "form.subj1":             "Raw material supplier",
    "form.subj2":             "Veterinarian / technologist",
    "form.subj3":             "Partnership",
    "form.subj4":             "General question",
    "form.message":           "Message",
    "form.submit":            "Send",
    "form.note":              "We respond within 1–2 business days.",

    /* Footer */
    "footer.about":           "BIOMA LAB — R&D company in veterinary synbiotics. The website is part of our work: we document the development process so that partners and veterinarians can see how the product takes shape.",
    "footer.legalBlock":      "Legal information",
    "footer.contactBlock":    "Contacts",
    "footer.linksBlock":      "Sections",
    "footer.copy":            "© 2026 BIOMA LAB LLC. All rights reserved."
  },

  zh: {
    "lang.code": "zh-CN",

    "nav.home":         "首页",
    "nav.about":        "关于公司",
    "nav.development":  "产品研发",
    "nav.knowledge":    "知识库",
    "nav.partners":     "合作伙伴",

    "meta.title.home":         "VetBiom — 基于 S. boulardii 的兽用合生元",
    "meta.desc.home":          "BIOMA LAB 研发公司开发兽用合生元:1 克小袋装的 S. boulardii + FOS。稳定性经测试证实。",
    "meta.title.about":        "关于公司 · VetBiom",
    "meta.desc.about":         "BIOMA LAB — 兽用合生元领域的研发公司。俄罗斯莫斯科。在俄罗斯联邦税务局注册。OKVED 72.19(科学研究)。",
    "meta.title.development":  "产品研发 · VetBiom",
    "meta.desc.development":   "基于 S. boulardii 的兽用合生元研发阶段:菌株选择、水分活度、阻隔包装、稳定性测试。",
    "meta.title.knowledge":    "S. boulardii 知识库 · VetBiom",
    "meta.desc.knowledge":     "兽医领域 S. boulardii 应用的系统化数据。面向兽医、农场主和宠物主人的开放资料。",
    "meta.title.partners":     "合作伙伴与供应商 · VetBiom",
    "meta.desc.partners":      "我们采购兽用合生元原料:S. boulardii、FOS、噬菌体。供应商要求与联系方式。",

    /* Home */
    "home.hero.eyebrow":  "研发 · 兽用合生元",
    "home.hero.title":    "兽用合生元:<br/>稳定性经测试证实",
    "home.hero.subtitle": "我们开发基于 Saccharomyces boulardii 和 FOS 的动物用干燥益生菌制剂。我们公开发布研发阶段和稳定性测试结果。",
    "home.hero.cta1":     "研发流程",
    "home.hero.cta2":     "供应商合作",

    "home.anchors.eyebrow":   "我们的工作",
    "home.anchor1.title":     "我们是谁,为什么重要",
    "home.anchor1.text":      "一家专注于单一任务的研发公司:在整个保质期内 CFU 经验证的稳定兽用合生元。",
    "home.anchor1.link":      "关于公司",
    "home.anchor2.title":     "我们如何打造产品",
    "home.anchor2.text":      "从菌株选择到稳定性项目的研发阶段——为合作伙伴和兽医提供商业透明度。",
    "home.anchor2.link":      "前往研发流程",
    "home.anchor3.title":     "原料与供应商",
    "home.anchor3.text":      "面向中国及其他国家供应商的 S. boulardii、FOS、噬菌体和包装材料公开规格。",
    "home.anchor3.link":      "前往合作伙伴版块",

    "home.reports.eyebrow":   "最新结果",
    "home.reports.title":     "研发进展公开报告",
    "home.reports.subtitle":  "我们不发布个人笔记。我们发布阶段结果,让合作伙伴和兽医看到:产品建立在数据基础上。",
    "home.reports.all":       "查看所有知识库资料 →",

    /* About */
    "about.hero.eyebrow":     "关于公司",
    "about.hero.title":       "兽用合生元领域的研发公司",
    "about.block1.title":     "公司",
    "about.block2.title":     "专业方向",
    "about.block2.text":      "我们解决一个具体问题:打造 1 克小袋装、室温稳定的动物合生元产品。Saccharomyces boulardii 与 FOS 的组合,经活力测试验证。",
    "about.block3.title":     "我们为什么这样做",
    "about.block3.text":      "在兽用益生菌市场,我们看到标签上声明的 CFU 与保质期末实际菌株活力之间存在差距。问题往往不在于菌株本身,而在于混合工艺和包装。我们专注于这一阶段:水分活度、材料的阻隔性能、组分兼容性。我们的目标是产品的特性由测试证明,而不仅仅是由规格说明。",
    "about.block4.title":     "领导团队",
    "about.block5.title":     "当前状态",
    "about.block5.text":      "研发和原型测试。建立原料和包装供应商池。第一个原型的稳定性项目处于活跃阶段。计划注册时间:2027 年。",

    /* Dev */
    "dev.hero.eyebrow":       "产品研发",
    "dev.hero.title":         "从菌株选择到稳定性项目",
    "dev.hero.subtitle":      "首个兽用合生元原型工作的六个阶段。每个阶段都有文档记录,每个决策都基于数据。",

    /* KB */
    "kb.hero.eyebrow":        "知识库",
    "kb.hero.title":          "兽医领域中的 S. boulardii",
    "kb.hero.subtitle":       "我们收集和系统化菌株应用的数据。这些资料构成我们研发的基础。我们向兽医、农场主和宠物主人开放。",
    "kb.filterAll":           "所有资料",
    "kb.readMore":            "阅读 →",
    "kb.readingTime":         "分钟阅读",
    "kb.cta.title":           "在您的诊所测试 S. boulardii?",
    "kb.cta.text":            "我们正在开发基于 S. boulardii 的产品,邀请兽医在研发条件下测试原型。",
    "kb.cta.btn":             "联系我们",
    "kb.article.back":        "← 返回知识库",
    "kb.article.published":   "发布于",
    "kb.article.share":       "分享",
    "kb.article.placeholder": "本文正在准备中。如果您是兽医或专业人士,希望提前获取本主题的资料 — 请联系我们。",

    /* Partners */
    "p.hero.eyebrow":         "合作伙伴与供应商",
    "p.hero.title":           "原料、包装、测试",
    "p.hero.subtitle":        "面向原料生产商、包装供应商、兽医和工艺师的版块。开放规格和直接联系方式。",

    "p.suppliers.title":      "原料供应商",
    "p.suppliers.urgent":     "正在采购 — 优先",
    "p.suppliers.urgent1":    "Saccharomyces boulardii — 药品级菌株,活力 ≥ 10¹⁰ CFU/g",
    "p.suppliers.urgent2":    "FOS(果寡糖)— 宠物级,稳定供应",
    "p.suppliers.urgent3":    "噬菌体 — 用于兽医应用的靶向制剂",
    "p.suppliers.also":       "同样感兴趣",
    "p.suppliers.list1":      "菊粉、GOS、MOS、β-葡聚糖、车前子壳",
    "p.suppliers.list2":      "后生元、灭活菌株",
    "p.suppliers.list3":      "带 EVOH 阻隔的 1 克小袋复合铝箔",
    "p.suppliers.list4":      "包埋封装技术",
    "p.suppliers.list5":      "麦芽糊精、微晶纤维素、抗结块剂",
    "p.suppliers.reqs":       "要求",
    "p.suppliers.reqsText":   "ISO 9001、ISO 22000、HACCP、GMP。每批次 CoA。可提供研发测试样品。具有对俄罗斯联邦出口经验者优先。",
    "p.suppliers.send":       "提案请发送至",

    "p.vet.title":            "兽医与工艺师",
    "p.vet.text":             "我们邀请兽医和工艺师在研发研究条件下(非销售)测试原型。条件和方案可应要求提供。",
    "p.vet.contact":          "测试申请",

    "p.contact.title":        "通用联系方式",
    "p.contact.text":         "填写表单或直接联系。请注明咨询类型 — 这将加快回复速度。",

    "form.name":              "您的姓名",
    "form.company":           "公司",
    "form.email":             "邮箱",
    "form.subject":           "咨询类型",
    "form.subj1":             "原料供应商",
    "form.subj2":             "兽医 / 工艺师",
    "form.subj3":             "合作",
    "form.subj4":             "一般问题",
    "form.message":           "信息",
    "form.submit":            "发送",
    "form.note":              "我们将在 1–2 个工作日内回复。",

    /* Footer */
    "footer.about":           "BIOMA LAB — 兽用合生元领域的研发公司。本网站是我们工作的一部分:我们记录研发过程,让合作伙伴和兽医看到产品是如何成型的。",
    "footer.legalBlock":      "法律信息",
    "footer.contactBlock":    "联系方式",
    "footer.linksBlock":      "栏目",
    "footer.copy":            "© 2026 BIOMA LAB LLC. 版权所有。"
  }
};
