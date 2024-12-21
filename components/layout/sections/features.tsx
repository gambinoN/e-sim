import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Izaberite plan",
    description:
      "Odaberite paket podataka koji vam najviše odgovara.",
  },
  {
    icon: "BadgeCheck",
    title: "Preuzmite eSIM",
    description:
      "Skenirajte QR kod koji dobijete putem e-maila.",
  },
  {
    icon: "Goal",
    title: "Povežite se",
    description:
      "Aktivirajte eSIM na svom uređaju i uživajte u vezi bez granica!",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
      Sve u tri koraka.
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Kako funkcioniše?
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Povežite se gdje god da se nalazite uz jednostavna tri koraka. Zaboravite na fizičke SIM kartice i uživajte u modernoj tehnologiji koja vam pruža pouzdanu mobilnu vezu – brzo i bez komplikacija.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
