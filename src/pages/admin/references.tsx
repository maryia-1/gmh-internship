import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { supabase } from "../../lib/supabase";
import type { SuccessStory } from "../../lib/supabase";

import ProjectForm from "../../components/ProjectForm";
import ProjectList from "../../components/ProjectList";

export default function References() {
  const navigate = useNavigate();
  const {t, i18n}=useTranslation();
  const formRef = useRef<HTMLDivElement>(null);

  const [editingProject, setEditingProject] = useState<SuccessStory | null>(null);
  const [refresh, setRefresh] = useState(false);

  function refreshProject() {
    setRefresh((prev) => !prev);
  }

  async function logout() {
    await supabase.auth.signOut();
  }

  function loadStats() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}

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

      <button
        onClick={() => navigate("/admin")}
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
        Dashboard
      </button>  

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
      {/* Body */}

      <main>

        {/* Page title */}

        <section className="relative">

    {/* Rectangle */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 sm:w-3 lg:w-8 h-8 lg:h-9 bg-[#719743]" />

    {/* Content */}
    <div className="max-w-7xl mx-auto px-6 lg:px-14 py-8">

      <div className="flex items-center gap-3 sm:gap-4">

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold whitespace-nowrap text-slate-900">
          References
        </h2>

        <div className="flex-1 h-px bg-[#719743]/30" />

      </div>

      <p className="mt-2 text-slate-500">
        Create, edit and manage references.
      </p>

    </div>

  </section>

          

       

        {/* Form */}

        <section>

          <div className="px-6 lg:px-8">

          <div ref={formRef}>
            <ProjectForm
            editingProject={editingProject}
          onSuccess={() => {
  refreshProject();
  loadStats();
  setEditingProject(null);

  toast.success(
    editingProject
      ? "Reference updated successfully."
      : "Reference added successfully.",
    {
      duration: 3000,
      position: "top-right",

      style: {
        borderRadius: "10px",
        background: "#ffffff",
        color: "#1e293b",
        border: "1px solid #e2e8f0",
        padding: "16px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        minWidth: "320px",
      },

      iconTheme: {
        primary: "#719743",
        secondary: "#ffffff",
      },
    }
  );
}}/>


            
            </div>
            </div>

        </section>

        {/* List */}

        <section>

    

          <ProjectList
          refresh={refresh}
          onEdit={(project) => {
            setEditingProject(project);
            formRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            }}
            />

        </section>

      </main>

    </div>
  );
}