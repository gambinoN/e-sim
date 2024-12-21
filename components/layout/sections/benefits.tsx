import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Rocket",
    title: "Brzo postavljanje",
    description:
      "Aktivirajte svoj mobilni plan u samo nekoliko minuta bez čekanja na SIM karticu.",
  },
  {
    icon: "Bolt",
    title: "Fleksibilnost",
    description:
      "Jednostavno mijenjajte operatere bez potrebe za novom karticom.",
  },
  {
    icon: "Shield",
    title: "Sigurnost",
    description:
      "Vaš mobilni plan je pohranjen digitalno, što ga čini sigurnijim i zaštićenim od gubitka.",
  },
  {
    icon: "Leaf",
    title: "Ekološki prihvatljivo",
    description:
      "Smanjite plastični otpad koristeći eSIM, održivo rješenje za budućnost.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefiti</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zašto odabrati eSIM?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
          eSIM tehnologija nudi jednostavniji, brži i sigurniji način povezivanja s mrežom, bez potrebe za fizičkom SIM karticom.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
