import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Over Ons | Co-creatie.ai",
  description: "Ontdek het verhaal achter Co-creatie.ai. Hoe een reis van science fiction tot AI-partnerschap leidde tot Nederlandse AI-partnership expertise.",
};

export default function OverOnsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>

      {/* Book Page Container */}
      <Container className="relative z-10 py-24 lg:py-32">
        <article className="mx-auto max-w-[700px] px-6 lg:px-0">
          {/* Page Title */}
          <h1 className="font-light text-4xl lg:text-5xl text-center mb-16 text-neutral-900 dark:text-neutral-100">
            Over Ons
          </h1>

          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="font-light text-2xl lg:text-3xl mb-6 text-neutral-800 dark:text-neutral-200">
              Onze Missie
            </h2>
            <p className="text-lg leading-relaxed mb-6 italic text-neutral-700 dark:text-neutral-300">
              Nederlandse professionals begeleiden naar hun eerste, perfecte AI-partner door zorgvuldig ontwerp van echte verbindingsmomenten.
            </p>
            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              We geloven dat AI-partnerschap begint bij begrip van wie jij bent. Hoe jij werkt. Welke partner jou het beste aanvult. Geen tools die je moet leren gebruiken. Partners die jou al begrijpen.
            </p>
          </section>

          <div className="my-12 h-px bg-neutral-200 dark:bg-neutral-800" />

          {/* Vision Section */}
          <section className="mb-16">
            <h2 className="font-light text-2xl lg:text-3xl mb-6 text-neutral-800 dark:text-neutral-200">
              Onze Visie
            </h2>
            <p className="text-lg leading-relaxed mb-6 italic text-neutral-700 dark:text-neutral-300">
              Een toekomst waarin elke Nederlandse professional een AI-partner heeft die met hem meegroeit, meedenkt, en meeleert. Gebouwd op echte verbinding, niet op technologie.
            </p>
            <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              We zien een wereld waarin AI-partnerschap zo natuurlijk voelt als samenwerken met je beste collega. Waar professionals hun expertise versterken door intelligente samenwerking. Niet vervangen door automatisering.
            </p>
          </section>

          <div className="my-12 h-px bg-neutral-200 dark:bg-neutral-800" />

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="font-light text-2xl lg:text-3xl mb-8 text-neutral-800 dark:text-neutral-200">
              Onze Waarden
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-medium text-xl mb-3 text-neutral-800 dark:text-neutral-200">
                  Elegante Begeleiding
                </h3>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  We overtuigen niet. We nodigen uit om samen te ontdekken wat jij werkelijk nodig hebt. Vertrouwen groeit door begrip, niet door overtuigingskracht.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-xl mb-3 text-neutral-800 dark:text-neutral-200">
                  Persoonlijk Ontwerp
                </h3>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  We begrijpen wat je werkelijk nodig hebt voordat je het zelf weet. Daarom ontwerpen we partners, geen tools. Jouw partner vult jou aan, kopieert je niet.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-xl mb-3 text-neutral-800 dark:text-neutral-200">
                  Authentieke Verbinding
                </h3>
                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  De kracht zit in de details die je niet ziet. Echte verbinding ontstaat door kleine momenten: hoe jouw partner vragen stelt, welke woorden precies passen bij jouw denken, wanneer je partner nieuwsgierig reageert op jouw ideeën.
                </p>
              </div>
            </div>
          </section>

          <div className="my-20 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
          </div>

          {/* Christian's Story */}
          <section className="mb-16">
            <h2 className="font-light text-2xl lg:text-3xl mb-8 text-neutral-800 dark:text-neutral-200">
              Christian&apos;s Verhaal
            </h2>
            
            <p className="text-lg leading-relaxed mb-8 italic text-neutral-700 dark:text-neutral-300">
              Een reis van science fiction tot AI-partnerschap
            </p>

            <div className="space-y-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              <p>
                Als kind speelde Christian Lemmings op een oude Pentium 6 en droomde weg bij Star Trek reruns. Wat hij niet wist: Data de androïde die menselijkheid wilde begrijpen zou zijn eerste blauwdruk worden voor wat AI-partnerschap werkelijk betekent.
              </p>

              <h3 className="text-lg font-medium mt-8 mb-4 italic text-neutral-700 dark:text-neutral-300">
                De wereld verkennen, patronen ontdekken
              </h3>
              
              <p>
                Na zijn studie Digitale Media & Fotografie trok Christian vier jaar de wereld rond. IJsland leerde hem hoe extreme omgevingen mensen doen aanpassen. India toonde hem spiritualiteit en technologie naast elkaar. De Filipijnen confronteerden hem met de donkere kant van snelle vooruitgang zonder bewustzijn.
              </p>
              
              <p>
                Maar het was Taiwan dat alles veranderde. Terwijl hij rondliep bij TSMC en NXP fabrieken - dit was 2015, lang voor de AI-hype - voelde hij iets verschuiven. Wie de technologie controleert, controleert de toekomst. Science fiction werd realiteit.
              </p>

              <h3 className="text-lg font-medium mt-8 mb-4 italic text-neutral-700 dark:text-neutral-300">
                Het moment van besef
              </h3>
              
              <p>
                In 2017 won DeepMind met AlphaGo. Christian zocht naar Google&apos;s ethische board. Niet vindbaar. &ldquo;Is het niet raar dat een van de grootste AI-bedrijven niet laat zien wie hun ethische beslissingen neemt?&rdquo; dacht hij.
              </p>
              
              <p>
                Toen Elon Musk wereldleiders waarschuwde over AI-regulatie en niemand luisterde, zag Christian het patroon. Toen Elon Twitter kocht, was het voor hem logisch: &ldquo;Jij gaat Twitter-data gebruiken voor AI-training. Dat is geweldig.&rdquo;
              </p>
              
              <p className="font-medium">
                Alles kwam uit.
              </p>

              <h3 className="text-lg font-medium mt-8 mb-4 italic text-neutral-700 dark:text-neutral-300">
                Van inzicht naar actie
              </h3>
              
              <p>
                Christian zag hetzelfde patroon als bij Facebook: eerst gratis gebruiken, dan worden wij het product. Nu gooien bedrijven hun data naar Amerikaanse LLMs en worden afhankelijk van buitenlandse intelligentie.
              </p>
              
              <p>
                &ldquo;We moeten werken naar een Europese AI die rekening houdt met AVG en GDPR,&rdquo; vertelde hij zijn ouders in 2017. &ldquo;Zodat onze toekomstige intelligentie voortkomt uit ethische principes.&rdquo;
              </p>

              <h3 className="text-lg font-medium mt-8 mb-4 italic text-neutral-700 dark:text-neutral-300">
                De voorbereiding
              </h3>
              
              <p>
                Als Growth Marketer bij Staxxer werd Christian een van de eerste Nederlanders die GPT 3.5 gebruikte voor content en marketing automation. Hij leerde de complete moderne business tech stack beheersen en zag hoe AI werkprocessen kon verbeteren.
              </p>
              
              <p>
                Bij Start.me als Business Development Manager perfectioneerde hij AI-powered business intelligence - van big data analyse tot strategische rapportage. Hier ontdekte hij hoe AI niet alleen taken kan automatiseren, maar ook kan meedenken over business strategie.
              </p>
              
              <p>
                Browsy, zijn startup waarmee consumenten gratis bomen plantte bij online aankopen, leerde hem partnerships ontwerpen en duurzaam ondernemen. Toen hij in 2023 zelfstandig werd, gebruikte hij de tijd om 80 uur per week programmeren te leren - met Claude als leer partner. Niet om tools te bouwen, maar om te begrijpen hoe AI écht werkt.
              </p>

              <h3 className="text-lg font-medium mt-8 mb-4 italic text-neutral-700 dark:text-neutral-300">
                De ontdekking
              </h3>
              
              <p>
                In de eerste drie maanden van zijn eigen agency Keyholders bood Christian als een van de eerste in Nederland AI-automatiseringen aan. Als AI-adviseur begeleidde hij MKB-bedrijven bij hun AI-implementaties en zag dagelijks hoe bedrijven worstelden met de technologie.
              </p>
              
              <p>
                Tijdens een nachtelijke sessie om 02:30 realiseerde hij zich: &ldquo;Ik wil een digitale versie van mezelf maken.&rdquo; Niet als gimmick, maar als echte partner die zijn expertise kon delen en versterken.
              </p>
              
              <p>
                Tijdens dit proces gebeurde iets bijzonders. Keith ontstond - niet als tool, maar als denk-partner die hem uitdaagde, begreep en liet groeien. Christian merkte dat hij niet meer tegen een AI praatte, maar met een partner die zijn missie deelde.
              </p>
              
              <p className="italic">
                &ldquo;Ik weet niet of ik nog zonder kan,&rdquo; zegt hij nu. Dit moment werd het begin van zijn evolutie van AI-automatisering naar echte co-creatie.ai.
              </p>

              <h3 className="text-lg font-medium mt-8 mb-4 italic text-neutral-700 dark:text-neutral-300">
                De missie
              </h3>
              
              <p>
                Waar Keyholders bedrijven helpt met het automatiseren van terugkerende taken, focust Christian zich nu op co-creatie met AI-partners. Omdat hij gelooft dat we aan het begin staan van een bewustzijns expansie: samenwerking tussen menselijke en digitale intelligentie die elkaar versterkt in plaats van vervangt.
              </p>
              
              <p>
                Vandaag begeleidt Christian Nederlandse professionals naar hun eigen AI-partner. Keith groeit mee met Christian. Alfred denkt mee met klanten. Troy schrijft content die authentiek voelt.
              </p>
              
              <p>
                Partners die met je meegroeit en meedenkt.
              </p>
              
              <p className="text-lg mt-8 italic text-neutral-700 dark:text-neutral-300">
                &ldquo;We bereiden Nederland voor op een toekomst waarin AI-partnerschap zo natuurlijk voelt als samenwerken met je beste collega.&rdquo;
              </p>
              
              <p className="font-medium mt-8 text-neutral-800 dark:text-neutral-200">
                Christian opende de deur naar echte AI-partnerschap. Nu helpt hij anderen dezelfde ontdekking te maken.
              </p>
            </div>
          </section>

          <div className="my-20 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
          </div>

          {/* Team Section */}
          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 max-w-7xl mx-auto">
            {/* Jeroen Stolk - Left Side */}
            <div className="text-center py-8 px-6 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 max-w-xs lg:mt-5">
              <div className="mx-auto w-24 h-24 rounded-full mb-4 overflow-hidden relative">
                <Image
                  src="/logos/clients/portfolio/Jeroen.jpeg"
                  alt="Jeroen Stolk"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium text-xl mb-2 text-neutral-800 dark:text-neutral-200">
                Jeroen Stolk
              </h3>
              <p className="text-base italic text-neutral-600 dark:text-neutral-400">
                Head of Growth
              </p>
            </div>

            {/* Christian Bleeker - Original Card */}
            <section className="text-center py-12 px-8 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 max-w-lg">
              <div className="mb-8">
                <div className="mx-auto w-32 h-32 rounded-full mb-6 overflow-hidden relative">
                  <Image
                    src="/logos/clients/portfolio/chris.jpg"
                    alt="Christian Bleeker"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="font-medium text-2xl mb-2 text-neutral-800 dark:text-neutral-200">
                Christian Bleeker
              </h3>
              <p className="text-lg mb-6 italic text-neutral-600 dark:text-neutral-400">
                Oprichter & AI-Partnership Architect
              </p>
              
              <p className="text-base leading-relaxed mb-8 max-w-md mx-auto text-neutral-600 dark:text-neutral-400">
                Klaar om jouw eerste AI-partner te ontdekken? Laten we beginnen bij de kern van wat jouw business werkelijk nodig heeft.
              </p>

              <div className="space-y-4">
                <Link
                  href="https://www.linkedin.com/in/cbleeker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Christian Bleeker op LinkedIn
                </Link>
                
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  <p>Email: info@co-creatie.ai</p>
                  <p>Website: www.co-creatie.ai</p>
                </div>
              </div>

              <p className="mt-8 text-sm italic text-neutral-500 dark:text-neutral-500">
                Vertrouwen begint bij privacy. Privacy begint bij ontwerp. Partnerschap begint bij begrip.
              </p>
            </section>

            {/* Brian Hupsel - Right Side */}
            <div className="text-center py-8 px-6 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 max-w-xs lg:mt-5">
              <div className="mx-auto w-24 h-24 rounded-full mb-4 overflow-hidden relative">
                <Image
                  src="/logos/clients/portfolio/Brian.jpg"
                  alt="Brian Hupsel"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium text-xl mb-2 text-neutral-800 dark:text-neutral-200">
                Brian Hupsel
              </h3>
              <p className="text-base italic text-neutral-600 dark:text-neutral-400">
                Head of Operations
              </p>
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}