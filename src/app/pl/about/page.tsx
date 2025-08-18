import Image from "next/image";

export default function About() {
  return (
    <main className = "bg-[#f7f5f0]">

      <section className = "px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className = "flex-shrink-0">
          <Image src = "/images/about.jpg" alt = "JM" width = {350} height = {400} className = "rounded-2xl object-cover shadow-md"/>
        </div>

        <div className = "text-center md:text-left">
          <h1 className = "text-3xl md:text-4xl font-bold text-gray-900">
            Specjalistka od <br/> naturalnych efektów
          </h1>
          <p className = "mt-4 text-gray-700 max-w-xl">
            Specjalistka od wydobywania naturalnych rysów twarzy i efektów
            modelowania ust. Jako doświadczona praktyk dbam, aby każdy efekt był
            subtelny i harmonijny.
          </p>
          <p className = "mt-6 text-2xl font-[Dancing Script] text-[#a67c52]">
            Julia Majewska
          </p>
        </div>
      </section>
     
    </main>
  );
}
