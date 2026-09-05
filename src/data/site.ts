export const site = {
  /** Numele afișat ca logotip, în capitale. */
  wordmark: "MIHAI COLAC",
  /** Numele avocatului, folosit în titluri și în secțiunea „Despre”. */
  lawyer: "Mihai Colac",
  name: "Colac",
  legalName: "Cabinet de avocat „Mihai Colac”",
  tagline: "Cabinet de avocatură · București",
  bar: "Baroul București",
  since: 2011,
  phone: "0721 448 210",
  phoneHref: "tel:+40721448210",
  whatsapp: "https://wa.me/40721448210",
  email: "contact@avocatcolac.ro",
  address: "Str. Popa Savu 12, et. 2, Sector 1, București",
  mapsUrl: "https://maps.google.com/?q=Strada+Popa+Savu+12+Bucuresti",
  schedule: [
    { d: "Luni – Joi", h: "09:00 – 18:00" },
    { d: "Vineri", h: "09:00 – 16:00" },
    { d: "Sâmbătă", h: "doar pe bază de programare" },
  ],
};

export type Practice = {
  slug: string;
  num: string;
  title: string;
  short: string;
  intro: string;
  items: string[];
  note: string;
};

export const practices: Practice[] = [
  {
    slug: "drept-penal",
    num: "I",
    title: "Drept penal",
    short:
      "Asistență de la prima citație până la ultimul termen. Merg cu tine la audieri, indiferent de oră.",
    intro:
      "Cele mai multe greșeli se fac în primele 48 de ore, la prima audiere, când omul crede că „nu are nimic de ascuns” și vorbește fără avocat. De acolo pornește tot dosarul.",
    items: [
      "Asistență la audieri, în fața poliției și a parchetului",
      "Plângeri penale și plângeri împotriva soluțiilor de clasare",
      "Măsuri preventive: reținere, control judiciar, arest",
      "Infracțiuni rutiere: alcool, viteză, accidente cu vătămare",
      "Infracțiuni economice, evaziune fiscală, delapidare",
      "Apărare în fața instanței, în fond și în apel",
    ],
    note: "Programul de urgență pentru audieri funcționează și în afara orelor de birou.",
  },
  {
    slug: "dreptul-familiei",
    num: "II",
    title: "Dreptul familiei",
    short:
      "Divorț, custodie, pensie de întreținere, partaj. Cu grija de a nu transforma copiii în probe.",
    intro:
      "Un divorț la notar durează două săptămâni și costă câteva sute de lei. Unul în instanță, cu copil minor și un apartament în discuție, durează între 8 luni și 2 ani. Îți spunem de la început în care variantă te afli.",
    items: [
      "Divorț prin acord, la notar sau în instanță",
      "Divorț din culpă, cu probatoriu",
      "Exercitarea autorității părintești și program de vizită",
      "Stabilirea și modificarea pensiei de întreținere",
      "Partajul bunurilor comune",
      "Ordin de protecție în caz de violență domestică",
    ],
    note: "Prima consultație în dosarele cu minori durează, de regulă, o oră întreagă.",
  },
  {
    slug: "drept-civil-si-contracte",
    num: "III",
    title: "Drept civil și contracte",
    short:
      "Contracte redactate ca să nu ajungă în instanță și litigii duse până la capăt când au ajuns.",
    intro:
      "Aproape toate litigiile civile pe care le primim pornesc de la un contract descărcat de pe internet și semnat fără să fie citit. Un contract verificat înainte costă cât o oră de consultație.",
    items: [
      "Redactare și negociere de contracte",
      "Pretenții, daune, răspundere contractuală",
      "Anulare de acte și rezoluțiune",
      "Succesiuni, dezbateri și ieșiri din indiviziune",
      "Uzucapiune, revendicare, grănițuire",
      "Recuperare de creanțe de la persoane fizice",
    ],
    note: "Verificarea unui contract standard se face în 2 zile lucrătoare.",
  },
  {
    slug: "dreptul-muncii",
    num: "IV",
    title: "Dreptul muncii",
    short:
      "Contestarea deciziei de concediere are un termen de 30 de zile. După el, nu se mai poate face nimic.",
    intro:
      "Angajatorii pierd majoritatea litigiilor de muncă pe formă, nu pe fond: decizii nemotivate, cercetare disciplinară făcută de mântuială, termene depășite. Verificăm întâi forma.",
    items: [
      "Contestarea deciziei de concediere sau de sancționare",
      "Drepturi salariale neplătite, ore suplimentare, spor",
      "Cercetare disciplinară, pentru angajați și angajatori",
      "Negocierea încetării prin acordul părților",
      "Clauze de neconcurență și de confidențialitate",
      "Accidente de muncă și răspunderea angajatorului",
    ],
    note: "Adu decizia și contractul de muncă la prima întâlnire; restul se poate obține ulterior.",
  },
  {
    slug: "executari-silite",
    num: "V",
    title: "Executări silite",
    short:
      "Contestația la executare se depune în 15 zile de la comunicare. Se poate cere și suspendarea popririi.",
    intro:
      "Un salariu poprit înseamnă, în practică, o lună fără bani. În multe dosare, creanța este prescrisă sau titlul executoriu nu este valabil, iar poprirea se ridică.",
    items: [
      "Contestație la executare și suspendarea executării",
      "Ridicarea popririi pe salariu sau pe conturi",
      "Contestarea cheltuielilor de executare",
      "Prescripția dreptului de a cere executarea",
      "Apărare în executările pornite de recuperatorii de creanțe",
      "Executare silită pornită în favoarea ta, ca și creditor",
    ],
    note: "Adu comunicarea de la executor: termenul de 15 zile curge de la data de pe ea.",
  },
  {
    slug: "drept-imobiliar",
    num: "VI",
    title: "Drept imobiliar",
    short:
      "Verificarea unui apartament înainte de avans costă mult mai puțin decât un proces după.",
    intro:
      "Verificăm cartea funciară, istoricul proprietății, situația urbanistică și clauzele antecontractului înainte să dai avansul, nu după ce s-a semnat la notar.",
    items: [
      "Due diligence pe apartamente, case și terenuri",
      "Antecontract, promisiune de vânzare, avans",
      "Litigii cu dezvoltatorii și recepția cu vicii",
      "Evacuări și litigii între proprietar și chiriaș",
      "Intabulare, dezmembrare, alipire",
      "Autorizații de construire și litigii de urbanism",
    ],
    note: "Raportul de verificare a unui imobil se livrează în 3 – 5 zile lucrătoare.",
  },
  {
    slug: "drept-comercial",
    num: "VII",
    title: "Drept comercial și societar",
    short:
      "Înființări, modificări la Registrul Comerțului, contracte comerciale și recuperare de facturi.",
    intro:
      "Pentru firme mici, o parte din muncă este administrativă și repetitivă. Pentru ea avem abonament lunar, ca să nu plătești onorariu separat la fiecare hârtie.",
    items: [
      "Înființare SRL, PFA, modificări la ONRC",
      "Acte constitutive, cesiuni de părți sociale",
      "Contracte comerciale și condiții generale",
      "Recuperare de creanțe, somație de plată",
      "Litigii comerciale și clauze penale",
      "Dizolvare, lichidare, radiere",
    ],
    note: "Firmele cu volum constant de acte lucrează, de obicei, pe abonament.",
  },
  {
    slug: "contencios-administrativ",
    num: "VIII",
    title: "Contencios administrativ",
    short:
      "Litigii cu ANAF, primării și alte autorități. Plângerea prealabilă este obligatorie și are termen.",
    intro:
      "Înainte de instanță este obligatorie plângerea prealabilă, în 30 de zile. Sărită sau formulată greșit, cererea se respinge fără să se discute fondul.",
    items: [
      "Contestarea deciziilor de impunere ANAF",
      "Anularea actelor administrative",
      "Amenzi contravenționale și plângeri",
      "Autorizații refuzate sau retrase",
      "Litigii de achiziții publice",
      "Despăgubiri pentru prejudicii cauzate de autorități",
    ],
    note: "Verifică data comunicării actului: de acolo curge termenul de 30 de zile.",
  },
];

