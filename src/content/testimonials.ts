export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/**
 * Раздел «Отзывы» рендерится только если этот список не пуст (см.
 * components/sections/testimonials.tsx). Пока отзывов нет — пусто, чтобы не
 * показывать на сайте выдуманные цитаты. Добавить реальный отзыв: заполнить
 * quote/name/role одним объектом ниже.
 */
export const testimonials: Testimonial[] = [];
