"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function CTASection() {
  const { t } = useI18n();

  return (
    <section
      id="cta"
      className="scroll-mt-20 relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-br from-cyan-50/80 via-white to-emerald-50/40 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,color-mix(in_srgb,var(--accent)_15%,transparent),transparent_50%)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[120%] -translate-x-1/2 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <MotionReveal>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-oak-dark sm:text-4xl md:text-[2.65rem] md:leading-[1.15]">
            {t.cta.title}
          </h2>
        </MotionReveal>
        <MotionReveal delay={0.1} className="mt-10">
          <motion.a
            href="mailto:pratiktasarimci@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-accent px-10 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25"
          >
            {t.cta.button}
          </motion.a>
          <p className="mt-6 text-sm text-slate-500">
            pratiktasarimci@gmail.com
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
