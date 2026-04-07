"use client";

import { useI18n } from "@/contexts/I18nContext";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <p>
          © {year} {t.footer.company}. {t.footer.rights}
        </p>
        <p className="font-mono text-xs text-cyan-700/90">
          Acorn · Oak Technology
        </p>
      </div>
    </footer>
  );
}
