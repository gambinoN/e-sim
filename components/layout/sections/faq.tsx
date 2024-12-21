import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Šta je eSIM i kako funkcioniše?",
    answer: "eSIM je digitalna SIM kartica koja je ugrađena u vaš uređaj. Omogućava vam da aktivirate mobilne mreže bez potrebe za fizičkom SIM karticom, što olakšava povezivanje i korištenje usluga.",
    value: "item-1",
  },
  {
    question: "Koje su prednosti eSIM-a u odnosu na tradicionalnu SIM karticu?",
    answer:
      "eSIM nudi brojne prednosti, kao što su jednostavna aktivacija, ušteda prostora u uređaju, mogućnost korištenja više mobilnih mreža na jednom uređaju, te lakša promjena operatera ili plana.",
    value: "item-2",
  },
  {
    question:
      "Mogu li koristiti eSIM dok putujem u inostranstvo?",
    answer:
      "Da, eSIM omogućava globalnu povezanost, pa možete koristiti isti plan za roaming u mnogim zemljama širom svijeta. Nema potrebe za mijenjanjem kartica ili prekomjernim troškovima.",
    value: "item-3",
  },
  {
    question: "Kako mogu promijeniti tarifni plan na eSIM-u?",
    answer: "Promjena tarifnog plana može se obaviti jednostavno putem aplikacije ili na našem web sajtu. Sve promjene možete napraviti u nekoliko klikova.",
    value: "item-4",
  },
  {
    question:
      "Da li je moj uređaj kompatibilan sa eSIM-om?",
    answer: "Većina novijih pametnih telefona i uređaja podržavaju eSIM. Provjerite tehničke specifikacije svog uređaja ili nas kontaktirajte kako bismo provjerili kompatibilnost.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
        Često postavljena pitanja
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
