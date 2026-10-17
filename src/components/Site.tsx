import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { dict, LANGS, langPath, type Lang, type Dict } from "@/content/i18n";
import { FORM_ENDPOINT, INSTAGRAM_URL, whatsappLink } from "@/content/site";
// Placeholder imagery — replace with Anna's own photographs (keep the same filenames or update imports).
import hero from "@/assets/hero.jpg";
import detail from "@/assets/detail.jpg";
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

export function Site({ lang }: { lang: Lang }) {
  const t = dict[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    try { sessionStorage.setItem("aws-lang", lang); } catch { /* ignore */ }
  }, [lang]);
  const wa = whatsappLink(t.whatsapp.msg);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-background focus:p-3">Skip to content</a>
      <Header t={t} lang={lang} />
      <main id="main">
        <Hero t={t} />
        <Intro t={t} />
        <Services t={t} />
        <Packages t={t} />
        <Portfolio t={t} />
        <Experience t={t} />
        <About t={t} />
        <Contact t={t} lang={lang} wa={wa} />
        <Final t={t} />
      </main>
      <Footer t={t} wa={wa} />
      {wa && (
        <a href={wa} target="_blank" rel="noopener noreferrer" aria-label={t.whatsapp.label}
          className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>
        </a>
      )}
    </>
  );
}

function Header({ t, lang }: { t: Dict; lang: Lang }) {
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
  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-background/95 text-foreground backdrop-blur border-b" : "text-ivory"}`}>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" className="font-serif text-2xl tracking-tight">Anna <em className="italic">WedStories</em></a>
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {links.map(([k, h]) => <a key={k} href={h} className="eyebrow opacity-80 transition-opacity hover:opacity-100">{t.nav[k]}</a>)}
        </nav>
        <div className="flex items-center gap-4">
          <LangSwitch lang={lang} label={t.nav.lang} />
          <a href="#contact" className={`btn hidden md:inline-flex ${solid ? "btn-solid" : "btn-outline-light"}`}>{t.nav.cta}</a>
          <button className="lg:hidden p-2" aria-expanded={open} aria-controls="mnav" aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen(!open)}>
            <span className={`block h-px w-6 bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`mt-1.5 block h-px w-6 bg-current transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      <div id="mnav" hidden={!open} className="lg:hidden border-t bg-background px-5 pb-8 pt-4 animate-rise">
        <nav aria-label="Mobile" className="flex flex-col">
          {links.map(([k, h]) => <a key={k} href={h} onClick={() => setOpen(false)} className="border-b py-4 font-serif text-3xl">{t.nav[k]}</a>)}
        </nav>
        <a href="#contact" onClick={() => setOpen(false)} className="btn btn-solid mt-6 w-full">{t.nav.cta}</a>
      </div>
    </header>
  );
}

