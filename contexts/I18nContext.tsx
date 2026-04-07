"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  translations,
  type Locale,
} from "@/lib/i18n/translations";

type Messages = (typeof translations)[Locale];

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "oak-locale";

const localeListeners = new Set<() => void>();

function emitLocaleChange() {
  localeListeners.forEach((listener) => listener());
}

function readLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored === "tr" || stored === "en") return stored;
  return defaultLocale;
}

function subscribeLocale(onStoreChange: () => void) {
  localeListeners.add(onStoreChange);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) onStoreChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    localeListeners.delete(onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    readLocale,
    () => defaultLocale,
  );

  useEffect(() => {
    document.documentElement.lang = locale === "tr" ? "tr" : "en";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    emitLocaleChange();
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
