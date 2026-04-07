"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import { MascotImage } from "@/components/ui/MascotImage";
import { HeroAcornMark } from "./HeroAcornMark";

/**
 * Hero — açık teknolojik zemin, cam hissi, maskot açık panelde.
 */
export function Hero() {
  const { t } = useI18n();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [3, -3]), {
    stiffness: 160,
    damping: 26,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-4, 4]), {
    stiffness: 160,
    damping: 26,
  });

  const glowXPercent = useTransform(mx, [0, 1], [30, 70]);
  const glowYPercent = useTransform(my, [0, 1], [60, 40]);
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowXPercent}% ${glowYPercent}%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 58%)`;

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  function onPointerLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-oak-page pb-16 pt-[6.85rem] sm:pt-[7.1rem] lg:pt-[7.35rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--accent) 14%, transparent) 1px, transparent 0)`,
          backgroundSize: "52px 52px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_80%_-10%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_50%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-cyan-200/30 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-200/25 blur-[110px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl flex-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-12 lg:px-8">
        <motion.div
          className="max-w-xl lg:pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="mb-5 inline-flex items-center rounded-full border border-cyan-200/80 bg-white/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-700 shadow-sm backdrop-blur-sm">
            Oak Technology
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-oak-dark sm:text-5xl lg:text-[3.05rem]">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600 sm:text-xl">
            {t.hero.subtitle}
          </p>

          <HeroAcornMark />

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#acorn-story"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.hero.cta}
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full border border-slate-200/90 bg-white/90 px-7 py-3 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-colors hover:border-cyan-300/80 hover:bg-white"
            >
              {t.nav.contact}
            </a>
          </div>
        </motion.div>

        <div
          className="relative flex min-h-[min(68vh,500px)] items-center justify-center lg:min-h-[min(82vh,600px)] lg:justify-end"
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end">
            <div className="relative h-[min(82vw,400px)] w-[min(82vw,400px)] lg:h-[min(32rem,88%)] lg:w-[min(32rem,88%)]">
              <div className="absolute inset-0 rounded-full border border-cyan-200/40" />
              <div className="absolute inset-[10%] rounded-full border border-dashed border-slate-200/80" />
            </div>
          </div>

          <motion.div
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1400,
            }}
            className="relative z-10 w-full max-w-[min(100%,480px)] lg:max-w-none"
          >
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[88%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[45%] opacity-90"
              style={{ background: glowBackground }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 flex justify-center lg:justify-end"
            >
              <MascotImage variant="hero" priority />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
