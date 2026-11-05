"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <section className="bg-[#faf7f4] px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-brand-soft">
            Kontakt
          </span>

          <div className="mb-8 h-px w-16 bg-brand-soft" />

          <h2 className="font-heading text-4xl font-light text-zinc-900 md:text-6xl">
            Napisz do nas
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-zinc-600 md:text-lg">
            Masz pytanie dotyczące zabiegu, terminu lub konsultacji? Wypełnij
            formularz, a odpowiemy tak szybko, jak to możliwe.
          </p>
        </div>

        <form className="rounded-sm border border-[#e7ddd2] bg-white/75 p-6 shadow-sm backdrop-blur-sm md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-zinc-600">
                Imię i nazwisko
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full border-b border-[#d8c8b8] bg-transparent px-0 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-brand-soft"
                placeholder="Twoje imię"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-600">
                Telefon
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="w-full border-b border-[#d8c8b8] bg-transparent px-0 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-brand-soft"
                placeholder="+48..."
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm text-zinc-600">
              E-mail
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full border-b border-[#d8c8b8] bg-transparent px-0 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-brand-soft"
              placeholder="adres@email.com"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm text-zinc-600">
              Wiadomość
            </label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full resize-none border-b border-[#d8c8b8] bg-transparent px-0 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-brand-soft"
              placeholder="Napisz, w czym możemy pomóc..."
            />
          </div>

          <button
            type="button"
            className="mt-10 inline-flex items-center gap-3 bg-brand-soft px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:bg-brand-light"
          >
            Wyślij wiadomość
            <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}