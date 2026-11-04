import React from "react";
import AboutIntro from "@/app/sections/AboutIntro";
import Philosophy from "@/app/sections/Philosophy";
import Certificates from "@/app/sections/Certificates";
import { fetchAboutData } from "@/lib/about";

export default async function AboutSection() {
  const aboutData = await fetchAboutData();

  return (
    <main className="bg-[#fbf8f4]">
      <AboutIntro aboutImage={aboutData?.about_me_image} />
      <Philosophy />
      <Certificates
        certificate1={aboutData?.certificate_1}
        certificate2={aboutData?.certificate_2}
      />
    </main>
  );
}