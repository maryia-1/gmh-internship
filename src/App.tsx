import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import Admin from "./pages/admin/Admin";
import { useTranslation } from "react-i18next";
import Vacancies from "././pages/admin/vacancies";
import Contactmessages from "./pages/admin/contactmessages";
import Engineering from "./pages/engineering"
import Consultingservices from "./pages/Consultingservices"
import Projects from "./pages/projects"
import Joinus from "./pages/joinus"
import Contact from "./pages/contact"
import AboutUs from "./pages/AboutUs"
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
 
  Sun,
  FolderOpen,
  Cog,


  Network,
  Handshake,

  GraduationCap,
  Building2,
  Droplet,
  Factory,
 
  Globe2,
  Users,
 ArrowRight,
  MapPin,
 Briefcase,
} from "lucide-react";
import { supabase, type SuccessStory } from "./lib/supabase";
import References from "./pages/admin/references";
import AdminDashboard from "./components/AdminDashboard";



function Hero() {
   useEffect(() => {
    document.title = "Home | GMH Solutions";
  }, []);
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 sm:from-white sm:via-white/90 sm:to-transparent z-10" />
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/windmill.jpg')"
        }}
      />
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 min-h-screen flex items-center pt-20 sm:pt-20 lg:pt-20">
        <div className="w-full lg:w-[58%] xl:w-[54%]">
          
          <h1
  className="
    text-[2rem]
    xs:text-[2.2rem]
    sm:text-4xl
    md:text-5xl
    lg:text-[3.4rem]
    font-semibold
    leading-[1.15]
    tracking-tight
    text-slate-900
    mb-5
  "
>
            {t("hero.title1")} {" "}
            <span className="text-[#7aa24a] ">
              {t("hero.title2")}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-7 sm:leading-8 max-w-xl">
            {t("hero.subtitle")}
          </p>
          
        </div>
      </div>
       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/30 to-white pointer-events-none" />
      
    </section>
  );
}

function About() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 xl:gap-20 items-start">
          <div>
            <span className="text-[#719743] font-semibold text-sm uppercase tracking-wider">
              {t("about.sub")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
              {t("about.title")}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
             {t("about.p2")}
            </p>

          <div className="mt-6 flex">
            <button
    onClick={() => navigate("/AboutUs")}
    className="inline-flex items-center gap-2 rounded-3xl border border-[#719743] px-6 py-3 text-[#719743] font-medium hover:bg-[#719743] hover:text-white transition"
  >
    {t("about.button")}
    <ArrowRight className="w-4 h-4" />
  </button>
</div>

          </div>
         <div className="space-y-5">

 
  <div className="rounded-base border border-[#719743] bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-base border border-[#719743] bg-white">
        <FolderOpen className="h-5 w-5 text-[#719743] stroke-[1.5]" />
        </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900">
          {t("about.stat1")}
        </h3>

        <p className="mt-1 text-sm text-slate-600 leading-6">
          {t("about.stat1desc")}
        </p>
      </div>
    </div>
  </div>

  <div className="rounded-base border border-[#719743] bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-base border border-[#719743] bg-white">
        <Cog className="h-5 w-5 text-[#719743] stroke-[1.5]" />
        </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900">
          {t("about.stat2")}
        </h3>

        <p className="mt-1 text-sm text-slate-600 leading-6">
           {t("about.stat2desc")}
        </p>
      </div>
    </div>
  </div>

  <div className="rounded-base border border-[#719743] bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-base border border-[#719743] bg-white">
        <Globe2 className="h-5 w-5 text-[#719743] stroke-[1.5]" />
        </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900">
         {t("about.stat3")}
        </h3>

        <p className="mt-1 text-sm text-slate-600 leading-6">
          {t("about.stat3desc")}
        </p>
      </div>
    </div>
  </div>
  

</div>

        </div>
    


      </div>

    </section>
  );
}

