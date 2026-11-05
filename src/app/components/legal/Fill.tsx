/** Brakujące dane w dokumentach są wyraźnie oznaczone, żeby nie trafiły na stronę niezauważone. */
export default function Fill({ value, label }: { value: string; label: string }) {
  if (value) return <>{value}</>;
  return (
    <mark className="rounded bg-[#f3e2c4] px-1.5 py-0.5 text-[#5c4939]">[do uzupełnienia: {label}]</mark>
  );
}
