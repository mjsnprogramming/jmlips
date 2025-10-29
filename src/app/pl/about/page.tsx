import Image from "next/image";
import React from "react";


export default function AboutSection() {
  return (
    <section className="bg-[#ffffff] py-20">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12">
        
        <div>
          <span className="inline-block bg-[#a67c52] text-[#ffffff] px-4 py-1 rounded-full font-medium text-sm mb-6">
            O MNIE
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Dlaczego warto <br /> przyjść do mnie?
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Julia Majewska Studio to wyjątkowe miejsce, w którym możesz skorzystać z wielu
            innowacyjnych zabiegów z zakresu medycyny estetycznej i kosmetologii
            hi-tech pod okiem najlepszych specjalistów. Nasz zespół w Warszawie
            zadba o to, by poprawić nie tylko wygląd Twojej twarzy lub ciała,
            ale również przywrócić pewność siebie i dobre samopoczucie.
            <br />
            <br />
            Twoje piękno jest naszym wspólnym sukcesem!
          </p>
        </div>

        
        <div className="flex justify-center">
          <div className="relative w-full max-w-md md:max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src= "/images/about.jpg"
              alt="Pracowniczka salonu Beauty Skin przy komputerze"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
