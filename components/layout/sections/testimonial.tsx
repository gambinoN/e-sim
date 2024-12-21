"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Elvedina Sakić",
    userName: "Studentica",
    comment:
      "Koristim eSIM već nekoliko mjeseci i oduševljena sam kako je sve jednostavno. Aktivacija je bila brza, a konekcija stabilna čak i kada putujem. Preporučujem svakome!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Marko Petrović",
    userName: "IT Engineer",
    comment:
      "Savršeno rješenje za moje poslovne potrebe. S eSIM-om mogu lako koristiti različite mreže kad putujem, bez potrebe za fizičkim karticama.",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Amra Kovačević",
    userName: "Digitalni marketing stručnjak",
    comment:
      "Nikad nije bilo lakše održavati povezanost na putovanjima. eSIM mi je uštedio puno vremena i novca. Odlična usluga!",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Jasmin Dedić",
    userName: "Fotograf",
    comment:
      "Kao freelancer koji često putuje, eSIM je bio prava stvar. Jednostavna aktivacija i odličan prijem gdje god da sam bio.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Selma Jahić",
    userName: "Menadžer u turizmu",
    comment:
      "Ugodno sam iznenađena kako dobro funkcioniše eSIM. Pomaže mi u poslovima i tijekom odmora, bez problema s roamingom.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Nermin Omerović",
    userName: "Programer",
    comment:
      "Pomoću eSIM-a mogu se koristiti različite mreže dok radim izvan zemlje. Uvijek sam povezan i nikada nije bilo problema s signalom.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Iskustva
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Šta naši korisnici kažu?
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
