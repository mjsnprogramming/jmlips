export default function Philosphy () {
return (
<section className="bg-white px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-8 md:grid-cols-3">
      <div className="rounded-[2rem] border border-[#eadbc9] bg-[#fbf8f4] p-8 shadow-sm">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#a67c52]">
          Filozofia
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[#2f2924]">
          Mniej znaczy piękniej.
        </h2>
      </div>

      <div className="md:col-span-2 rounded-[2rem] border border-[#eadbc9] bg-[#fbf8f4] p-8 shadow-sm">
        <p className="text-lg leading-9 text-gray-600">
          Każdy zabieg poprzedzony jest konsultacją i 
          dokładną analizą potrzeb. Wspólnie omawiamy
          oczekiwania, możliwe rezultaty oraz rozwiązania 
          najlepiej dopasowane do Twojej urody i stylu życia.
        </p>
      </div>
    </div>
  </div>
</section>
)}