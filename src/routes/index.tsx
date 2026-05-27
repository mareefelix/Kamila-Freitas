import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamila Freitas | Especialista em Fertilidade Integrativa e Gestação" },
      {
        name: "description",
        content:
          "Especialista em Fertilidade Integrativa e Gestação. Aumente suas chances de engravidar de forma natural ou através de FIV com acupuntura integrativa.",
      },
      { property: "og:title", content: "Kamila Freitas | Fertilidade e Gestação" },
      {
        property: "og:description",
        content:
          "Cuidado humanizado e suporte reprodutivo através da Medicina Tradicional Chinesa.",
      },
    ],
  }),
  component: Landing,
});

const nav = [
  { id: "sobre", label: "Sobre" },
  { id: "para-quem", label: "Para Quem" },
  { id: "servicos", label: "Serviços" },
  { id: "especialidades", label: "Especialidades" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "contato", label: "Contato" },
];

function Landing() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Whisper />
      <About />
      <ForWhom />
      <Services />
      <Specialties />
      <Benefits />
      <Testimonials />
      <Faq />
      <Location />
      <Cta />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center justify-between">
        <a
          href="#top"
          className={`font-serif text-xl tracking-wide transition-colors ${scrolled ? "text-foreground" : "text-cream drop-shadow-lg"}`}
        >
          Kamila{" "}
          <span className={`italic transition-colors ${scrolled ? "text-clay" : "text-cream"}`}>
            Freitas
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`text-[0.78rem] tracking-[0.18em] uppercase transition-colors ${scrolled ? "text-foreground/70 hover:text-clay" : "text-cream drop-shadow-lg hover:text-white"}`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className={`hidden lg:inline-block text-[0.72rem] tracking-[0.24em] uppercase border-b pb-1 transition-all ${scrolled ? "text-clay border-clay/40 hover:border-clay" : "text-cream border-cream/40 hover:border-cream drop-shadow-lg"}`}
        >
          Agendar
        </a>
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden text-[0.72rem] tracking-[0.24em] uppercase transition-colors ${scrolled ? "text-clay" : "text-cream drop-shadow-lg"}`}
          aria-label="Menu"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border mt-4">
          <nav className="flex flex-col px-8 py-8 gap-5">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.18em] uppercase text-foreground/70"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Gestante em ambiente acolhedor entre flores secas"
        width={1080}
        height={1920}
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/65 pointer-events-none" />
      <div className="relative h-[calc(100%-80px)] mt-20 max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col justify-end pb-12 lg:pb-16 pt-32">
        <p className="eyebrow text-cream/85 fade-up delay-1">Acupuntura Integrativa</p>
        <h1 className="fade-up delay-2 mt-6 font-serif text-cream text-[2.6rem] sm:text-6xl lg:text-[5.5rem] leading-[1.02] max-w-4xl">
          Especialista em Fertilidade
          <br />
          Integrativa e
          <br />
          <span className="italic font-light">Gestação.</span>
        </h1>
        <div className="fade-up delay-3 mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 max-w-3xl">
          <p className="text-cream/85 font-sans text-base max-w-md leading-relaxed">
            Ajudo mulheres a preparar o corpo e a mente para a maternidade, pelo caminho natural ou
            como suporte à FIV. Com Medicina Tradicional Chinesa, trabalho o que os exames não
            mostram: o equilíbrio interno que abre espaço para a vida.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-3 text-cream text-[0.72rem] tracking-[0.28em] uppercase whitespace-nowrap border-b border-cream/40 pb-2 hover:border-cream transition-all self-start"
          >
            Quero ajuda para engravidar
            <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Whisper() {
  return (
    <section className="py-32 lg:py-48 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="eyebrow text-clay">O corpo precisa de segurança</p>
        <p className="mt-10 font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-[1.4] text-foreground/85">
          “Um corpo em alerta não prioriza a reprodução. Ele prioriza sobreviver.”
        </p>
        <p className="mt-8 text-foreground/75 max-w-2xl mx-auto leading-relaxed text-lg">
          Estresse acumulado, ansiedade e noites mal dormidas não são só desconfortos, eles ativam o
          sistema nervoso de um jeito que interfere diretamente nos seus hormônios, na circulação
          uterina e na capacidade do seu corpo de sustentar uma gestação.
        </p>
        <p className="mt-6 text-foreground/75 max-w-2xl mx-auto leading-relaxed text-lg">
          Muitas vezes os exames voltam normais. E ainda assim o positivo não vem. Isso não
          significa que não há nada a fazer, significa que o que precisa de ajuste não é a
          medicação, mas o estado de segurança do seu corpo. É exatamente aí que eu trabalho.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 lg:py-40 px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 lg:col-start-1">
          <div className="relative aspect-[4/5] overflow-hidden bg-clay/5">
            <img
              src="/images/sobre.jpg"
              alt="Kamila Freitas"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow text-clay">Sobre</p>
          <h2 className="mt-6 font-serif text-4xl lg:text-6xl leading-[1.05]">
            Kamila <em className="italic font-light">Freitas</em>
          </h2>
          <div className="mt-10 space-y-6 text-foreground/80 leading-relaxed max-w-lg">
            <p className="italic font-serif text-xl text-clay">
              Vai ser um prazer te receber aqui.
            </p>
            <p>
              Sou apaixonada pela Medicina Chinesa e saúde integral. Atuo como acupunturista desde
              2016, pela Associação Brasileira de Acupuntura, com foco em fertilidade integrativa e
              gestação.
            </p>
            <p>
              O meu trabalho não é apressar o processo, é preparar o terreno. Com um olhar
              terapêutico e humanizado, ajusto o seu corpo para que ele se sinta seguro para gerar
              vida. Trabalho tanto com quem está tentando engravidar de forma natural quanto com
              quem está em protocolo de Reprodução Assistida (FIV/IA), como tratamento complementar
              comprovado.
            </p>
            <p>
              Cada mulher que passa pelos meus cuidados carrega uma história diferente. O que eu
              ofereço é presença, técnica e um cuidado que vai além do físico.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-6 text-[0.7rem] tracking-[0.28em] uppercase text-foreground/60 flex-wrap">
            <span>Desde 2016</span>
            <span className="w-12 h-px bg-clay/40 hidden sm:block" />
            <span>Associação Brasileira de Acupuntura</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  const items = [
    {
      title: "Tentantes",
      text: "Para quem está tentando engravidar, de forma natural ou com apoio da medicina reprodutiva. Trabalho a regulação do ciclo, a qualidade dos óvulos, o preparo uterino e o equilíbrio emocional que o processo exige.",
    },
    {
      title: "Gestantes",
      text: "A gravidez tem seus próprios desafios. Ofereço acompanhamento ao longo dos trimestres para náuseas, dores, insônia, ansiedade e preparação do corpo para o parto.",
    },
    {
      title: "Outros desequilíbrios femininos",
      text: "Também atendo condições como SOP, endometriose, adenomiose, cólicas intensas e distúrbios da menopausa. Porque saúde feminina vai muito além da fertilidade.",
    },
  ];
  return (
    <section id="para-quem" className="py-24 lg:py-40 px-8 lg:px-16 bg-muted/40">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-clay">Para quem</p>
            <h2 className="mt-6 font-serif text-4xl lg:text-6xl leading-[1.05]">
              Um espaço pensado <em className="italic font-light">para você.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-12">
            {items.map((it, i) => (
              <div key={i} className="border-t border-clay/20 pt-8">
                <h3 className="font-serif text-2xl lg:text-3xl text-clay">{it.title}</h3>
                <p className="mt-4 text-foreground/75 leading-relaxed max-w-md">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    "Acupuntura",
    "Auriculoterapia",
    "Liberação e manipulação",
    "Dietoterapia chinesa",
    "Fitoterapia",
    "Florais de Bach",
    "Reiki",
    "Massagem relaxante",
    "Ventosaterapia",
    "Fórmulas magistrais chinesas",
    "Aromaterapia",
  ];
  return (
    <section id="servicos" className="py-24 lg:py-40 px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="/images/servicos.jpg"
              alt="Sessão de acupuntura"
              width={1080}
              height={1440}
              loading="lazy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="mt-6 italic font-serif text-clay text-lg max-w-sm">
            Cada serviço pode ser oferecido de forma isolada ou integrada, conforme o que o seu
            momento pede.
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow text-clay">Serviços</p>
          <h2 className="mt-6 font-serif text-4xl lg:text-6xl leading-[1.05]">
            Um repertório <em className="italic font-light">de cuidado.</em>
          </h2>
          <ul className="mt-12 divide-y divide-clay/15">
            {services.map((s, i) => (
              <li key={s} className="flex items-baseline gap-6 py-5 group cursor-default">
                <span className="font-sans text-[0.7rem] tracking-[0.2em] text-clay/60 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl lg:text-3xl text-foreground/85 group-hover:text-clay group-hover:italic transition-all duration-500">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  const items = [
    {
      label: "Fertilidade Natural",
      body: "Atuo no eixo hipotálamo-hipófise-gônadas para regular o ciclo menstrual, reduzir ciclos anovulatórios e criar as condições internas certas para a concepção acontecer com saúde.",
    },
    {
      label: "Suporte para FIV e IA",
      body: "A Acupuntura tem eficácia comprovada como tratamento complementar à Reprodução Assistida — nos dias que antecedem a transferência, durante e após. Melhora a receptividade uterina e reduz o estresse do protocolo.",
    },
    {
      label: "Acompanhamento na Gestação",
      body: "Do primeiro ao terceiro trimestre, acompanho o processo para que o corpo e a mente se mantenham equilibrados. Cuido do que aparece em cada fase — físico, emocional, e tudo que fica no meio.",
    },
    {
      label: "Outros Desequilíbrios Femininos",
      body: "Regulação hormonal para condições como endometriose severa, SOP e amenorreia. Porque quando o corpo da mulher está bem regulado, tudo funciona melhor.",
    },
  ];
  return (
    <section id="especialidades" className="py-24 lg:py-40 px-8 lg:px-16 bg-clay text-cream">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-2xl">
          <p className="eyebrow text-blush">Especialidades</p>
          <h2 className="mt-6 font-serif text-4xl lg:text-6xl leading-[1.05]">
            Áreas de <em className="italic font-light">atuação.</em>
          </h2>
        </div>
        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-16">
          {items.map((it, i) => (
            <div key={i} className="border-t border-cream/20 pt-8">
              <p className="font-sans text-[0.7rem] tracking-[0.3em] uppercase text-blush">
                0{i + 1}
              </p>
              <h3 className="mt-4 font-serif text-3xl lg:text-4xl italic">{it.label}</h3>
              <p className="mt-5 text-cream/75 leading-relaxed max-w-md">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      n: "01",
      t: "Regulação Hormonal",
      d: "Melhora a resposta ovariana atuando no eixo hormonal, favorecendo uma ovulação mais eficaz e regular.",
    },
    {
      n: "02",
      t: "Receptividade Uterina",
      d: "Aumenta o fluxo sanguíneo nos órgãos reprodutivos e promove melhor espessamento do endométrio, condição fundamental para a fixação do embrião.",
    },
    {
      n: "03",
      t: "Qualidade dos Gametas",
      d: "Contribui para a melhora da qualidade celular dos óvulos e, quando aplicável, também dos espermatozoides.",
    },
    {
      n: "04",
      t: "Sistema Nervoso e Ansiedade",
      d: "Modula o sistema nervoso autônomo, reduzindo o estado de alerta crônico que, silenciosamente, está adiando a sua gravidez.",
    },
  ];
  return (
    <section className="py-24 lg:py-40 px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow text-clay">Comprovação Científica</p>
          <h2 className="mt-6 font-serif text-4xl lg:text-5xl leading-[1.05]">
            Não é fé cega. É <em className="italic font-light">ciência com décadas de estudo.</em>
          </h2>
          <p className="mt-8 text-foreground/75 leading-relaxed max-w-sm">
            Sociedades de reprodução humana ao redor do mundo já documentaram os efeitos da
            Acupuntura sobre a fertilidade natural e assistida. Esses são os mecanismos que
            trabalhamos:
          </p>
          <div className="mt-10 relative aspect-[4/3] overflow-hidden max-w-sm">
            <img
              src="/images/comprovacao.jpg"
              alt="Comprovação científica sobre acupuntura e FIV"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 grid sm:grid-cols-2 gap-x-10 gap-y-14">
          {items.map((it) => (
            <div key={it.n}>
              <p className="font-serif italic text-clay text-4xl">{it.n}</p>
              <h3 className="mt-3 font-serif text-2xl">{it.t}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "A Kamila foi essencial pro meu milagre, ajustando meu corpo pro positivo após meses sem ovular direito de forma natural.",
      a: "T.M., Positivo de forma natural",
    },
    {
      q: "O suporte nas sessões para nossa Fertilização In Vitro foram a chave pra conseguirmos fixar nosso bebezinho, indico demais.",
      a: "E.R., Paciente de FIV",
    },
    {
      q: "Com a Kamila minha ansiedade despencou. Ter o suporte dela na gravidez e em todas as dores da gestação é um respiro.",
      a: "C.M., Acompanhamento Gestacional",
    },
  ];
  return (
    <section id="depoimentos" className="py-24 lg:py-40 px-8 lg:px-16 bg-muted/40">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-clay">Depoimentos</p>
          <h2 className="mt-6 font-serif text-4xl lg:text-6xl leading-[1.05]">
            Palavras de <em className="italic font-light">quem foi cuidada.</em>
          </h2>
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-10 lg:gap-14">
          {items.map((it, i) => (
            <figure key={i} className="flex flex-col">
              <span className="font-serif text-6xl text-clay/40 leading-none">“</span>
              <blockquote className="mt-2 font-serif italic text-xl lg:text-2xl leading-[1.4] text-foreground/85">
                {it.q}
              </blockquote>
              <figcaption className="mt-6 text-[0.72rem] tracking-[0.28em] uppercase text-clay">
                {it.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    {
      q: "A acupuntura dói?",
      a: "As agulhas são extremamente finas e a aplicação é delicada. A maioria das pacientes descreve a sensação como leve, seguida de uma profunda sensação de relaxamento.",
    },
    {
      q: "Posso fazer acupuntura grávida?",
      a: "Sim. A acupuntura é segura na gestação quando feita por profissional qualificado, e ajuda em náuseas, ansiedade, dores lombares e preparação para o parto.",
    },
    {
      q: "A acupuntura pode aumentar minhas chances no ciclo de FIV/Inseminação?",
      a: "Com absoluta certeza. Comprovações científicas indicam que a acupuntura feita antes, durante e após a transferência embrionária aumenta o afluxo de sangue para o útero, melhorando o endométrio e as chances de sucesso.",
    },
    {
      q: "Quantas sessões são necessárias se quero engravidar naturalmente?",
      a: "O preparo inicial recomendado para uma regulação dos óvulos e da imunidade uterina costuma ser a construção que dura cerca de 3 a 6 meses de sessões, variando pontualmente pelo histórico clínico que vamos mapear.",
    },
    {
      q: "Como funciona a primeira consulta?",
      a: "É um encontro longo e dedicado à sua história. Conversamos, observamos e desenhamos o caminho de cuidado com calma e intenção.",
    },
  ];
  return (
    <section className="py-24 lg:py-40 px-8 lg:px-16">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <p className="eyebrow text-clay">Dúvidas</p>
          <h2 className="mt-6 font-serif text-4xl lg:text-5xl leading-[1.05]">
            Perguntas <em className="italic font-light">frequentes.</em>
          </h2>
        </div>
        <div className="lg:col-span-8 divide-y divide-clay/20">
          {items.map((it, i) => (
            <FaqItem key={i} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-baseline gap-6 text-left group"
      >
        <span className="font-serif text-xl lg:text-2xl text-foreground/85 group-hover:text-clay transition-colors">
          {q}
        </span>
        <span
          className={`font-serif text-2xl text-clay transition-transform duration-500 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-700 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-foreground/70 leading-relaxed max-w-xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

