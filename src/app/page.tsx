
import InstagramTestimonials from './sections/InstagramTestimonials';
import HeroSection from './sections/HeroSection';
import PopularTreatments from './sections/PopularTreatments';
import { fetchPopularTreatments } from '@/lib/treatments';
import HomeCTA from './sections/HomeCTA';

export default async function HomePage() {

  const popularTreatments = await fetchPopularTreatments('pl')
  console.log(popularTreatments)
  return (
  <main>
    <HeroSection/>
    <PopularTreatments treatments = {popularTreatments}/>
    <InstagramTestimonials/>
  </main>
  )
}




