"use client";

import { useI18n } from "@/contexts/I18nContext";
import type { Locale } from "@/lib/i18n/translations";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  const options: { id: Locale; label: string }[] = [
    { id: "tr", label: "TR" },
    { id: "en", label: "EN" },
  ];

  return (
    <div
      className="flex touch-manipulation rounded-full border border-slate-200/90 bg-white p-0.5 shadow-sm [&::-webkit-tap-highlight-color]:transparent"
      role="group"
      aria-label="Language"
    >
      {options.map(({ id, label }) => {
        const active = locale === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => setLocale(id)}
            className={`relative min-h-[44px] min-w-[2.75rem] touch-manipulation rounded-full px-3 py-2 text-[12px] font-semibold tracking-wide transition-colors sm:min-h-0 sm:min-w-[2.6rem] sm:px-2.5 sm:py-1.5 sm:text-[11px] ${
              active ? "text-white" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {active && (
              <span
                className="absolute inset-0 rounded-full bg-accent shadow-sm"
                aria-hidden
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
