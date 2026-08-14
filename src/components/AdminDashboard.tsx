import DashboardCard from "./DashboardCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supabase } from "../lib/supabase";

import {

  FolderKanban,
  Briefcase,
  Mail,
} from "lucide-react";
export default function AdminDashboard() {
  const navigate = useNavigate();
  const {i18n}=useTranslation();
   async function logout() {
    await supabase.auth.signOut();
  }

  const [stats, setStats] = useState({
  references: 0,
  vacancies: 0,
  messages: 0,
});

useEffect(() => {
  loadStats();
}, []);

async function loadStats() {
  const [
    references,
    vacancies,
    messages,
  ] = await Promise.all([
    supabase
      .from("success_stories")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("vacancies")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true }),
  ]);

  setStats({
    references: references.count ?? 0,
    vacancies: vacancies.count ?? 0,
    messages: messages.count ?? 0,
  });
}



  return (
    <div className="min-h-screen bg-slate-50">

      <header className="bg-white border-b">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 min-h-20 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

    {/* Logo + title */}
    <div className="flex items-center gap-3 sm:gap-4 min-w-0">

      <img
        src="/images/logo .png"
        alt="GMH Solutions"
        className="w-10 sm:w-12 h-auto shrink-0"
      />

      <div className="min-w-0">
        <h1 className="font-semibold text-lg sm:text-xl text-slate-900 truncate">
          GMH Solutions CMS
        </h1>

        <p className="text-slate-500 text-xs sm:text-sm truncate">
          Content Management System
        </p>
      </div>

    </div>


    {/* Actions */}
    <div className="flex items-center gap-2 sm:gap-3 shrink-0">

      {/* Language toggle */}
      <div className="flex items-center rounded-md overflow-hidden">

       <button
    onClick={() => i18n.changeLanguage("en")}
    className={`px-2 py-1 rounded text-xs font-medium transition ${
      i18n.language === "en"
        ? "bg-[#719743] text-white"
        : "text-slate-500 hover:text-[#719743]"
    }`}
  >
    EN
  </button>

  <button
    onClick={() => i18n.changeLanguage("fr")}
    className={`px-2 py-1 rounded text-xs font-medium transition ${
      i18n.language === "fr"
        ? "bg-[#719743] text-white"
        : "text-slate-500 hover:text-[#719743]"
    }`}
  >
    FR
  </button>

      </div>


      {/* Return to website */}
      <button
        onClick={() => navigate("/")}
        className="
          px-2.5 sm:px-4
          py-2
          rounded-md
          text-[#7aa24a]
          text-xs sm:text-sm
          whitespace-nowrap
          hover:underline
          transition
        "
      >
        Return to Website
      </button>


      {/* Logout */}
      <button
        onClick={logout}
        className="
          px-2.5 sm:px-4
          py-2
          rounded-md
          text-[#7aa24a]
          text-xs sm:text-sm
          whitespace-nowrap
          hover:underline
          transition
        "
      >
        Logout
      </button>

    </div>

  </div>
</header>
   <main>

  {/* FULL WIDTH TITLE */}
  <section className="relative">

    {/* Rectangle */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 sm:w-3 lg:w-8 h-8 lg:h-9 bg-[#719743]" />

    {/* Content */}
    <div className="max-w-7xl mx-auto px-6 lg:px-14 py-8">

      <div className="flex items-center gap-3 sm:gap-4">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold whitespace-nowrap text-slate-900">
          Dashboard
        </h2>

        <div className="flex-1 h-px bg-[#719743]/30" />

      </div>

      <p className="mt-2 text-slate-500">
        Choose what you'd like to manage.
      </p>

    </div>

  </section>
<section className="max-w-7xl mx-auto px-6 lg:px-14 py-6">

    <div className="grid md:grid-cols-2 gap-4">


          <DashboardCard
            title="References"
            icon={<FolderKanban />}
            count={`${stats.references} References`}
            onClick={() => navigate("/admin/references")}
          />

          <DashboardCard
            title="Vacancies"
            icon={<Briefcase/>}
            count={`${stats.vacancies} Positions`}
            onClick={() => navigate("/admin/vacancies")}
          />

          <DashboardCard
            title="Messages"
            icon={<Mail />}
            count={`${stats.messages} Messages`}
            onClick={() => navigate("/admin/contactmessages")}
          />

        
        </div>
        </section>

    
      </main>

    </div>
  );
}