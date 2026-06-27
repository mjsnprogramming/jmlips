import Image from 'next/image';
import type { AboutData } from '@/lib/about';

type Props = {
  aboutImage?: AboutData['about_me_image'];
};

export default function AboutIntro({ aboutImage }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#fbf8f4] px-6 py-28">
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-6 inline-flex rounded-full bg-[#a67c52] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            About Me
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[#111827] md:text-7xl">
            Natural Results Begin with Trust.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-600">
            My name is Julia Majewska, and I have created a place where you can feel comfortable, 
            relaxed, and free from pressure or rushed decisions. 
            Every treatment is tailored individually, with great attention to balance, 
            comfort, and results that enhance your natural beauty.
          </p>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#eadbc9] bg-white/70 p-5 shadow-sm">
              <p className="text-2xl font-semibold text-[#a67c52]">01</p>
              <p className="mt-2 text-sm text-gray-600">Natural Results</p>
            </div>

            <div className="rounded-2xl border border-[#eadbc9] bg-white/70 p-5 shadow-sm">
              <p className="text-2xl font-semibold text-[#a67c52]">02</p>
              <p className="mt-2 text-sm text-gray-600">Personalized Approach</p>
            </div>

            <div className="rounded-2xl border border-[#eadbc9] bg-white/70 p-5 shadow-sm">
              <p className="text-2xl font-semibold text-[#a67c52]">03</p>
              <p className="mt-2 text-sm text-gray-600">Relaxing Atmosphere</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.5rem] border border-[#d7b995]/60" />

          <div className="absolute -bottom-8 -right-8 z-20 rounded-3xl bg-white/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a67c52]">
              JM Studio
            </p>

            <p className="mt-2 text-lg font-semibold text-[#2f2924]">
              Beauty with intention
            </p>
          </div>

          <Image
            src={aboutImage || "/images/about.jpg"}
            alt="Julia Majewska podczas zabiegu"
            width={760}
            height={620}
            className="relative h-[560px] w-full rounded-[2.5rem] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.16)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}