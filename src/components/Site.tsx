import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { dict, LANGS, langPath, packagePath, type Lang, type Dict } from "@/content/i18n";
import { INSTAGRAM_URL, TALLY_URL, whatsappLink } from "@/content/site";
// Placeholder imagery — replace with Anna's own photographs (keep the same filenames or update imports).
import hero from "@/assets/hero.jpg";
import heroVerticalAsset from "@/assets/IMG_2489.jpg.asset.json";
import detail from "@/assets/detail.jpg";
import detailAsset from "@/assets/IMG_2329_still.jpg.asset.json";
import celebration from "@/assets/celebration.jpg";
import creator from "@/assets/creator.jpg";
import veil from "@/assets/veil.jpg";
import petals from "@/assets/petals.jpg";

const GALLERY = [
  { src: petals, w: 1280, h: 896, span: "md:col-span-7" },
  { src: veil, w: 896, h: 1152, span: "md:col-span-5 md:mt-24" },
  { src: celebration, w: 1280, h: 896, span: "md:col-span-6" },
  { src: detail, w: 896, h: 1152, span: "md:col-span-3 md:-mt-16" },
  { src: creator, w: 896, h: 1152, span: "md:col-span-3 md:mt-12" },
  { src: hero, w: 1920, h: 1152, span: "md:col-span-12" },
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e?.isIntersecting && (el.classList.add("is-visible"), io.disconnect()),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function Site({ lang, page = "home" }: { lang: Lang; page?: "home" | "packages" }) {
  const t = dict[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    try { sessionStorage.setItem("aws-lang", lang); } catch { /* ignore */ }
  }, [lang]);
  const wa = whatsappLink(t.whatsapp.msg);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-background focus:p-3">Skip to content</a>
      <Header t={t} lang={lang} page={page} />
      <main id="main" className={page === "packages" ? "pt-20" : undefined}>
        {page === "packages" ? <Packages t={t} lang={lang} /> : <>
        <Hero t={t} />
        <Intro t={t} />
        <Services t={t} />
        <Portfolio t={t} />
        <Experience t={t} />
        <About t={t} />
        <Contact t={t} wa={wa} />
        <Final t={t} />
        </>}
      </main>
      <Footer t={t} wa={wa} lang={lang} />
      {wa && (
        <a href={wa} target="_blank" rel="noopener noreferrer" aria-label={t.whatsapp.label}
          className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>
        </a>
      )}
    </>
  );
}

function Header({ t, lang, page }: { t: Dict; lang: Lang; page: "home" | "packages" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  const links = [["home", "#top"], ["about", "#about"], ["services", "#services"], ["portfolio", "#portfolio"], ["contact", "#contact"]] as const;
  const solid = scrolled || open || page === "packages";
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-background/95 text-foreground backdrop-blur border-b" : "text-ivory"}`}>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link to={langPath(lang)} hash="top" className="font-serif text-2xl tracking-tight">Anna <em className="italic">WedStories</em></Link>
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {links.map(([k, h]) => <Link key={k} to={langPath(lang)} hash={h.slice(1)} className="eyebrow opacity-80 transition-opacity hover:opacity-100">{t.nav[k]}</Link>)}
          <Link to={packagePath(lang)} aria-current={page === "packages" ? "page" : undefined} className="eyebrow opacity-80 hover:opacity-100">{t.packages.eyebrow}</Link>
        </nav>
        <div className="flex items-center gap-4">
          <LangSwitch lang={lang} label={t.nav.lang} page={page} />
          <Link to={langPath(lang)} hash="contact" className={`btn hidden md:inline-flex ${solid ? "btn-solid" : "btn-outline-light"}`}>{t.nav.cta}</Link>
          <button className="lg:hidden p-2" aria-expanded={open} aria-controls="mnav" aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen(!open)}>
            <span className={`block h-px w-6 bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`mt-1.5 block h-px w-6 bg-current transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      <div id="mnav" hidden={!open} className="lg:hidden border-t bg-background px-5 pb-8 pt-4 animate-rise">
        <nav aria-label="Mobile" className="flex flex-col">
          {links.map(([k, h]) => <Link key={k} to={langPath(lang)} hash={h.slice(1)} onClick={() => setOpen(false)} className="border-b py-4 font-serif text-3xl">{t.nav[k]}</Link>)}
          <Link to={packagePath(lang)} onClick={() => setOpen(false)} className="border-b py-4 font-serif text-3xl">{t.packages.eyebrow}</Link>
        </nav>
        <Link to={langPath(lang)} hash="contact" onClick={() => setOpen(false)} className="btn btn-solid mt-6 w-full">{t.nav.cta}</Link>
      </div>
    </header>
  );
}

