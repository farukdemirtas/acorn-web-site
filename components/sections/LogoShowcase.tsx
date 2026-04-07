"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/contexts/I18nContext";
import { brandImages } from "@/lib/i18n/assets";
import { MotionReveal } from "@/components/ui/MotionReveal";

const cards = [
  {
    key: "main" as const,
    src: brandImages.mainLogo,
    labelKey: "mainLabel" as const,
    width: 1024,
    height: 396,
    imgClass:
      "h-auto w-full max-h-[200px] object-contain object-center sm:max-h-[240px] lg:max-h-[280px]",
    sizes: "(min-width: 1024px) 520px, (min-width: 640px) 85vw, 90vw",
  },
  {
    key: "icon" as const,
    src: brandImages.acornIcon,
    labelKey: "iconLabel" as const,
    width: 320,
    height: 320,
    imgClass:
      "h-44 w-44 object-contain sm:h-52 sm:w-52 lg:h-64 lg:w-64",
    sizes: "(min-width: 1024px) 256px, (min-width: 640px) 208px, 176px",
  },
  {
    key: "logotype" as const,
    src: brandImages.logotype,
    labelKey: "logotypeLabel" as const,
    width: 520,
    height: 140,
    imgClass:
      "h-auto w-full max-h-[160px] object-contain sm:max-h-[200px] lg:max-h-[240px]",
    sizes: "(min-width: 1024px) 28vw, (min-width: 640px) 30vw, 88vw",
  },
];

export function LogoShowcase() {
  const { t } = useI18n();

  return (
    <section
      id="logos"
      className="scroll-mt-20 border-t border-slate-200/80 bg-oak-page py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-oak-dark sm:text-4xl">
            {t.logoShowcase.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t.logoShowcase.subtitle}
          </p>
        </MotionReveal>

        <div className="grid gap-6 sm:grid-cols-3 sm:gap-5 lg:gap-8">
          {cards.map(({ key, src, labelKey, width, height, imgClass, sizes }, index) => (
            <MotionReveal key={key} delay={index * 0.06}>
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_20px_48px_rgba(8,145,178,0.1)]"
              >
                <div className="flex min-h-[220px] flex-1 items-center justify-center bg-gradient-to-b from-slate-50/80 to-white px-6 py-12 sm:min-h-[260px] sm:px-8 sm:py-14 lg:min-h-[300px] lg:px-10 lg:py-16">
                  <Image
                    src={src}
                    alt={t.logoShowcase[labelKey]}
                    width={width}
                    height={height}
                    className={imgClass}
                    sizes={sizes}
                    priority={key === "main"}
                  />
                </div>
                <p className="border-t border-slate-100 bg-white px-4 py-3.5 text-center text-sm font-semibold text-oak-dark">
                  {t.logoShowcase[labelKey]}
                </p>
              </motion.div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
