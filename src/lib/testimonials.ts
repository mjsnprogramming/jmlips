import { TESTIMONIALS } from '@/content/testimonials'

export type Testimonial = {
  id: number
  image: string
  order: number
}

/** Opinie (screeny z Instagrama) – z src/content/testimonials.ts. */
export async function fetchTestimonials(): Promise<Testimonial[]> {
  return TESTIMONIALS.filter(Boolean).map((image, index) => ({ id: index + 1, image, order: index }))
}
