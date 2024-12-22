import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface StepProps {
  image: string; // Putanja do slike
  title: string;
  description: string;
}

const iphoneSteps: StepProps[] = [
  {
    image: "/iphone-step1.png",
    title: "Korak 1: Ažurirajte iOS",
    description: "Provjerite imate li najnoviju verziju iOS-a: Podešavanja > Opšte > Ažuriranje softvera.",
  },
  {
    image: "/iphone-step2.png",
    title: "Korak 2: Dodajte eSIM",
    description: "Idite na Podešavanja > Mobilna usluga > Dodaj eSIM. Koristite kameru za skeniranje QR koda.",
  },
  {
    image: "/iphone-step3.png",
    title: "Korak 3: Unesite detalje ručno (ako nema QR koda)",
    description: "Ako nemate QR kod, izaberite opciju 'Unesite detalje ručno' i unesite podatke koje vam je dao operater.",
  },
  {
    image: "/iphone-step4.png",
    title: "Korak 4: Konfigurišite Dual SIM",
    description: "Podesite primarnu i sekundarnu liniju za pozive i mobilne podatke u Podešavanja > Mobilna usluga.",
  },
];

const xiaomiSteps: StepProps[] = [
  {
    image: "/images/xiaomi-step1.png",
    title: "Korak 1: Otvorite Podešavanja",
    description: "Na Xiaomi telefonu, idite na 'SIM kartice i mobilne mreže'.",
  },
  {
    image: "/images/xiaomi-step2.png",
    title: "Korak 2: Dodajte eSIM",
    description: "Kliknite na 'Dodaj eSIM' i pratite uputstva na ekranu.",
  },
  {
    image: "/images/xiaomi-step3.png",
    title: "Korak 3: Skenirajte QR kod",
    description: "Upotrebite kameru Xiaomi uređaja za skeniranje koda.",
  },
];

const samsungSteps: StepProps[] = [
  {
    image: "/images/samsung-step1.png",
    title: "Korak 1: Pristupite Podešavanjima",
    description: "Idite na 'Povezivanje' i odaberite 'SIM menadžer'.",
  },
  {
    image: "/images/samsung-step2.png",
    title: "Korak 2: Dodajte mobilni plan",
    description: "Kliknite na 'Dodaj mobilni plan' i pratite uputstva.",
  },
  {
    image: "/images/samsung-step3.png",
    title: "Korak 3: Skenirajte QR kod",
    description: "Skenirajte kod za aktivaciju pomoću kamere na Galaxy S24.",
  },
];

const RequirementsSection = () => (
  <section id="requirements" className="container py-16 sm:py-20">
    <div className="text-center mb-12">
      <h2 className="text-lg text-primary mb-2 tracking-wider">Preduvjeti</h2>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Šta vam je potrebno za eSIM?</h2>
      <ul className="list-disc list-inside text-muted-foreground text-xl">
        <li>Telefon koji podržava eSIM.</li>
        <li>QR kod od vašeg mobilnog operatera.</li>
        <li>Aktivna internet konekcija za preuzimanje konfiguracija.</li>
        <li>
          Izaberite uređaj za detaljne korake:
          <ul className="mt-4 list-none text-lg">
            <li>
              <a href="#iphone-guide" className="text-primary hover:underline">
                iPhone
              </a>
            </li>
            <li>
              <a href="#xiaomi-guide" className="text-primary hover:underline">
                Xiaomi
              </a>
            </li>
            <li>
              <a href="#samsung-guide" className="text-primary hover:underline">
                Samsung
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
);

const InstallationGuideSection = ({ steps, title, id }: { steps: StepProps[]; title: string; id: string }) => (
  <section id={id} className="container py-24 sm:py-32">
    <div className="text-center mb-12">
      <h2 className="text-lg text-primary mb-2 tracking-wider">Uputstvo</h2>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-muted-foreground">
        Pratite ove korake kako biste brzo i lako instalirali eSIM na svoj uređaj.
      </p>
    </div>

    <div
      className={`grid gap-6 ${
        steps.length === 3
          ? "md:grid-cols-3 justify-center"
          : "md:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {steps.map(({ image, title, description }, index) => (
        <Card
          key={title}
          className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75"
        >
          <CardHeader>
            <div className="flex justify-between">
              <span className="text-5xl text-muted-foreground/15 font-medium">
                0{index + 1}
              </span>
            </div>
            <CardTitle className="mt-4">{title}</CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground">
            <Image
              src={image}
              alt={`Slika za ${title}`}
              width={300}
              height={300}
              className="rounded-md mb-4"
            />
            <p>{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export const HowToSection = () => (
  <>
    <RequirementsSection />
    <InstallationGuideSection steps={iphoneSteps} title="Uputstvo za iPhone uređaje" id="iphone-guide" />
    <InstallationGuideSection steps={xiaomiSteps} title="Uputstvo za Xiaomi telefone" id="xiaomi-guide" />
    <InstallationGuideSection steps={samsungSteps} title="Uputstvo za Samsung S24" id="samsung-guide" />
  </>
);
