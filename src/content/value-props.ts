export interface ValueProp {
  title: string;
  description: string;
}

/** Короткий обещательный ряд под hero — без цифр конкретных проектов. */
export const valueProps: ValueProp[] = [
  {
    title: "Быстро",
    description: "без пауз между макетом и продакшеном",
  },
  {
    title: "Чисто",
    description: "ни одного случайного пикселя или лишней анимации",
  },
  {
    title: "Красиво",
    description: "так, чтобы вы сами захотели показать сайт друзьям",
  },
];