export const faq = [
  {
    q: "Cât costă prima consultație?",
    a: "350 de lei pentru o oră, la birou sau online. Dacă preiei cazul cu noi, suma se scade din onorariul stabilit. Îți spunem la telefon dacă problema ta se rezolvă fără consultație, caz în care nu plătești nimic.",
  },
  {
    q: "Ce acte aduc la prima întâlnire?",
    a: "Tot ce ai legat de caz, chiar dacă pare fără importanță: contracte, decizii, citații, comunicări de la executor, mesaje, e-mailuri. Nu trebuie să fie ordonate. Dacă nu ai nimic în scris, vino oricum, discutăm pe ce știi.",
  },
  {
    q: "Îmi spuneți dacă am șanse să câștig?",
    a: "Da, pe actele tale și cât se poate de direct. Dacă șansele sunt mici sau costul procesului depășește ce ai de recuperat, îți spunem asta din prima întâlnire. Nu deschidem dosare ca să deschidem dosare.",
  },
  {
    q: "Cât durează un proces?",
    a: "Un divorț prin acord la notar: 2 – 4 săptămâni. Un litigiu civil în primă instanță în București: 8 – 14 luni. Un dosar penal cu urmărire penală: peste un an. Sunt medii reale din dosarele noastre, nu promisiuni.",
  },
  {
    q: "Lucrați și online, din alt oraș?",
    a: "Da. Consultațiile se pot ține video, iar actele circulă prin e-mail sau curier. Reprezentarea în instanță se face în București, Ilfov și, pe bază de deplasare, în restul țării.",
  },
  {
    q: "Cum se stabilește onorariul?",
    a: "În scris, în contractul de asistență juridică, înainte să înceapă munca. Poate fi fix pe etapă, orar sau, la recuperări de creanțe, parțial de succes. Nu apar sume peste cele agreate.",
  },
];

