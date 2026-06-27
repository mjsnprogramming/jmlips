import InstagramTestimonials from '../sections/InstagramTestimonialsEN'
import HeroSection from '../sections/HeroSectionEN'
import PopularTreatments from '../sections/PopularTreatmentsEN'
import { fetchPopularTreatments } from '@/lib/treatments'
import { fetchTestimonials } from '@/lib/testimonials'

export default async function HomePage() {
  const popularTreatments = await fetchPopularTreatments('en')
  const testimonials = await fetchTestimonials()
 
  return (
    <main>
      <HeroSection />
      <PopularTreatments treatments={popularTreatments} />
      <InstagramTestimonials testimonials={testimonials} />
    </main>
  )
}