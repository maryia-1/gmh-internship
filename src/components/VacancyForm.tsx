import { useState , useEffect } from "react";
import { supabase, type Vacancies } from "../lib/supabase";
import toast from "react-hot-toast";


type Props = {
  onSuccess: () => void;
  editingVacancy: Vacancies | null;
};

export default function VacancyForm({ onSuccess, editingVacancy }: Props) {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [employment_type, setEmployment_Type] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  

useEffect(() => {
  if (editingVacancy) {
    setTitle(editingVacancy.title ?? "");
    setLocation(editingVacancy.location ?? "");
    setDepartment(editingVacancy.department ?? "");
    setEmployment_Type(editingVacancy.employment_type ?? "");
    setDescription(editingVacancy.description ?? "");
  } else {
    clearForm();
  }
}, [editingVacancy]);


function clearForm() {
  setTitle("");
  setDepartment("");
  setEmployment_Type("");
  setLocation("");
  setDescription("");
}


async function saveVacancy() {

    let error;
    if (editingVacancy) {
      ({ error } = await supabase
    .from("vacancies")
    .update({
      title,
      location,
      department,
      employment_type,
      description,
    
    })
    .eq("id", editingVacancy.id));
  } else {
  ({ error } = await supabase
    .from("vacancies")
    .insert({
      title,
      location,
      department,
      employment_type,
      description,
      sort_order: 0,
    }));
}
    if (error) {
  toast.error(error.message);
  return;
}



clearForm();

toast.success(
  editingVacancy
    ? "Vacancy updated successfully!"
    : "Vacancy added successfully!"
);

onSuccess();

  }


  return (
    <div className="bg-white rounded-base border border-[#7aa24a] shadow-sm p-6">
      
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
  {editingVacancy ? "Edit Vacancy" : "Add a New Vacancy"}
</h2>

      <div className="grid grid-cols-12 gap-3">

        <input
          placeholder="Title"
          className="col-span-7 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          placeholder="Department"
          className="col-span-5 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20"
          value={department}
          onChange={(e)=>setDepartment(e.target.value)}
        />


        <input
          placeholder="Location"
          className="col-span-4 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
        />

        <input
          placeholder="Employment Type"
          className="col-span-5 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20"
          value={employment_type}
          onChange={(e)=>setEmployment_Type(e.target.value)}
        />

        <textarea
          rows={4}
          placeholder="Description"
          className="col-span-9 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#7aa24a] focus:outline-none transition focus:ring-2 focus:ring-[#7aa24a]/20"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />
    




    <div className="col-span-12 flex justify-center mt-3 gap-3">
      {editingVacancy && (
  <button
    type="button"
    onClick={() => {
      clearForm();
      onSuccess();
    }}
    className="px-5 py-2 rounded-md border border-slate-300 text-slate-600 hover:bg-slate-100 transition"
  >
    Cancel Editing
  </button>
)}
      

    <button
        onClick={saveVacancy}
        className="px-8 py-2.5 rounded-md bg-[#7AA24A]
        text-white
        font-medium
        hover:bg-[#688d3d]
        transition
        shadow-sm"
    >
        {editingVacancy ? "Update Vacancy" : "Save Vacancy"}
    </button>

</div>

      </div>

    </div>
  );
  }