function EngineeringSection() {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const DISCPLINES= [
  {
    icon: Sun,
    title: t("engineeringsection.discplines.p1"),
    image: "/images/energy.webp",
  
  },

  {
    icon: Building2,
    title: t("engineeringsection.discplines.p2"),
    image: "/images/buildings.avif",
    
  },

  {
    icon: Droplet,
    title: t("engineeringsection.discplines.p3"),
    image: "/images/oilandgas.jpg",
    
    
  },

  {
    icon: Factory,
    title: t("engineeringsection.discplines.p4"),
    image: "/images/process.webp",
    
  }
];

  

  return (
    <section id="engineeringsection" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
        <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
  {t("engineeringsection.sub")}
</span>

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("engineeringsection.title")}
  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>

<p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("engineeringsection.p1")}
</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {DISCPLINES.map((area) => {
            
            return (
              <div
              key={area.title}
              className="group flex flex-col overflow-hidden rounded-base border border-[#719743] bg-normal shadow-sm "
              >
                <div className="h-44 overflow-hidden">
                  <img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover  "
                  />
                  
                  </div>
                  
                  
                <div className="p-2 flex items-center justify-center gap-5">
                  
                  <div>
                    <h3 className="text-base font-normal text-slate-900 ">{area.title}</h3>
       
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center">
  <button
    onClick={() => navigate("/pages/engineering")}
    className="inline-flex items-center gap-2 rounded-3xl border border-[#719743] px-6 py-3 text-[#719743] font-medium hover:bg-[#719743] hover:text-white transition"
  >
    {t("engineeringsection.button")}
    <ArrowRight className="w-4 h-4" />
  </button>
</div>
      </div>
    </section>
  );
}

function Consulting() {
  const { t } = useTranslation();
  const DISCPLINES = [
  {
   
    title: t("consulting.discplines.p1"),
    image: "/images/docsmanage.webp",
  },

  {
   
    title: t("consulting.discplines.p2"),
    image: "/images/productqualification.jpg",
  },

  {
    title: t("consulting.discplines.p3"),
    image: "/images/recruitment.jpg",
  },

  {

    title: t("consulting.discplines.p4"),
    image: "/images/om.jpg",
  }
];

  const navigate = useNavigate();

  return (
    <section id="consulting" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
        

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("consulting.title")}
  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>

<p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("consulting.subtitle")}
</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {DISCPLINES.map((area) => {
            
            return (
              <div
              key={area.title}
              className="group flex flex-col overflow-hidden rounded-base border border-[#719743] bg-white shadow-sm "
              >
                <div className="h-44 overflow-hidden">
                  <img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover"
                  />
                  
                  </div>
                 
                  
                <div className="p-2 flex items-center justify-center gap-5">
                  
                  <div>
                    <h3 className="text-base text-center font-normal text-slate-900">{area.title}</h3>
                   
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
  <button
    onClick={() => navigate("/Consultingservices")}
    className="inline-flex items-center gap-2 rounded-3xl border border-[#719743] px-6 py-3 text-[#719743] font-medium hover:bg-[#719743] hover:text-white transition"
  >
    {t("consulting.button")}
    <ArrowRight className="w-4 h-4" />
  </button>
</div>
      </div>
    </section>
  );
}

function SuccessStories() {
  const navigate = useNavigate();
  const {t}=useTranslation();
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const homepageStories = stories.filter((s) => s.featured);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("success_stories")
        .select("*")
        .order("sort_order", { ascending: true });
      if (cancelled) return;
      if (error) setError(error.message);
      else setStories(data || []);
      setLoading(false);
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
     <section id="success-stories" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
        <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
  {t("success_stories.sub")}
</span>

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("success_stories.title")}
  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>

<p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("success_stories.subtitle")}
</p>
        </div>

      <div className="mx-auto ">
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-96 rounded-xl bg-slate-100 animate-pulse border border-slate-200"
              />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-red-500">Unable to load success stories: {error}</p>
          </div>
        ) : (
          <>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homepageStories.map((story) => (
                <article
                  key={story.id}
                  className="group rounded-base bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                >
                  {/* Image header */}
                 <div className="relative aspect-[16/10] overflow-hidden">
                    {story.image_url ? (
                      <img
                        src={story.image_url}
                        alt={story.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-slate-100">
                        <span className="text-slate-400 text-sm">No image available</span>
                      </div>
                    )}
                    {story.category && (
                      <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-[#719743] shadow-sm">
                        {story.category}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
                     {story.title}</h3>
                     {story.subtitle && (
                      <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                      {story.subtitle}
                      </p>
                    )}
                    {story.location && (
                      <div className="mt-5 flex items-center text-sm text-slate-500">
                         <MapPin className="w-4 h-4 mr-2 text-[#719743]" />
                          {story.location}
                           </div>
                          )}
                          </div>
                </article>
              ))}
            </div>

            {homepageStories.length === 0 && (
              <p className="text-center text-slate-400 py-12">
                No projects in this category yet.
              </p>
            )}
          </>
        )}
      </div>
      <div className="mt-12 text-center">
  <button
    onClick={() => navigate("/projects")}
    className="inline-flex items-center gap-2 rounded-3xl border border-[#719743] px-6 py-3 text-[#719743] font-medium hover:bg-[#719743] hover:text-white transition"
  >
    {t("success_stories.button")}
    <ArrowRight className="w-4 h-4" />
  </button>
</div>
</div>
    </section>
  );
}

function Offices() {
  const { t } = useTranslation();
  return (
     <section id="offices" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
        <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
  {t("offices.sub")}
</span>

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("offices.title")}
  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>

<p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("offices.subtitle")}
</p>
        </div>

        {/* Map */}

        <div className="mt-10 rounded-base overflow-hidden border border-slate-200 shadow-sm">
          <img
            src="/images/map.png"
            alt="GMH Global Presence"
            className="w-full object-cover"
          />
        </div>
       {/*thin stripe*/}
        <div className=" flex flex-wrap items-center justify-center gap-8 border-y border-slate-200 py-3 text-base text-slate-600">

  <span>
    <span className=" font-semibold text-slate-900">3 </span>{t("offices.p0")}
  </span>

  <div className="hidden md:block h-4 w-px bg-slate-300" />

  <span>
    {t("offices.p1")} <span className="font-semibold text-slate-900">{t("offices.p2")}</span>
  </span>

  <div className="hidden md:block h-4 w-px bg-slate-300" />

  <span>
    {t("offices.p3")}
  </span>

</div>

       {/* Offices */}

<div className="mt-8 rounded-base border border-slate-200 bg-slate-50 overflow-hidden">
  <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">

    {/* France */}
    <div className="px-4 py-4 text-center">
      <h3 className="text-lg font-semibold text-slate-900">
        France
      </h3>

      <p className="mt-2 text-slate-600 leading-6">
        2 rue du Voyage
        Vauréal 95490
      </p>

      <a
        href="tel:+33632570744"
        className="mt-4 inline-block text-[#719743] font-medium hover:underline"
      >
        +33 632 570 744
      </a>
    </div>

    {/* Morocco */}
    <div className="px-4 py-4 text-center">
      <h3 className="text-lg font-semibold text-slate-900">
        Morocco
      </h3>

      <p className="mt-3 text-slate-600 leading-6">
        Kenzi Office
        Mohammedia
      </p>

      <a
        href="tel:+212774506004"
        className="mt-3 inline-block text-[#719743] font-medium hover:underline"
      >
        +212 774 506 004
      </a>
    </div>

    {/* Tunisia */}
    <div className="px-4 py-4 text-center">
      <h3 className="text-lg font-semibold text-slate-900">
        Tunisia
      </h3>

      <p className="mt-3 text-slate-600 leading-6">
        Rue Hssin Bouzayene
        Tunis
      </p>

      <a
        href="tel:+21654755811"
        className="mt-3 inline-block text-[#719743] font-medium hover:underline"
      >
        +216 54 75 58 11
      </a>
    </div>

  </div>
</div>
{/* Trusted By */}
 <section  className="py-10 bg-white">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-10">
        <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
  {t("offices.sub2")}
</span>

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("offices.title2")}
  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>

<p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("offices.subtitle2")}
</p>
        </div>

  <div className="mt-3 rounded-base border border-white bg-white p-8 shadow-sm">
    <img
      src="/images/partners.png"
      alt="Selected clients and partners"
      className="w-full object-contain "
    />
  </div>
  </div>
