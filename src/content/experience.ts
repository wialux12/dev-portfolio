export interface ExperienceItem {
  period: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    period: "Сейчас",
    title: "Открыт для новых проектов",
    description:
      "Беру full-stack проекты любого масштаба — от лендинга за один вечер до B2B-платформы с интеграциями и админ-панелью.",
    highlight: true,
  },
  {
    period: "2026",
    title: "TrendBox — B2B-платформа напитков",
    description:
      "Спроектировал и разрабатываю оптовую витрину: RFQ вместо оплаты, headless-коммерция на Medusa.js, импорт каталога из 1С, Telegram-интеграции.",
  },
  {
    period: "2026",
    title: "ШИБ IV — Telegram Mini App",
    description:
      "Реализовал мини-приложение для международного форума: расписание, рейтинг, магазин мерча — 400+ участников из 15 стран.",
  },
  {
    period: "2026",
    title: "Дом Галеева — соло-проект под ключ",
    description:
      "Провёл через весь цикл в одиночку: дизайн-направление, вёрстка, фирменная canvas-анимация, сервер, домен, HTTPS.",
  },
];
