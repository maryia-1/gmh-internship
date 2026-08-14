import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState, useRef } from "react";
import { supabase, SuccessStory } from "../lib/supabase";
import { useTranslation } from "react-i18next";

import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function Projects() {
   useEffect(() => {
    document.title = "References | GMH Solutions";
  }, []);
  const factsRef = useRef<HTMLDivElement>(null);
  const { t }=useTranslation();
  const scrollFacts = (direction: "left" | "right") => {
  if (!factsRef.current) return;

  factsRef.current.scrollBy({
    left: direction === "right" ? 120 : -120,
    behavior: "smooth",
  });
};
    
    const [projects, setProjects] = useState<SuccessStory[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");
    const categories = [
  "All",
  ...Array.from(
    new Set(
      projects
        .map((project) => project.category)
        .filter(Boolean)
    )
  ),
];
const filteredProjects =
  filter === "All"
    ? projects
    : projects.filter(
        (project) => project.category === filter
      );
    useEffect(() => {
        async function loadProjects() {
            const { data, error } = await supabase
            .from("success_stories")
            .select("*")
            .order("sort_order", { ascending: true });
            if (!error && data) {
                setProjects(data);
            }
            setLoading(false);
        }
        loadProjects();
    }, []);
function ProjectCard({ project }: { project: SuccessStory }) {
  

  const factsRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);

 const [scopeOverflow, setScopeOverflow] = useState(false);
const [impactOverflow, setImpactOverflow] = useState(false);

useEffect(() => {
  if (scopeRef.current) {
    setScopeOverflow(
      scopeRef.current.scrollHeight > scopeRef.current.clientHeight
    );
  }

  if (impactRef.current) {
    setImpactOverflow(
      impactRef.current.scrollHeight > impactRef.current.clientHeight
    );
  }
}, [project]);

const scrollFacts = (direction: "left" | "right") => {
  if (!factsRef.current) return;

  factsRef.current.scrollBy({
    left: direction === "right" ? 120 : -120,
    behavior: "smooth",
  });
};

  return (
    
    <article
  className="
    group
    relative
    aspect-square
    w-full
    max-w-[360px]
    overflow-hidden
    rounded-base
    shadow-sm
    hover:shadow-xl
    transition-all
  "
>
      <img
        src={project.image_url}
        alt={project.title}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      {/* normal */}

      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition duration-500 group-hover:translate-y-full">

        <span className="text-xs uppercase tracking-[0.2em] text-[#8db75a]">
          {project.category}
        </span>

        <h3 className="mt-2 text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-sm text-white/80">
          {project.location}
        </p>

      </div>

      {/* hover */}

      <div
  className="
    absolute
    inset-0
    bg-black/80
    opacity-0
    group-hover:opacity-100
    transition
    duration-500
    p-6
    flex
    flex-col
  "
>
  <div className="flex flex-col h-full">

        <h3 className="lg:text-2xl text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="text-white/70 text-sm leading-6 line-clamp-3">
          {project.subtitle}
        </p>


        <div className="h-px bg-white/20 my-4" />

        <div className="flex-1 overflow-y-auto hide-scrollbar pr-1">

       
       {project.scope && (
  <div className="mt-4">

    <p className="text-[#8db75a] text-xs uppercase tracking-wider">
      Scope
    </p>

    <div className="relative">

      <div
        ref={scopeRef}
        className="max-h-20 overflow-y-auto hide-scrollbar mt-1 pr-2"
      >
        <p className="text-white/80 text-sm leading-6">
          {project.scope}
        </p>
      </div>

      {scopeOverflow && (
        <>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 " />

          <ChevronDown
            className="absolute bottom-1 right-1 w-4 h-4 text-white/70"
          />
        </>
      )}

    </div>

  </div>
)}
        

        
{project.impact && (
  <div className="mt-4">

    <p className="text-[#8db75a] text-xs uppercase tracking-wider">
      Impact
    </p>

    <div className="relative">

      <div
        ref={impactRef}
        className="max-h-20 overflow-y-auto hide-scrollbar mt-1 pr-2"
      >
        <p className="text-white/80 text-sm leading-6">
          {project.impact}
        </p>
      </div>

      {impactOverflow && (
        <>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 " />

          <ChevronDown
            className="absolute bottom-1 right-1 w-4 h-4 text-white/70"
          />
        </>
      )}

    </div>

  </div>
)}

</div>


     <div className="mt-auto pt-4">

{project.key_facts &&
Array.isArray(project.key_facts) &&
project.key_facts.length > 0 && (

<>


<div className="relative">

  <button
    onClick={() => scrollFacts("left")}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10
    w-6 h-6 rounded-full bg-black/60 hover:bg-[#719743]
    flex items-center justify-center"
  >
    <ChevronLeft className="w-4 h-4 text-white" />
  </button>

  <div
    ref={factsRef}
    className="mx-8 flex flex-nowrap gap-2 overflow-x-auto hide-scrollbar scroll-smooth"
  >

    {project.key_facts.map((fact) => (

      <span
        key={fact}
        className="shrink-0 whitespace-nowrap rounded-full bg-[#719743] px-3 py-1 text-xs text-white"
      >
        {fact}
      </span>

    ))}

  </div>

  <button
    onClick={() => scrollFacts("right")}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10
    w-6 h-6 rounded-full bg-black/60 hover:bg-[#719743]
    flex items-center justify-center"
  >
    <ChevronRight className="w-4 h-4 text-white" />
  </button>

</div>

</>

)}

</div>
</div>
      </div>
     
    </article>

  );
}


    return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main >
      <section className="relative overflow-hidden bg-white min-h-[520px] sm:min-h-[620px] flex items-center">

          <div className="absolute inset-0">

            <img
  src="/images/references.avif"
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
              {t("references.sub")}
            </span>

          <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900 ">
              {t("references.title")}
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              {t("references.desc")}
            </p>

             <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              {t("references.desc1")}
            </p>


          </div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />

        </section>
            <section className="py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

       <div className="flex flex-wrap justify-start gap-2 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
            filter === category
              ? "border-[#719743] bg-[#719743] text-white"
              : "border-slate-300 bg-white text-slate-600 hover:border-[#719743] hover:text-[#719743]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">

            {filteredProjects.map(project => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}

        </div>

    </div>
</section>
            </main>
            <Footer/>
            </div>
    )
}