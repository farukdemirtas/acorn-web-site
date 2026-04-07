"use client";

import Image from "next/image";
import { brandImages } from "@/lib/i18n/assets";

type MascotImageProps = {
  variant?: "hero" | "section";
  className?: string;
  priority?: boolean;
  /**
   * Açık temada varsayılan kapalı. Siyah zeminli export için true (koyu plaka + screen).
   */
  knockoutBlack?: boolean;
};

const layout = {
  hero: {
    w: 640,
    h: 640,
    imgClass: "max-w-[min(100%,460px)] lg:max-w-[min(100%,520px)]",
  },
  section: {
    w: 720,
    h: 720,
    imgClass: "max-w-[min(100%,640px)]",
  },
} as const;

export function MascotImage({
  variant = "hero",
  className = "",
  priority,
  knockoutBlack = false,
}: MascotImageProps) {
  const L = layout[variant];

  return (
    <div
      className={`relative flex items-center justify-center ${
        knockoutBlack
          ? "rounded-[1.75rem] bg-zinc-950 sm:rounded-[2rem]"
          : "rounded-[1.75rem] bg-gradient-to-b from-sky-50/80 to-white sm:rounded-[2rem] ring-1 ring-slate-200/60"
      } ${className}`}
    >
      <Image
        src={brandImages.mascot}
        alt="Aco"
        width={L.w}
        height={L.h}
        priority={priority}
        className={`relative z-10 h-auto w-full object-contain select-none ${L.imgClass} ${
          knockoutBlack
            ? "mix-blend-screen contrast-[1.03] brightness-[1.03]"
            : "drop-shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
        }`}
      />
    </div>
  );
}
