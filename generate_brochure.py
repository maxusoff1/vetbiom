#!/usr/bin/env python3
"""Генератор PDF-брошюры BIOMA LAB — A4, одна страница"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# === Регистрируем шрифты с кириллицей ===
pdfmetrics.registerFont(TTFont('DejaVu', '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('DejaVu-Bold', '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuSerif', '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'))

# === ПАЛИТРА ===
CREAM = HexColor('#FAF5ED')
GREEN = HexColor('#4A7C59')
DARK_GREEN = HexColor('#2D5A3D')
WARM_BROWN = HexColor('#5C4033')
LIGHT_GREEN = HexColor('#E8F0E4')

W, H = A4
MARGIN = 20 * mm
col_w = W - 2 * MARGIN

def draw_section_bg(c, bx, by, bw, bh):
    c.setFillColor(LIGHT_GREEN)
    c.roundRect(bx, by - bh, bw, bh + 3*mm, 3, fill=1, stroke=0)

def make_brochure(path):
    c = canvas.Canvas(path, pagesize=A4)
    c.setTitle('BIOMA LAB — Ветеринарные нутрицевтики и синбиотики')
    c.setAuthor('BIOMA LAB LLC')

    # === ФОН ===
    c.setFillColor(CREAM)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # === ВЕРХНЯЯ ПЛАНКА ===
    c.setFillColor(DARK_GREEN)
    c.rect(0, H - 12*mm, W, 12*mm, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont('DejaVu-Bold', 11)
    c.drawString(MARGIN, H - 8.5*mm, 'BIOMA LAB')

    # === НИЖНЯЯ ПЛАНКА ===
    c.setFillColor(DARK_GREEN)
    c.rect(0, 0, W, 10*mm, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont('DejaVu', 7.5)
    c.drawString(MARGIN, 3.5*mm, 'info@vetbiom.ru  ·  vetbiom.ru  ·  Москва, Россия  ·  ООО «БИОМА ЛАБ»  ·  © 2026')

    x = MARGIN
    y = H - 18*mm

    # === ЗАГОЛОВОК ===
    c.setFillColor(DARK_GREEN)
    c.setFont('DejaVu-Bold', 16)
    c.drawString(x, y, 'BIOMA LAB')
    y -= 8

    c.setFont('DejaVu', 10)
    c.setFillColor(GREEN)
    c.drawString(x, y, 'Ветеринарные нутрицевтики и синбиотики')
    y -= 5

    c.setFont('DejaVu', 8)
    c.setFillColor(WARM_BROWN)
    c.drawString(x, y, 'R&D и производство стабильных формул на основе S. boulardii. Москва, Россия.')
    y -= 14

    # === БЛОК 1: ПОДХОД ===
    bh1 = 22*mm
    draw_section_bg(c, x - 3*mm, y + 2*mm, col_w + 6*mm, bh1)
    c.setFillColor(DARK_GREEN)
    c.setFont('DejaVu-Bold', 9)
    c.drawString(x, y, 'Технология как основа эффективности')
    y -= 11
    c.setFont('DejaVu', 7.8)
    c.setFillColor(WARM_BROWN)
    for line in [
        'Состав на этикетке — лишь половина дела. Критический параметр — сохранность активности',
        'от производства до организма животного. Разработка строится вокруг трёх факторов:',
        '',
        '• Контроль активности воды (aw) — подавление контаминирующей микрофлоры без потери жизнеспособности.',
        '• Совместимость матрицы — компоненты не ингибируют активность штаммов в течение срока годности.',
        '• Барьерная защита — многослойная упаковка с EVOH-слоем, блокирующая кислород и влагу.',
    ]:
        c.drawString(x, y, line)
        y -= 10.5
    y -= 4

    # === БЛОК 2: ОБЛАСТИ ПРИМЕНЕНИЯ ===
    bh2 = 20*mm
    draw_section_bg(c, x - 3*mm, y + 2*mm, col_w + 6*mm, bh2)
    c.setFillColor(DARK_GREEN)
    c.setFont('DejaVu-Bold', 9)
    c.drawString(x, y, 'Решения для клинических задач')
    y -= 11
    c.setFont('DejaVu', 7.8)
    c.setFillColor(WARM_BROWN)
    for line in [
        '• Антибиотик-ассоциированные состояния — поддержка микробиома на фоне противомикробной терапии.',
        '• Стресс и смена рациона — профилактика функциональных расстройств ЖКТ (транспортировка, адаптация).',
        '• Восстановление после острых состояний — нормализация пищеварения в период реконвалесценции.',
        '• Ежедневная поддержка — балансировка микробиоты у здоровых животных.',
    ]:
        c.drawString(x, y, line)
        y -= 10.5
    y -= 4

    # === БЛОК 3: R&D СТАНДАРТЫ ===
    bh3 = 33*mm
    draw_section_bg(c, x - 3*mm, y + 2*mm, col_w + 6*mm, bh3)
    c.setFillColor(DARK_GREEN)
    c.setFont('DejaVu-Bold', 9)
    c.drawString(x, y, 'R&D-стандарты')
    y -= 11
    c.setFont('DejaVu', 7.8)
    c.setFillColor(WARM_BROWN)
    for line in [
        'Мы работаем на стыке ветеринарии и биотехнологий.',
        '',
        '• Research-backed — выбор штаммов, дозировок и форм выпуска на основе актуальных научных данных.',
        '• Верифицируемые данные — протоколы стабильности и тесты доступны по запросу.',
        '• Честная коммуникация — открыто обсуждаем границы применимости и ограничения.',
        '• Соответствие стандартам — производство в рамках требований к кормовым добавкам и нутрицевтикам.',
    ]:
        c.drawString(x, y, line)
        y -= 10.5
    y -= 5

    # === БЛОК 4: ДЛЯ ПАРТНЁРОВ ===
    bh4 = 20*mm
    draw_section_bg(c, x - 3*mm, y + 2*mm, col_w + 6*mm, bh4)
    c.setFillColor(DARK_GREEN)
    c.setFont('DejaVu-Bold', 9)
    c.drawString(x, y, 'Для партнёров')
    y -= 11
    c.setFont('DejaVu', 7.8)
    c.setFillColor(WARM_BROWN)
    for line in [
        'Работаем напрямую с клиниками, зооаптеками и дистрибьюторами.',
        '• Документация — декларации, протоколы и рекомендации доступны до заключения договора.',
        '• Оценка — образцы для клинического тестирования.',
        '• Логистика — отгрузка со склада в Москве. Работа через ЭДО.',
        '• Экспертиза — консультации технологов и ветеринарных специалистов.',
    ]:
        c.drawString(x, y, line)
        y -= 10.5
    y -= 5

    # === КОНТАКТЫ ===
    c.setStrokeColor(GREEN)
    c.setLineWidth(0.5)
    c.line(x, y, x + col_w, y)
    y -= 8
    c.setFillColor(DARK_GREEN)
    c.setFont('DejaVu-Bold', 9)
    c.drawString(x, y, 'Контакты')
    y -= 11
    c.setFont('DejaVu', 8)
    c.setFillColor(WARM_BROWN)
    for line in [
        'Email: info@vetbiom.ru  ·  Сайт: vetbiom.ru',
        'ООО «БИОМА ЛАБ»  ·  ИНН 9723273920  ·  ОГРН 1267700174060',
        '115088, г. Москва, ул. 1-я Машиностроения, д. 7',
    ]:
        c.drawString(x, y, line)
        y -= 10

    c.save()
    print(f'PDF создан: {path}')
    print(f'  Страниц: 1  ·  Формат: A4  ·  Шрифт: DejaVu Sans (кириллица)')

if __name__ == '__main__':
    make_brochure('/root/vetbiom/BIOMA_LAB_brochure.pdf')
