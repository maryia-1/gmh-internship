import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Briefcase} from "lucide-react";

import { supabase } from "../../lib/supabase";
import type { Vacancies } from "../../lib/supabase";

import VacancyForm from "../../components/VacancyForm";
import VacancyList from "../../components/VacancyList";

export default function Vacancies() {
  const navigate = useNavigate();

  const [editingVacancy, setEditingVacancy] = useState<Vacancies | null>(null);
  const [refresh, setRefresh] = useState(false);

  function refreshVacancies() {
    setRefresh((prev) => !prev);
  }

  async function logout() {
    await supabase.auth.signOut();
  }

  

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}

      <header className="bg-white border-b border-slate-200 p-2">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-xl bg-[#719743]/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#719743]" />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-slate-900">
                Vacancy Management
              </h1>

              <p className="text-sm text-slate-500">
                Create, edit and manage job opportunities.
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => navigate("/admin")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-100 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Dashboard
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-100 transition"
            >
              Website
            </button>

            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-[#719743] text-white hover:bg-[#5f8238] transition"
            >
              Logout
            </button>

          </div>

        </div>
      </header>

      {/* Body */}

      <main className="max-w-7xl mx-auto px-8 py-10">

        {/* Page title */}

        <div className="flex items-center justify-between mb-10">

          <div className="w-full">

          <span className="uppercase tracking-[0.25em] text-xs font-semibold text-[#719743]">
          Careers
         </span>

         <div className="mt-3 flex items-center gap-6">

          <h2 className="text-4xl font-semibold whitespace-nowrap text-slate-900">
          Vacancies
          </h2>
         <div className="flex-1 h-px bg-[#719743]/30" />
          </div>
           <p className="mt-2 text-slate-500 max-w-2xl">
              Add new job oppurtunities and keep the careers updated
            </p>

         </div>  
        </div>

        {/* Form */}

        <section >

          <VacancyForm
            editingVacancy={editingVacancy}
            onSuccess={() => {
              refreshVacancies();
              
              setEditingVacancy(null);
            }}
          />

        </section>

        {/* List */}

        <section className="mt-10 bg-white rounded-base border border-[#7aa24a] shadow-sm p-6">

          <div className="flex items-center justify-between mb-6">

            <h3 className="text-xl font-semibold text-slate-900">
              Existing Vacancies
            </h3>

       

          </div>

         <VacancyList
  refresh={refresh}
  onEdit={setEditingVacancy}
  onDelete={(deletedId) => {
    if (editingVacancy?.id === deletedId) {
      setEditingVacancy(null);
    }
    refreshVacancies();
  }}
/>

        </section>

      </main>

    </div>
  );
}