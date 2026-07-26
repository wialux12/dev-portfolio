export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    label: "Backend & данные",
    items: ["Node.js", "Medusa.js", "PostgreSQL", "Redis"],
  },
  {
    label: "Инфраструктура",
    items: ["nginx", "Docker", "Let's Encrypt", "Timeweb Cloud"],
  },
  {
    label: "Интеграции и инструменты",
    items: ["Telegram Bot API", "i18next", "Vite", "Git"],
  },
];
