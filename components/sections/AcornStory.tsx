"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/contexts/I18nContext";
import { brandImages } from "@/lib/i18n/assets";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function AcornStory() {
  const { t } = useI18n();
  const q3 = t.acornStory.quote3;

  const openingLines = [t.acornStory.quote1, t.acornStory.quote2];

  return (
    <section
      id="acorn-story"
      className="scroll-mt-20 relative overflow-hidden border-y border-slate-200/80 bg-oak-elevated py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--accent)_8%,transparent),transparent_65%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Acorn
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-oak-dark sm:text-4xl">
            {t.acornStory.title}
          </h2>
        </MotionReveal>

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_minmax(280px,400px)] lg:gap-14 xl:gap-16">
          <div className="space-y-10">
            <MotionReveal>
              <blockquote className="space-y-6 text-xl leading-relaxed text-slate-600 sm:text-2xl sm:leading-relaxed">
                {openingLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="border-l-2 border-cyan-400/60 pl-6"
                  >
                    {line}
                  </motion.p>
                ))}
              </blockquote>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
                className="relative overflow-hidden rounded-2xl border border-cyan-200/60 bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.06)] sm:rounded-3xl sm:p-8"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-100/80 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-8 h-36 w-36 rounded-full bg-emerald-100/60 blur-2xl" />

                <figcaption className="relative mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-700">
                  {q3.prefix}
                </figcaption>

                <blockquote className="relative font-heading text-2xl font-medium leading-snug tracking-tight text-oak-dark sm:text-3xl md:text-[2.15rem] md:leading-[1.25]">
                  <span className="text-slate-700">{q3.body}</span>{" "}
                  <span className="relative inline-block font-semibold">
                    <span className="relative z-10 bg-gradient-to-r from-cyan-700 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                      {q3.emphasis}
                    </span>
                    <span
                      className="absolute -inset-x-1 -inset-y-1 -z-0 rounded-lg bg-cyan-100/50 blur-sm"
                      aria-hidden
                    />
                  </span>
                </blockquote>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
                  <span
                    className="h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_srgb,var(--accent)_50%,transparent)]"
                    aria-hidden
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {q3.closingTag}
                  </span>
                </div>
              </motion.figure>
            </MotionReveal>
          </div>

          <MotionReveal
            delay={0.12}
            className="flex w-full justify-center lg:sticky lg:top-28 lg:self-start lg:pt-4"
          >
            <div className="relative mx-auto w-full max-w-[340px]">
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100%,420px)] w-[min(100%,340px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/25 blur-2xl"
                animate={{ opacity: [0.5, 0.85, 0.5], scale: [0.96, 1.02, 0.96] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="relative mx-auto flex w-full items-center justify-center rounded-3xl border border-slate-200/90 bg-white p-6 shadow-lg sm:p-8"
              >
                <Image
                  src={brandImages.acornStoryVisual}
                  alt={t.acornStory.imageAlt}
                  width={400}
                  height={520}
                  className="mx-auto h-auto w-full max-h-[min(52vh,480px)] max-w-[min(100%,300px)] object-contain object-center sm:max-w-[min(100%,340px)] lg:max-h-[min(58vh,520px)] lg:max-w-full"
                  sizes="(min-width: 1280px) 360px, (min-width: 1024px) 34vw, 85vw"
                />
              </motion.div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
