import ContactIntro from "@/app/sections/ContactIntro";
import ContactItems from "@/app/sections/ContactItems";
import ContactMap from "@/app/sections/ContactMap";

export default function ContactPage() {
  return (
    <div className="bg-[#fbf8f4] text-[#2f2924]">
      <ContactIntro lang="pl" />
      <ContactItems lang="pl" />
      <ContactMap lang="pl" />
    </div>
  );
}
