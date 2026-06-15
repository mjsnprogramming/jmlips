import ContactIntro from "@/app/sections/ContactIntro"
import ContactItems from "@/app/sections/ContactItems"
import ContactMap from "@/app/sections/ContactMap"
import ContactForm from "@/app/components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="bg-[#fbf8f4] text-[#2f2924]">
      <ContactIntro/>
      <ContactItems/>
      <ContactMap/>
      <ContactForm/>
    </main>
  )
}