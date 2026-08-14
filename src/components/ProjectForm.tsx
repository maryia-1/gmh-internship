import { useState , useEffect } from "react";
import { supabase, type SuccessStory } from "../lib/supabase";
import toast from "react-hot-toast";


type Props = {
  onSuccess: () => void;
  editingProject: SuccessStory | null;
};

export default function ProjectForm({ onSuccess, editingProject }: Props) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("Energy");
  const [location, setLocation] = useState("");
  const [client, setClient] = useState("");
  const [scope, setScope] = useState("");
  const [impact, setImpact] = useState("");
  const [keyFacts, setKeyFacts] = useState("");
  const [featured, setFeatured] = useState(false); 
  const [image, setImage] = useState<File | null>(null);

  const [success] = useState(false);

 useEffect(() => {
  if (!editingProject) return;

  setTitle(editingProject.title ?? "");
  setSubtitle(editingProject.subtitle ?? "");
  setCategory(editingProject.category ?? "Energy");
  setLocation(editingProject.location ?? "");
  setClient(editingProject.client ?? "");
  setScope(editingProject.scope ?? "");
  setImpact(editingProject.impact ?? "");

  setKeyFacts(
    Array.isArray(editingProject.key_facts)
      ? editingProject.key_facts.join("\n")
      : ""
  );

  setFeatured(editingProject.featured ?? false);
}, [editingProject]);


  async function saveStory() {

    const facts = keyFacts
        .split("\n")
        .map(f => f.trim())
        .filter(f => f.length > 0);
    let imageUrl = null;

if (image) {
  const fileName = `${Date.now()}-${image.name}`;

  const { error: uploadError } = await supabase.storage
    .from("project-images")
    .upload(fileName, image);

  if (uploadError) {
    toast.error(uploadError.message);
    return;
  }

  const { data } = supabase.storage
    .from("project-images")
    .getPublicUrl(fileName);

  imageUrl = data.publicUrl;
}

    let error;

if (editingProject) {
  ({ error } = await supabase
    .from("success_stories")
    .update({
      title,
      subtitle,
      location,
      client,
      scope,
      impact,
      category,
      key_facts: facts,
      featured,
      image_url:
        imageUrl ?? editingProject.image_url,
    })
    .eq("id", editingProject.id));
} else {
  ({ error } = await supabase
    .from("success_stories")
    .insert({
      title,
      subtitle,
      location,
      client,
      scope,
      impact,
      category,
      key_facts: facts,
      featured,
      image_url: imageUrl,
      sort_order: 0,
    }));
}
    if (error) {
  toast.error(error.message);
  return;
}

// Tell the dashboard to refresh the project list
toast.success(
  editingProject
    ? "Project updated successfully!"
    : "Project created successfully!"
);

// Clear the form
setTitle("");
setSubtitle("");
setCategory("Energy");
setLocation("");
setClient("");
setScope("");
setImpact("");
setKeyFacts("");
setFeatured(false);
setImage(null);

const input = document.getElementById(
  "project-image"
) as HTMLInputElement | null;

if (input) input.value = "";

onSuccess();



  }
  return (
    <div className="w-full bg-white rounded-base border border-[#7aa24a]/40 shadow-sm p-4 sm:p-5 lg:p-6">
       {success && (
        <div className="mb-4 rounded-lg bg-[#7aa24a] text-white px-4 py-3">
         Story added successfully!
        </div>
      )}
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
  {editingProject ? "Edit Reference" : "Add a New Reference"}
</h2>
     
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 min-w-0">
        <input
        placeholder="Title"
        className="col-span-1 sm:col-span-2 lg:col-span-7 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
/>

        <input
          placeholder="Subtitle"
          className="col-span-1 sm:col-span-2 lg:col-span-5 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20"
          value={subtitle}
          onChange={(e)=>setSubtitle(e.target.value)}
        />

        <select
          className="col-span-1 sm:col-span-2 lg:col-span-5 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >
          <option>Energy</option>
          <option>Buildings</option>
          <option>Oil & Gas</option>
          <option>Process</option>
        </select>

        <input
          placeholder="Location"
          className="col-span-1 sm:col-span-1 lg:col-span-4 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
        />

        <input
          placeholder="Client"
          className="col-span-5 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20"
          value={client}
          onChange={(e)=>setClient(e.target.value)}
        />

        <textarea
          rows={4}
          placeholder="Scope"
          className="col-span-1 sm:col-span-2 lg:col-span-6 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20 resize-y"
          value={scope}
          onChange={(e)=>setScope(e.target.value)}
        />

        <textarea
          rows={4}
          placeholder="Impact"
          className="col-span-1 sm:col-span-2 lg:col-span-6 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20 resize-y"
          value={impact}
          onChange={(e)=>setImpact(e.target.value)}
        />

        <textarea
          rows={5}
          placeholder="Key Facts (one per line)"
          className="col-span-1 sm:col-span-2 lg:col-span-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20 resize-y"
          value={keyFacts}
          onChange={(e)=>setKeyFacts(e.target.value)}
        />
       <div className="col-span-1 sm:col-span-2 lg:col-span-12 rounded-lg border-2 border-dashed border-gray-300 p-4 bg-gray-50">

    <label className="block text-sm font-medium text-gray-700 mb-2">
        Reference Image
    </label>

    <input
        id="project-image"
        type="file"
        accept="image/*"
        className="block w-full text-sm text-gray-600
        file:mr-4
        file:px-4
        file:py-2
        file:rounded-md
        file:border-0
        file:bg-[#7AA24A]
        file:text-white
        file:text-sm
        hover:file:bg-[#688d3d]
        cursor-pointer"
        onChange={(e) => {
            if (e.target.files?.length) {
                setImage(e.target.files[0]);
            }
        }}
    />

   {image ? (
  <div className="mt-3 flex items-center justify-between rounded-md bg-slate-100 px-3 py-2">
    <span className="text-sm text-slate-700 truncate">
      📷 {image.name}
    </span>

    <button
      type="button"
      onClick={() => {
        setImage(null);

        const input = document.getElementById(
          "project-image"
        ) as HTMLInputElement | null;

        if (input) input.value = "";
      }}
      className="text-red-600 hover:text-red-700 text-sm font-medium"
    >
      Remove
    </button>
  </div>
) : (
  <p className="mt-2 text-xs text-gray-500">
    Upload a JPG or PNG image.
  </p>
)}


</div>
<div className="col-span-1 sm:col-span-2 lg:col-span-12 flex items-start sm:items-center gap-3">
  <input
    id="featured"
    type="checkbox"
    checked={featured}
    onChange={(e) => setFeatured(e.target.checked)}
    className="h-4 w-4 rounded border-gray-300 text-[#7AA24A] focus:ring-[#7AA24A]"
  />
  <div className="text-sm text-slate-700">
  <label htmlFor="featured" className="font-medium">
    Display on homepage
  </label>

  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
    If enabled, only the title, subtitle, location and image will be
    displayed on the homepage.
  </p>
</div>
</div>



    <div className="col-span-1 sm:col-span-2 lg:col-span-12 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-center mt-3 gap-3">
      {editingProject && (
  <button
    type="button"
    onClick={() => window.location.reload()}
    className="w-full sm:w-auto px-5 py-2 rounded-md border border-slate-300 text-slate-600 hover:bg-slate-100 transition"
  >
    Cancel Editing
  </button>
)}
      

    <button
  onClick={saveStory}
  className="
    w-full sm:w-auto
    px-8 py-2.5
    rounded-md
    bg-[#7AA24A]
    text-white
    font-medium
    hover:bg-[#688d3d]
    transition
    shadow-sm
  "
>
  {editingProject ? "Update Reference" : "Save Reference"}
</button>

</div>

      </div>

    </div>
  );
  }