export const testimonials = [
  {
    text: "Aveam poprire pe salariu pentru un credit din 2013, pe care îl uitasem. S-a ridicat în trei săptămâni, pentru că se prescrisese. Mi-a explicat de la început că are șanse mari și de ce.",
    author: "Cristina D.",
    case: "contestație la executare",
  },
  {
    text: "Am fost chemat la audieri la 8 dimineața și l-am sunat cu o seară înainte. A venit. Fără el aș fi dat o declarație pe care o regretam.",
    author: "Radu M.",
    case: "dosar penal, infracțiune rutieră",
  },
  {
    text: "Divorț cu un copil de patru ani. Nu a împins spre proces, a insistat pe acord și s-a rezolvat la notar. A durat trei săptămâni în loc de un an.",
    author: "Ioana P.",
    case: "divorț și custodie",
  },
  {
    text: "Ne ține firma pe abonament de doi ani. Contractele cu clienții mari trec pe la el înainte de semnare și de atunci nu am mai avut niciun litigiu.",
    author: "Vlad T.",
    case: "abonament societate comercială",
  },
];

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  iso: string;
  tag: string;
  read: string;
  lead: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "poprire-pe-salariu-cand-se-poate-ridica",
    title: "Poprire pe salariu: când se poate ridica și în cât timp",
    excerpt:
      "Termenul de 15 zile, cazurile în care creanța este deja prescrisă și ce documente îți trebuie ca să ceri suspendarea.",
    date: "2 august 2026",
    iso: "2026-08-02",
    tag: "Executări silite",
    read: "8 min",
    lead:
      "O poprire pe salariu se vede întâi pe fluturaș, nu într-o scrisoare. De regulă omul află de la contabilitate, iar termenul în care putea face ceva curge deja de câteva zile.",
    body: [
      { type: "h", text: "Termenul care contează: 15 zile" },
      {
        type: "p",
        text: "Contestația la executare se depune în 15 zile de la data la care ai luat cunoștință de actul de executare, potrivit art. 715 din Codul de procedură civilă. Data aceea nu este data de pe fluturaș, ci data comunicării actului de la executor. De aceea primul lucru pe care îl cerem este plicul sau confirmarea de primire, nu adeverința de la angajator.",
      },
      {
        type: "p",
        text: "Dacă executarea a început fără să primești nimic, ceea ce se întâmplă des la adrese vechi din buletin, termenul curge de la data la care ai aflat efectiv. Se poate dovedi cu fluturașul din luna în care ți-a fost oprit primul procent.",
      },
      { type: "h", text: "Cât se poate opri, legal" },
      {
        type: "p",
        text: "Reținerile din salariu au limite. Pentru datorii obișnuite se poate opri până la o treime din venitul net lunar, iar pentru obligații de întreținere până la jumătate. Sub nivelul salariului minim net pe economie, venitul nu poate fi urmărit decât pentru întreținere. Prima verificare pe care o facem este aritmetica: în destule dosare se oprește mai mult decât permite legea, iar asta singură justifică o contestație.",
      },
      { type: "h", text: "Când creanța este deja prescrisă" },
      {
        type: "p",
        text: "Cele mai multe popriri pe care le vedem vin de la recuperatori de creanțe care au cumpărat portofolii vechi de credite de consum. Dreptul de a cere executarea silită se prescrie, ca regulă, în 3 ani. Dacă între ultima plată și pornirea executării au trecut mai mult de 3 ani, fără acte care să întrerupă prescripția, contestația are șanse mari.",
      },
      {
        type: "p",
        text: "Prescripția nu se aplică din oficiu. Dacă nu o invoci tu, prin contestație, instanța nu o va observa în locul tău, iar poprirea rămâne.",
      },
      { type: "h", text: "Suspendarea, ca să nu aștepți procesul" },
      {
        type: "p",
        text: "Contestația singură nu oprește reținerile. Separat de ea se depune o cerere de suspendare a executării, cu o cauțiune calculată la valoarea creanței. Cauțiunea se restituie dacă se câștigă. În dosarele în care banii opriți sunt singurul venit al familiei, suspendarea este partea urgentă, nu contestația.",
      },
      { type: "h", text: "Ce aduci la prima întâlnire" },
      {
        type: "ul",
        items: [
          "Comunicarea de la executor, cu plicul, dacă îl mai ai",
          "Fluturașul din luna în care a apărut prima reținere",
          "Contractul de credit sau documentul din care vine datoria, dacă îl găsești",
          "Orice notificare de cesiune primită de la recuperator",
          "Extrasul de cont pe ultimele luni, dacă poprirea este și pe conturi",
        ],
      },
      {
        type: "note",
        text: "Articolul are caracter informativ și nu ține loc de consultanță juridică. Termenele au excepții, iar calculul lor depinde de felul în care ți-a fost comunicat actul.",
      },
    ],
  },
  {
    slug: "primele-48-de-ore-dupa-o-citatie-penala",
    title: "Ce faci în primele 48 de ore după ce primești o citație penală",
    excerpt:
      "Ordinea corectă a pașilor, ce nu trebuie declarat înainte de a vedea dosarul și de ce contează cine te însoțește la audiere.",
    date: "18 august 2026",
    iso: "2026-08-18",
    tag: "Drept penal",
    read: "6 min",
    lead:
      "Aproape toți oamenii care ne sună după prima audiere spun aceeași frază: „am zis că oricum nu am nimic de ascuns”. Problema nu este ce ai de ascuns, ci că vorbești despre un dosar pe care nu l-ai citit.",
    body: [
      { type: "h", text: "Citește ce scrie pe citație" },
      {
        type: "p",
        text: "Calitatea în care ești chemat schimbă totul: martor, suspect sau inculpat. Este scrisă pe hârtie, de obicei într-un rând ușor de sărit. Un martor are obligația să spună adevărul și poate răspunde penal pentru mărturie mincinoasă. Un suspect are dreptul să tacă. Sunt două situații diferite, cu strategii diferite.",
      },
      { type: "h", text: "Nu da declarații până nu vezi dosarul" },
      {
        type: "p",
        text: "Ai dreptul să studiezi dosarul, prin avocat, înainte de audiere. Fără el, răspunzi la întrebări construite pe probe pe care nu le-ai văzut. O declarație dată în prima zi rămâne în dosar și se citește la fiecare termen, inclusiv atunci când, două luni mai târziu, apar acte care o contrazic.",
      },
      { type: "h", text: "Nu trimite nimic în scris" },
      {
        type: "p",
        text: "Mesajele, e-mailurile și explicațiile trimise părții adverse, angajatorului sau chiar organului de cercetare ajung în dosar. Regula practică: până la prima discuție cu un avocat, nu explici nimic în scris, nimănui.",
      },
      { type: "h", text: "Strânge ce ai, exact așa cum este" },
      {
        type: "ul",
        items: [
          "Citația, cu plic",
          "Toate mesajele legate de situație, fără să ștergi nimic",
          "Contracte, facturi, chitanțe, dacă e vorba de bani",
          "Numele persoanelor care erau de față",
          "Actele medicale, dacă există vătămări",
        ],
      },
      { type: "h", text: "Mergi însoțit" },
      {
        type: "p",
        text: "Asistența avocatului la audiere este un drept, nu o formalitate. În afară de conținutul declarației, contează felul în care se consemnează: o nuanță schimbată la scriere poate transforma o recunoaștere parțială într-una totală. Semnătura ta de la final acoperă tot ce s-a scris deasupra.",
      },
      {
        type: "note",
        text: "Articolul are caracter informativ și nu ține loc de consultanță juridică. Pentru audieri fixate în mai puțin de 48 de ore, sună direct.",
      },
    ],
  },
  {
    slug: "divort-la-notar-sau-in-instanta-2026",
    title: "Divorț la notar sau în instanță: costuri și durate reale în 2026",
    excerpt:
      "Comparație pe cifre, inclusiv taxele de timbru, și situațiile în care legea nu îți lasă varianta notarială.",
    date: "21 iulie 2026",
    iso: "2026-07-21",
    tag: "Dreptul familiei",
    read: "7 min",
    lead:
      "Întrebarea nu este care variantă e mai ieftină, pentru că răspunsul e evident. Întrebarea e dacă ai voie să alegi.",
    body: [
      { type: "h", text: "Când poți merge la notar" },
      {
        type: "p",
        text: "Divorțul prin acord la notar este posibil dacă ambii soți sunt de acord cu desfacerea căsătoriei și cu toate efectele ei: numele, locuința copilului, autoritatea părintească, pensia de întreținere, programul de legături personale. Dacă nu vă înțelegeți pe un singur punct din listă, dosarul merge în instanță.",
      },
      {
        type: "p",
        text: "Există și situații în care legea nu lasă varianta notarială, indiferent de acord, de exemplu atunci când unul dintre soți este pus sub interdicție.",
      },
      { type: "h", text: "Cifrele, pe scurt" },
      {
        type: "ul",
        items: [
          "Notar, fără copii minori: onorariu notarial de ordinul câtorva sute de lei, plus onorariul de avocat, dacă vrei acordul verificat înainte de semnare",
          "Notar, cu copii minori: se adaugă ancheta socială și acordul parental redactat corect, care este partea care contează peste zece ani",
          "Instanță, divorț prin acord: taxă de timbru redusă, un singur termen în multe cazuri",
          "Instanță, divorț din culpă: taxă de timbru mai mare, probatoriu, martori, uneori expertiză",
        ],
      },
      { type: "h", text: "Durate observate în dosarele noastre" },
      {
        type: "p",
        text: "Divorț la notar, fără copii: două până la patru săptămâni, cu termenul de reflecție de 30 de zile acolo unde se aplică. Divorț prin acord în instanță, în București: două până la patru luni. Divorț din culpă, cu partaj și custodie contestate: între opt luni și doi ani, uneori mai mult dacă se merge în apel.",
      },
      { type: "h", text: "Partea care se negociază, nu se judecă" },
      {
        type: "p",
        text: "În dosarele cu copii, cel mai bun rezultat este aproape întotdeauna un acord scris bine, nu o hotărâre câștigată. O hotărâre îți dă un program de vizită impus. Un acord îți dă un program pe care celălalt părinte îl respectă pentru că l-a propus. Prima întrebare pe care o punem într-un dosar de familie este dacă mai există spațiu de negociere.",
      },
      {
        type: "note",
        text: "Articolul are caracter informativ și nu ține loc de consultanță juridică. Taxele se schimbă, iar situația fiecărei familii diferă.",
      },
    ],
  },
];

