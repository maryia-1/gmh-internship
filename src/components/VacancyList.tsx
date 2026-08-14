import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Vacancies} from "../lib/supabase";
import toast from "react-hot-toast";

type Props = {
  refresh: boolean;
  onEdit: (project: Vacancies) => void;
  onDelete: (id: number) => void;
};

  
export default function VacancyList({ refresh, onEdit, onDelete }: Props) {
  const [vacancies, setVacancies] = useState<Vacancies[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVacancies();
  }, [refresh]);

  async function loadVacancies() {
    setLoading(true);

    const { data, error } = await supabase
      .from("vacancies")
      .select("*")
      .order("sort_order", { ascending: true });

    if (!error) {
      setVacancies(data || []);
    }

    setLoading(false);
  }
async function deleteVacancy(id: number) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this vacancy?"
  );

  if (!confirmDelete) return;

  const { error } = await supabase
    .from("vacancies")
    .delete()
    .eq("id", id);

  if (error) {
    toast.error(error.message);
    return;
  }

  loadVacancies();


  onDelete(id);
}

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-5">
        Loading...
      </div>
    );
  }

  return (
    <div >

     

      {vacancies.length === 0 && (
        <p className="text-gray-500">No references yet.</p>
      )}

      <div className="space-y-3">
        {vacancies.map((vacancy) => (
          <div
            key={vacancy.id}
            className="border border-gray-200 rounded-lg bg-white px-4 py-3 flex justify-between items-center hover:border-gray-300 transition"
          >
            <div>
              <h3 className="font-semibold text-gray-800">
                {vacancy.title}
              </h3>

              <p className="text-sm text-gray-500">
                {vacancy.department}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onEdit(vacancy)}
                className="px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition"
              >
                Edit
              </button>

              <button
                onClick={() => deleteVacancy(vacancy.id)}
                className="px-3 py-1.5 text-sm font-medium rounded-md border border-[#7AA24A] bg-[#7AA24A] text-white hover:bg-[#688d3d] transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}