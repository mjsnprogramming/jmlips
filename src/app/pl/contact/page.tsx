import ContactIntro from "@/app/sections/ContactIntro"
import ContactItems from "@/app/sections/ContactItems"
import ContactMap from "@/app/sections/ContactMap"

export default function Contact() {
  return (
    <main className="bg-[#fbf8f4] text-[#2f2924]">
      <ContactIntro/>
      <ContactItems/>
      <ContactMap/>
    </main>
  )
}