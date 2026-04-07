"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { brandImages } from "@/lib/i18n/assets";
import { LanguageToggle } from "./LanguageToggle";

const navIds = [
  { href: "#about", key: "oak" as const },
  { href: "#acorn-story", key: "acorn" as const },
  { href: "#logos", key: "logos" as const },
  { href: "#mascot", key: "mascot" as const },
  { href: "#cta", key: "contact" as const },
];

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-[60] touch-manipulation bg-slate-900/40 backdrop-blur-[2px] md:hidden"
          aria-label={t.nav.menuClose}
          onClick={() => setOpen(false)}
        />
      ) : null}

      <header className="fixed inset-x-0 top-0 z-[70] border-b border-slate-300/90 bg-white/95 shadow-[0_2px_20px_rgba(15,23,42,0.07)] backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto grid min-h-[4.35rem] w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-x-3 px-3 py-2.5 sm:min-h-[4.85rem] sm:px-6 sm:py-3 md:min-h-[5.15rem] md:grid-cols-[minmax(0,auto)_minmax(0,1fr)_auto] md:gap-x-5 md:py-3.5 lg:min-h-[5.35rem] lg:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-slate-300/90 bg-white text-slate-800 shadow-sm active:bg-slate-100 md:hidden [&::-webkit-tap-highlight-color]:transparent"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
              onClick={() => setOpen((o) => !o)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>

            <a
              href="#hero"
              className="relative block min-w-0 max-w-full py-0.5 touch-manipulation transition-opacity hover:opacity-[0.92] [&::-webkit-tap-highlight-color]:transparent"
              onClick={() => setOpen(false)}
            >
              <Image
                src={brandImages.mainLogo}
                alt={t.nav.acornTechnologies}
                width={1024}
                height={396}
                className="h-[2.85rem] w-auto max-w-[calc(100vw-7.5rem)] object-contain object-left drop-shadow-[0_2px_14px_rgba(15,23,42,0.1)] sm:h-[3.65rem] sm:max-w-[min(72vw,400px)] md:h-[4.15rem] md:max-w-[min(52vw,460px)] lg:h-[4.65rem] lg:max-w-[min(48vw,520px)] xl:h-[5rem] xl:max-w-[560px]"
                priority
                sizes="(max-width: 640px) calc(100vw - 7.5rem), (max-width: 1024px) 52vw, 560px"
              />
            </a>
          </div>

          <nav
            className="hidden min-w-0 justify-self-center md:flex"
            aria-label="Section navigation"
          >
            <div className="flex max-w-full flex-wrap items-center justify-center gap-0.5 rounded-full border border-slate-200/90 bg-white/95 px-1 py-1 shadow-[0_2px_14px_rgba(15,23,42,0.06)] lg:gap-1 lg:px-1.5">
              {navIds.map(({ href, key }) => (
                <a
                  key={href}
                  href={href}
                  className="touch-manipulation whitespace-nowrap rounded-full px-3 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-cyan-50 hover:text-oak-dark active:bg-cyan-100/70 lg:px-4 lg:py-2.5 lg:text-sm [&::-webkit-tap-highlight-color]:transparent"
                >
                  {t.nav[key]}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex shrink-0 justify-self-end">
            <LanguageToggle />
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            className="max-h-[min(75vh,24rem)] overflow-y-auto overscroll-contain border-t border-slate-200/90 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.1)] md:hidden"
            aria-label={t.nav.mobileNavLabel}
          >
            <ul className="flex flex-col gap-1 px-2 py-3 pb-6">
              {navIds.map(({ href, key }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block touch-manipulation rounded-xl px-4 py-4 text-[16px] font-semibold leading-snug text-slate-800 transition-colors hover:bg-cyan-50 hover:text-oak-dark active:bg-cyan-100/60 [&::-webkit-tap-highlight-color]:transparent"
                    onClick={() => setOpen(false)}
                  >
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
}
