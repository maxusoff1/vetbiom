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
  wechat_display:    'Project Manager',
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

/* === 4. ARTICLES_INDEX: индекс статей базы знаний ===
   Каждой статье соответствует файл в папке articles/[slug].md (RU)
   articles/[slug].en.md (EN), articles/[slug].zh.md (ZH)
   Чтобы добавить новую статью:
     1. Положите [slug].md, [slug].en.md, [slug].zh.md в articles/
     2. Добавьте запись в этот массив
*/
const ARTICLES_INDEX = [
  {
    slug: '01-polza-s-boulardii',
    title: { ru: 'В чём польза Saccharomyces boulardii для животных', en: 'Benefits of Saccharomyces boulardii for Animals', zh: 'Saccharomyces boulardii 对动物的益处' },
    description: { ru: 'Механизмы действия пробиотических дрожжей, применение при диарее, антибиотикотерапии и стрессовых состояниях у животных-компаньонов.', en: 'Mechanisms of action of probiotic yeast, use in diarrhea, antibiotic therapy, and stress conditions in companion animals.', zh: '益生酵母的作用机制，以及在伴侣动物的腹泻、抗生素治疗和应激状态下的应用。' },
    category: { ru: 'Основы', en: 'Basics', zh: '基础' },
    date: '2026-06-01',
    reading_time: { ru: 5, en: 5, zh: 5 },
    tags: { ru: ['s.boulardii', 'обзор', 'механизм'], en: ['s.boulardii', 'overview', 'mechanism'], zh: ['布拉氏酵母', '综述', '机制'] }
  },
  {
    slug: '02-s-boulardii-diareya-koshek',
    title: { ru: 'S. boulardii при диарее у кошек', en: 'S. boulardii for Diarrhea in Cats', zh: 'S. boulardii 用于猫腹泻' },
    description: { ru: 'Применение пробиотических дрожжей у кошек: дозировки, длительность курса, особенности при разных типах диареи.', en: 'Use of probiotic yeast in cats: dosages, course duration, specifics for different types of diarrhea.', zh: '猫用益生酵母的使用方法：剂量、疗程、不同类型腹泻的注意事项。' },
    category: { ru: 'Кошки', en: 'Cats', zh: '猫' },
    date: '2026-06-05',
    reading_time: { ru: 4, en: 4, zh: 4 },
    tags: { ru: ['кошки', 'диарея'], en: ['cats', 'diarrhea'], zh: ['猫', '腹泻'] }
  },
  {
    slug: '03-diareya-koshek',
    title: { ru: 'Диарея у кошек: классификация и подходы', en: 'Diarrhea in Cats: Classification and Approaches', zh: '猫腹泻：分类与处理方法' },
    description: { ru: 'Причины диареи у кошек, классификация по продолжительности и тяжести, когда нужен ветеринарный осмотр.', en: 'Causes of diarrhea in cats, classification by duration and severity, when veterinary examination is needed.', zh: '猫腹泻的原因、按持续时间和严重程度的分类、何时需要兽医检查。' },
    category: { ru: 'Кошки', en: 'Cats', zh: '猫' },
    date: '2026-06-08',
    reading_time: { ru: 6, en: 6, zh: 6 },
    tags: { ru: ['кошки', 'диарея', 'клиника'], en: ['cats', 'diarrhea', 'clinical'], zh: ['猫', '腹泻', '临床'] }
  },
  {
    slug: '04-s-boulardii-diareya-sobak',
    title: { ru: 'S. boulardii при диарее у собак', en: 'S. boulardii for Diarrhea in Dogs', zh: 'S. boulardii 用于狗腹泻' },
    description: { ru: 'Клинические данные по применению S. boulardii у собак с острой и хронической энтеропатией.', en: 'Clinical data on S. boulardii use in dogs with acute and chronic enteropathy.', zh: 'S. boulardii 用于急性和慢性肠病犬的临床数据。' },
    category: { ru: 'Собаки', en: 'Dogs', zh: '狗' },
    date: '2026-06-12',
    reading_time: { ru: 7, en: 7, zh: 7 },
    tags: { ru: ['собаки', 'диарея'], en: ['dogs', 'diarrhea'], zh: ['狗', '腹泻'] }
  },
  {
    slug: '05-s-boulardii-antibiotiki',
    title: { ru: 'Почему S. boulardii дают вместе с антибиотиками', en: 'Why S. boulardii Is Given with Antibiotics', zh: '为什么 S. boulardii 与抗生素一起使用' },
    description: { ru: 'Дрожжевая природа S. boulardii обеспечивает устойчивость к антибиотикам — это основа стратегии профилактики антибиотик-ассоциированной диареи.', en: 'The yeast nature of S. boulardii provides antibiotic resistance — the foundation of preventing antibiotic-associated diarrhea.', zh: 'S. boulardii 的酵母特性使其具有抗生素耐药性——这是预防抗生素相关性腹泻的基础策略。' },
    category: { ru: 'Антибиотики', en: 'Antibiotics', zh: '抗生素' },
    date: '2026-06-15',
    reading_time: { ru: 6, en: 6, zh: 6 },
    tags: { ru: ['антибиотики', 'AAD'], en: ['antibiotics', 'AAD'], zh: ['抗生素', 'AAD'] }
  },
  {
    slug: '06-enterol-ne-vyhod',
    title: { ru: 'Энтерол — не выход для животных: что не так с человеческим препаратом', en: 'Enterol Is Not the Answer for Animals: What\'s Wrong with Human Products', zh: 'Enterol 并非动物之选：人用制剂的问题所在' },
    description: { ru: 'Почему адаптация человеческих препаратов S. boulardii для животных — компромисс по дозировке, форме и составу.', en: 'Why adapting human S. boulardii products for animals is a compromise in dosage, form, and composition.', zh: '为什么将人用 S. boulardii 制剂用于动物在剂量、剂型和成分上都是妥协。' },
    category: { ru: 'Сравнение', en: 'Comparison', zh: '比较' },
    date: '2026-06-18',
    reading_time: { ru: 5, en: 5, zh: 5 },
    tags: { ru: ['энтерол', 'сравнение'], en: ['enterol', 'comparison'], zh: ['Enterol', '比较'] }
  },
  {
    slug: '07-veterinarnyj-vs-chelovecheskij',
    title: { ru: 'Почему для животных лучше ветеринарный S. boulardii', en: 'Why Veterinary S. boulardii Is Better for Animals', zh: '为什么兽用 S. boulardii 更适合动物' },
    description: { ru: 'Преимущества формы и состава, разработанных под видоспецифичные потребности кошек и собак.', en: 'Advantages of formulations designed for the species-specific needs of cats and dogs.', zh: '针对猫狗物种特异性需求设计的剂型和成分优势。' },
    category: { ru: 'Сравнение', en: 'Comparison', zh: '比较' },
    date: '2026-06-20',
    reading_time: { ru: 4, en: 4, zh: 4 },
    tags: { ru: ['ветеринарная форма'], en: ['veterinary form'], zh: ['兽用剂型'] }
  },
  {
    slug: '08-sashe-vs-kapsuly',
    title: { ru: 'Почему саше удобнее капсул для кошек и собак', en: 'Why Sachets Are More Convenient Than Capsules for Cats and Dogs', zh: '为什么小袋比胶囊更适合猫狗' },
    description: { ru: 'Анализ форматов выпуска: точность дозирования, гигиена, совместимость с кормом, удобство для владельца.', en: 'Analysis of product formats: dosing accuracy, hygiene, compatibility with food, owner convenience.', zh: '产品形态分析：剂量精确度、卫生性、与食物的兼容性、主人便利性。' },
    category: { ru: 'Форматы', en: 'Formats', zh: '剂型' },
    date: '2026-06-22',
    reading_time: { ru: 5, en: 5, zh: 5 },
    tags: { ru: ['саше', 'формат'], en: ['sachet', 'format'], zh: ['小袋', '剂型'] }
  },
  {
    slug: '09-dozirovka-po-vesu',
    title: { ru: 'Как дозировать S. boulardii по весу животного', en: 'How to Dose S. boulardii by Animal Weight', zh: '如何按动物体重计算 S. boulardii 剂量' },
    description: { ru: 'Таблицы доз для кошек и собак разных весовых категорий с привязкой к КОЕ/кг массы тела.', en: 'Dose tables for cats and dogs of different weight categories based on CFU/kg body weight.', zh: '基于 CFU/kg 体重的不同体重猫狗剂量表。' },
    category: { ru: 'Дозирование', en: 'Dosing', zh: '剂量' },
    date: '2026-06-25',
    reading_time: { ru: 7, en: 7, zh: 7 },
    tags: { ru: ['дозировка', 'кошки', 'собаки'], en: ['dosing', 'cats', 'dogs'], zh: ['剂量', '猫', '狗'] }
  },
  {
    slug: '10-s-boulardii-fos',
    title: { ru: 'S. boulardii + FOS: зачем нужна комбинация', en: 'S. boulardii + FOS: Why the Combination Matters', zh: 'S. boulardii + FOS：为何需要这种组合' },
    description: { ru: 'Синбиотический принцип: как ФОС служит селективным субстратом и усиливает эффект пробиотика.', en: 'The synbiotic principle: how FOS serves as a selective substrate and enhances the probiotic effect.', zh: '合生元原理：FOS 如何作为选择性底物增强益生菌效果。' },
    category: { ru: 'Синбиотик', en: 'Synbiotic', zh: '合生元' },
    date: '2026-06-28',
    reading_time: { ru: 8, en: 8, zh: 8 },
    tags: { ru: ['ФОС', 'синбиотик'], en: ['FOS', 'synbiotic'], zh: ['FOS', '合生元'] }
  },
  {
    slug: '11-smena-korma',
    title: { ru: 'S. boulardii при смене корма', en: 'S. boulardii During Diet Changes', zh: 'S. boulardii 在换粮期间的使用' },
    description: { ru: 'Поддержка кишечника в период адаптации к новому рациону — схема применения и ожидаемые эффекты.', en: 'Gut support during adaptation to a new diet — dosing schedule and expected effects.', zh: '适应新日粮期间的肠道支持——使用方案和预期效果。' },
    category: { ru: 'Питание', en: 'Nutrition', zh: '营养' },
    date: '2026-07-01',
    reading_time: { ru: 6, en: 6, zh: 6 },
    tags: { ru: ['смена корма'], en: ['diet change'], zh: ['换粮'] }
  },
  {
    slug: '12-stressovaya-diareya',
    title: { ru: 'S. boulardii при стрессовой диарее', en: 'S. boulardii for Stress-Induced Diarrhea', zh: 'S. boulardii 用于应激性腹泻' },
    description: { ru: 'Транспортировка, переезд, новые условия — применение пробиотика для коррекции стресс-индуцированных нарушений.', en: 'Transport, relocation, new environments — probiotic use for managing stress-induced GI disturbances.', zh: '运输、搬迁、新环境——益生菌用于管理应激引起的胃肠道紊乱。' },
    category: { ru: 'Стресс', en: 'Stress', zh: '应激' },
    date: '2026-07-04',
    reading_time: { ru: 6, en: 6, zh: 6 },
    tags: { ru: ['стресс'], en: ['stress'], zh: ['应激'] }
  },
  {
    slug: '13-kishechnyj-barjer',
    title: { ru: 'Как S. boulardii поддерживает кишечный барьер', en: 'How S. boulardii Supports the Intestinal Barrier', zh: 'S. boulardii 如何支持肠道屏障' },
    description: { ru: 'Механизмы укрепления плотных контактов, продукция бутирата, защита от транслокации патогенов.', en: 'Mechanisms of tight junction reinforcement, butyrate production, protection against pathogen translocation.', zh: '紧密连接的强化机制、丁酸盐产生、防止病原体易位。' },
    category: { ru: 'Механизмы', en: 'Mechanisms', zh: '机制' },
    date: '2026-07-07',
    reading_time: { ru: 8, en: 8, zh: 8 },
    tags: { ru: ['кишечный барьер', 'механизм'], en: ['intestinal barrier', 'mechanism'], zh: ['肠道屏障', '机制'] }
  },
  {
    slug: '14-otlichie-ot-bakterial',
    title: { ru: 'Чем S. boulardii отличается от бактериальных пробиотиков', en: 'How S. boulardii Differs from Bacterial Probiotics', zh: 'S. boulardii 与细菌益生菌的区别' },
    description: { ru: 'Дрожжевая природа: устойчивость к антибиотикам, температуре, желудочной кислоте — ключевые отличия.', en: 'Yeast nature: antibiotic resistance, temperature tolerance, stomach acid resistance — key differences.', zh: '酵母特性：抗生素耐药性、耐温性、耐胃酸性——关键区别。' },
    category: { ru: 'Сравнение', en: 'Comparison', zh: '比较' },
    date: '2026-07-10',
    reading_time: { ru: 6, en: 6, zh: 6 },
    tags: { ru: ['сравнение', 'дрожжи'], en: ['comparison', 'yeast'], zh: ['比较', '酵母'] }
  },
  {
    slug: '15-kotyata-schenki',
    title: { ru: 'S. boulardii у котят и щенков', en: 'S. boulardii for Kittens and Puppies', zh: 'S. boulardii 用于幼猫和幼犬' },
    description: { ru: 'Особенности применения у молодых животных с формирующимся микробиомом, скорректированные дозы.', en: 'Special considerations for young animals with developing microbiomes, adjusted dosages.', zh: '针对微生物群正在形成的幼年动物的特殊考虑和调整剂量。' },
    category: { ru: 'Котята / щенки', en: 'Kittens / Puppies', zh: '幼猫 / 幼犬' },
    date: '2026-07-13',
    reading_time: { ru: 5, en: 5, zh: 5 },
    tags: { ru: ['котята', 'щенки'], en: ['kittens', 'puppies'], zh: ['幼猫', '幼犬'] }
  },
  {
    slug: '16-pozhilye',
    title: { ru: 'S. boulardii у пожилых животных', en: 'S. boulardii for Senior Animals', zh: 'S. boulardii 用于老年动物' },
    description: { ru: 'Поддержка ЖКТ при возрастных изменениях микробиома, хронических заболеваниях и сниженном иммунитете.', en: 'GI support during age-related microbiome changes, chronic conditions, and reduced immunity.', zh: '在与年龄相关的微生物组变化、慢性疾病和免疫力下降期间的胃肠道支持。' },
    category: { ru: 'Гериатрия', en: 'Geriatrics', zh: '老年医学' },
    date: '2026-07-16',
    reading_time: { ru: 6, en: 6, zh: 6 },
    tags: { ru: ['пожилые'], en: ['senior'], zh: ['老年'] }
  },
  {
    slug: '17-ne-zamena-veterinara',
    title: { ru: 'Когда S. boulardii не заменяет ветеринара', en: 'When S. boulardii Does Not Replace a Veterinarian', zh: '何时 S. boulardii 不能替代兽医' },
    description: { ru: 'Тревожные симптомы и клинические ситуации, при которых пробиотик не достаточен и требуется ветеринарная помощь.', en: 'Warning signs and clinical situations where a probiotic alone is insufficient and veterinary care is required.', zh: '仅靠益生菌不足、需要兽医护理的警示信号和临床情况。' },
    category: { ru: 'Безопасность', en: 'Safety', zh: '安全' },
    date: '2026-07-19',
    reading_time: { ru: 4, en: 4, zh: 4 },
    tags: { ru: ['безопасность', 'тревожные симптомы'], en: ['safety', 'warning signs'], zh: ['安全', '警示信号'] }
  },
  {
    slug: '18-kak-ponyat-pomogaet',
    title: { ru: 'Как понять, что S. boulardii помогает', en: 'How to Tell S. boulardii Is Working', zh: '如何判断 S. boulardii 是否有效' },
    description: { ru: 'Объективные критерии эффективности: консистенция стула, частота, аппетит, активность животного.', en: 'Objective effectiveness criteria: stool consistency, frequency, appetite, animal activity.', zh: '客观有效性标准：粪便稠度、频率、食欲、动物活动水平。' },
    category: { ru: 'Оценка эффекта', en: 'Effect Assessment', zh: '效果评估' },
    date: '2026-07-22',
    reading_time: { ru: 7, en: 7, zh: 7 },
    tags: { ru: ['эффективность'], en: ['effectiveness'], zh: ['效果'] }
  },
  {
    slug: '19-s-sorbentami',
    title: { ru: 'Можно ли давать S. boulardii вместе с сорбентами', en: 'Can S. boulardii Be Given with Adsorbents', zh: 'S. boulardii 能否与吸附剂一起使用' },
    description: { ru: 'Совместимость с активированным углём, смектитом и другими сорбентами — интервалы и схема приёма.', en: 'Compatibility with activated charcoal, smectite, and other adsorbents — intervals and dosing schedule.', zh: '与活性炭、蒙脱石及其他吸附剂的兼容性——间隔时间和服用方案。' },
    category: { ru: 'Совместимость', en: 'Compatibility', zh: '兼容性' },
    date: '2026-07-25',
    reading_time: { ru: 10, en: 10, zh: 10 },
    tags: { ru: ['сорбенты', 'совместимость'], en: ['adsorbents', 'compatibility'], zh: ['吸附剂', '兼容性'] }
  },
  {
    slug: '20-posle-antibiotikov',
    title: { ru: 'S. boulardii при восстановлении после антибиотиков', en: 'S. boulardii for Recovery After Antibiotics', zh: 'S. boulardii 用于抗生素后恢复' },
    description: { ru: 'Протокол поддержки микробиоты в постантибиотический период: длительность, дозы, ожидаемые сроки восстановления.', en: 'Microbiota support protocol in the post-antibiotic period: duration, dosages, expected recovery timeline.', zh: '抗生素后时期的微生物群支持方案：持续时间、剂量、预期恢复时间。' },
    category: { ru: 'Восстановление', en: 'Recovery', zh: '恢复' },
    date: '2026-07-28',
    reading_time: { ru: 6, en: 6, zh: 6 },
    tags: { ru: ['восстановление', 'антибиотики'], en: ['recovery', 'antibiotics'], zh: ['恢复', '抗生素'] }
  },
  {
    slug: '21-kak-vybrat',
    title: { ru: 'Как выбрать S. boulardii для кошек и собак', en: 'How to Choose S. boulardii for Cats and Dogs', zh: '如何为猫狗选择 S. boulardii' },
    description: { ru: 'Что смотреть на упаковке: штамм, активность, форма, состав, регистрационный статус, доказательная база.', en: 'What to look for on the label: strain, potency, form, composition, registration status, evidence base.', zh: '包装上应查看的内容：菌株、效力、剂型、成分、注册状态、证据基础。' },
    category: { ru: 'Выбор', en: 'Selection', zh: '选择' },
    date: '2026-07-31',
    reading_time: { ru: 4, en: 4, zh: 4 },
    tags: { ru: ['выбор', 'упаковка'], en: ['selection', 'label'], zh: ['选择', '包装'] }
  },
  {
    slug: '22-chastye-oshibki',
    title: { ru: 'Частые ошибки при даче S. boulardii животным', en: 'Common Mistakes When Giving S. boulardii to Animals', zh: '给动物使用 S. boulardii 的常见错误' },
    description: { ru: 'Типичные ошибки владельцев и ветеринаров: смешивание с горячей пищей, нарушение схемы, неподходящая форма.', en: 'Typical owner and veterinarian mistakes: mixing with hot food, schedule violations, wrong form.', zh: '宠物主人和兽医的典型错误：与热食混合、方案违规、剂型不当。' },
    category: { ru: 'Практика', en: 'Practice', zh: '实践' },
    date: '2026-08-03',
    reading_time: { ru: 4, en: 4, zh: 4 },
    tags: { ru: ['ошибки', 'практика'], en: ['mistakes', 'practice'], zh: ['错误', '实践'] }
  },
  {
    slug: '23-faq',
    title: { ru: 'FAQ: популярные вопросы о S. boulardii для животных', en: 'FAQ: Popular Questions About S. boulardii for Animals', zh: 'FAQ：关于 S. boulardii 用于动物的常见问题' },
    description: { ru: 'Ответы на 20 наиболее частых вопросов владельцев и ветеринаров о применении S. boulardii.', en: 'Answers to the 20 most common questions from owners and veterinarians about S. boulardii use.', zh: '宠物主人和兽医关于 S. boulardii 使用最常见的 20 个问题解答。' },
    category: { ru: 'FAQ', en: 'FAQ', zh: 'FAQ' },
    date: '2026-08-06',
    reading_time: { ru: 8, en: 8, zh: 8 },
    tags: { ru: ['FAQ'], en: ['FAQ'], zh: ['常见问题'] }
  },
  {
    slug: '24-poslebioticheskij-effect',
    title: { ru: 'S. boulardii: постбиотические эффекты', en: 'S. boulardii: Postbiotic Effects', zh: 'S. boulardii：后生元效应' },
    description: { ru: 'Метаболиты и пептиды S. boulardii, обладающие самостоятельной активностью даже без живых клеток.', en: 'S. boulardii metabolites and peptides with independent activity even without living cells.', zh: 'S. boulardii 的代谢物和肽类，即使没有活细胞也具有独立活性。' },
    category: { ru: 'Механизмы', en: 'Mechanisms', zh: '机制' },
    date: '2026-08-09',
    reading_time: { ru: 3, en: 3, zh: 3 },
    tags: { ru: ['постбиотик', 'механизм'], en: ['postbiotic', 'mechanism'], zh: ['后生元', '机制'] }
  }
];


