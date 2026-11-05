import InstagramTestimonials from './sections/InstagramTestimonials'
import HeroSection from './sections/HeroSection'
import PopularTreatments from './sections/PopularTreatments'
import { fetchPopularTreatments } from '@/lib/treatments'
import { fetchTestimonials } from '@/lib/testimonials'

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("home", "pl");

export default async function HomePage() {
  const popularTreatments = await fetchPopularTreatments('pl')
  const testimonials = await fetchTestimonials()
 
  return (
    <main>
      <HeroSection />
      <PopularTreatments treatments={popularTreatments} />
      <InstagramTestimonials testimonials={testimonials} />
    </main>
  )
}