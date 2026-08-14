import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
   useEffect(() => {
    document.title = "About Us | GMH Solutions";
  }, []);
  const {t} = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main >

        {/* HERO */}

        <section className="relative overflow-hidden bg-white min-h-[520px] sm:min-h-[620px] flex items-center">

          <div className="absolute inset-0">

            <img
  src="/images/aboutus.png"
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
              {t("aboutus.sub")}
            </span>

          <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-900 ">
              {t("aboutus.title1")}
              <br />
              {t("aboutus.title2")}
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
              {t("aboutus.p1")}
            </p>

          </div>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />

        </section>

        {/* CHAIRMAN */}

        <section className="py-16 lg:py-24">

          <div className=" max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">

            <div className="flex justify-center lg:block">

              <img 
              src="/images/chairman.jpeg" 
              alt="Chairman" 
              className=" rounded-base shadow-lg object-cover w-full max-w-[300px] lg:max-w-none "/>

            </div>

            <div>

              <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[#719743]">
                {t("aboutus.chairman")}
              </span>
              <div className="mt-8 space-y-6 text-slate-600 leading-7 sm:leading-8 text-base ">


                <p>
                  {t("aboutus.chairmandesc1")}

                </p>

                <p>
                    {t("aboutus.chairmandesc2")}
                </p>

                <p>
                  {t("aboutus.chairmandesc3")}
                </p>

              </div>

              <div className="mt-10">

                <img
                  src="/images/chairmansignature.png"
                  alt="Signature"
                  className="h-16 object-contain"
                />

                <p className="mt-2 font-semibold text-slate-900">
                  {t("aboutus.bottomchairman")}
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* VISION */}
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

<p className="mt-8 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("aboutus.visiondesc1")}
</p>
<p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
  {t("aboutus.visiondesc2")}
</p>
        </div>
        </div>
        </section>

        {/* APPROACH */}

        <section  className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
        <span className="text-[#719743] uppercase tracking-[0.2em] text-sm font-semibold">
  {t("aboutus.approach")}
</span>

<div className="mt-3 flex items-center gap-3 sm:gap-6">
  <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
    {t("aboutus.approachtitle")}
  </h2>

  <div className="hidden sm:block h-px flex-1 bg-[#719743]/30"></div>
</div>
</div>


            <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-10">

              {[
                {
                  title: "Client First",
                  text: "Every solution is tailored to each client's operational, technical and commercial objectives.",
                },
                {
                  title: "Multidisciplinary Expertise",
                  text: "Integrated engineering teams collaborate across disciplines to deliver coordinated solutions.",
                },
                {
                  title: "Safety & Quality",
                  text: "Engineering decisions are driven by international standards, quality assurance and risk management.",
                },
                {
                  title: "Long-Term Partnership",
                  text: "We build lasting relationships by delivering reliable engineering support throughout the project lifecycle.",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="flex gap-5"
                >

                  <ArrowRight className="w-5 h-5 mt-1 text-[#719743] shrink-0" />

                  <div>

                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}