</section>

      </div>
     
    </section>
  );
}

function Join() {
  const navigate =useNavigate();
  const { t } = useTranslation();
  return (
     <section id="join" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
        <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
  {t("join.sub")}
</span>

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("join.title")}
  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>

<p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("join.subtitle")}
</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-stretch">

          {/* ================= LEFT ================= */}

          <div>

        

            <span className="text-[#719743] uppercase tracking-widest text-sm font-semibold">
              {t("join.careers")}
            </span>

            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              {t("join.careertitle")}
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              {t("join.careersub")}
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex gap-3">
                <Users className="w-5 h-5 mt-1 text-[#719743]" />
                <div>
                  <h3 className="font-medium text-slate-900">
                    {t("join.career1")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t("join.career1desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Globe2 className="w-5 h-5 mt-1 text-[#719743]" />
                <div>
                  <h3 className="font-medium text-slate-900">
                    {t("join.career2")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t("join.career2desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <GraduationCap className="w-5 h-5 mt-1 text-[#719743]" />
                <div>
                  <h3 className="font-medium text-slate-900">
                    {t("join.career3")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t("join.career3desc")}
                  </p>
                </div>
              </div>

            </div>

            <button 
            onClick ={()=>navigate("/joinus")}
            className="mt-8 inline-flex items-center gap-2 rounded-3xl border border-[#719743] px-6 py-3 text-[#719743] font-medium hover:bg-[#719743] hover:text-white transition">
              {t("join.careerbutton")}
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          <div className="hidden lg:flex justify-center">
            <div className="w-px self-stretch bg-[#719743]/20"></div>
          </div>


          <div>

            

            <span className="text-[#719743] uppercase tracking-widest text-sm font-semibold">
              {t("join.collaborate")}
            </span>

            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              {t("join.collaboratetitle")}
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              {t("join.collaboratesub")}
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex gap-3">
                <Handshake className="w-5 h-5 mt-1 text-[#719743]" />
                <div>
                  <h3 className="font-medium text-slate-900">
                    {t("join.collaborate1")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t("join.collaborate1desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Briefcase className="w-5 h-5 mt-1 text-[#719743]" />
                <div>
                  <h3 className="font-medium text-slate-900">
                    {t("join.collaborate2")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t("join.collaborate2desc")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Network className="w-5 h-5 mt-1 text-[#719743]" />
                <div>
                  <h3 className="font-medium text-slate-900">
                    {t("join.collaborate3")}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {t("join.collaborate3desc")}
                  </p>
                </div>
              </div>

            </div>

            
            <button 
            onClick={() => navigate("/contact")}
            className="mt-8 inline-flex items-center gap-2 rounded-3xl border border-[#719743] px-6 py-3 text-[#719743] font-medium hover:bg-[#719743] hover:text-white transition">
              {t("join.collaboratebutton")}
              <ArrowRight className="w-4 h-4" />
            </button>
            </div>
       

        </div>

      </div>

    </section>
  );
}

export default function App() {
  const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo) {
    const element = document.getElementById(location.state.scrollTo);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }

    window.history.replaceState({}, document.title);
  }
}, [location]);
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#fff",
            color: "#1e293b",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,.12)",
          },
        }}
      />
    
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <About />
            <EngineeringSection />
            <Consulting/>
            <SuccessStories />
            <Offices />
            <Join />
            <Footer />
          </div>
        }
      />

      <Route path="/pages/engineering" element={<Engineering />}/>
      <Route path="/Consultingservices" element={<Consultingservices />}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/joinus" element ={<Joinus/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      <Route path="/AboutUs" element={<AboutUs />}/>
      <Route path="/admin" element={<Admin />}>
      <Route index element={<AdminDashboard />} />
      <Route path="references" element={<References />} />
      <Route path="vacancies" element={<Vacancies />} />
      <Route path="contactmessages" element={<Contactmessages/>}/>
      </Route>

      
    </Routes>
    </>
  );
}