export const fees = [
  {
    label: "Consultație",
    price: "350 lei",
    unit: "ora",
    detail:
      "La birou sau video. Se scade integral din onorariu dacă preiei cazul cu noi.",
  },
  {
    label: "Redactare act sau contract",
    price: "de la 600 lei",
    unit: "act",
    detail:
      "Preț fix, comunicat înainte. Include o rundă de modificări după discuția cu cealaltă parte.",
  },
  {
    label: "Reprezentare în instanță",
    price: "de la 2.500 lei",
    unit: "etapă procesuală",
    detail:
      "Stabilit pe complexitate, în etape: fond, apel, recurs. Fiecare etapă se contractează separat.",
  },
  {
    label: "Abonament societăți",
    price: "de la 900 lei",
    unit: "lună",
    detail:
      "Include un număr de ore de consultanță, verificarea actelor curente și prioritate la programare.",
  },
];

/* ------------------------------------------------------------------
   Verificator de termene
   Termenele sunt cele uzuale; calculul din pagină este orientativ.
------------------------------------------------------------------ */
export type Deadline = {
  id: string;
  label: string;
  days: number;
  from: string;
  law: string;
  next: string;
  practice: string;
};

export const deadlines: Deadline[] = [
  {
    id: "executare",
    label: "Comunicare de la executor",
    days: 15,
    from: "de la data la care ai primit comunicarea",
    law: "art. 715 Cod procedură civilă",
    next: "Se depune contestație la executare și, separat, cerere de suspendare a executării.",
    practice: "executari-silite",
  },
  {
    id: "concediere",
    label: "Decizie de concediere",
    days: 30,
    from: "de la data comunicării deciziei",
    law: "art. 211 Codul muncii",
    next: "Se contestă la tribunalul de la domiciliul tău. Procedura este scutită de taxă de timbru.",
    practice: "dreptul-muncii",
  },
  {
    id: "sanctiune",
    label: "Sancțiune disciplinară",
    days: 30,
    from: "de la data comunicării deciziei",
    law: "art. 211 Codul muncii",
    next: "Se verifică întâi forma: cercetare disciplinară, motivare, termene. Cele mai multe cad pe formă.",
    practice: "dreptul-muncii",
  },
  {
    id: "contraventie",
    label: "Proces-verbal de contravenție",
    days: 15,
    from: "de la data înmânării sau comunicării procesului-verbal",
    law: "art. 31 OG 2/2001",
    next: "Plângerea se depune la judecătoria în circumscripția căreia s-a comis fapta și suspendă executarea.",
    practice: "contencios-administrativ",
  },
  {
    id: "anaf",
    label: "Decizie de impunere (ANAF)",
    days: 45,
    from: "de la data comunicării actului",
    law: "art. 270 Cod procedură fiscală",
    next: "Contestația se depune la organul fiscal emitent, nu direct în instanță.",
    practice: "contencios-administrativ",
  },
  {
    id: "administrativ",
    label: "Act de la primărie sau autoritate",
    days: 30,
    from: "de la data comunicării actului",
    law: "art. 7 Legea 554/2004",
    next: "Întâi plângere prealabilă la autoritate. Fără ea, cererea în instanță se respinge.",
    practice: "contencios-administrativ",
  },
  {
    id: "apel",
    label: "Hotărâre judecătorească civilă",
    days: 30,
    from: "de la data comunicării hotărârii",
    law: "art. 468 Cod procedură civilă",
    next: "Apelul se depune la instanța care a pronunțat hotărârea, nu la cea superioară.",
    practice: "drept-civil-si-contracte",
  },
];

