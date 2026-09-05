# Cabinet de avocatură Colac — demo de prezentare

Demo pentru pitch la client: **Mihai Colac**, cabinet de avocatură, București. Astro 7 + Tailwind 4, output
static. Poate crește direct în proiectul real, fără rescriere.

## Rulare

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/
npm run preview
```

## Din ce a rezultat designul

Research pe piața RO (Regula #2), septembrie 2026, top site-uri din nișă analizate live:
blaj-law.ro, gunea.ro, avocatde10.ro, budusan.com, sfrlaw.ro.

Numitorul comun al nișei, reprodus aici: telefon vizibil permanent + un singur CTA
„Programează o consultație” → hero dark cu fotografie reală → cifre de credibilitate
(Barou, ani, dosare, rating Google) → domenii de practică → despre avocat cu acreditări →
cum decurge colaborarea → onorarii → testimoniale → FAQ → articole → contact cu hartă și
program → footer NAP. WhatsApp permanent (buton pe desktop, bară de acțiune pe mobil).

Diferențiere față de concurență, ca să nu arate nici a template, nici a AI: paletă
cerneală verde-închis + un singur accent alamă; Spectral (serif editorial) pe titluri și
Archivo pe text; domeniile de practică ca index numerotat cu numerale romane și linii
subțiri, nu grilă de carduri identice; testimoniale fără avatare stock; onorarii publicate
pe cifre; alternanță de benzi închise și hârtie caldă, în locul unui dark uniform.

Trei lucruri pe care niciunul din top 5 nu le are:

- **Verificator de termene** (`src/components/DeadlineChecker.astro`): alegi actul primit și
  data de pe el, iar pagina îți spune data-limită și câte zile mai ai. Calculul respectă
  regula din art. 181 Cod procedură civilă (termenul curge din ziua următoare, iar dacă
  ultima zi cade în weekend se prelungește până în prima zi lucrătoare). Are trei stări:
  timp suficient, sub 3 zile (urgent, împinge spre telefon) și termen expirat (vorbește
  despre repunerea în termen). Termenele stau în `deadlines`, din `src/data/site.ts`.
- **Dosare închise**, prezentate anonimizat, cu instanța, problema, rezultatul și durata.
  Are disclaimerul necesar: un rezultat anterior nu garantează același rezultat.
- **Onorarii publicate pe cifre**, ceea ce niciun concurent din top 5 nu face clar.

## Ce e mock (`TODO(real)` în cod)

- **Formularul de programare** (`src/components/ContactForm.astro`) — validează client-side
  (nume, telefon RO, mesaj, acord) și afișează starea de succes, dar nu trimite nimic.
  La real: Resend pentru e-mail + notificare pe WhatsApp, sau Supabase Edge Function.
- **Articolele** (`src/data/site.ts` → `articles`) — trei articole complete, cu pagină
  proprie și pagină de listă. Textele sunt scrise pentru demo. La proiectul real, conținutul
  trece într-o content collection Astro sau în Keystatic, ca să le poată edita clientul.
- **Verificatorul de termene** este corect ca logică, dar termenele au excepții pe care un
  instrument automat nu le acoperă. Interfața o spune explicit; la proiectul real merită
  revăzut cu clientul, cuvânt cu cuvânt.
- **Testimonialele** sunt scrise de mână. La real: preluate din profilul Google al
  cabinetului.
- **Datele cabinetului** — numele avocatului e cel real (Mihai Colac); adresa, telefonul,
  e-mailul, onorariile și programul sunt încă inventate și
  stau toate în `src/data/site.ts`. Se schimbă dintr-un singur fișier.
- **Fotografiile** sunt brandless (Pexels), în `src/assets/`. Se înlocuiesc cu pozele
  clientului: birou, portret, clădire.
- **Harta** este o imagine statică generată din OpenStreetMap, cu atribuire și link spre
  hărți. Fără iframe, deci fără cerere către un terț la fiecare încărcare. Se regenerează
  când se schimbă adresa.

## Pași până la proiectul real

1. Conținut real de la client: date de contact, arii de practică efective, onorarii, poze,
   recenzii Google.
2. Formular funcțional (Resend) + link WhatsApp pe numărul real.
3. **SEO** (nu s-a făcut la demo, conform fluxului): research de keyworduri RO pe nișă și
   oraș, un keyword principal per pagină, title/meta/H1, JSON-LD `LegalService` +
   `LocalBusiness` cu NAP și program, `sitemap.xml`, `robots.txt`, Google Business Profile.
4. **Pachet legal**: banner cookie/GDPR, Termeni și condiții, Politica de confidențialitate,
   Politica de cookies. Plus credit „made by RTR” în footer.
5. Blog real (Keystatic sau content collections), dacă se merge pe trafic organic.
6. Performanță: verificare PageSpeed 90+. Imaginile trec deja prin `astro:assets` (WebP,
   dimensiuni explicite), iar fonturile sunt self-hosted prin `@fontsource`, deci pagina nu
   face nicio cerere către Google Fonts și nu trimite IP-uri vizitatorilor către terți.

## Structură

```
src/
  data/site.ts              date de cabinet, domenii, FAQ, onorarii, testimoniale, articole
  layouts/Layout.astro      html, fonturi, header/footer, bară mobilă, WhatsApp, reveal
  components/Header.astro   header fix + meniu mobil
  components/Footer.astro
  components/ContactForm.astro   formular + date de contact + hartă statică
  components/DeadlineChecker.astro  verificatorul de termene
  pages/index.astro         homepage
  pages/domenii/[slug].astro    pagină per domeniu de practică (8 pagini)
  pages/articole/index.astro    lista de articole
  pages/articole/[slug].astro   articol (3 pagini)
  styles/global.css         tokens (culori, fonturi, radius) + utilitare
```
