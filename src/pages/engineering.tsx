import {useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  CheckCircle2,
  Settings2,
  Workflow,
  Briefcase,
  ChevronRight,
} from "lucide-react";
export default function Engineering() {
   useEffect(() => {
    document.title = "Engineering | GMH Solutions";
  }, []);
  const {t} = useTranslation();
const [selectedDiscipline, setSelectedDiscipline] =
  useState<(typeof DISCIPLINES)[0] | null>(null);
  const DISCIPLINES = [
  {
    title: t("engineering.component.title"),
    image: "/images/component.jpg",
    points: [
       t("engineering.component.p1"),
       t("engineering.component.p2"),
       t("engineering.component.p3"),
       t("engineering.component.p4")
    ],
  },
  {
    title: t("engineering.civil.title"),
    image: "/images/civil.webp",
    points: [
      t("engineering.civil.p1"),
      t("engineering.civil.p2"),
      t("engineering.civil.p3"),
      t("engineering.civil.p4"),
      t("engineering.civil.p5"),
      t("engineering.civil.p6"),
      t("engineering.civil.p7")

    ],
  },
  {
    title: t("engineering.piping.title"),
    image: "/images/pipes.webp",
    points: [
      t("engineering.piping.p1"),
      t("engineering.piping.p2"),
      t("engineering.piping.p3"),
      t("engineering.piping.p4"),
      t("engineering.piping.p5"),
      t("engineering.piping.p6")
    ],
  },
  {
    title: t("engineering.electrical.title"),
    image: "/images/electrical.jpg",
    points: [
      t("engineering.electrical.p1"),
      t("engineering.electrical.p2"),
      t("engineering.electrical.p3"),
      t("engineering.electrical.p4"),
      t("engineering.electrical.p5"),
      t("engineering.electrical.p6")
    ],
  },
  {
    title: t("engineering.mechanical.title"),
    image: "/images/mechanical.jpg",
    points: [
      t("engineering.mechanical.p1"),
      t("engineering.mechanical.p2"),
      t("engineering.mechanical.p3"),
      t("engineering.mechanical.p4"),
      t("engineering.mechanical.p5"),
      t("engineering.mechanical.p6")

    ],
  },
  {
    title: t("engineering.instrumentation.title"),
    image: "/images/instrumentation.webp",
    points: [
      t("engineering.instrumentation.p1"),
      t("engineering.instrumentation.p2"),
      t("engineering.instrumentation.p3"),
      t("engineering.instrumentation.p4"),
      t("engineering.instrumentation.p5")

    ],
  },
  {
    title: t("engineering.safety.title"),
    image: "/images/safety.jpeg",
    points: [
      t("engineering.safety.p1"),
      t("engineering.safety.p2"),
      t("engineering.safety.p3"),
      t("engineering.safety.p4"),
      t("engineering.safety.p5"),
      t("engineering.safety.p6"),
      t("engineering.safety.p7")
    ],

  },

   {
    title: t("engineering.digital.title"),
    image: "/images/bim.jpg",
    points: [
      t("engineering.digital.p1"),
      t("engineering.digital.p2"),
      t("engineering.digital.p3"),
      t("engineering.digital.p4"),
      t("engineering.digital.p5")
    ],
    
  },
];

  const sectors = [
    {name: t("engineering.sectors.p1"), description: t("engineering.sectors.p1desc")},
    {name: t("engineering.sectors.p2"), description:t("engineering.sectors.p2desc") },
    {name: t("engineering.sectors.p3"), description: t("engineering.sectors.p3desc")},
    {name: t("engineering.sectors.p4"), description: t("engineering.sectors.p4desc")},
   
    
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main >

        {/* HERO */}
<section className="relative overflow-hidden bg-white min-h-[520px] sm:min-h-[620px] flex items-center">

          <div className="absolute inset-0">

            <img
  src="/images/engser.jpg"
  alt=""
  className="
    absolute inset-0
    w-full
    h-full
    object-cover
    object-center
    scale-105
  "
/>

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-50% to-white/0" />

            

          </div>

          <div className="relative z-20 max-w-7xl mx-auto w-full px-6 lg:px-8 py-20 sm:py-24">

            <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[#719743]">
              {t("engineering.sub")}
            </span>

          <h1 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900 ">
              {t("engineering.title")}
              
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              {t("engineering.subtitle1")}
            </p>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              {t("engineering.subtitle3")}
            </p>

          </div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />

        </section> 
{/* STATS */}
<section className="border-y border-slate-200 bg-slate-50/60 py-3">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between gap-x-10 gap-y-3">
    {[
      ["25+", "Years Experience"],
      ["180+", "Projects Delivered"],
      ["1Mn+", "Engineering Hours"],
      ["25+", "Countries"],
    ].map(([number, text], i) => (
      <div
        key={text}
        className={`flex items-baseline gap-2 ${i !== 0 ? "sm:pl-10 sm:border-l sm:border-slate-200" : ""}`}
      >
        <span className="lg:text-xl text-base font-bold text-[#719743]">{number}</span>
        <span className="lg:text-sm text-xs text-slate-500">{text}</span>
      </div>
    ))}
  </div>
</section>
  {/* INDUSTRIES */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
     <div className="mb-10">
      <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
        {t("engineering.industriessub")}
      </span>

      <div className="mt-3 flex items-center gap-3 sm:gap-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
          {t("engineering.industries")}
        </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>

   
    </div>

    <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
      {sectors.map((sector, i) => (
        <div key={sector.name} className="flex gap-5">
          <span className="text-2xl font-bold text-[#719743]/30 leading-none shrink-0 w-10">
            {String(i + 1).padStart(2, "0")}
          </span>

          <div>
            <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-3">
              {sector.name}
              <span className="h-px flex-1 bg-[#719743]/20 max-w-16" />
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              {sector.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* DISCIPLINES */}
<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}

    <div className="mb-14">
      <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
        Our Expertise
      </span>

      <div className="mt-3 flex items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
          Multidisciplinary Engineering Services
        </h2>

        <div className="flex-1 h-px bg-[#719743]/30" />
      </div>

      <p className="mt-5 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Shaping safer, more reliable and sustainable industries through
        multidisciplinary engineering expertise.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">

      {DISCIPLINES.map((d) => (

       <article
  key={d.title}
  className="
    bg-white
    rounded-base
    border
    border-slate-200
    shadow-sm
    overflow-hidden
    hover:shadow-lg
    transition-shadow
    flex
    flex-col
    self-start
  "
>

  {/* Image */}

  <div className="h-44 overflow-hidden">
    <img
      src={d.image}
      alt={d.title}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  {/* Content */}

  <div className="p-4">

    <h3 className="text-lg font-semibold text-slate-900">
      {d.title}
    </h3>

    <button
  onClick={() => setSelectedDiscipline(d)}
  className="mt-6 flex items-center gap-2 text-[#719743] font-medium hover:text-[#5f8238] transition"
>
  <div className="w-7 h-7 rounded-full border border-[#719743] flex items-center justify-center">
    +
  </div>

  View Services
</button>

    

  </div>

</article>

      ))}

    </div>

  </div>
</section>
{selectedDiscipline && (

<div
    className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/50
backdrop-blur-sm
p-2
sm:p-4
"
    onClick={() => setSelectedDiscipline(null)}
>

<div
    onClick={(e)=>e.stopPropagation()}
   className="
bg-white
rounded-2xl
overflow-hidden
shadow-2xl
w-full
max-w-4xl
max-h-[90vh]
overflow-y-auto
animate-in
fade-in
zoom-in-95
duration-300
"
>
<div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr]">

{/* LEFT */}

<div className="self-stretch">


<img
    src={selectedDiscipline.image}
    alt={selectedDiscipline.title}
        className="
        w-full
        h-56
        sm:h-72
        lg:h-full
        object-cover
    "
/>

</div>

{/* RIGHT */}

<div className="p-5 sm:p-8 flex flex-col ">

<div className="flex justify-between items-start">

<div>

<span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#719743]">
Engineering Discipline
</span>

<h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900 leading-tight">
{selectedDiscipline.title}
</h2>

</div>

<button
    onClick={()=>setSelectedDiscipline(null)}
    className="
        w-10
        h-10
        rounded-full
        border
        border-slate-300
        hover:bg-slate-100
        transition
    "
>
✕
</button>

</div>

<div className=" h-px bg-[#719743]/20 my-4"/>

<div className="max-w-2xl space-y-3 flex-1 overflow-y-auto max-h-[45vh] lg:max-h-none pr-1 sm:pr-2">

{selectedDiscipline.points.map(point=>(

<div
    key={point}
    className="flex gap-2 items-start"
>

<div className="mt-1">

<ChevronRight
className="w-5 h-5 text-[#719743]"
/>

</div>

<p className="text-slate-600 leading-7">
{point}
</p>

</div>

))}

</div>

<div className="pt-8">


</div>

</div>

</div>

</div>

</div>

)}

        {/* WHY GMH */}
        <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}

    <div className="mb-12">

      <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
        {t("engineering.whypartner")}
      </span>

      <div className="mt-3 flex items-center gap-4">

        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          {t("engineering.whypartnertitle")}
        </h2>

        <div className="hidden sm:block flex-1 h-px bg-[#719743]/30" />

      </div>

      <p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
        {t("engineering.whypartnerdesc")}
      </p>

    </div>

    {/* Cards */}

    <div className="grid gap-5 sm:grid-cols-2">

      {[
        {
          icon: CheckCircle2,
          title: t("engineering.p1"),
          text:
            t("engineering.p1desc"),
        },
        {
          icon: Settings2,
          title: t("engineering.p2"),
          text:
            t("engineering.p2desc"),
        },
        {
          icon: Workflow,
          title: t("engineering.p3"),
          text:
            t("engineering.p3desc"),
        },
        {
          icon: Briefcase,
          title: t("engineering.p4"),
          text:
            t("engineering.p4desc"),
        },
      ].map((item) => (
        <article
          key={item.title}
          className="
            rounded-base
            bg-white
            p-4
            lg:p-6
            
          "
        >
          <div className="flex items-start lg:gap-4 gap-2">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#719743]/10">
              <item.icon className="h-5 w-5 text-[#719743]" />
            </div>

            <div>

              <h3 className="self-start text-base font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>

            </div>

          </div>
        </article>
      ))}

    </div>

  </div>
</section>


        

      </main>

      <Footer />

    </div>
  );
}