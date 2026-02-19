export interface Article {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
  imageAlt: string;
  body: string[];
  source?: string;
}

export const articles: Article[] = [
  {
    title: "Banebrytende samfunnsøkonomisk analyse med Handelshøyskolen BI",
    date: "4. desember 2025",
    excerpt:
      "I samarbeid med Handelshøyskolen BI har NFR publisert verdens første samfunnsøkonomiske analyse av førstehjelpsopplæring. Resultatet er oppsiktsvekkende: hver krone investert gir 12 kroner tilbake til samfunnet.",
    slug: "samfunnsokonomisk-analyse-bi",
    image: "/images/nyheter/samfunnsokonomisk-analyse.jpg",
    imageAlt: "Finansielle grafer og analyse — samfunnsøkonomisk verdiskaping",
    body: [
      "I samarbeid med Handelshøyskolen BI har Norsk Førstehjelpsråd publisert verdens første samfunnsøkonomiske analyse av førstehjelpsopplæring. Konklusjonen er oppsiktsvekkende: hver krone investert i førstehjelpsopplæring gir 12 kroner tilbake til samfunnet.",
      "Analysen dokumenterer gevinster knyttet til redusert responstid, lavere behandlingskostnader og færre tapte leveår. Det er første gang noen har klart å beregne betalingsvilligheten for førstehjelpsopplæring, samt samfunnsverdien av tilskuerførstehjelp.",
      "«Investeringen gir eventyrlig avkastning,» sier generalsekretær Thomas Berg Green. «Denne rapporten gir oss den dokumentasjonen vi trenger for å vise politikere og beslutningstakere den enorme verdien av førstehjelpsopplæring.»",
      "Rapporten har gjennomgått tre revisjonsrunder og representerer et betydelig gjennombrudd i arbeidet med å synliggjøre den samfunnsøkonomiske verdien av førstehjelp. NFR forventer at analysen vil gi organisasjonen den oppmerksomheten som trengs for å kunne levere på sitt samfunnsoppdrag.",
    ],
    source: "Norsk Førstehjelpsråd / Handelshøyskolen BI",
  },
  {
    title: "NFR tildelt EU-midler gjennom Erasmus+",
    date: "2. september 2025",
    excerpt:
      "Norsk Førstehjelpsråd har fått innvilget prosjektmidler fra EU-kommisjonen gjennom Erasmus+ for å utvikle risikoprofilbasert førstehjelpsopplæring.",
    slug: "eu-erasmus-prosjekt",
    image: "/images/nyheter/erasmus-fjord.jpg",
    imageAlt: "Norsk fjordlandskap — nordisk samarbeid på tvers av landegrenser",
    body: [
      "Norsk Førstehjelpsråd har fått innvilget prosjektmidler fra EU-kommisjonen gjennom Erasmus+ for å utvikle risikoprofilbasert førstehjelpsopplæring. Prosjektet gjennomføres sammen med Dansk Førstehjelpsråd og latviske helsemyndigheter.",
      "Ideen om risikoprofilbasert opplæring ble unnfanget av generalsekretær Thomas Berg Green, og innebærer at førstehjelpsopplæringen tilpasses ulike befolkningsgruppers faktiske risikoprofil. En fisker i Lofoten har andre behov enn en kontorarbeider i Oslo.",
      "«Vi må innovere førstehjelpsopplæringen. Den må tilpasses i større grad. Vi tror at dette vil bidra til at hver enkelt opplever større eierskap til at det faktisk angår dem også,» forklarer Berg Green.",
      "Prosjektet markerer starten på et internasjonalt samarbeid som kan endre måten førstehjelp undervises på i hele Europa. Ved å bruke kunstig intelligens, fag og rammefaktorer fra ulike risikoprofiler, kan opplæringen bli langt mer relevant og engasjerende.",
    ],
    source: "EU-kommisjonen / Erasmus+",
  },
  {
    title: "Førstehjelpskonferansen 2025 samlet rekordmange deltakere",
    date: "20. august 2025",
    excerpt:
      "For tredje år på rad arrangerte NFR den nasjonale Førstehjelpskonferansen. Over 200 fagpersoner, instruktører og beslutningstakere møttes for å diskutere fremtidens førstehjelpsopplæring.",
    slug: "forstehjelpskonferansen-2025",
    image: "/images/nyheter/konferansen.jpg",
    imageAlt: "Førstehjelpskonferansen 2025 — fullsatt sal med fagpersoner og instruktører",
    body: [
      "For tredje år på rad arrangerte Norsk Førstehjelpsråd den nasjonale Førstehjelpskonferansen. Over 200 fagpersoner, instruktører og beslutningstakere møttes for å diskutere fremtidens førstehjelpsopplæring i Norge.",
      "Konferansen har på kort tid blitt den viktigste møteplassen for førstehjelpsfeltet i Norge. Tilbakemeldingene fra deltakerne beskrives som «fantastiske», og arrangementet fungerer som en viktig arena for erfaringsutveksling og faglig utvikling.",
      "NFR har utviklet en ny strategi for å øke deltakelsen fra medlemsorganisasjonene, blant annet gjennom samkjøring med andre konferanser. Det ryktes også om at man kan blåse nytt liv i Nordic First Aid — et nordisk samarbeid for førstehjelp.",
      "«Førstehjelpskonferansen er et bevis på at det norske førstehjelpsmiljøet ønsker samarbeid og faglig utvikling,» sier generalsekretær Thomas Berg Green. «Vår oppgave er å skape møteplasser der kunnskap deles og nye ideer oppstår.»",
    ],
    source: "Norsk Førstehjelpsråd",
  },
  {
    title: "NFR på Stortinget om nasjonalt mandat",
    date: "15. mars 2025",
    excerpt:
      "Generalsekretær Thomas Berg Green møtte helsepolitikere på Stortinget i forbindelse med representantforslaget om en nasjonal strategi for førstehjelpsopplæring.",
    slug: "nfr-stortinget-mandat",
    image: "/images/stortinget-lion.jpg",
    imageAlt: "Stortingets løve — symbol på norsk demokrati og lovgivning",
    body: [
      "Generalsekretær Thomas Berg Green møtte helsepolitikere på Stortinget i forbindelse med representantforslaget om en nasjonal strategi for førstehjelpsopplæring i befolkningen. NFR argumenterte for et tydelig nasjonalt mandat og øremerket finansiering.",
      "Under møtet med blant andre Kjersti Toppe og Gro Mosleth la Berg Green frem NFRs visjon om å bli nasjonal koordinator for førstehjelpsopplæring. «Vi er klare til å operasjonalisere strategien. Vi ba konkret om et offentlig mandat,» forteller han.",
      "Et offentlig mandat vil gi NFR en offisiell rolle som nasjonal koordinator, styrket legitimitet, og økt gjennomslagskraft i samarbeid med offentlige instanser, næringsliv og frivillighet. For samfunnet betyr det bedre samordning på tvers av sektorer og mer robuste lokalsamfunn.",
      "NFR bidro til å etablere en førstehjelpsstrategi som ble godkjent av Helse- og omsorgsdepartementet i 2023. Organisasjonen arbeider nå aktivt for at strategien skal omsettes til konkret handling med tydelige politiske føringer og dedikerte midler.",
    ],
    source: "Norsk Førstehjelpsråd",
  },
  {
    title: "Nye forenklede retningslinjer — Norge leder an internasjonalt",
    date: "10. februar 2025",
    excerpt:
      "NFR lanserer forenklede nasjonale retningslinjer basert på et nytt prinsipp: du kan ikke gi feil førstehjelp. Norge er det første landet som konsekvent forenkler retningslinjene.",
    slug: "forenklede-retningslinjer-2025",
    image: "/images/nyheter/retningslinjer-redning.jpg",
    imageAlt: "Røde Kors-redningsarbeider i snøkledd fjellandskap — førstehjelp i praksis",
    body: [
      "Norsk Førstehjelpsråd lanserer forenklede nasjonale retningslinjer basert på et nytt prinsipp: du kan ikke gi feil førstehjelp. Norge er det første landet som konsekvent forenkler retningslinjene for å senke terskelen for handling.",
      "De nye retningslinjene erstatter kompliserte protokoller med intuitive handlingsmønstre. «Hvorfor skulle førstehjelp være mer komplisert enn min egen akuttmedisinske behandling?» spør generalsekretær Thomas Berg Green retorisk.",
      "NFR har også gjort et omfattende arbeid med å fjerne myter: Nei, du kan ikke svelge tungen. Nei, du kan ikke presse kulen inn i hjernen. Nei, personen blir ikke lam fordi du gir fri luftvei. Slike myter har skapt unødvendig frykt i befolkningen.",
      "«Vår viktigste oppgave i førstehjelpsopplæringen er å skape trygghet. Norsk Førstehjelpsråd skal være i perfekt balanse mellom akademia og befolkningen. Det vi gir fra oss skal være enkelt å forstå, samtidig kunnskapsbasert,» forklarer Berg Green. «Vi har styrket kjeden som redder liv betraktelig.»",
    ],
    source: "Norsk Førstehjelpsråd / Fagrådet",
  },
  {
    title: "Samarbeid med NIMN om forenklede råd til innringer",
    date: "22. januar 2025",
    excerpt:
      "I samarbeid med Nasjonalt informasjonssenter for medisinsk nødmeldetjeneste har NFR forenklet alle «råd til innringer» ved 113-henvendelser.",
    slug: "samarbeid-nimn-raad-innringer",
    image: "/images/nyheter/thomas-ambulanse.jpg",
    imageAlt: "Thomas Berg Green foran ambulanse — nesten 30 år i ambulansetjenesten",
    body: [
      "I samarbeid med Nasjonalt informasjonssenter for medisinsk nødmeldetjeneste (NIMN) har Norsk Førstehjelpsråd forenklet alle «råd til innringer» ved 113-henvendelser. Målet er at flere tør å handle i akutte situasjoner, også før ambulansen ankommer.",
      "De forenklede rådene bygger på NFRs overordnede filosofi om at førstehjelp skal være enkelt og intuitivt. Når en person ringer 113, skal veiledningen fra operatøren være så klar og enkel at hvem som helst kan følge den — uavhengig av bakgrunn og erfaringsnivå.",
      "Generalsekretær Thomas Berg Green, som selv har nesten 30 år i ambulansetjenesten og fortsatt jobber deltid som paramedisiner, vet hvor avgjørende de første minuttene er: «Den første hjelpen du gir de første 10 minuttene er like viktig som den behandlingen helsetjenesten kan gi de neste 10 dagene.»",
      "Samarbeidet med NIMN er et konkret eksempel på hvordan NFR styrker kjeden som redder liv — fra det øyeblikket noen ringer 113 til ambulansen er på plass.",
    ],
    source: "Norsk Førstehjelpsråd / NIMN",
  },
  {
    title: "DSB anbefaler førstehjelp i oppdaterte egenberedskapsråd",
    date: "5. november 2024",
    excerpt:
      "Direktoratet for samfunnssikkerhet og beredskap har for første gang eksplisitt nevnt førstehjelp i sine egenberedskapsanbefalinger. NFR har bidratt faglig.",
    slug: "dsb-egenberedskap-forstehjelp",
    image: "/images/nyheter/luftambulanse.jpg",
    imageAlt: "Norsk Luftambulanse helikopter over kystlandskap — akuttberedskap i hele Norge",
    body: [
      "Direktoratet for samfunnssikkerhet og beredskap (DSB) har oppdatert sine egenberedskapsanbefalinger. For første gang er førstehjelp eksplisitt nevnt, og Norsk Førstehjelpsråd har bidratt faglig til anbefalingene.",
      "DSBs egen undersøkelse fra 2024 viser at 78 prosent av befolkningen mener husholdninger må kunne klare seg uten samfunnets hjelp i én uke. Samtidig viser tallene at bare 6 av 10 nordmenn har nødvendig førstehjelpsmateriell hjemme.",
      "«Hva om helsetjenesten ikke kommer fram før om én uke? Da handler det om mye mer enn å ha nok vann og en DAB-radio,» påpeker generalsekretær Thomas Berg Green. «Førstehjelpskompetanse er en helt sentral del av egenberedskapen.»",
      "Den geopolitiske situasjonen i verden, sammen med økt forekomst av naturkatastrofer og ekstremvær, viser tydelig behovet for å styrke befolkningens evne til å ivareta seg selv og sine nærmeste. NFR arbeider aktivt for at førstehjelpskompetanse skal bli en integrert del av Norges totalberedskap.",
    ],
    source: "DSB / Ipsos 2024",
  },
  {
    title: "Befolkningsundersøkelser avdekker kunnskapsgap",
    date: "18. september 2024",
    excerpt:
      "Nye undersøkelser fra Røde Kors, LHL og Stiftelsen Norsk Luftambulanse tegner et urovekkende bilde: nordmenn overvurderer egen førstehjelpsevne.",
    slug: "befolkningsundersokelser-kunnskapsgap",
    image: "/images/nyheter/hlr-forstehjelp.jpg",
    imageAlt: "Hjerte-lungeredning (HLR) — livreddende førstehjelp i praksis",
    body: [
      "Nye befolkningsundersøkelser fra Røde Kors, LHL og Stiftelsen Norsk Luftambulanse tegner et urovekkende bilde: nordmenn overvurderer egen førstehjelpsevne, og mange har ikke oppdatert kompetansen sin på over ti år.",
      "Røde Kors' Førstehjelpsundersøkelsen 2025 viser at 56 prosent nøler med å hjelpe i en krisesituasjon — ikke på grunn av manglende kunnskap, men fordi de er redde for å gjøre vondt verre. 43 prosent frykter å gjøre feil. LHLs undersøkelse avdekker at 49 prosent er usikre på hvordan de gjennomfører hjerte-lungeredning.",
      "Stiftelsen Norsk Luftambulanse kartla at 58 prosent ikke ser på seg selv som en del av akuttberedskapen i Norge. «Det er nesten litt motstridig,» reflekterer generalsekretær Thomas Berg Green. «Folk mener de må klare seg selv, men ser ikke seg selv som en del av løsningen.»",
      "NFR bruker funnene aktivt i arbeidet med å styrke den nasjonale opplæringsinnsatsen. Norsk hjertestansregister viser samtidig at 78 prosent av hjertestanspasienter får HLR av tilstedeværende — og at 457 personer ble reddet i 2024. «Det må vi være stolte av, men vi kan bli enda bedre,» sier Berg Green.",
    ],
    source: "Røde Kors / LHL / Stiftelsen Norsk Luftambulanse",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