function Location() {
  return (
    <section className="py-24 lg:py-40 px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow text-clay">Localização</p>
          <h2 className="mt-6 font-serif text-4xl lg:text-6xl leading-[1.05]">
            Onde você me <em className="italic font-light">encontra.</em>
          </h2>
          <p className="mt-8 text-foreground/75 leading-relaxed max-w-md">
            Atendo em dois espaços em Recife, cada um com horário marcado — porque cada sessão
            merece tempo, atenção e calma.
          </p>
          <div className="mt-10 space-y-6 text-foreground/80">
            <div>
              <p className="font-serif text-xl">Clínica Artfertil</p>
              <p className="mt-1 text-sm text-foreground/60">
                Rua Prof. Andrade Bezerra, 157 — Parnamirim, Recife
              </p>
            </div>
            <div>
              <p className="font-serif text-xl">Mudraa</p>
              <p className="mt-1 text-sm text-foreground/60">Riomar Trade Center, Torre 5</p>
            </div>
            <div className="pt-4 border-t border-clay/15">
              <p className="text-sm">Atendimento com hora marcada, de segunda a sexta.</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative aspect-[5/6] overflow-hidden">
            <img
              src="/images/localizacao.jpg"
              alt="Cuidado e acolhimento"
              width={1024}
              height={1228}
              loading="lazy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section id="contato" className="py-32 lg:py-48 px-8 lg:px-16 bg-blush/40">
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow text-clay">Vamos conversar</p>
        <h2 className="mt-8 font-serif text-5xl lg:text-7xl leading-[1.02]">
          Quando você está
          <br />
          <em className="italic font-light">pronta para semear.</em>
        </h2>
        <p className="mt-8 text-foreground/75 leading-relaxed max-w-xl mx-auto">
          Se você precisa de ajuda para engravidar, me chama no WhatsApp para começarmos essa
          jornada juntas. Vai ser um imenso prazer estar contigo para construir o seu sonhado
          positivo.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-clay text-cream px-10 py-4 text-[0.74rem] tracking-[0.28em] uppercase hover:bg-terracotta transition-colors"
          >
            Agendar pelo WhatsApp
            <span>→</span>
          </a>
          <a
            href="https://www.instagram.com/kamilafacupuntura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] tracking-[0.28em] uppercase text-clay border-b border-clay/40 pb-2 hover:border-clay"
          >
            @kamilafacupuntura
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-8 lg:px-16 py-16 border-t border-clay/15">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
        <div>
          <p className="font-serif text-3xl">
            Kamila <em className="italic text-clay">Freitas</em>
          </p>
          <p className="mt-3 text-sm text-foreground/60 max-w-sm leading-relaxed">
            Acupuntura integrativa para fertilidade, gestação e saúde da mulher.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 text-[0.72rem] tracking-[0.24em] uppercase text-foreground/60">
          <a href="#sobre" className="hover:text-clay">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-clay">
            Serviços
          </a>
          <a href="#contato" className="hover:text-clay">
            Contato
          </a>
          <a
            href="https://www.instagram.com/kamilafacupuntura"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-clay"
          >
            Instagram
          </a>
        </div>
      </div>
      <p className="mt-12 text-center text-[0.68rem] tracking-[0.28em] uppercase text-foreground/40">
        © {new Date().getFullYear()} Kamila Freitas · Todos os direitos reservados
      </p>
    </footer>
  );
}
