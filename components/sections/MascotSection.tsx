"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { MascotImage } from "@/components/ui/MascotImage";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function MascotSection() {
  const { t } = useI18n();
  const reduce = useReducedMotion();

  return (
    <section
      id="mascot"
      className="scroll-mt-20 relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-white to-oak-page py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_srgb,var(--accent)_10%,transparent),transparent)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-oak-dark sm:text-4xl md:text-5xl">
            {t.mascot.title}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-slate-600">
            {t.mascot.body}
          </p>
        </MotionReveal>

        <div className="relative mt-16 flex justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(88vw,480px)] w-[min(88vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/30 blur-[80px]" />

          <motion.div
            className="relative max-w-2xl"
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -14, 0],
                    rotate: [0, 0.8, -0.8, 0],
                  }
            }
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={reduce ? undefined : { scale: [1, 1.015, 1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MascotImage variant="section" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
