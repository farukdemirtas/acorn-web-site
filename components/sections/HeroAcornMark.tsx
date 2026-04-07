"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const letters = ["A", "C", "O", "R", "N"] as const;

const letterSizeClass =
  "inline-block font-heading font-bold leading-none tracking-[-0.04em] text-[clamp(2.85rem,9.5vw,4.25rem)]";

function letterGradient(ch: (typeof letters)[number]) {
  if (ch === "O") {
    return "bg-gradient-to-b from-emerald-500 via-teal-600 to-cyan-900 bg-clip-text text-transparent";
  }
  return "bg-gradient-to-b from-cyan-500 via-cyan-600 to-slate-900 bg-clip-text text-transparent";
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.18,
    },
  },
} as const;

export function HeroAcornMark() {
  const reduceMotion = useReducedMotion();

  const letterRevealVariants = useMemo(
    () =>
      ({
        hidden: {
          opacity: 0,
          y: reduceMotion ? 8 : 26,
          scale: reduceMotion ? 0.96 : 0.82,
          filter: reduceMotion ? "none" : "blur(10px)",
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "drop-shadow(0 6px 18px rgba(8, 145, 178, 0.42))",
          transition: { type: "spring" as const, stiffness: 380, damping: 22 },
        },
      }) as const,
    [reduceMotion],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="mt-8 max-w-xl"
    >
      <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-300/80 bg-gradient-to-br from-white via-cyan-50/50 to-white p-5 shadow-[0_16px_48px_rgba(8,145,178,0.18),0_0_0_1px_rgba(255,255,255,0.8)_inset] transition-shadow duration-300 hover:shadow-[0_22px_56px_rgba(8,145,178,0.26)] sm:p-7">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-emerald-200/35 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 0%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 55%)",
          }}
        />

        <motion.div
          className="relative -mx-0.5 flex cursor-pointer select-none flex-wrap items-end gap-[0.06em] rounded-xl px-0.5 py-1 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 sm:gap-[0.1em]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          whileTap={{ scale: 0.99 }}
          aria-label="ACORN"
        >
          {letters.map((ch, i) => (
            <motion.span
              key={`${ch}-${i}`}
              variants={letterRevealVariants}
              whileHover={{
                y: -8,
                scale: 1.09,
                filter: "drop-shadow(0 14px 32px rgba(5, 150, 105, 0.45))",
                transition: { type: "spring", stiffness: 420, damping: 16 },
              }}
              className={`${letterSizeClass} ${letterGradient(ch)}`}
            >
              {ch}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="mt-5 h-1 w-full max-w-[14rem] origin-left rounded-full bg-gradient-to-r from-accent via-emerald-500 to-teal-400 shadow-[0_0_20px_rgba(8,145,178,0.35)]"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
