import React from "react";
import AboutIntro from "@/app/sections/AboutIntroEN";
import Philosophy from "@/app/sections/PhilosophyEN";
import Certificates from "@/app/sections/CertificatesEN";
import type { AboutData } from "@/lib/about";

type Props = {
  aboutData: AboutData | null;
};

export default function AboutSection({ aboutData }: Props) {
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