const categories = [
  { id: "genai", label: "GenAI / ML" },
  { id: "data", label: "Data" },
  { id: "cloud", label: "Cloud" },
  { id: "security", label: "Security" },
] as const;

export function ServicesCategoryNav() {
  return (
    <nav
      aria-label="Service categories"
      className="sticky top-[4.25rem] z-40 border-b border-ink-200/90 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <ul className="flex gap-1 overflow-x-auto pb-1 sm:gap-2">
          {categories.map((c) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                className="inline-flex rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-ink-600 transition hover:border-ink-200 hover:bg-ink-50 hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
