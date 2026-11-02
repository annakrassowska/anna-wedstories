export type Lang = "en" | "es" | "pl";
export const LANGS: Lang[] = ["en", "es", "pl"];
export const langPath = (l: Lang) => l === "en" ? "/" : l === "es" ? "/es" : "/pl";
export const packagePath = (l: Lang) => l === "en" ? "/packages" : l === "es" ? "/es/packages" : "/pl/packages";

const en = {
  meta: {
    title: "Anna WedStories — Wedding Content Creator in Málaga & Costa del Sol",
    description:
      "Wedding content creator in Málaga, Marbella and the Costa del Sol. Natural wedding day content, Instagram Reels and Stories for couples marrying in Spain.",
  },
  nav: { home: "Home", about: "About", services: "Services", contact: "Contact", cta: "Check Your Date", menu: "Open menu", close: "Close menu", lang: "Language" },
  hero: {
    title: "Wedding content creator in\u00a0Málaga",
    sub: "Relive your wedding day within 24 hours. Candid videos, genuine emotions, and beautiful memories ready to share.",
    location: "Málaga · Costa del Sol · Spain",
    cta: "Check Your Date",
    cta2: "Explore the Stories",
    alt: "A bride and groom laughing together on a whitewashed terrace above the sea at sunset",
  },
  intro: {
    eyebrow: "Wedding content creation",
    p1: "Some moments happen in a second. The laughter before the ceremony, the little details no one else notices, the feeling of being surrounded by your favourite people.",
    p2: "Wedding content captures the atmosphere of your day in a natural, personal way, creating short-form memories you can revisit and share.",
    alt: "A bride in a satin robe looking at her wedding dress hanging on an antique wardrobe",
  },
  services: {
    eyebrow: "Services",
    title: "Little moments, thoughtfully kept.",
    items: [
      { t: "Wedding Day Content", d: "Natural, behind-the-scenes moments that capture the atmosphere, details, and emotions of your wedding day." },
      { t: "Instagram Reels", d: "Short-form wedding videos designed to bring the feeling of your celebration back to life and make it easy to share." },
      { t: "Instagram Stories", d: "Little moments, beautiful details, and candid snippets of your celebration, thoughtfully captured for your stories." },
    ],
  },
  packages: {
    eyebrow: "Packages",
    title: "Wedding Content Packages",
    lead: "Your wedding day, captured as it happens.",
    intro: "Real moments, genuine emotions and all the little details that make your day yours. I capture your wedding through a mix of natural photos and videos, creating memories you can relive and share just 24 hours after your celebration.",
    coverageLabel: "Coverage includes",
    includedLabel: "What's included",
    items: [
      {
        name: "BASIC",
        hours: "4 Hours",
        price: "€290",
        tagline: "Perfect for capturing the most meaningful moments of your wedding day.",
        coverage: ["Getting ready (1 hour before ceremony)", "Wedding ceremony", "Couple Moments"],
        included: ["Natural, candid photos & videos", "Online gallery delivered within 24 hours", "2 Instagram Reels", "1-minute highlight video", "Optional online pre-wedding meeting"],
      },
      {
        name: "THE COMPLETE STORY",
        hours: "Up to 12 Hours",
        price: "€490",
        tagline: "From the excitement of getting ready to the last moments on the dance floor. Your entire wedding story, captured from beginning to end.",
        coverage: ["Getting ready", "Wedding ceremony", "Couple Moments", "Cocktail hour", "Dinner", "Party"],
        included: ["Natural, candid photos & videos", "Online gallery delivered within 24 hours", "3 Instagram Reels", "1-minute highlight video", "Optional online pre-wedding meeting"],
      },
    ],
    addOns: {
      title: "Add-ons",
      sub: "Make your package even more complete with these additional options:",
      items: [
        { name: "Extra hour", price: "€50", d: "" },
        { name: "Wedding video", price: "€100", d: "Recording of the ceremony." },
      ],
    },
    travel: {
      title: "Travel fees",
      items: [
        { place: "Málaga & surrounding areas (up to 15 km)", fee: "FREE" },
        { place: "Marbella", fee: "€50 travel fee" },
        { place: "Other locations", fee: "Travel fee upon request, depending on the distance." },
      ],
    },
    note: "Not sure which package is right for you? Let's chat and find the perfect way to capture your wedding day!",
  },

  reels: {
    eyebrow: "Reels",
    title: "Watch the moments move.",
    sub: "Short films from real weddings — the glances, the dances, the happy tears.",
    follow: "Follow @anna_wedstories",
    watch: "Watch on Instagram",
    alts: [
      "A bride and groom kissing under a stone archway lit with magenta light",
      "A bride and groom celebrating at their wedding party in heart-shaped sunglasses under purple and blue lights",
      "A bride in an ivory gown embracing a guest in a red dress in front of a teal wall",
    ],
  },
  experience: {
    eyebrow: "The experience",
    title: "Simple, personal, relaxed.",
    steps: [
      { t: "Get in touch", d: "Tell me a little about your plans, your date, and the kind of memories you want to capture." },
      { t: "Make it personal", d: "Let's discuss your vision and find the right approach for your celebration." },
      { t: "Relive the moments", d: "Enjoy your day while the little moments, candid details, and atmosphere are captured." },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Hi, I'm Anna.",
    p1: "I'm the person behind Anna WedStories, capturing the little moments, real emotions, and beautiful details that make every wedding unique.",
    alt: "Anna filming a wedding with her phone, standing beside white roses and palm trees wrapped in fairy lights",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's tell your wedding story.",
    sub: "Planning a wedding in Spain? Tell me a little about your day, and let's see how we can capture it.",
    name: "Full name", email: "Email address", whatsapp: "WhatsApp number (optional)", date: "Wedding date",
    location: "Wedding location or venue", services: "Services of interest", language: "Preferred language",
    message: "Additional details or message",
    consent: "I agree that my details are used to reply to my inquiry, as described in the privacy policy.",
    submit: "Send Your Inquiry", sending: "Sending…",
    success: "Thank you — your inquiry has been sent. I'll be in touch soon.",
    error: "Sorry, your message could not be sent. Please try again or reach out via WhatsApp.",
    notConfigured: "The inquiry form isn't connected yet. Please reach out via WhatsApp or Instagram for now.",
    errors: { required: "This field is required.", email: "Please enter a valid email address.", services: "Please choose at least one service.", consent: "Please accept to continue." },
    langs: { en: "English", es: "Spanish", pl: "Polish" },
  },
  whatsapp: { label: "Chat on WhatsApp", msg: "Hi Anna! I'm planning my wedding in Spain and would love to know more about your wedding content services." },
  footer: { location: "Málaga, Spain", privacy: "Privacy Policy", cookies: "Cookie Policy", rights: "All rights reserved.", nav: "Footer navigation" },
};

export type Dict = typeof en;

const es: Dict = {
  meta: {
    title: "Anna WedStories — Creadora de contenido para bodas en Málaga y Costa del Sol",
    description:
      "Creadora de contenido para bodas en Málaga, Marbella y la Costa del Sol. Contenido natural del día de tu boda, Reels e Historias de Instagram.",
  },
  nav: { home: "Inicio", about: "Sobre mí", services: "Servicios", contact: "Contacto", cta: "Consulta tu fecha", menu: "Abrir menú", close: "Cerrar menú", lang: "Idioma" },
  hero: {
    title: "Wedding content creator en\u00a0Málaga",
    sub: "Revivid vuestra boda en menos de 24 horas. Vídeos espontáneos, emociones reales y recuerdos preciosos listos para compartir.",
    location: "Málaga · Costa del Sol · España",
    cta: "Consulta tu fecha",
    cta2: "Descubre las historias",
    alt: "Una pareja de novios riendo en una terraza encalada sobre el mar al atardecer",
  },
  intro: {
    eyebrow: "Contenido para bodas",
    p1: "Hay momentos que duran un segundo. Las risas antes de la ceremonia, esos pequeños detalles que nadie más ve, la sensación de estar rodeados de vuestra gente favorita.",
    p2: "El contenido de boda recoge la atmósfera de vuestro día de forma natural y personal, creando recuerdos en formato corto para revivir y compartir.",
    alt: "Una novia en batín de satén mirando su vestido de boda colgado en un armario antiguo",
  },
  services: {
    eyebrow: "Servicios",
    title: "Pequeños momentos, guardados con cariño.",
    items: [
      { t: "Contenido del día de la boda", d: "Momentos naturales entre bastidores que capturan la atmósfera, los detalles y las emociones de vuestro día." },
      { t: "Reels de Instagram", d: "Vídeos cortos de boda pensados para devolver la emoción de vuestra celebración y que sean fáciles de compartir." },
      { t: "Historias de Instagram", d: "Pequeños momentos, detalles bonitos y escenas espontáneas de vuestra celebración, capturados con mimo para vuestras historias." },
    ],
  },
  packages: {
    eyebrow: "Paquetes",
    title: "Paquetes de contenido para bodas",
    lead: "Vuestro día de boda, capturado tal y como sucede.",
    intro: "Momentos reales, emociones verdaderas y todos esos pequeños detalles que hacen que vuestro día sea vuestro. Os grabo a través de una mezcla de fotos y vídeos espontáneos, creando recuerdos que podréis revivir y compartir apenas 24 horas después de la celebración.",
    coverageLabel: "La cobertura incluye",
    includedLabel: "Qué incluye",
    items: [
      {
        name: "BASIC",
        hours: "4 horas",
        price: "290 €",
        tagline: "Perfecto para capturar los momentos más importantes de vuestro día de boda.",
        coverage: ["Preparativos (1 hora antes de la ceremonia)", "Ceremonia", "Momentos de los novios"],
        included: ["Fotos y vídeos naturales y espontáneos", "Galería online entregada en 24 horas", "2 Reels de Instagram", "Vídeo resumen de 1 minuto", "Reunión preboda online (opcional)"],
      },
      {
        name: "THE COMPLETE STORY",
        hours: "Hasta 12 horas",
        price: "490 €",
        tagline: "Desde la ilusión de los preparativos hasta los últimos momentos en la pista de baile. Toda la historia de vuestra boda, capturada de principio a fin.",
        coverage: ["Preparativos", "Ceremonia", "Momentos de los novios", "Cóctel", "Cena", "Fiesta"],
        included: ["Fotos y vídeos naturales y espontáneos", "Galería online entregada en 24 horas", "3 Reels de Instagram", "Vídeo resumen de 1 minuto", "Reunión preboda online (opcional)"],
      },
    ],
    addOns: {
      title: "Extras",
      sub: "Completad vuestro paquete con estas opciones adicionales:",
      items: [
        { name: "Hora extra", price: "50 €", d: "" },
        { name: "Vídeo de boda", price: "100 €", d: "Grabación de la ceremonia." },
      ],
    },
    travel: {
      title: "Desplazamientos",
      items: [
        { place: "Málaga y alrededores (hasta 15 km)", fee: "GRATIS" },
        { place: "Marbella", fee: "50 € de desplazamiento" },
        { place: "Otras localidades", fee: "Desplazamiento a consultar según la distancia." },
      ],
    },
    note: "¿No sabéis qué paquete encaja mejor con vosotros? ¡Hablemos y encontremos la mejor forma de capturar vuestra boda!",
  },

  reels: {
    eyebrow: "Reels",
    title: "Mira los momentos en movimiento.",
    sub: "Cortometrajes de bodas reales: las miradas, los bailes, las lágrimas de felicidad.",
    follow: "Sígueme en @anna_wedstories",
    watch: "Ver en Instagram",
    alts: [
      "Una novia y un novio besándose bajo un arco de piedra con luz magenta",
      "Una novia y un novio celebrando en su fiesta de boda con gafas de corazón bajo luces moradas y azules",
      "Una novia en vestido marfil abrazando a una invitada de vestido rojo frente a una pared verde azulado",
    ],
  },
  experience: {
    eyebrow: "La experiencia",
    title: "Sencilla, personal y tranquila.",
    steps: [
      { t: "Escríbeme", d: "Cuéntame un poco sobre vuestros planes, la fecha y qué tipo de recuerdos queréis guardar." },
      { t: "Hazlo personal", d: "Hablamos de vuestra idea y encontramos el enfoque adecuado para vuestra celebración." },
      { t: "Revive los momentos", d: "Disfrutad de vuestro día mientras se capturan los pequeños momentos, los detalles espontáneos y la atmósfera." },
    ],
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Hola, soy Anna.",
    p1: "Soy la persona detrás de Anna WedStories y capturo los pequeños momentos, las emociones reales y los detalles bonitos que hacen única cada boda.",
    alt: "Anna graba una boda con su teléfono, de pie junto a rosas blancas y palmeras envueltas en lucecitas",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Contemos la historia de tu boda.",
    sub: "¿Planeas casarte en España? Cuéntame un poco sobre tu día y veamos cómo podemos capturarlo.",
    name: "Nombre completo", email: "Correo electrónico", whatsapp: "Número de WhatsApp (opcional)", date: "Fecha de la boda",
    location: "Lugar o finca de la boda", services: "Servicios que te interesan", language: "Idioma preferido",
    message: "Más detalles o mensaje",
    consent: "Acepto que mis datos se utilicen para responder a mi consulta, según la política de privacidad.",
    submit: "Enviar consulta", sending: "Enviando…",
    success: "Gracias — tu consulta se ha enviado. Te responderé muy pronto.",
    error: "Lo siento, no se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme por WhatsApp.",
    notConfigured: "El formulario aún no está conectado. Por ahora, escríbeme por WhatsApp o Instagram.",
    errors: { required: "Este campo es obligatorio.", email: "Introduce un correo electrónico válido.", services: "Elige al menos un servicio.", consent: "Debes aceptar para continuar." },
    langs: { en: "Inglés", es: "Español", pl: "Polaco" },
  },
  whatsapp: { label: "Escríbeme por WhatsApp", msg: "¡Hola Anna! Estoy organizando mi boda en España y me encantaría saber más sobre tus servicios de contenido para bodas." },
  footer: { location: "Málaga, España", privacy: "Política de privacidad", cookies: "Política de cookies", rights: "Todos los derechos reservados.", nav: "Navegación del pie de página" },
};

const pl: Dict = {
  meta: {
    title: "Anna WedStories — Twórczyni treści ślubnych w Maladze i na Costa del Sol",
    description:
      "Twórczyni treści ślubnych w Maladze, Marbelli i na Costa del Sol. Naturalne treści z dnia ślubu, Reelsy i Stories na Instagram dla par biorących ślub w Hiszpanii.",
  },
  nav: { home: "Start", about: "O mnie", services: "Usługi", contact: "Kontakt", cta: "Sprawdź termin", menu: "Otwórz menu", close: "Zamknij menu", lang: "Język" },
  hero: {
    title: "Wedding content creator w\u00a0Maladze",
    sub: "Przeżyjcie Wasz dzień ślubu na nowo w ciągu 24 godzin. Niepozowane filmy, prawdziwe emocje i piękne wspomnienia gotowe, by się nimi podzielić.",
    location: "Malaga · Costa del Sol · Hiszpania",
    cta: "Sprawdź termin",
    cta2: "Zobacz historie",
    alt: "Para młoda śmiejąca się na białym tarasie nad morzem o zachodzie słońca",
  },
  intro: {
    eyebrow: "Treści ślubne",
    p1: "Niektóre chwile trwają zaledwie sekundę. Śmiech tuż przed ceremonią, drobne detale, których nikt inny nie zauważa, uczucie bycia otoczonym najbliższymi.",
    p2: "Treści ślubne oddają atmosferę Waszego dnia w naturalny, osobisty sposób — to krótkie wspomnienia, do których możecie wracać i którymi łatwo się podzielić.",
    alt: "Panna młoda w satynowym peniuarze patrzy na swoją suknię ślubną wiszącą na starej szafie",
  },
  services: {
    eyebrow: "Usługi",
    title: "Drobne chwile, zachowane z czułością.",
    items: [
      { t: "Treści z dnia ślubu", d: "Naturalne chwile zza kulis, które oddają atmosferę, detale i emocje Waszego dnia ślubu." },
      { t: "Reelsy na Instagram", d: "Krótkie filmy ślubne, które przywołują emocje z Waszego wesela i którymi łatwo się podzielić." },
      { t: "Stories na Instagram", d: "Drobne chwile, piękne detale i spontaniczne ujęcia z Waszego wesela, starannie uchwycone do Waszych stories." },
    ],
  },
  packages: {
    eyebrow: "Pakiety",
    title: "Pakiety treści ślubnych",
    lead: "Wasz dzień ślubu uchwycony dokładnie tak, jak się wydarza.",
    intro: "Prawdziwe chwile, autentyczne emocje i wszystkie drobne detale, które sprawiają, że ten dzień jest Wasz. Tworzę mieszankę naturalnych zdjęć i filmów, dzięki której będziecie mogli przeżywać i dzielić się swoimi wspomniami już 24 godziny po weselu.",
    coverageLabel: "Relacja obejmuje",
    includedLabel: "Co zawiera pakiet",
    items: [
      {
        name: "BASIC",
        hours: "4 godziny",
        price: "290 €",
        tagline: "Idealny, by uchwycić najważniejsze chwile Waszego dnia ślubu.",
        coverage: ["Przygotowania (1 godzinę przed ceremonią)", "Ceremonia ślubna", "Chwile pary młodej"],
        included: ["Naturalne, niepozowane zdjęcia i filmy", "Galeria online dostarczona w ciągu 24 godzin", "2 Reelsy na Instagram", "Minutowy film podsumowujący", "Spotkanie online przed ślubem (opcjonalnie)"],
      },
      {
        name: "THE COMPLETE STORY",
        hours: "Do 12 godzin",
        price: "490 €",
        tagline: "Od radości podczas przygotowań po ostatnie chwile na parkiecie. Cała historia Waszego ślubu, od początku do końca.",
        coverage: ["Przygotowania", "Ceremonia ślubna", "Chwile pary młodej", "Przyjęcie cocktailowe", "Obiad", "Zabawa weselna"],
        included: ["Naturalne, niepozowane zdjęcia i filmy", "Galeria online dostarczona w ciągu 24 godzin", "3 Reelsy na Instagram", "Minutowy film podsumowujący", "Spotkanie online przed ślubem (opcjonalnie)"],
      },
    ],
    addOns: {
      title: "Dodatki",
      sub: "Uzupełnijcie swój pakiet o dodatkowe opcje:",
      items: [
        { name: "Dodatkowa godzina", price: "50 €", d: "" },
        { name: "Wideo ślubne", price: "100 €", d: "Nagranie ceremonii." },
      ],
    },
    travel: {
      title: "Dojazd",
      items: [
        { place: "Malaga i okolice (do 15 km)", fee: "BEZPŁATNIE" },
        { place: "Marbella", fee: "50 € za dojazd" },
        { place: "Inne lokalizacje", fee: "Koszt dojazdu do ustalenia, w zależności od odległości." },
      ],
    },
    note: "Nie wiecie, który pakiet będzie najlepszy? Porozmawiajmy i znajdźmy idealny sposób na uchwycenie Waszego ślubu!",
  },

  reels: {
    eyebrow: "Reels",
    title: "Zobacz, jak te chwile ożywają.",
    sub: "Krótkie filmy z prawdziwych ślubów — spojrzenia, tańce i łzy szczęścia.",
    follow: "Obserwuj @anna_wedstories",
    watch: "Obejrzyj na Instagramie",
    alts: [
      "Panna młoda i pan młody całują się pod kamiennym łukiem w magentowym świetle",
      "Panna młoda i pan młody świętujący na weselu w okularach w kształcie serca w fioletowym i niebieskim świetle",
      "Panna młoda w kremowej sukni obejmuje kobietę w czerwonej sukni na tle turkusowej ściany",
    ],
  },
  experience: {
    eyebrow: "Jak to wygląda",
    title: "Prosto, osobiście, bez stresu.",
    steps: [
      { t: "Napiszcie do mnie", d: "Opowiedzcie mi trochę o swoich planach, dacie i wspomnieniach, które chcecie zachować." },
      { t: "Po Waszemu", d: "Porozmawiamy o Waszej wizji i dobierzemy odpowiednie podejście do Waszego wesela." },
      { t: "Przeżyjcie to jeszcze raz", d: "Cieszcie się swoim dniem, a drobne chwile, spontaniczne detale i atmosfera zostaną uchwycone." },
    ],
  },
  about: {
    eyebrow: "O mnie",
    title: "Cześć, jestem Ania.",
    p1: "To ja stoję za Anna WedStories — uchwytuję drobne chwile, prawdziwe emocje i piękne detale, które sprawiają, że każdy ślub jest wyjątkowy.",
    alt: "Anna nagrywa wesele telefonem, stojąc wśród białych róż i palm oplecionych lampkami",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Opowiedzmy historię Waszego ślubu.",
    sub: "Planujecie ślub w Hiszpanii? Napiszcie mi trochę o swoim dniu, a zobaczymy, jak możemy go uchwycić.",
    name: "Imię i nazwisko", email: "Adres e-mail", whatsapp: "Numer WhatsApp (opcjonalnie)", date: "Data ślubu",
    location: "Miejsce ślubu lub obiekt", services: "Interesujące usługi", language: "Preferowany język",
    message: "Dodatkowe informacje lub wiadomość",
    consent: "Wyrażam zgodę na wykorzystanie moich danych w celu odpowiedzi na zapytanie, zgodnie z polityką prywatności.",
    submit: "Wyślij zapytanie", sending: "Wysyłanie…",
    success: "Dziękuję — Twoje zapytanie zostało wysłane. Wkrótce się odezwę.",
    error: "Przepraszam, nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na WhatsApp.",
    notConfigured: "Formularz nie jest jeszcze podłączony. Na razie napisz przez WhatsApp lub Instagram.",
    errors: { required: "To pole jest wymagane.", email: "Podaj prawidłowy adres e-mail.", services: "Wybierz co najmniej jedną usługę.", consent: "Zaznacz zgodę, aby kontynuować." },
    langs: { en: "Angielski", es: "Hiszpański", pl: "Polski" },
  },
  whatsapp: { label: "Napisz na WhatsApp", msg: "Cześć Anna! Planuję ślub w Hiszpanii i chętnie dowiem się więcej o Twoich usługach tworzenia treści ślubnych." },
  footer: { location: "Malaga, Hiszpania", privacy: "Polityka prywatności", cookies: "Polityka cookies", rights: "Wszelkie prawa zastrzeżone.", nav: "Nawigacja w stopce" },
};

export const dict: Record<Lang, Dict> = { en, es, pl };
