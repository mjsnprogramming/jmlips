import { redirect } from "next/navigation";

// TODO: angielska wersja strony nie jest jeszcze gotowa – tymczasowo przekierowanie na wersję polską.
export default function Page() {
  redirect("/pl/portfolio");
}
