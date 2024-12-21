import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Jednostavna Aktivacija",
    description:
      "Aktivirajte eSIM u samo nekoliko koraka, bez potrebe za fizičkom SIM karticom.",
    pro: 0,
  },
  {
    title: "Globalna Pokrivenost",
    description:
      "Povežite se u više od 150 zemalja s najboljim mrežama širom svijeta.",
    pro: 1,
  },
  {
    title: "Fleksibilni Planovi",
    description: "Odaberite paket koji odgovara vašim potrebama – od kratkoročnih do neograničenih opcija.",
    pro: 0,
  },
  {
    title: "Podrška 24/7",
    description: "Naš tim za korisničku podršku dostupan je danonoćno za sva vaša pitanja.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
      Zašto odabrati našu uslugu?
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
      Prednosti Našeg eSIM-a
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Otkrijte kako naš eSIM čini vašu povezanost bržom, jednostavnijom i fleksibilnijom, uz niz prednosti koje donosi.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
