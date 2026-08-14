import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import { supabase, type Vacancies } from "../lib/supabase";
import {Mail} from "lucide-react";

export default function Joinus(){
   useEffect(() => {
    document.title = "Join Us | GMH Solutions";
  }, []);
  const {t} =useTranslation();
  const [vacancies, setVacancies] = useState<Vacancies[]>([]);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  async function loadVacancies() {
    const { data, error } = await supabase
      .from("vacancies")
      .select("*")
      .order("sort_order", { ascending: true });

    if (!error && data) {
      setVacancies(data);
    }

    setLoading(false);
  }

  loadVacancies();
}, []);


     return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>

        <section className="relative overflow-hidden bg-white min-h-[520px] sm:min-h-[620px] flex items-center">

          <div className="absolute inset-0">

            <img
  src="/images/joinus.avif"
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
              {t("joinus.sub")}
            </span>

          <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900 ">
              {t("joinus.title")}
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              {t("joinus.desc")}
            </p>

             <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              {t("joinus.desc1")}
            </p>

          </div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />

        </section>

      

    {/* WHY JOIN GMH */}
<section className="py-16 sm:py-20 lg:py-24 border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

      {/* LEFT */}

      <div className="max-w-2xl">

        <span className="text-[#719743] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">
          {t("joinus.whygmhsub")}
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-slate-900">
          {t("joinus.whygmhtitle")}
        </h2>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
          {t("joinus.whygmhdesc")}
        </p>

      </div>


      {/* RIGHT */}

      <div className=" grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-7 lg:pt-2">

        <div className="flex items-start gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#719743] shrink-0" />

          <p className="text-sm sm:text-base leading-6 text-slate-600">
            {t("joinus.whygmhp1")}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#719743] shrink-0" />

          <p className="text-sm sm:text-base leading-6 text-slate-600">
            {t("joinus.whygmhp2")}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#719743] shrink-0" />

          <p className="text-sm sm:text-base leading-6 text-slate-600">
           {t("joinus.whygmhp3")}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#719743] shrink-0" />

          <p className="text-sm sm:text-base leading-6 text-slate-600">
            {t("joinus.whygmhp4")}
          </p>
        </div>

      </div>

    </div>
  </div>
</section>


{/* VACANCIES */}
  <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
        <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
  {t("aboutus.vision")}
</span>

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("aboutus.visiontitle")}
  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>

<p className="mt-8 max-w-4xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("aboutus.visiondesc1")}
</p>
<p className="mt-5 max-w-4xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("aboutus.visiondesc2")}
</p>
        </div>
        
    {/* Replace this with dynamic vacancies later */}
<div className="mt-10 space-y-5">
  {loading ? (
    <p className="text-slate-500">Loading vacancies...</p>
  ) : vacancies.length === 0 ? (
    <p className="text-slate-500">
      There are currently no vacancies available.
    </p>
  ) : (
    vacancies.map((vacancy) => (
      <article
        key={vacancy.id}
        className="bg-slate-50 border border-slate-200 rounded-xl p-6 "
      >
        <div className="flex justify-between items-start flex-wrap gap-3">

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {vacancy.title}
            </h3>

            <p className="mt-2 text-slate-600">
              {vacancy.employment_type} • {vacancy.location}
            </p>
          </div>

          <span className="rounded-full bg-[#719743]/10 px-4 py-1 text-sm font-medium text-[#719743]">
            {vacancy.department}
          </span>

        </div>

        <p className="mt-5 text-slate-600 leading-relaxed">
          {vacancy.description}
        </p>
      </article>
    ))
  )}
</div>
    
  </div>
</section>


<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="mb-14 mx-auto max-w-7xl gap-3">
         <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
          {t("joinus.application")}</span>
        <div className="flex items-center py-3 gap-6">
          <h2 className="text-4xl font-semibold whitespace-nowrap text-slate-900">
            {t("joinus.applicationtitle")}
          </h2>
          <div className="h-px w-full bg-[#719743]/30" />
        </div>

        <p className="mt-5 text-base lg:text-lg text-slate-600 max-w-5xl">
          {t("joinus.applicationdesc1")}
        </p>

        <p className="mt-5 text-base lg:text-lg text-slate-600 max-w-5xl">
          {t("joinus.applicationdesc2")}
        </p>

        <div className="mt-8 flex flex-col text-lg">
  <a
    href="mailto:contact@gmh-sols.com"
    className="flex items-center gap-2 text-gray-600 hover:text-[#719743] transition-colors"
  >
    <Mail className="w-7 h-7 text-[#7aa24a] shrink-0" />
    contact@gmh-sols.com
  </a>
</div>
     <p className="mt-5 italic text-base lg:text-lg text-slate-600 leading-relaxed">
      {t("joinus.applicationsub")} 
     </p>
      </div>
   
    
  </div>
</section>


    </main>
    <Footer />
    </div>
      )
}