import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { SuccessStory } from "../lib/supabase";

type Props = {
  refresh: boolean;
  onEdit: (project: SuccessStory) => void;
};

export default function ProjectList({ refresh, onEdit}: Props) {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStories();
  }, [refresh]);

  async function loadStories() {
    setLoading(true);

    const { data, error } = await supabase
      .from("success_stories")
      .select("*")
      .order("sort_order", { ascending: true });

    if (!error) {
      setStories(data || []);
    }

    setLoading(false);
  }

  async function deleteStory(id: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("success_stories")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadStories();
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-5">
        Loading...
      </div>
    );
  }

return (
  <div className="bg-white rounded-base border border-[#7aa24a] shadow-sm p-6  mt-16">

    <h2 className="text-xl font-semibold text-gray-800 mb-6">
      Existing References 
    </h2>

    {stories.length === 0 && (
      <p className="text-gray-500">No references yet.</p>
    )}


    <div className="space-y-3">

      {stories.map((story) => (

        <div
          key={story.id}
          className="border border-gray-200 rounded-lg bg-white px-4 py-3 flex justify-between items-center hover:border-gray-300 transition"
        >

          <div>
            <h3 className="font-semibold text-gray-800">
              {story.title}
            </h3>

            <p className="text-sm text-gray-500">
              {story.category}
            </p>
          </div>

          <div className="flex gap-2">
            {story.featured && (
            <span className="rounded-full bg-[#719743]/10 px-2 py-1 text-xs font-medium text-[#719743]">
              Homepage
              </span>
            )}

            <button
            onClick={() => onEdit(story)}
            className="px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition"
            >
              Edit
            </button>

            <button
              onClick={() => deleteStory(story.id)}
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