# Santa Services LLC — Website

Next.js (React) + TypeScript + Tailwind CSS. Professional consulting / services landing page.

## Prerequisites

- [Node.js](https://nodejs.org/) LTS (includes npm)

## Quick start

```bash
cd c:\SourceCode\santaservicesllc
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- **Production build:** `npm run build` then `npm start`
- **Lint:** `npm run lint`

---

## Files and responsibilities

| File | Role |
|------|------|
| `src/app/layout.tsx` | Root layout: loads **Inter** + **DM Sans** (`next/font/google`), sets HTML `lang`, wraps all pages in `<body>`, exports **SEO metadata** (`title`, `description`). Imports global CSS. |
| `src/app/globals.css` | Tailwind layers + base CSS variables (`--background`, `--foreground`), smooth scroll. |
| `src/app/page.tsx` | **Home route** (`/`): defines `services` and `approach` arrays, renders `SiteHeader`, four **inline sections** (hero, services, approach, contact), then `SiteFooter`. |
| `src/components/site-header.tsx` | Sticky header: logo (`next/link` → `/`), **anchor nav** (`#services`, `#approach`, `#contact`), primary CTA to `#contact`. |
| `src/components/site-footer.tsx` | Footer: company name, placeholder blurb, **dynamic year** via `new Date().getFullYear()`. |
| `tailwind.config.ts` | Theme extensions: `brand` / `ink` colors, `font-sans` / `font-display` tied to CSS variables from layout. |

There is **no client-side state** (`useState` / context) on the home page: content is **static JSX** plus **hash navigation**.

---

## Component hierarchy (React tree)

```mermaid
flowchart TB
  subgraph RootLayout["RootLayout — layout.tsx"]
    HTML["html lang=en + font CSS variables"]
    BODY["body.min-h-screen"]
  end

  subgraph HomePage["HomePage — page.tsx"]
    SH["SiteHeader"]
    MAIN["main"]
    SF["SiteFooter"]
  end

  subgraph MainSections["main — inline sections"]
    H["section: Hero — aria-labelledby hero-heading"]
    SVC["section#services — maps services[]"]
    APP["section#approach — maps approach[]"]
    CTC["section#contact — mailto CTA"]
  end

  HTML --> BODY
  BODY --> HomePage
  SH --> MAIN
  MAIN --> H
  MAIN --> SVC
  MAIN --> APP
  MAIN --> CTC
  MAIN --> SF
```

---

## Request and render flow (Next.js App Router)

```mermaid
sequenceDiagram
  participant Browser
  participant Next as Next.js server
  participant RL as RootLayout
  participant HP as page.tsx HomePage

  Browser->>Next: GET /
  Next->>RL: Render layout shell
  RL->>HP: Render children for route /
  HP->>HP: Build services + approach in memory
  HP->>HP: Render SiteHeader, sections, SiteFooter
  Next-->>Browser: HTML + CSS + font preload
  Note over Browser: Nav clicks use hash anchors; no full page load
```

---

## Data flow (home page)

`services` and `approach` live **only in `page.tsx`**. They are plain arrays; the page **maps** them into `<li>` grids. Nothing is fetched from an API and nothing is shared across routes yet.

```mermaid
flowchart LR
  subgraph page_tsx["page.tsx"]
    A["services: title + description"]
    B["approach: title + body"]
  end

  A --> S1["Services section — .map → cards"]
  B --> S2["Approach section — .map → numbered steps"]
```

---

## User navigation flow (anchors)

The header uses **same-page anchors**. Clicking **Services**, **Approach**, **Contact**, or **Get in touch** scrolls to the matching `id` (`#services`, `#approach`, `#contact`). `globals.css` sets `scroll-behavior: smooth` on `html`.

```mermaid
flowchart LR
  subgraph Header["SiteHeader"]
    L1["#services"]
    L2["#approach"]
    L3["#contact"]
  end

  subgraph Page["page.tsx sections"]
    SEC["id=services"]
    APP["id=approach"]
    CON["id=contact"]
  end

  L1 --> SEC
  L2 --> APP
  L3 --> CON
```

---

## Dependencies between pieces

```mermaid
flowchart TB
  layout["layout.tsx"] --> fonts["next/font: Inter, DM Sans"]
  layout --> meta["metadata: title, description"]
  layout --> gcss["globals.css"]

  page["page.tsx"] --> hdr["SiteHeader"]
  page --> foot["SiteFooter"]
  page --> tw["Tailwind classes → tailwind.config.ts"]

  hdr --> link["next/link → /"]
  hdr --> hash["anchor a href=#..."]
```

---

## Customization checklist

- Contact email lives in **`src/config/site.ts`** (`CONTACT_EMAIL`, currently **srimaniv@santaservicesllc.com**). Update there to change it site-wide (or wire a contact form).
- Update **footer** copy in `src/components/site-footer.tsx` (address, disclosures).
- Edit **`services`** and **`approach`** arrays in `src/app/page.tsx` for your offerings and methodology.
- Adjust **metadata** in `src/app/layout.tsx` for SEO title and description.
