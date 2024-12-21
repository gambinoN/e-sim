import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";


export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
          <Link href="/" className="font-bold text-lg flex items-center">
          <Image
            src="/logo.svg"
            alt="SimUp Logo"
            width={36}
            height={36}
            className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
          />
          SimUp
        </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Kontakt</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Facebook
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforme</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                iOS
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Android
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Pomoć</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Kontaktirajte nas
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Dojam
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Linkovi</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Ponuda
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Kako instalirati eSIM?
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                SimUp
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 Dizajnirano od strane
            <Link
              target="_blank"
              href="https://github.com/Imran202"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              stranica.ba
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
