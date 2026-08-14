import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import {
  UserCog,
  HardHat,
  DraftingCompass,
  Factory,
  Building2,
  Wrench,
  ShieldCheck,
} from "lucide-react";
export default function Consultingservices() {
   useEffect(() => {
    document.title = "Consulting | GMH Solutions";
  }, []);

    const {t} = useTranslation();

  const sectors = [
    {name: t("consultingservices.sectors.p1"), description: t("consultingservices.sectors.p1desc")},
    {name: t("consultingservices.sectors.p2"), description: t("consultingservices.sectors.p2desc")},
    {name: t("consultingservices.sectors.p3"), description:t("consultingservices.sectors.p3desc")},
    {name: t("consultingservices.sectors.p4"), description:t("consultingservices.sectors.p4desc")},
  ];



  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main >

        {/* HERO */}
<section className="relative overflow-hidden bg-white min-h-[520px] sm:min-h-[620px] flex items-center">

          <div className="absolute inset-0">

            <img
  src="/images/hr.jfif"
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
              {t("consultingservices.sub")}
            </span>

          <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900 ">
              {t("consultingservices.title")}
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              {t("consultingservices.subtitle")}
            </p>

          </div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />

        </section>

<section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
        <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
  {t("consultingservices.recruitmentsub")}
</span>

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("consultingservices.recruitment")}

  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>

<p className="mt-8 max-w-4xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("consultingservices.recruitmentdesc1")}
</p>
<p className="mt-5 max-w-4xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("consultingservices.recruitmentdesc2")}
</p>
        </div>
        </div>
        </section>




<section className="py-5">
  <div className="max-w-9xl mx-auto px-6 lg:px-8">

    <div className="mb-10">
        <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
  {t("consultingservices.documentationsub")}
</span>

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("consultingservices.documentation")}

  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>

<p className="mt-8 max-w-4xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("consultingservices.documentationdesc1")}
</p>

        </div>
    
    <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
      {sectors.map((sector, i) => (
        <div key={sector.name} className="flex gap-5">
          <span className="text-2xl font-bold text-[#719743]/30 leading-none shrink-0 w-10">
            {String(i + 1).padStart(2, "0")}
          </span>

          <div>
            <h3 className="text-x1 font-semibold text-slate-900 flex items-center gap-3">
              {sector.name}
              <span className="h-px flex-1 bg-[#719743]/20 max-w-16" />
            </h3>
            <p className="text-sm whitespace-pre-line mt-3 text-slate-600 leading-relaxed">
              {sector.description}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>

</section>


 <section className="py-24">
  <div className="max-w-9xl mx-auto px-6 lg:px-8">

    <div className="mb-10">
        <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
  {t("consultingservices.teamsub")}
</span>

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("consultingservices.teamtitle")}

  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>



        </div>
    

    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-8">

      <div className="flex flex-col items-center text-center">
        <UserCog className="w-8 h-8 text-[#719743]" />
        <p className="mt-3 text-sm font-medium text-slate-800">
          {t("consultingservices.teamp1")}
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <HardHat className="w-8 h-8 text-[#719743]" />
        <p className="mt-3 text-sm font-medium text-slate-800">
          {t("consultingservices.teamp2")}
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <DraftingCompass className="w-8 h-8 text-[#719743]" />
        <p className="mt-3 text-sm font-medium text-slate-800">
          {t("consultingservices.teamp3")}
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <Building2 className="w-8 h-8 text-[#719743]" />
        <p className="mt-3 text-sm font-medium text-slate-800">
          {t("consultingservices.teamp4")}
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <Factory className="w-8 h-8 text-[#719743]" />
        <p className="mt-3 text-sm font-medium text-slate-800">
          {t("consultingservices.teamp5")}
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <Wrench className="w-8 h-8 text-[#719743]" />
        <p className="mt-3 text-sm font-medium text-slate-800">
          {t("consultingservices.teamp6")}
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <ShieldCheck className="w-8 h-8 text-[#719743]" />
        <p className="mt-3 text-sm font-medium text-slate-800">
          {t("consultingservices.teamp7")}
        </p>
      </div>

    </div>
   <div className ="mt-8 flex items-center">
    <p className=" max-w-4xl text-xs sm:text-base text-slate-600 leading-relaxed">
  {t("consultingservices.teamdesc")}
</p>
</div>


  </div>
</section>

      </main>

      <Footer />

    </div>
  );
}