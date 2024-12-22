import { Button } from "@/components/ui/button";
import Image from "next/image";

export const AboutUs = () => (
  <section id="about-us" className="container py-16 sm:py-20">
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-lg text-primary mb-2 tracking-wider uppercase">O nama</h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vaš pouzdani partner za eSIM rješenja
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Na platformi SimUp posvećeni smo pružanju najmodernijih tehnologija za digitalne SIM kartice. Naša misija 
          je da pojednostavimo povezivanje i omogućimo korisnicima širom svijeta lakši pristup mobilnim mrežama, bez 
          potrebe za fizičkim SIM karticama.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          Sa fokusom na inovaciju, sigurnost i korisničko iskustvo, razvijamo rješenja koja omogućavaju jednostavnu 
          instalaciju i upotrebu eSIM-a, bez obzira na to gdje se nalazite.
        </p>
        <Button asChild>
          <a href="/packages" className="px-6 py-3">
            Pogledajte ponudu
          </a>
        </Button>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <Image
          src="/about-us.png" // Ovdje postavite putanju do vaše slike
          alt="O nama ilustracija"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* Features Section */}
    <div className="mt-16">
    <h2 className="text-lg text-primary mb-2 tracking-wider uppercase text-center">O nama</h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Zašto SimUp?
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18m9-9H3"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Jednostavna aktivacija</h4>
          <p className="text-muted-foreground">
            Brzo i lako aktivirajte svoju eSIM karticu u samo nekoliko koraka.
          </p>
        </div>
        <div className="text-center">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75L15 15m0-5.25l-5.25 5.25m8.25 6v-6.75a1.5 1.5 0 00-1.5-1.5H6.75a1.5 1.5 0 00-1.5 1.5V21"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Sigurne transakcije</h4>
          <p className="text-muted-foreground">
            Koristimo Monri Gateway za maksimalnu sigurnost plaćanja.
          </p>
        </div>
        <div className="text-center">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Široka kompatibilnost</h4>
          <p className="text-muted-foreground">
            Naša rješenja su kompatibilna s većinom uređaja i mreža.
          </p>
        </div>
        <div className="text-center">
          <div className="text-primary mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 6.75h-13.5m13.5 10.5h-13.5m13.5-5.25H3.75"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold mb-2">Podrška 24/7</h4>
          <p className="text-muted-foreground">
            Naša korisnička podrška dostupna je u svakom trenutku.
          </p>
        </div>
      </div>
    </div>
  </section>
);