/* === 5. I18N: переводы интерфейса === */
const I18N = {
  ru: {
    "lang.code": "ru-RU",

    "nav.home":         "Главная",
    "nav.about":        "О компании",
    "nav.development":  "Разработка",
    "nav.knowledge":    "База знаний",
    "nav.partners":     "Партнёрам",

    "meta.title.home":         "BIOMA LAB — ветеринарные нутрицевтики и синбиотики",
    "meta.desc.home":          "BIOMA LAB: R&D и производство стабильных формул на основе S. boulardii для ветеринарной практики. Эффективность подтверждена протоколами.",
    "meta.title.about":        "О компании · ВетБиом",
    "meta.desc.about":         "BIOMA LAB — R&D-компания в области ветеринарных синбиотиков. Москва, Россия. Регистрация ФНС, ОКВЭД 72.19 (научные исследования).",
    "meta.title.development":  "Разработка продукта · ВетБиом",
    "meta.desc.development":   "Этапы разработки ветеринарного синбиотика на основе S. boulardii: выбор штамма, активность воды, барьерная упаковка, тесты стабильности.",
    "meta.title.knowledge":    "База знаний о S. boulardii · ВетБиом",
    "meta.desc.knowledge":     "Систематизированные данные о применении S. boulardii в ветеринарии. Открытые материалы для ветеринаров, фермеров и владельцев животных.",
    "meta.title.partners":     "Партнёрам и поставщикам · ВетБиом",
    "meta.desc.partners":      "Закупаем сырьё для ветеринарных синбиотиков: S. boulardii, FOS, бактериофаги. Требования, контакты для поставщиков.",

    /* Главная */
    "home.hero.eyebrow":  "BIOMA LAB · Ветеринарные нутрицевтики и синбиотики",
    "home.hero.title":    "Доказательная поддержка здоровья ЖКТ у мелких домашних животных",
    "home.hero.subtitle": "Разрабатываем и производим стабильные формулы на основе <em>Saccharomyces boulardii</em> и пребиотиков. Эффективность подтверждена протоколами, а не маркетингом. Решения для ветеринарной практики, устойчивые к антибиотикам и условиям хранения.",
    "home.hero.cta1":     "Каталог решений",
    "home.hero.cta2":     "Для специалистов",
    "home.hero.meta":     "ООО «БИОМА ЛАБ» · R&D и производство в РФ",

    "home.approach.eyebrow": "Подход",
    "home.approach.title":   "Технология как основа эффективности",
    "home.approach.body":    "<p>В категории пробиотиков и синбиотиков состав на этикетке — лишь половина дела. Критический параметр — сохранность активности от производства до попадания в организм животного. Мы выстраиваем разработку вокруг трёх факторов стабильности:</p><ul><li><strong>Контроль активности воды (a<sub>w</sub>).</strong> Подавление роста контаминирующей микрофлоры без потери жизнеспособности целевых культур.</li><li><strong>Совместимость матрицы.</strong> Подбор компонентов, которые не ингибируют активность пробиотических штаммов в течение всего срока годности.</li><li><strong>Барьерная защита.</strong> Многослойная упаковка с EVOH-слоем, блокирующая кислород и влагу.</li></ul><p>Каждое технологическое решение обосновано данными и верифицировано программой стабильности.</p>",

    "home.applications.eyebrow": "Применение",
    "home.applications.title":   "Решения для клинических задач",

    "home.app1.title": "Антибиотик-ассоциированные состояния",
    "home.app1.text":  "Поддержка микробиома и кишечного барьера на фоне противомикробной терапии. Штаммы, резистентные к действию антибиотиков.",
    "home.app2.title": "Стресс и смена рациона",
    "home.app2.text":  "Профилактика функциональных расстройств ЖКТ при транспортировке, адаптации к новым кормам, выставках.",
    "home.app3.title": "Восстановление после острых состояний",
    "home.app3.text":  "Нормализация пищеварения в период реконвалесценции. Безопасность для котят и щенков.",
    "home.app4.title": "Ежедневная поддержка",
    "home.app4.text":  "Балансировка микробиоты у здоровых животных. Пребиотическая подпитка собственной флоры.",

    "home.rd.eyebrow": "R&D",
    "home.rd.title":   "R&D-стандарты BIOMA LAB",
    "home.rd.body":    "<p>Мы работаем на стыке ветеринарии и биотехнологий. Наша задача — дать рынку продукты, в которых можно быть уверенным.</p><ul><li><strong>Research-backed.</strong> Выбор штаммов, дозировок и форм выпуска опирается на актуальные научные данные и ветеринарные обзоры.</li><li><strong>Верифицируемые данные.</strong> Протоколы стабильности, тесты выживаемости и совместимости доступны по запросу для специалистов.</li><li><strong>Честная коммуникация.</strong> Открыто обсуждаем технические нюансы, границы применимости и ограничения каждой формы. Не обещаем невозможного.</li><li><strong>Соответствие стандартам.</strong> Производство и контроль качества в рамках требований к кормовым добавкам и ветеринарным нутрицевтикам.</li></ul>",

    "home.partnership.eyebrow": "Сотрудничество",
    "home.partnership.title":   "Для ветеринарного сообщества и партнёров",
    "home.partnership.body":    "<p>Работаем напрямую с клиниками, зооаптеками и дистрибьюторами. Обеспечиваем прозрачные условия и техническую поддержку.</p><ul><li><strong>📄 Документация:</strong> Декларации, протоколы, методические рекомендации — доступны до заключения договора.</li><li><strong>🧪 Оценка:</strong> Образцы для клинического тестирования и ознакомления с продуктом.</li><li><strong>⚡ Логистика:</strong> Отгрузка со склада в Москве. Работа через ЭДО. Стабильные поставки.</li><li><strong>🎓 Экспертиза:</strong> Консультации технологов и ветеринарных специалистов по применению и интеграции в схемы.</li></ul>",
    "home.partnership.btn1":    "Связаться с отделом развития",
    "home.partnership.btn2":    "Скачать корпоративную презентацию",

    "home.legal.title":   "Юридическая информация",
    "home.legal.address": "115088, г. Москва, ул. 1-я Машиностроения, д. 7",

    /* О компании */
    "about.hero.title":       "Продукты для животных, созданные по запросам практикующих ветеринаров",
    "about.hero.subtitle":    "Рабочая связка <em>S. boulardii</em> + ФОС в стабильной форме. Продукт, который решает задачи, а не занимает место на полке.",
    "about.b1.title":         "Почему появился этот продукт",
    "about.b1.body":          "<p>В работе с кормовыми добавками мы постоянно сталкиваемся с одной проблемой: пробиотики теряют эффективность еще до вскрытия упаковки. Заявленные КОЕ расходятся с реальностью из-за нарушений технологии производства и хранения.</p><p>BIOMA LAB создавался как ответ на этот запрос. Мы не экспериментируем с экзотическими составами, а берем золотой стандарт терапии диарей (<em>S. boulardii</em> + ФОС) и гарантируем его стабильность. Наша задача — дать рынку инструмент, в котором можно быть уверенным при каждом назначении.</p>",
    "about.b2.title":         "Фокус на технологии, а не на маркетинге",
    "about.b2.body":          "<p>Эффективность синбиотика определяется не только составом, но и сохранностью штамма. Мы выстроили производственную цепочку вокруг контроля критических параметров: активности воды (a<sub>w</sub>), совместимости пребиотика и барьерных свойств упаковки.</p><p>Результат — продукт, сохраняющий заявленные характеристики в течение всего срока годности при комнатной температуре. Это подтверждено внутренними протоколами стабильности, а не только сертификатами поставщиков сырья.</p>",
    "about.b3.title":         "Прозрачность как стандарт работы",
    "about.b3.body":          "<p>Мы работаем в профессиональном сегменте, где доверие строится на фактах.</p><ul><li><strong>Верифицируемые данные.</strong> Готовы предоставить результаты тестов на выживаемость штаммов по запросу.</li><li><strong>Честная коммуникация.</strong> Открыто обсуждаем технические нюансы и ограничения продукта.</li><li><strong>Развитие линейки.</strong> Текущая формула — база. На основе обратной связи от специалистов мы масштабируем ассортимент, включая разработку препаратов с бактериофагами.</li></ul>",
    "about.b4.title":         "Сотрудничество",
    "about.b4.body":          "<p>BIOMA LAB открыт для диалога с ветеринарными врачами, технологами и дистрибьюторами кормовых добавок. Мы ценим экспертизу коллег и строим долгосрочные партнерские отношения.</p><p>Свяжитесь с нами, чтобы обсудить технические детали продукта или возможности сотрудничества.</p>",


    /* Разработка */


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
    "footer.about":           "BIOMA LAB — R&D-компания в области ветеринарных синбиотиков.",
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

    "meta.title.home":         "BIOMA LAB — veterinary nutraceuticals and synbiotics",
    "meta.desc.home":          "BIOMA LAB: R&D and manufacturing of stable S. boulardii-based formulations for veterinary practice. Efficacy verified by protocols.",
    "meta.title.about":        "About · VetBiom",
    "meta.desc.about":         "BIOMA LAB — R&D company in veterinary synbiotics. Moscow, Russia. Registered with Russian Federal Tax Service. OKVED 72.19 (scientific research).",
    "meta.title.development":  "Product Development · VetBiom",
    "meta.desc.development":   "Veterinary synbiotic development stages based on S. boulardii: strain selection, water activity, barrier packaging, stability tests.",
    "meta.title.knowledge":    "S. boulardii Knowledge Base · VetBiom",
    "meta.desc.knowledge":     "Systematized data on S. boulardii application in veterinary medicine. Open materials for vets, farmers and pet owners.",
    "meta.title.partners":     "For Partners & Suppliers · VetBiom",
    "meta.desc.partners":      "We source raw materials for veterinary synbiotics: S. boulardii, FOS, bacteriophages. Requirements and contacts for suppliers.",

    /* Home */
    "home.hero.eyebrow":  "BIOMA LAB · Veterinary Nutraceuticals & Synbiotics",
    "home.hero.title":    "Evidence-Based GI Health Support for Companion Animals",
    "home.hero.subtitle": "We develop and manufacture stable formulations based on <em>Saccharomyces boulardii</em> and prebiotics. Efficacy verified by protocols, not marketing. Solutions for veterinary practice — resistant to antibiotics and storage conditions.",
    "home.hero.cta1":     "Solution Catalog",
    "home.hero.cta2":     "For Professionals",
    "home.hero.meta":     "BIOMA LAB LLC · R&D and Manufacturing in Russia",

    "home.approach.eyebrow": "Approach",
    "home.approach.title":   "Technology as the Foundation of Efficacy",
    "home.approach.body":    "<p>In the probiotics and synbiotics category, the ingredient list on the label is only half the story. The critical parameter is activity retention — from production through to the animal's digestive system. We structure our development around three stability factors:</p><ul><li><strong>Water activity (a<sub>w</sub>) control.</strong> Suppressing contaminating microflora without compromising target culture viability.</li><li><strong>Matrix compatibility.</strong> Selecting components that do not inhibit probiotic strain activity throughout the shelf life.</li><li><strong>Barrier protection.</strong> Multi-layer packaging with an EVOH layer blocking oxygen and moisture.</li></ul><p>Every technological decision is data-driven and verified by a stability programme.</p>",

    "home.applications.eyebrow": "Applications",
    "home.applications.title":   "Solutions for Clinical Needs",

    "home.app1.title": "Antibiotic-Associated Conditions",
    "home.app1.text":  "Microbiome and intestinal barrier support during antimicrobial therapy. Strains resistant to antibiotic action.",
    "home.app2.title": "Stress and Diet Change",
    "home.app2.text":  "Prevention of functional GI disorders during transport, adaptation to new diets, and exhibitions.",
    "home.app3.title": "Recovery After Acute Conditions",
    "home.app3.text":  "Digestive normalization during convalescence. Safe for kittens and puppies.",
    "home.app4.title": "Daily Maintenance",
    "home.app4.text":  "Microbiota balancing in healthy animals. Prebiotic nourishment of the native flora.",

    "home.rd.eyebrow": "R&D",
    "home.rd.title":   "BIOMA LAB R&D Standards",
    "home.rd.body":    "<p>We operate at the intersection of veterinary medicine and biotechnology. Our mission is to provide the market with products you can trust.</p><ul><li><strong>Research-backed.</strong> Strain selection, dosages, and product forms are grounded in current scientific data and veterinary reviews.</li><li><strong>Verifiable data.</strong> Stability protocols, viability, and compatibility tests available upon request for professionals.</li><li><strong>Honest communication.</strong> Openly discuss technical nuances, application boundaries, and limitations of each formulation. We don't promise the impossible.</li><li><strong>Standards compliance.</strong> Production and quality control within the requirements for feed additives and veterinary nutraceuticals.</li></ul>",

    "home.partnership.eyebrow": "Partnership",
    "home.partnership.title":   "For the Veterinary Community and Partners",
    "home.partnership.body":    "<p>We work directly with clinics, pet pharmacies, and distributors. Transparent terms and technical support provided.</p><ul><li><strong>📄 Documentation:</strong> Declarations, protocols, guidelines — available before contract signing.</li><li><strong>🧪 Evaluation:</strong> Samples for clinical testing and product familiarization.</li><li><strong>⚡ Logistics:</strong> Shipping from Moscow warehouse. EDI workflow. Reliable supply.</li><li><strong>🎓 Expertise:</strong> Consultations with technologists and veterinary specialists on application and protocol integration.</li></ul>",
    "home.partnership.btn1":    "Contact Business Development",
    "home.partnership.btn2":    "Download Corporate Presentation",

    "home.legal.title":   "Legal Information",
    "home.legal.address": "115088, Moscow, 1-ya Mashinostroyeniya St., 7",

    /* About */
    "about.hero.title":       "Animal Health Products Built on Veterinary Feedback",
    "about.hero.subtitle":    "Proven <em>S. boulardii</em> + FOS formula in a stable format. A product designed to solve clinical problems, not just fill shelf space.",
    "about.b1.title":         "Why This Product Exists",
    "about.b1.body":          "<p>In the feed supplement industry, we consistently encounter one issue: probiotics lose efficacy before the package is even opened. Stated CFU counts often diverge from reality due to manufacturing and storage flaws.</p><p>BIOMA LAB was established to address this gap. We aren't experimenting with exotic blends; we take the gold standard for diarrhea management (<em>S. boulardii</em> + FOS) and guarantee its stability. Our mission is to provide the market with a tool professionals can trust with every prescription.</p>",
    "about.b2.title":         "Technology Over Marketing",
    "about.b2.body":          "<p>A synbiotic's effectiveness depends as much on strain viability as on its formula. We've built our production chain around controlling critical parameters: water activity (a<sub>w</sub>), prebiotic compatibility, and packaging barrier properties.</p><p>The result is a product that maintains its stated specifications throughout its shelf life at room temperature—verified by internal stability protocols, not just raw material certificates.</p>",
    "about.b3.title":         "Transparency as Standard Practice",
    "about.b3.body":          "<p>Operating in the professional segment means trust is built on facts.</p><ul><li><strong>Verifiable Data:</strong> Strain survival test results available upon request.</li><li><strong>Honest Communication:</strong> Open discussion of technical nuances and product limitations.</li><li><strong>Pipeline Development:</strong> Current formula is the foundation. Based on specialist feedback, we are expanding the line, including bacteriophage-based products.</li></ul>",
    "about.b4.title":         "Partnership",
    "about.b4.body":          "<p>BIOMA LAB welcomes dialogue with veterinarians, technologists, and feed supplement distributors. We value peer expertise and build long-term partnerships.</p><p>Contact us to discuss technical specifications or collaboration opportunities.</p>",


    /* Dev */


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
    "footer.about":           "BIOMA LAB — R&D company in veterinary synbiotics.",
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

    "meta.title.home":         "BIOMA LAB — 兽用营养保健品与合生元",
    "meta.desc.home":          "BIOMA LAB：基于 S. boulardii 的稳定兽用配方研发与生产。功效经实验方案验证。",
    "meta.title.about":        "关于公司 · VetBiom",
    "meta.desc.about":         "BIOMA LAB — 兽用合生元领域的研发公司。俄罗斯莫斯科。在俄罗斯联邦税务局注册。OKVED 72.19(科学研究)。",
    "meta.title.development":  "产品研发 · VetBiom",
    "meta.desc.development":   "基于 S. boulardii 的兽用合生元研发阶段:菌株选择、水分活度、阻隔包装、稳定性测试。",
    "meta.title.knowledge":    "S. boulardii 知识库 · VetBiom",
    "meta.desc.knowledge":     "兽医领域 S. boulardii 应用的系统化数据。面向兽医、农场主和宠物主人的开放资料。",
    "meta.title.partners":     "合作伙伴与供应商 · VetBiom",
    "meta.desc.partners":      "我们采购兽用合生元原料:S. boulardii、FOS、噬菌体。供应商要求与联系方式。",

    /* Home */
    "home.hero.eyebrow":  "BIOMA LAB · 兽用营养保健品与合生元",
    "home.hero.title":    "伴侣动物胃肠道健康的循证支持",
    "home.hero.subtitle": "我们研发和生产基于 <em>Saccharomyces boulardii</em> 及益生元的稳定配方。功效经实验方案验证，而非营销包装。适用于兽医临床——耐抗生素、耐储存条件。",
    "home.hero.cta1":     "解决方案目录",
    "home.hero.cta2":     "专业人士专区",
    "home.hero.meta":     "BIOMA LAB 有限责任公司 · 在俄研发与生产",

    "home.approach.eyebrow": "理念",
    "home.approach.title":   "技术为功效之本",
    "home.approach.body":    "<p>在益生菌和合生元领域，标签上的成分表只是故事的一半。关键指标是从生产到进入动物体内全程的活性保持能力。我们围绕三大稳定性因素构建研发体系：</p><ul><li><strong>水分活度 (a<sub>w</sub>) 控制。</strong> 抑制污染微生物生长，同时保持目标菌株的活力。</li><li><strong>基质兼容性。</strong> 精选组分，确保在保质期内不抑制益生菌菌株活性。</li><li><strong>阻隔保护。</strong> 多层 EVOH 阻隔包装，隔绝氧气和水分。</li></ul><p>每项技术决策均有数据支撑，并经过稳定性项目验证。</p>",

    "home.applications.eyebrow": "应用领域",
    "home.applications.title":   "满足临床需求的解决方案",

    "home.app1.title": "抗生素相关病症",
    "home.app1.text":  "在抗菌治疗期间维护微生物组和肠道屏障。对抗生素具有耐药性的菌株。",
    "home.app2.title": "应激与换粮",
    "home.app2.text":  "在运输、适应新日粮及参展期间预防功能性胃肠道紊乱。",
    "home.app3.title": "急性病症后恢复",
    "home.app3.text":  "恢复期消化功能正常化。幼猫幼犬安全可用。",
    "home.app4.title": "日常维护",
    "home.app4.text":  "健康动物的微生物组平衡。对原生菌群的益生元滋养。",

    "home.rd.eyebrow": "研发",
    "home.rd.title":   "BIOMA LAB 研发标准",
    "home.rd.body":    "<p>我们处于兽医学与生物技术的交叉领域。我们的使命是为市场提供值得信赖的产品。</p><ul><li><strong>研究驱动。</strong> 菌株选择、剂量和剂型均基于最新科学数据和兽医综述。</li><li><strong>数据可验证。</strong> 稳定性方案、活力和兼容性测试结果可应专业人士要求提供。</li><li><strong>坦诚沟通。</strong> 公开讨论技术细节、适用范围和每种配方的局限性。不做出不可能的承诺。</li><li><strong>标准合规。</strong> 生产和质量控制符合饲料添加剂和兽用营养保健品的要求。</li></ul>",

    "home.partnership.eyebrow": "合作",
    "home.partnership.title":   "面向兽医社群与合作伙伴",
    "home.partnership.body":    "<p>我们直接与诊所、宠物药房和经销商合作。提供透明的合作条件和技术支持。</p><ul><li><strong>📄 文件资料：</strong> 申报文件、方案、指南——签约前即可获取。</li><li><strong>🧪 样品评估：</strong> 提供临床测试和产品试用样品。</li><li><strong>⚡ 物流：</strong> 莫斯科仓库发货。支持电子文档流转。稳定供应。</li><li><strong>🎓 专业支持：</strong> 工艺师和兽医专家提供应用及方案整合咨询。</li></ul>",
    "home.partnership.btn1":    "联系业务发展部",
    "home.partnership.btn2":    "下载企业介绍",

    "home.legal.title":   "法律信息",
    "home.legal.address": "115088, 莫斯科市, 第一机械制造街 7 号",

    /* About */
    "about.hero.title":       "基于兽医临床需求的动物健康产品",
    "about.hero.subtitle":    "布拉氏酵母菌 + FOS 黄金组合，稳定剂型。专为解决实际问题而生，拒绝无效堆料。",
    "about.b1.title":         "产品诞生背景",
    "about.b1.body":          "<p>在饲料添加剂领域，我们始终面临一个痛点：益生菌在开封前就已失活。由于生产和储运工艺缺陷，标示活菌数往往与实际不符。</p><p>BIOMA LAB 正是为解决这一问题而创立。我们不盲目追求新奇概念，而是聚焦腹泻管理的黄金标准（布拉氏酵母菌 + FOS），并确保其稳定性。我们的目标是为市场提供一款每次处方都值得信赖的专业工具。</p>",
    "about.b2.title":         "技术优先，拒绝营销噱头",
    "about.b2.body":          "<p>合生元的功效不仅取决于配方，更取决于菌株存活率。我们围绕关键参数构建生产体系：严格控制水分活度 (a<sub>w</sub>)、益生元兼容性及包装阻隔性能。</p><p>最终产品可在室温下全程保持标示规格——这由内部稳定性验证协议支撑，而非仅依赖原料供应商证书。</p>",
    "about.b3.title":         "透明化运营标准",
    "about.b3.body":          "<p>深耕专业领域，信任源于事实。</p><ul><li><strong>数据可验证：</strong> 可根据要求提供菌株存活测试报告。</li><li><strong>坦诚沟通：</strong> 公开探讨技术细节与产品局限性。</li><li><strong>持续迭代：</strong> 现有配方为基础，结合专家反馈拓展产品线，包括噬菌体制剂研发。</li></ul>",
    "about.b4.title":         "合作邀约",
    "about.b4.body":          "<p>BIOMA LAB 诚邀兽医、技术人员及饲料添加剂经销商交流。我们尊重行业智慧，致力于建立长期伙伴关系。</p><p>欢迎联系我们，洽谈产品技术细节或合作事宜。</p>",


    /* Dev */


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
    "footer.about":           "BIOMA LAB — 兽用合生元领域的研发公司。",
    "footer.legalBlock":      "法律信息",
    "footer.contactBlock":    "联系方式",
    "footer.linksBlock":      "栏目",
    "footer.copy":            "© 2026 BIOMA LAB LLC. 版权所有。"
  }
};