function LangSwitch({ lang, label, page }: { lang: Lang; label: string; page: "home" | "packages" }) {
  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-2 eyebrow">
        {LANGS.map((l, i) => (
          <li key={l} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="opacity-40">/</span>}
            <Link to={page === "packages" ? packagePath(l) : langPath(l)} hrefLang={l} aria-current={l === lang ? "page" : undefined}
              className={`py-2 ${l === lang ? "underline underline-offset-4" : "opacity-60 hover:opacity-100"}`}>{l.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero({ t }: { t: Dict }) {
  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1400px] items-center gap-6 px-5 pb-14 pt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-36">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="eyebrow animate-rise">{t.hero.location}</p>
          <h1 className="display mt-5 max-w-3xl animate-rise [animation-delay:150ms] lg:tracking-[-0.015em]">{t.hero.title}</h1>
          <p className="mt-6 max-w-md text-lg opacity-90 animate-rise [animation-delay:300ms]">{t.hero.sub}</p>
          <div className="mt-10 flex flex-wrap gap-3 animate-rise [animation-delay:450ms]">
            <a href="#contact" className="btn btn-light">{t.hero.cta}</a>
            <a href="#portfolio" className="btn btn-outline-light">{t.hero.cta2}</a>
          </div>
        </div>
        <div className="order-1 w-full max-w-[280px] justify-self-center overflow-hidden sm:max-w-[380px] lg:order-2 lg:max-w-[520px] lg:justify-self-end">
          <img src={heroVerticalAsset.url} alt={t.hero.alt} width={1080} height={1920} fetchPriority="high"
            className="aspect-[3/4] max-h-[44svh] w-full object-cover animate-slowzoom lg:aspect-auto lg:h-[min(78svh,760px)] lg:max-h-none" />
        </div>
      </div>
    </section>
  );
}

function Intro({ t }: { t: Dict }) {
  return (
    <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-40">
      <Reveal className="md:col-span-5 md:col-start-1">
        <img src={detailAsset.url} alt={t.intro.alt} width={1081} height={1920} loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
      </Reveal>
      <Reveal className="flex flex-col justify-center md:col-span-6 md:col-start-7">
        <p className="eyebrow text-taupe">{t.intro.eyebrow}</p>
        <p className="mt-8 font-serif text-3xl leading-snug md:text-4xl">{t.intro.p1}</p>
        <p className="mt-8 max-w-lg text-muted-foreground leading-relaxed">{t.intro.p2}</p>
      </Reveal>
    </section>
  );
}

function Services({ t }: { t: Dict }) {
  return (
    <section id="services" className="bg-secondary py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-taupe">{t.services.eyebrow}</p>
            <h2 className="headline mt-5 max-w-xl">{t.services.title}</h2>
          </div>
        </Reveal>
        <div className="mt-16 grid border-t md:grid-cols-3">
          {t.services.items.map((s, i) => (
            <Reveal key={s.t} className="border-b py-10 md:border-b-0 md:border-r md:px-8 md:py-14 md:first:pl-0 md:last:border-r-0">
              <span className="font-serif text-6xl italic text-taupe">0{i + 1}</span>
              <h3 className="mt-8 text-3xl">{s.t}</h3>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages({ t, lang }: { t: Dict; lang: Lang }) {
  const p = t.packages;
  return (
    <section id="packages" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow text-taupe">{p.eyebrow}</p>
        <h1 className="headline mt-5">{p.title}</h1>
      </Reveal>
      <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
        {p.items.map((item, i) => (
          <Reveal key={item.name} className={i === 1 ? "flex flex-col border border-foreground bg-secondary p-[10px]" : "flex flex-col border p-[10px]"}>
            <span className="eyebrow text-taupe">0{i + 1}</span>
            <h3 className="mt-4 font-serif text-2xl tracking-[0.2em]">{item.name}</h3>
            <p className="mt-6 border-b pb-6 font-serif text-3xl">{item.hours}</p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {item.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p className="mt-8 font-serif text-2xl">{item.price}</p>
            <Link to={langPath(lang)} hash="contact" className="btn btn-ghost mt-8 self-start">{t.nav.cta}</Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Portfolio({ t }: { t: Dict }) {
  const [idx, setIdx] = useState<number | null>(null);
  const n = GALLERY.length;
  const touch = useRef(0);
  useEffect(() => {
    if (idx === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % n);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + n) % n);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [idx, n]);
  return (
    <section id="portfolio" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-40">
      <Reveal>
        <p className="eyebrow text-taupe">{t.portfolio.eyebrow}</p>
        <h2 className="headline mt-5">{t.portfolio.title}</h2>
        <p className="mt-3 text-xs text-muted-foreground">{t.portfolio.note}</p>
      </Reveal>
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-8">
        {GALLERY.map((g, i) => (
          <Reveal key={i} className={g.span}>
            <button onClick={() => setIdx(i)} aria-label={`${t.portfolio.open}: ${t.portfolio.alts[i]}`} className="group block w-full overflow-hidden">
              <img src={g.src} alt={t.portfolio.alts[i]} width={g.w} height={g.h} loading="lazy"
                className="w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]" />
            </button>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-24 flex flex-col items-center text-center">
        <p className="font-serif text-3xl italic md:text-4xl">{t.portfolio.cta}</p>
        <a href="#contact" className="btn btn-ghost mt-8">{t.portfolio.button}</a>
      </Reveal>
      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label={t.portfolio.alts[idx]} className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/95 p-4 animate-rise"
          onClick={() => setIdx(null)}
          onTouchStart={(e) => (touch.current = (e.touches[0]?.clientX ?? 0))}
          onTouchEnd={(e) => { const d = (e.changedTouches[0]?.clientX ?? 0) - touch.current; if (Math.abs(d) > 50) setIdx((i) => (i! + (d < 0 ? 1 : -1) + n) % n); }}>
          <img src={GALLERY[idx]?.src} alt={t.portfolio.alts[idx]} className="max-h-[85vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <button autoFocus onClick={() => setIdx(null)} aria-label={t.portfolio.close} className="absolute right-4 top-4 p-3 eyebrow text-ivory">✕</button>
          <button onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + n) % n); }} aria-label={t.portfolio.prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-4 text-3xl text-ivory">‹</button>
          <button onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % n); }} aria-label={t.portfolio.next} className="absolute right-2 top-1/2 -translate-y-1/2 p-4 text-3xl text-ivory">›</button>
        </div>
      )}
    </section>
  );
}

function Experience({ t }: { t: Dict }) {
  return (
    <section className="bg-primary py-24 text-primary-foreground md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-taupe">{t.experience.eyebrow}</p>
          <h2 className="headline mt-5">{t.experience.title}</h2>
        </Reveal>
        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {t.experience.steps.map((s, i) => (
            <Reveal key={s.t}>
              <li className="border-t border-taupe/40 pt-8">
                <span className="eyebrow text-taupe">0{i + 1}</span>
                <h3 className="mt-6 text-3xl">{s.t}</h3>
                <p className="mt-4 leading-relaxed opacity-75">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About({ t }: { t: Dict }) {
  return (
    <section id="about" className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-40">
      <Reveal className="order-2 flex flex-col justify-center md:order-1 md:col-span-5">
        <p className="eyebrow text-taupe">{t.about.eyebrow}</p>
        <h2 className="headline mt-5">{t.about.title}</h2>
        <p className="mt-8 text-lg leading-relaxed">{t.about.p1}</p>
      </Reveal>
      <Reveal className="order-1 md:order-2 md:col-span-6 md:col-start-7">
        <img src={creator} alt={t.about.alt} width={896} height={1152} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      </Reveal>
    </section>
  );
}

function Contact({ t, wa }: { t: Dict; wa: string | null }) {
  const c = t.contact;
  return (
    <section id="contact" className="bg-secondary py-24 md:py-36">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow text-taupe">{c.eyebrow}</p>
        <h2 className="headline mt-5">{c.title}</h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">{c.sub}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={TALLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-solid">{c.submit}</a>
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">{t.whatsapp.label}</a>}
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          <Link to="/privacy" className="underline">{t.footer.privacy}</Link>
        </p>
      </Reveal>
    </section>
  );
}

function Final({ t }: { t: Dict }) {
  return (
    <section className="relative overflow-hidden py-32 text-center text-ivory md:py-48">
      <img src={celebration} alt="" width={1280} height={896} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-overlay" />
      <Reveal className="relative mx-auto max-w-3xl px-5">
        <h2 className="headline">{t.final.title}</h2>
        <p className="mt-6 text-lg opacity-90">{t.final.sub}</p>
        <a href="#contact" className="btn btn-light mt-10">{t.final.cta}</a>
      </Reveal>
    </section>
  );
}

function Footer({ t, wa, lang }: { t: Dict; wa: string | null; lang: Lang }) {
  const links = [["home", "#top"], ["about", "#about"], ["services", "#services"], ["portfolio", "#portfolio"], ["contact", "#contact"]] as const;
  return (
    <footer className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <p className="font-serif text-3xl">Anna <em>WedStories</em></p>
          <p className="mt-2 text-sm text-muted-foreground">{t.footer.location}</p>
        </div>
        <nav aria-label={t.footer.nav} className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map(([k, h]) => <Link key={k} to={langPath(lang)} hash={h.slice(1)} className="eyebrow hover:underline">{t.nav[k]}</Link>)}
          <Link to={packagePath(lang)} className="eyebrow hover:underline">{t.packages.eyebrow}</Link>
          {INSTAGRAM_URL && <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="eyebrow hover:underline">Instagram</a>}
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="eyebrow hover:underline">WhatsApp</a>}
        </nav>
      </div>
      <div className="mt-12 flex flex-col justify-between gap-4 border-t pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Anna WedStories. {t.footer.rights}</p>
        <Link to="/privacy" className="hover:underline">{t.footer.privacy}</Link>
      </div>
    </footer>
  );
}
