"use client";

import { useI18n } from "@/contexts/I18nContext";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { StaggerChildren } from "@/components/ui/StaggerChildren";

export function AboutOak() {
  const { t } = useI18n();

  const stats = [
    t.about.statData,
    t.about.statMobile,
    t.about.statProducts,
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-slate-200/80 bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <MotionReveal>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-200/50 bg-gradient-to-br from-white via-sky-50/50 to-cyan-50/30 p-9 shadow-[0_20px_60px_rgba(8,145,178,0.08)] sm:p-10">
              <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-emerald-200/30 blur-3xl" />
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-oak-dark sm:text-4xl">
                {t.about.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {t.about.lead}
              </p>
            </div>
          </MotionReveal>

          <div>
            <MotionReveal delay={0.08}>
              <p className="text-lg leading-relaxed text-slate-600">
                {t.about.p1}
              </p>
            </MotionReveal>
            <MotionReveal delay={0.14} className="mt-6">
              <p className="text-lg leading-relaxed text-slate-600">
                {t.about.p2}
              </p>
            </MotionReveal>

            <StaggerChildren className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200/90 bg-oak-page px-4 py-4 text-center text-sm font-semibold text-oak-dark shadow-sm"
                >
                  {label}
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
