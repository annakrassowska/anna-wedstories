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
  nav: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact", cta: "Check Your Date", menu: "Open menu", close: "Close menu", lang: "Language" },
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
    placeholder: "[Add Anna's personal introduction here.]",
    alt: "A bride's hands holding a bouquet of olive branches and ivory roses",
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
    title: "A package for every story.",
    items: [
      { name: "ESSENTIAL", hours: "4 hours of coverage", features: ["1 one-minute highlight video", "1 reel for social media", "Online pre-wedding meeting (optional)", "Hours to choose by the couple"], price: "from €290 + IVA (VAT)" },
      { name: "PREMIUM", hours: "6 hours of coverage", features: ["1 one-minute highlight video", "2 reels for social media", "Online pre-wedding meeting (optional)", "Hours to choose by the couple"], price: "from €350 + IVA (VAT)" },
      { name: "EXCLUSIVE", hours: "9 hours of coverage", features: ["1 one-minute highlight video", "2 reels for social media", "Online pre-wedding meeting (optional)", "Hours to choose by the couple"], price: "from €450 + IVA (VAT)" },
    ],
  },

  portfolio: {
    eyebrow: "Selected stories",
    title: "Moments, as they happened.",
    note: "Sample imagery — to be replaced with Anna's own work.",
    cta: "Imagine your day, told your way.",
    button: "Let's Talk About Your Wedding",
    open: "Open image",
    close: "Close viewer",
    prev: "Previous image",
    next: "Next image",
    alts: [
      "Newlyweds walking out of a white Andalusian chapel under a shower of petals",
      "A bride's veil lifted by the sea breeze on a Costa del Sol beach",
      "Guests laughing at a candlelit dinner table in an olive grove",
      "Bridal bouquet of olive branches and ivory roses",
      "A content creator filming a bride in a stone courtyard",
      "A couple laughing on a terrace above the Mediterranean",
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
    placeholder: "[Add Anna's authentic personal story, approach to wedding content creation, and relevant experience here.]",
    alt: "A content creator filming a bride with a smartphone in a sunlit courtyard",
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
  final: { title: "Your day deserves to be remembered exactly as it felt.", sub: "Let's create something beautiful together.", cta: "Check Your Date" },
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
  nav: { home: "Inicio", about: "Sobre mí", services: "Servicios", portfolio: "Portfolio", contact: "Contacto", cta: "Consulta tu fecha", menu: "Abrir menú", close: "Cerrar menú", lang: "Idioma" },
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
    placeholder: "[Añade aquí la presentación personal de Anna.]",
    alt: "Las manos de una novia sujetando un ramo de ramas de olivo y rosas marfil",
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
    title: "Un paquete para cada historia.",
    items: [
      { name: "ESSENTIAL", hours: "4 horas de cobertura", features: ["1 vídeo resumen de 1 minuto", "1 reel para redes sociales", "Reunión preboda online (opcional)", "Horario a elegir por los novios"], price: "desde 290 € + IVA (VAT)" },
      { name: "PREMIUM", hours: "6 horas de cobertura", features: ["1 vídeo resumen de 1 minuto", "2 reels para redes sociales", "Reunión preboda online (opcional)", "Horario a elegir por los novios"], price: "desde 350 € + IVA (VAT)" },
      { name: "EXCLUSIVE", hours: "9 horas de cobertura", features: ["1 vídeo resumen de 1 minuto", "2 reels para redes sociales", "Reunión preboda online (opcional)", "Horario a elegir por los novios"], price: "desde 450 € + IVA (VAT)" },
    ],
  },

  portfolio: {
    eyebrow: "Historias seleccionadas",
    title: "Momentos, tal como ocurrieron.",
    note: "Imágenes de muestra — se sustituirán por el trabajo de Anna.",
    cta: "Imagina tu día, contado a tu manera.",
    button: "Hablemos de tu boda",
    open: "Abrir imagen", close: "Cerrar visor", prev: "Imagen anterior", next: "Imagen siguiente",
    alts: [
      "Recién casados saliendo de una capilla andaluza blanca bajo una lluvia de pétalos",
      "El velo de una novia mecido por la brisa en una playa de la Costa del Sol",
      "Invitados riendo en una cena a la luz de las velas en un olivar",
      "Ramo de novia de ramas de olivo y rosas marfil",
      "Una creadora de contenido grabando a una novia en un patio de piedra",
      "Una pareja riendo en una terraza sobre el Mediterráneo",
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
    placeholder: "[Añade aquí la historia personal de Anna, su forma de trabajar y su experiencia.]",
    alt: "Una creadora de contenido grabando a una novia con el móvil en un patio soleado",
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
  final: { title: "Tu día merece ser recordado tal como lo sentiste.", sub: "Creemos juntos algo bonito.", cta: "Consulta tu fecha" },
  whatsapp: { label: "Escríbeme por WhatsApp", msg: "¡Hola Anna! Estoy organizando mi boda en España y me encantaría saber más sobre tus servicios de contenido para bodas." },
  footer: { location: "Málaga, España", privacy: "Política de privacidad", cookies: "Política de cookies", rights: "Todos los derechos reservados.", nav: "Navegación del pie de página" },
};

const pl: Dict = {
  meta: {
    title: "Anna WedStories — Twórczyni treści ślubnych w Maladze i na Costa del Sol",
    description:
      "Twórczyni treści ślubnych w Maladze, Marbelli i na Costa del Sol. Naturalne treści z dnia ślubu, Reelsy i Stories na Instagram dla par biorących ślub w Hiszpanii.",
  },
  nav: { home: "Start", about: "O mnie", services: "Usługi", portfolio: "Portfolio", contact: "Kontakt", cta: "Sprawdź termin", menu: "Otwórz menu", close: "Zamknij menu", lang: "Język" },
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
    placeholder: "[Tutaj dodaj osobiste przedstawienie Anny.]",
    alt: "Dłonie panny młodej trzymające bukiet z gałązek oliwnych i kremowych róż",
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
    title: "Pakiet dla każdej historii.",
    items: [
      { name: "ESSENTIAL", hours: "4 godziny relacji", features: ["1 film podsumowujący (1 minuta)", "1 reel na media społecznościowe", "Spotkanie online przed ślubem (opcjonalnie)", "Harmonogram wybierany przez parę młodzią"], price: "od 290 € + IVA (VAT)" },
      { name: "PREMIUM", hours: "6 godzin relacji", features: ["1 film podsumowujący (1 minuta)", "2 reele na media społecznościowe", "Spotkanie online przed ślubem (opcjonalnie)", "Harmonogram wybierany przez parę młodzią"], price: "od 350 € + IVA (VAT)" },
      { name: "EXCLUSIVE", hours: "9 godzin relacji", features: ["1 film podsumowujący (1 minuta)", "2 reele na media społecznościowe", "Spotkanie online przed ślubem (opcjonalnie)", "Harmonogram wybierany przez parę młodzią"], price: "od 450 € + IVA (VAT)" },
    ],
  },

  portfolio: {
    eyebrow: "Wybrane historie",
    title: "Chwile, takie jakie były.",
    note: "Przykładowe zdjęcia — zostaną zastąpione pracami Anny.",
    cta: "Wyobraźcie sobie swój dzień, opowiedziany po Waszemu.",
    button: "Porozmawiajmy o Waszym ślubie",
    open: "Otwórz zdjęcie", close: "Zamknij podgląd", prev: "Poprzednie zdjęcie", next: "Następne zdjęcie",
    alts: [
      "Nowożeńcy wychodzący z białej andaluzyjskiej kaplicy w deszczu płatków",
      "Welon panny młodej unoszony przez morską bryzę na plaży Costa del Sol",
      "Goście śmiejący się przy kolacji przy świecach w gaju oliwnym",
      "Bukiet ślubny z gałązek oliwnych i kremowych róż",
      "Twórczyni treści filmująca pannę młodą na kamiennym dziedzińcu",
      "Para śmiejąca się na tarasie nad Morzem Śródziemnym",
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
    title: "Cześć, jestem Anna.",
    p1: "To ja stoję za Anna WedStories — uchwytuję drobne chwile, prawdziwe emocje i piękne detale, które sprawiają, że każdy ślub jest wyjątkowy.",
    placeholder: "[Tutaj dodaj osobistą historię Anny, jej podejście do tworzenia treści ślubnych i doświadczenie.]",
    alt: "Twórczyni treści filmująca pannę młodą smartfonem na słonecznym dziedzińcu",
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
  final: { title: "Wasz dzień zasługuje na to, by pamiętać go dokładnie takim, jaki był.", sub: "Stwórzmy razem coś pięknego.", cta: "Sprawdź termin" },
  whatsapp: { label: "Napisz na WhatsApp", msg: "Cześć Anna! Planuję ślub w Hiszpanii i chętnie dowiem się więcej o Twoich usługach tworzenia treści ślubnych." },
  footer: { location: "Malaga, Hiszpania", privacy: "Polityka prywatności", cookies: "Polityka cookies", rights: "Wszelkie prawa zastrzeżone.", nav: "Nawigacja w stopce" },
};

export const dict: Record<Lang, Dict> = { en, es, pl };
