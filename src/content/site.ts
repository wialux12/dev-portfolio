export const siteConfig = {
  name: "Кирилл Спыну",
  role: "Full-stack разработчик",
  location: "Челябинск, Россия",
  availability: "Открыт для новых проектов",
  tagline: "Довожу продукт от идеи до продакшена — в одиночку.",
  description:
    "Full-stack разработчик из Челябинска. Проектирую и создаю сайты, Telegram-приложения и B2B-платформы — от дизайн-системы до сервера и HTTPS, в одиночку и под ключ.",
  keywords: [
    "full-stack разработчик",
    "Next.js разработчик",
    "разработка Telegram Mini Apps",
    "B2B веб-платформы",
    "веб-дизайн",
    "разработчик Челябинск",
  ],
  email: "kirill.spynu@icloud.com",
  github: "https://github.com/wialux12",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Обо мне", href: "#about" },
  { label: "Компетенции", href: "#skills" },
  { label: "Проекты", href: "#work" },
  { label: "Процесс", href: "#process" },
  { label: "Опыт", href: "#experience" },
  { label: "Контакты", href: "#contact" },
];
