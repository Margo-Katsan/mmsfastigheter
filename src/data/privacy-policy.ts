export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

export const privacyPolicy: PrivacySection[] = [
  {
    id: "personuppgiftsansvarig",
    title: "Personuppgiftsansvarig",
    paragraphs: [
      "MMS Fastigheter ansvarar för behandlingen av personuppgifter som samlas in via vår webbplats.",
      "Denna integritetspolicy beskriver hur personuppgifter behandlas när du besöker webbplatsen, kontaktar oss eller skickar en felanmälan.",
    ],
  },
  {
    id: "personuppgifter",
    title: "Vilka personuppgifter behandlar vi?",
    paragraphs: [
      "Vi behandlar de personuppgifter som du lämnar till oss genom våra kontaktformulär, felanmälningar eller annan kommunikation.",
    ],
    items: [
      "Namn och företagsnamn.",
      "E-postadress och telefonnummer.",
      "Fastighetsadress och lägenhetsnummer.",
      "Information om fastigheter och projekt som du är intresserad av.",
      "Meddelanden och beskrivningar av fel.",
      "Bilder och andra uppgifter som du lämnar i samband med en felanmälan.",
      "Tekniska uppgifter, exempelvis IP-adress och serverloggar, när sådana behandlas.",
    ],
  },
  {
    id: "andamal",
    title: "Varför behandlar vi dina personuppgifter?",
    paragraphs: [
      "Personuppgifterna behandlas för att vi ska kunna hantera kontakten med dig och administrera ärenden som rör våra fastigheter.",
    ],
    items: [
      "Besvara frågor och kontaktförfrågningar.",
      "Hantera intresseanmälningar för fastigheter och projekt.",
      "Administrera felanmälningar från hyresgäster.",
      "Planera och genomföra underhållsåtgärder.",
      "Upprätthålla webbplatsens funktion och säkerhet.",
      "Uppfylla tillämpliga rättsliga skyldigheter.",
    ],
  },
  {
    id: "rattslig-grund",
    title: "Rättslig grund",
    paragraphs: [
      "När du kontaktar oss för att diskutera ett avtal kan behandlingen vara nödvändig för att vidta åtgärder inför ett avtal på din begäran.",
      "Vid hantering av hyresärenden och felanmälningar kan behandlingen vara nödvändig för att fullgöra ett avtal med dig.",
      "För allmänna förfrågningar och webbplatsens säkerhet kan behandlingen grundas på vårt berättigade intresse av att kommunicera med besökare, hantera fastighetsärenden och skydda våra system, efter en intresseavvägning.",
      "Personuppgifter kan även behandlas när det krävs för att uppfylla en rättslig förpliktelse.",
    ],
  },
  {
    id: "lagring",
    title: "Hur länge sparar vi dina uppgifter?",
    paragraphs: [
      "Personuppgifter ska inte sparas längre än vad som är nödvändigt för det ändamål som de samlades in för.",
      "Lagringstiden bedöms utifrån ärendets karaktär, avtalsförhållanden, behovet av dokumentation och tillämpliga rättsliga skyldigheter.",
    ],
  },
  {
    id: "mottagare",
    title: "Vilka kan ta del av dina uppgifter?",
    paragraphs: [
      "Personuppgifter kan behöva delas med personer och leverantörer som medverkar i hanteringen av ditt ärende.",
    ],
    items: [
      "Behöriga personer inom MMS Fastigheter.",
      "Leverantörer av webbhotell, IT- och e-posttjänster.",
      "Entreprenörer och serviceföretag vid underhåll och felanmälningar.",
      "Myndigheter när utlämnande krävs enligt lag.",
    ],
  },
  {
    id: "overforing",
    title: "Överföring utanför EU/EES",
    paragraphs: [
      "Om personuppgifter överförs till ett land utanför EU/EES ska överföringen ske i enlighet med dataskyddsförordningens regler och med tillämpliga skyddsåtgärder.",
    ],
  },
  {
    id: "sakerhet",
    title: "Skydd av personuppgifter",
    paragraphs: [
      "Vi ska vidta lämpliga tekniska och organisatoriska åtgärder för att skydda personuppgifter mot obehörig åtkomst, förlust och otillåten behandling.",
      "Undvik att lämna känsliga personuppgifter eller annan information som inte är nödvändig för ditt ärende i våra formulär eller bifogade bilder.",
    ],
  },
  {
    id: "rattigheter",
    title: "Dina rättigheter",
    paragraphs: [
      "Enligt dataskyddsförordningen har du rättigheter som rör behandlingen av dina personuppgifter. Vilka rättigheter som gäller beror på omständigheterna och den rättsliga grunden.",
    ],
    items: [
      "Rätt att få information om behandlingen.",
      "Rätt att få tillgång till dina personuppgifter.",
      "Rätt att begära rättelse av felaktiga uppgifter.",
      "Rätt att begära radering.",
      "Rätt att begära begränsning av behandlingen.",
      "Rätt att invända mot viss behandling.",
      "Rätt till dataportabilitet när förutsättningarna är uppfyllda.",
      "Rätt att återkalla samtycke när behandlingen grundas på samtycke.",
      "Rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).",
    ],
  },
  {
    id: "obligatoriska-uppgifter",
    title: "Uppgifter i våra formulär",
    paragraphs: [
      "Fält markerade med en asterisk är obligatoriska för att formuläret ska kunna skickas.",
      "Om du inte lämnar de uppgifter som behövs kan vi ha svårt att besvara din förfrågan eller hantera din felanmälan.",
      "Det är frivilligt att bifoga bilder till en felanmälan.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies och teknisk information",
    paragraphs: [
      "Webbplatsen kan använda tekniskt nödvändiga funktioner för att säkerställa att webbplatsen fungerar korrekt.",
      "Information om eventuella analysverktyg och andra icke-nödvändiga cookies ska lämnas innan sådana funktioner används.",
    ],
  },
  {
    id: "andringar",
    title: "Ändringar av integritetspolicyn",
    paragraphs: [
      "Integritetspolicyn kan uppdateras när webbplatsens funktioner eller behandlingen av personuppgifter förändras.",
      "Den aktuella versionen finns alltid tillgänglig på denna sida.",
    ],
  },
];