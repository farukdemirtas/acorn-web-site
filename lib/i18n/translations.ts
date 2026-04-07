/**
 * Central translation map for Oak Technology landing.
 * Add keys here as the site grows; TR is the default locale.
 */
export type Locale = "tr" | "en";

export const defaultLocale: Locale = "tr";

export const translations = {
  tr: {
    meta: {
      title: "Oak Technology — Acorn",
      description:
        "Veri odaklı, ölçeklenebilir dijital ürünler ve yapay zeka çözümleri.",
    },
    nav: {
      oak: "Oak",
      acorn: "Acorn",
      logos: "Logo",
      mascot: "Aco",
      contact: "İletişim",
      acornTechnologies: "ACORN TECHNOLOGIES",
      menuOpen: "Menüyü aç",
      menuClose: "Menüyü kapat",
      mobileNavLabel: "Bölüm menüsü",
    },
    hero: {
      title: "Küçük Bir Tohumdan Büyük Teknoloji",
      subtitle: "Veriyle büyüyen dijital ürünler geliştiriyoruz.",
      cta: "Keşfet",
    },
    about: {
      title: "Oak Technology",
      lead:
        "Oak Technology; yapay zeka, veri mühendisliği ve mobil deneyim odağında çalışan bir yazılım şirketidir.",
      p1:
        "Küresel ölçekte sürdürülebilir mimariler kurar, ürünlerinizi veriyle besler ve ölçülebilir büyüme sağlarız. Mobil uygulamalardan kurumsal platformlara kadar uçtan uca dijital çözümler üretiriz.",
      p2:
        "Teknoloji yığınını sade tutar, mühendislik disiplinini ön planda tutarız — böylece ekipleriniz hızlanır, kullanıcılarınız memnun kalır.",
      statProducts: "Ölçeklenebilir ürünler",
      statData: "Veri & AI",
      statMobile: "Mobil öncelikli",
    },
    acornStory: {
      title: "Acorn Hikayesi",
      imageAlt:
        "Palamut içinde filizlenen ağaç illüstrasyonu — küçük tohumdan büyüyen yaşam.",
      quote1:
        "Acorn, küçük bir fikrin büyük bir etkiye dönüşebileceğine inanır.",
      quote2:
        "Veriyi toplar, işler ve ölçeklenebilir dijital ürünlere dönüştürürüz.",
      quote3: {
        full: "Çünkü En büyük ağaçlar, En küçük tohumlarla başlar.",
        prefix: "Çünkü",
        body: "En büyük ağaçlar,",
        emphasis: "En küçük tohumlarla başlar.",
        closingTag: "tohum → ölçek",
      },
    },
    logoShowcase: {
      title: "Marka Kimliği",
      subtitle: "Ana logo, ikon ve logotype — tek çatı altında tutarlı bir dil.",
      mainLabel: "Ana logo",
      iconLabel: "İkon",
      logotypeLabel: "Logotype",
    },
    mascot: {
      title: "Aco ile tanışın",
      body: "Veriyi toplayan, işleyen ve anlamlandıran akıllı yardımcı.",
    },
    cta: {
      title: "Geleceği birlikte inşa edelim",
      button: "İletişime Geç",
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      company: "Oak Technology",
    },
  },
  en: {
    meta: {
      title: "Oak Technology — Acorn",
      description:
        "Data-driven, scalable digital products and AI solutions.",
    },
    nav: {
      oak: "Oak",
      acorn: "Acorn",
      logos: "Logos",
      mascot: "Aco",
      contact: "Contact",
      acornTechnologies: "ACORN TECHNOLOGIES",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      mobileNavLabel: "Section menu",
    },
    hero: {
      title: "From a Small Seed to Big Technology",
      subtitle: "We build data-driven scalable digital products.",
      cta: "Explore",
    },
    about: {
      title: "Oak Technology",
      lead:
        "Oak Technology is a software company focused on AI, data engineering, and mobile experiences.",
      p1:
        "We architect sustainable systems at global scale, feed your products with data, and enable measurable growth. From mobile apps to enterprise platforms, we ship end-to-end digital solutions.",
      p2:
        "We keep the stack lean and engineering discipline high — so your teams move faster and your users stay delighted.",
      statProducts: "Scalable products",
      statData: "Data & AI",
      statMobile: "Mobile-first",
    },
    acornStory: {
      title: "The Acorn Story",
      imageAlt:
        "Illustration of a tree growing inside an acorn — life from a small seed.",
      quote1:
        "Acorn believes that small ideas can grow into massive impact.",
      quote2:
        "We collect, process, and transform data into scalable digital products.",
      quote3: {
        full: "Because the greatest trees begin from the smallest seeds.",
        prefix: "Because",
        body: "the greatest trees begin from ",
        emphasis: "the smallest seeds.",
        closingTag: "seed → scale",
      },
    },
    logoShowcase: {
      title: "Logo Showcase",
      subtitle: "Main logo, icon, and logotype — one coherent visual language.",
      mainLabel: "Main logo",
      iconLabel: "Icon",
      logotypeLabel: "Logotype",
    },
    mascot: {
      title: "Meet Aco",
      body: "Your smart companion for collecting, processing and understanding data.",
    },
    cta: {
      title: "Let’s build the future together",
      button: "Contact Us",
    },
    footer: {
      rights: "All rights reserved.",
      company: "Oak Technology",
    },
  },
} as const;
