import AboutIntro from "@/app/sections/AboutIntro";
import Philosophy from "@/app/sections/Philosophy";
import Certificates from "@/app/sections/Certificates";
import { fetchAboutData } from "@/lib/about";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("about", "en");

export default async function AboutPage() {
  const aboutData = await fetchAboutData();

  return (
    <div className="bg-[#fbf8f4]">
      <AboutIntro lang="en" aboutImage={aboutData?.about_me_image} />
      <Philosophy lang="en" />
      <Certificates
        lang="en"
        certificate1={aboutData?.certificate_1}
        certificate2={aboutData?.certificate_2}
        certificates={aboutData?.certificates}
      />
    </div>
  );
}
