import type { NextConfig } from "next";

/**
 * oakacorn.site @ 37.148.212.3 — VPS üzerinde Node ile çalıştırmak için `output: "standalone"`.
 * Build: `npm run build` → `.next/standalone` + `public` ve `.next/static` kopyalama (aşağıdaki script).
 */
const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;
