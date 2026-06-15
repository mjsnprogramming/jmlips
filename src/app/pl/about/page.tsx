import React from "react";
import AboutIntro from "@/app/sections/AboutIntro";
import Philosophy from "@/app/sections/Philosophy";
import Certificates from "@/app/sections/Certificates";


export default function AboutSection() {
  return (
    <main className="bg-[#fbf8f4]">
      <AboutIntro/>
      <Philosophy/>
      <Certificates/>
</main>
  );
}