function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-2 eyebrow">
        {LANGS.map((l, i) => (
          <li key={l} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="opacity-40">/</span>}
            <Link to={langPath(l)} hrefLang={l} aria-current={l === lang ? "page" : undefined}
              className={`py-2 ${l === lang ? "underline underline-offset-4" : "opacity-60 hover:opacity-100"}`}>{l.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero({ t }: { t: Dict }) {
  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] overflow-hidden text-ivory">
      <img src={hero} alt={t.hero.alt} width={1920} height={1152} fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[45%_center] animate-slowzoom" />
      <div className="absolute inset-0 bg-gradient-to-t from-overlay via-transparent to-overlay" />
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-24">
        <p className="eyebrow animate-rise">{t.hero.location}</p>
        <h1 className="display mt-5 max-w-4xl animate-rise [animation-delay:150ms]">{t.hero.title}</h1>
        <p className="mt-6 max-w-md text-lg opacity-90 animate-rise [animation-delay:300ms]">{t.hero.sub}</p>
        <div className="mt-10 flex flex-wrap gap-3 animate-rise [animation-delay:450ms]">
          <a href="#contact" className="btn btn-light">{t.hero.cta}</a>
          <a href="#portfolio" className="btn btn-outline-light">{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}

function Intro({ t }: { t: Dict }) {
  return (
    <section className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-40">
      <Reveal className="md:col-span-5 md:col-start-1">
        <img src={detail} alt={t.intro.alt} width={896} height={1152} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      </Reveal>
      <Reveal className="flex flex-col justify-center md:col-span-6 md:col-start-7">
        <p className="eyebrow text-taupe">{t.intro.eyebrow}</p>
        <p className="mt-8 font-serif text-3xl leading-snug md:text-4xl">{t.intro.p1}</p>
        <p className="mt-8 max-w-lg text-muted-foreground leading-relaxed">{t.intro.p2}</p>
        <p className="mt-6 max-w-lg text-sm italic text-taupe">{t.intro.placeholder}</p>
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

function Packages({ t }: { t: Dict }) {
  const p = t.packages;
  return (
    <section id="packages" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow text-taupe">{p.eyebrow}</p>
        <h2 className="headline mt-5">{p.title}</h2>
      </Reveal>
      <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
        {p.items.map((item, i) => (
          <Reveal key={item.name} className={i === 1 ? "flex flex-col border border-foreground bg-secondary p-8 md:p-10" : "flex flex-col border p-8 md:p-10"}>
            <span className="eyebrow text-taupe">0{i + 1}</span>
            <h3 className="mt-4 font-serif text-2xl tracking-[0.2em]">{item.name}</h3>
            <p className="mt-6 border-b pb-6 font-serif text-3xl">{item.hours}</p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {item.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p className="mt-8 font-serif text-2xl">{item.price}</p>
            <a href="#contact" className="btn btn-ghost mt-8 self-start">{t.nav.cta}</a>
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
        <p className="mt-6 text-sm italic text-taupe">{t.about.placeholder}</p>
      </Reveal>
      <Reveal className="order-1 md:order-2 md:col-span-6 md:col-start-7">
        <img src={creator} alt={t.about.alt} width={896} height={1152} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      </Reveal>
    </section>
  );
}

type Status = "idle" | "sending" | "success" | "error" | "unconfigured";

function Contact({ t, lang, wa }: { t: Dict; lang: Lang; wa: string | null }) {
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const services = t.services.items.map((s) => s.t);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const errs: Record<string, string> = {};
    for (const f of ["name", "email", "date", "location"]) if (!String(fd.get(f) ?? "").trim()) errs[f] = c.errors.required;
    const email = String(fd.get("email") ?? "");
    if (!errs["email"] && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errs["email"] = c.errors.email;
    if (fd.getAll("services").length === 0) errs["services"] = c.errors.services;
    if (!fd.get("consent")) errs["consent"] = c.errors.consent;
    setErrors(errs);
    if (Object.keys(errs).length) {
      (form.querySelector(`[name="${Object.keys(errs)[0]}"]`) as HTMLElement | null)?.focus();
      return;
    }
    if (!FORM_ENDPOINT) { setStatus("unconfigured"); return; }
    setStatus("sending");
    try {
      const payload = Object.fromEntries([...fd.keys()].map((k) => [k, fd.getAll(k).join(", ")]));
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...payload, siteLanguage: lang, _subject: "New wedding inquiry — Anna WedStories" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "mt-2 w-full border-0 border-b bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground focus-visible:outline-none";
  const Err = ({ k }: { k: string }) => errors[k] ? <p id={`${k}-err`} className="mt-2 text-sm text-destructive">{errors[k]}</p> : null;
  const aria = (k: string) => ({ "aria-invalid": !!errors[k] || undefined, "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <section id="contact" className="bg-secondary py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-4">
          <p className="eyebrow text-taupe">{c.eyebrow}</p>
          <h2 className="headline mt-5">{c.title}</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{c.sub}</p>
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8">{t.whatsapp.label}</a>}
        </Reveal>
        <form onSubmit={onSubmit} noValidate className="grid gap-8 md:col-span-7 md:col-start-6 md:grid-cols-2">
          <label className="block"><span className="eyebrow">{c.name} *</span><input name="name" autoComplete="name" className={field} {...aria("name")} /><Err k="name" /></label>
          <label className="block"><span className="eyebrow">{c.email} *</span><input name="email" type="email" autoComplete="email" className={field} {...aria("email")} /><Err k="email" /></label>
          <label className="block"><span className="eyebrow">{c.whatsapp}</span><input name="whatsapp" type="tel" autoComplete="tel" className={field} /></label>
          <label className="block"><span className="eyebrow">{c.date} *</span><input name="date" type="date" className={field} {...aria("date")} /><Err k="date" /></label>
          <label className="block md:col-span-2"><span className="eyebrow">{c.location} *</span><input name="location" className={field} {...aria("location")} /><Err k="location" /></label>
          <fieldset className="md:col-span-2" {...aria("services")}>
            <legend className="eyebrow">{c.services} *</legend>
            <div className="mt-4 flex flex-wrap gap-3">
              {services.map((s) => (
                <label key={s} className="flex cursor-pointer items-center gap-2 border px-4 py-3 text-sm has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:focus-visible]:outline has-[:focus-visible]:outline-1">
                  <input type="checkbox" name="services" value={s} className="sr-only" />{s}
                </label>
              ))}
            </div>
            <Err k="services" />
          </fieldset>
          <label className="block md:col-span-2"><span className="eyebrow">{c.language}</span>
            <select name="preferredLanguage" defaultValue={lang} className={field}>
              {(["en", "es", "pl"] as const).map((l) => <option key={l} value={l}>{c.langs[l]}</option>)}
            </select>
          </label>
          <label className="block md:col-span-2"><span className="eyebrow">{c.message}</span><textarea name="message" rows={4} className={`${field} resize-y`} /></label>
          <label className="flex items-start gap-3 text-sm text-muted-foreground md:col-span-2">
            <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-[var(--color-primary)]" {...aria("consent")} />
            <span>{c.consent} <Link to="/privacy" className="underline">{t.footer.privacy}</Link></span>
          </label>
          <div className="md:col-span-2"><Err k="consent" /></div>
          <div className="md:col-span-2">
            <button type="submit" disabled={status === "sending"} className="btn btn-solid w-full disabled:opacity-60 md:w-auto">
              {status === "sending" ? c.sending : c.submit}
            </button>
            <div role="status" aria-live="polite" className="mt-6 text-sm">
              {status === "success" && <p>{c.success}</p>}
              {status === "error" && <p className="text-destructive">{c.error}</p>}
              {status === "unconfigured" && <p className="text-destructive">{c.notConfigured}</p>}
            </div>
          </div>
        </form>
      </div>
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

function Footer({ t, wa }: { t: Dict; wa: string | null }) {
  const links = [["home", "#top"], ["about", "#about"], ["services", "#services"], ["portfolio", "#portfolio"], ["contact", "#contact"]] as const;
  return (
    <footer className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <p className="font-serif text-3xl">Anna <em>WedStories</em></p>
          <p className="mt-2 text-sm text-muted-foreground">{t.footer.location}</p>
        </div>
        <nav aria-label={t.footer.nav} className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map(([k, h]) => <a key={k} href={h} className="eyebrow hover:underline">{t.nav[k]}</a>)}
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
