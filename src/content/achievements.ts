export interface Achievement {
  value: string;
  label: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    value: "400+",
    label: "участников ШИБ IV",
    description:
      "из 15 стран мира пользовались Telegram Mini App, который я спроектировал и разработал.",
  },
  {
    value: "750+",
    label: "товаров в каталоге TrendBox",
    description:
      "импортированы из Excel-выгрузок 1С без единой карточки товара, набранной вручную.",
  },
  {
    value: "100%",
    label: "соло-цикл разработки",
    description:
      "от дизайн-направления до сервера, домена и HTTPS — без подрядчиков и агентств.",
  },
  {
    value: "152-ФЗ",
    label: "совместимая инфраструктура",
    description:
      "хостинг и хранение данных только в РФ — юридические ограничения как часть архитектуры, а не патч в конце.",
  },
];
