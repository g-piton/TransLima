import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8"
        aria-label="Menu principal"
      >
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-lg">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-translima-green text-lg font-black text-white">
            TL
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-black text-translima-black">
              Translima
            </span>
            <span className="block text-xs font-semibold uppercase text-translima-dark">
              Campinas
            </span>
          </span>
        </Link>
      </nav>
    </header>
  );
}
