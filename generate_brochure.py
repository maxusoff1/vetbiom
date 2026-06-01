#!/usr/bin/env python3
"""Генератор PDF-брошюры BIOMA LAB — A4, одна страница, двусторонняя печать"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, white, black
from reportlab.pdfgen import canvas
from reportlab.lib.utils import simpleSplit

# === ПАЛИТРА (как на сайте) ===
CREAM = HexColor('#FAF5ED')       # фон
GREEN = HexColor('#4A7C59')        # акцент
DARK_GREEN = HexColor('#2D5A3D')   # тёмно-зелёный
WARM_BROWN = HexColor('#5C4033')   # тёплый коричневый (текст)
LIGHT_GREEN = HexColor('#E8F0E4')  # бледно-зелёный (блоки)

W, H = A4  # 595.27 × 841.89 pt
MARGIN = 20 * mm
col_w = W - 2 * MARGIN  # ширина колонки

def draw_header(c):
    """Верхняя полоса с логотипом"""
    c.setFillColor(GREEN)
    c.rect(0, H - 12*mm, W, 12*mm, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont('Helvetica-Bold', 11)
    c.drawString(MARGIN, H - 9*mm, 'BIOMA LAB')

def draw_footer(c):
    """Нижняя полоса с контактами"""
    c.setFillColor(GREEN)
    c.rect(0, 0, W, 10*mm, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont('Helvetica', 7.5)
    c.drawString(MARGIN, 3.5*mm, 'info@vetbiom.ru  ·  vetbiom.ru  ·  Москва, Россия  ·  ООО «БИОМА ЛАБ»  ·  © 2026')

def draw_text_block(c, x, y, width, lines, font_name='Helvetica', font_size=9, leading=13, color=WARM_BROWN):
    """Рисует блок текста с переносом строк"""
    c.setFont(font_name, font_size)
    c.setFillColor(color)
    y_pos = y
    for line in lines:
        # Разбиваем длинные строки
        wrapped = simpleSplit(line, font_name, font_size, width)
        if not wrapped:
            wrapped = ['']
        for wl in wrapped:
            c.drawString(x, y_pos, wl)
            y_pos -= leading
        # между абзацами
    return y_pos

def make_brochure(path):
    c = canvas.Canvas(path, pagesize=A4)
    c.setTitle('BIOMA LAB — Синбиотик для кошек и собак')
    c.setAuthor('BIOMA LAB LLC')

    # === ФОН ===
    c.setFillColor(CREAM)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    draw_header(c)
    draw_footer(c)

    # === ТЕЛО ===
    x = MARGIN
    y = H - 18*mm  # верхняя граница текста

    # --- ЗАГОЛОВОК ---
    c.setFillColor(DARK_GREEN)
    c.setFont('Helvetica-Bold', 18)
    title = 'BIOMA LAB'
    c.drawString(x, y, title)
    y -= 9

    c.setFont('Helvetica', 11)
    c.setFillColor(GREEN)
    c.drawString(x, y, 'Синбиотик для кошек и собак, который работает как заявлено')
    y -= 7

    c.setFont('Helvetica-Oblique', 9)
    c.setFillColor(WARM_BROWN)
    c.drawString(x, y, 'S. boulardii + ФОС в правильной концентрации. Стабильность подтверждена тестами, а не маркетингом.')
    y -= 16

    # --- БЛОК 1: Кто мы ---
    c.setFillColor(LIGHT_GREEN)
    bx = x - 3*mm
    by = y + 2*mm
    bw = col_w + 6*mm
    c.roundRect(bx, by - 18*mm, bw, 24*mm, 3, fill=1, stroke=0)

    c.setFillColor(DARK_GREEN)
    c.setFont('Helvetica-Bold', 10)
    c.drawString(x, y, 'Кто мы и почему это важно')
    y -= 13

    lines1 = [
        'BIOMA LAB основана специалистами с ветеринарным бэкграундом.',
        'На рынке — подмена понятий: красивые этикетки, но слабые составы',
        'или ингредиенты, теряющие активность до вскрытия упаковки.',
        '',
        'Наш подход: проверенные решения (S. boulardii при диарее) + гарантия,',
        'что в каждом саше — терапевтическая концентрация. Без подмены.',
    ]
    y = draw_text_block(c, x, y, col_w, lines1, font_size=8, leading=11.5)
    y -= 6

    # --- БЛОК 2: Продукт и принципы ---
    c.setFillColor(LIGHT_GREEN)
    by = y + 2*mm
    c.roundRect(bx, by - 30*mm, bw, 34*mm, 3, fill=1, stroke=0)

    c.setFillColor(DARK_GREEN)
    c.setFont('Helvetica-Bold', 10)
    c.drawString(x, y, 'Наш продукт и принципы')
    y -= 13

    lines2 = [
        'Первый продукт — синбиотик для поддержки ЖКТ и купирования',
        'острой диареи: Saccharomyces boulardii + фруктоолигосахариды (ФОС).',
        '',
        'Три правила:',
        '• Правильная концентрация — дозы с клиническим эффектом.',
        '• Качество без компромиссов — контроль aw, совместимости, упаковки.',
        '  Стабилен при комнатной температуре.',
        '• Честность — если требует доработки, говорим прямо.',
    ]
    y = draw_text_block(c, x, y, col_w, lines2, font_size=8, leading=11.5)
    y -= 6

    # --- БЛОК 3: Развитие ---
    c.setFillColor(LIGHT_GREEN)
    by = y + 2*mm
    c.roundRect(bx, by - 28*mm, bw, 30*mm, 3, fill=1, stroke=0)

    c.setFillColor(DARK_GREEN)
    c.setFont('Helvetica-Bold', 10)
    c.drawString(x, y, 'Развитие и открытость')
    y -= 13

    lines3 = [
        'Текущий синбиотик — база. Планируем расширение линейки,',
        'включая препараты с бактериофагами, опираясь на запросы',
        'ветеринаров и данные о микробиоме.',
        '',
        'Гарантия: если средство не подошло — вернём деньги или заменим.',
        '',
        'BIOMA LAB открыта к сотрудничеству с ветеринарами,',
        'технологами и дистрибьюторами.',
    ]
    y = draw_text_block(c, x, y, col_w, lines3, font_size=8, leading=11.5)
    y -= 6

    # --- БЛОК 4: Этапы разработки (кратко) ---
    c.setFillColor(LIGHT_GREEN)
    by = y + 2*mm
    c.roundRect(bx, by - 22*mm, bw, 26*mm, 3, fill=1, stroke=0)

    c.setFillColor(DARK_GREEN)
    c.setFont('Helvetica-Bold', 10)
    c.drawString(x, y, 'Ключевые этапы R&D')
    y -= 13

    lines4 = [
        '1. Выбор штамма — S. boulardii (устойчив к антибиотикам, ЖКТ-транзит)',
        '2. Контроль активности воды (aw 0.15–0.20) для сохранности КОЕ',
        '3. 4-слойная EVOH-фольга — барьер для кислорода, влаги, света',
        '4. 24-месячная программа стабильности (ICH Zone II) + FOS-пребиотик',
    ]
    y = draw_text_block(c, x, y, col_w, lines4, font_size=8, leading=11.5)
    y -= 8

    # --- КОНТАКТЫ ---
    c.setStrokeColor(GREEN)
    c.setLineWidth(0.5)
    c.line(x, y, x + col_w, y)
    y -= 8

    c.setFont('Helvetica-Bold', 9)
    c.setFillColor(DARK_GREEN)
    c.drawString(x, y, 'Контакты')
    y -= 12

    c.setFont('Helvetica', 8)
    c.setFillColor(WARM_BROWN)
    contacts = [
        'Email: info@vetbiom.ru  ·  Сайт: vetbiom.ru',
        'Юр. лицо: ООО «БИОМА ЛАБ»  ·  ИНН 9723273920  ·  ОГРН 1267700174060',
        'Москва, Россия  ·  Основана в 2026 г.',
    ]
    for line in contacts:
        c.drawString(x, y, line)
        y -= 11

    c.save()
    print(f'✅ PDF создан: {path}')
    print(f'   Страниц: 1  ·  Формат: A4  ·  Размер: {W/72:.1f}×{H/72:.1f} дюймов')

if __name__ == '__main__':
    make_brochure('/root/vetbiom/BIOMA_LAB_brochure.pdf')