/* ------------------------------------------------------------------
   Dosare închise, prezentate anonimizat
------------------------------------------------------------------ */
export const cases = [
  {
    area: "Executări silite",
    court: "Judecătoria Sectorului 2",
    year: "2026",
    problem:
      "Poprire pe salariu pentru un credit de nevoi personale din 2013, cesionat de bancă unui recuperator.",
    result: "Contestație admisă, creanța prescrisă, poprirea ridicată.",
    duration: "3 săptămâni",
  },
  {
    area: "Dreptul muncii",
    court: "Tribunalul București",
    year: "2025",
    problem:
      "Concediere pentru desființarea postului, într-o firmă care a angajat pe aceeași poziție două luni mai târziu.",
    result: "Decizie anulată, reintegrare și plata drepturilor salariale restante.",
    duration: "11 luni, fond",
  },
  {
    area: "Drept penal",
    court: "Judecătoria Sectorului 1",
    year: "2025",
    problem:
      "Dosar de vătămare corporală din culpă, accident rutier fără victime în stare gravă.",
    result: "Renunțare la urmărirea penală, cu obligații impuse de procuror.",
    duration: "7 luni",
  },
  {
    area: "Dreptul familiei",
    court: "notar public, Sector 3",
    year: "2026",
    problem:
      "Divorț cu un copil minor, unde ambii părinți voiau custodie exclusivă și dosarul se îndrepta spre proces.",
    result: "Acord parental negociat, divorț la notar, fără proces.",
    duration: "4 săptămâni",
  },
  {
    area: "Drept imobiliar",
    court: "verificare precontractuală",
    year: "2026",
    problem:
      "Apartament în Sectorul 4, cu antecontract deja pregătit de agenție și avans cerut în 48 de ore.",
    result:
      "Litigiu de partaj descoperit în cartea funciară, tranzacție oprită înainte de plata avansului.",
    duration: "4 zile",
  },
  {
    area: "Drept comercial",
    court: "Tribunalul Ilfov",
    year: "2025",
    problem:
      "Facturi neîncasate de la un client care contesta recepția lucrării, cu procese-verbale semnate.",
    result: "Debit recuperat integral, cu penalități și cheltuieli de judecată.",
    duration: "9 luni",
  },
];
