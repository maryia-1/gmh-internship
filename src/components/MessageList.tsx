import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { ContactMessage} from "../lib/supabase";

type Props = {
  refresh: boolean;
  onEdit: (project: ContactMessage) => void;
};

export default function VacancyList({ refresh, onEdit}: Props) {
  const [messages,setMessages]=useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVacancies();
  }, [refresh]);

  async function loadVacancies() {
    setLoading(true);

    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("sort_order", { ascending: true });

    if (!error) {
      setMessages(data || []);
    }

    setLoading(false);
  }

  async function deleteMessage(id: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("vacancies")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadVacancies();
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-5">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">

      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Existing References
      </h2>

      {messages.length === 0 && (
        <p className="text-gray-500">No references yet.</p>
      )}

      <div className="space-y-3">
        {messages.map((messages) => (
          <div
            key={messages.id}
            className="border border-gray-200 rounded-lg bg-white px-4 py-3 flex justify-between items-center hover:border-gray-300 transition"
          >
            <div>
              <h3 className="font-semibold text-gray-800">
                {messages.first_name}
              </h3>

              <p className="text-sm text-gray-500">
                {messages.last_name}
              </p>

              <p className="text-sm text-gray-500">
                {messages.company}
              </p>


            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onEdit(messages)}
                className="px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition"
              >
                Edit
              </button>

              <button
                onClick={() => deleteMessage(messages.id)}
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