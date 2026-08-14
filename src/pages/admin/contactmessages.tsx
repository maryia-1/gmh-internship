import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Search,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { supabase, type ContactMessage } from "../../lib/supabase";

export default function Messages() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const [expanded, setExpanded] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadMessages();
  }, []);

  async function loadMessages() {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setMessages(data);
    }

    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    await supabase
      .from("contact_messages")
      .update({ status })
      .eq("id", id);

    loadMessages();
  }

  async function deleteMessage(id: string) {
    const confirmDelete = window.confirm(
      "Delete this message?"
    );

    if (!confirmDelete) return;

    await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id);

    loadMessages();
  }

  async function logout() {
    await supabase.auth.signOut();
  }

  const filtered = messages.filter((msg) => {
    const text = (
      msg.first_name +
      " " +
      msg.last_name +
      msg.company +
      msg.email +
      msg.subject
    ).toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-50">

      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 h-20 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-xl bg-[#719743]/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-[#719743]" />
            </div>

            <div>
              <h1 className="text-xl font-semibold">
                Contact Messages
              </h1>

              <p className="text-sm text-slate-500">
                Messages submitted through the website.
              </p>
            </div>

          </div>

          <div className="flex gap-3">

            <button
              onClick={() => navigate("/admin")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-slate-100"
            >
              <ArrowLeft className="w-4 h-4" />
              Dashboard
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-lg border hover:bg-slate-100"
            >
              Website
            </button>

            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-[#719743] text-white hover:bg-[#62863a]"
            >
              Logout
            </button>

          </div>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-14 py-10">

        <span className="uppercase tracking-[0.25em] text-xs font-semibold text-[#719743]">
          Contact
        </span>

        <div className="mt-3 flex items-center gap-6">
          <h2 className="text-4xl font-semibold whitespace-nowrap">
            Contact Messages
          </h2>

          <div className="h-px w-full bg-[#719743]/30" />
        </div>

        <div className="mt-8 relative max-w-md">

          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#719743]/20"
          />

        </div>

        <div className="space-y-5 mt-10">

          {loading && <p>Loading...</p>}

          {!loading && filtered.length === 0 && (
            <p className="text-slate-500">
              No messages found.
            </p>
          )}

          {filtered.map((msg) => {

            const open = expanded === msg.id;

            return (

              <div
                key={msg.id}
                className="bg-white rounded-base border border-[#7aa42a] shadow-sm overflow-hidden"
              >

                <div className="p-6">

                  <div className="flex justify-between">

                    <div>

                      <h3 className="text-lg font-semibold">
                        {msg.first_name} {msg.last_name}
                      </h3>

                      <p className="text-sm text-[#719743] font-medium mt-1">
                        {msg.company}
                      </p>

                      <p className="text-sm text-slate-500 mt-2">
                        {msg.email}
                      </p>

                      <p className="text-sm text-slate-500">
                        {msg.phone}
                      </p>

                      <p className="mt-3 font-medium text-slate-700">
                        {msg.subject}
                      </p>

                    </div>

                    <div className="flex flex-col items-end gap-3">

                      <select
                        value={msg.status}
                        onChange={(e) =>
                          updateStatus(msg.id, e.target.value)
                        }
                        className="rounded-lg border border-slate-300 px-3 py-2"
                      >
                        <option>New</option>
                        <option>Read</option>
                        <option>Replied</option>
                      </select>

                      <p className="text-xs text-slate-400">
                        {new Date(msg.created_at).toLocaleDateString()}
                      </p>

                    </div>

                  </div>

                  <div className="flex gap-3 mt-6">

                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>

                    <button
                      onClick={() =>
                        setExpanded(open ? null : msg.id)
                      }
                      className="ml-auto flex items-center gap-2 text-[#719743]"
                    >
                      {open ? (
                        <>
                          Hide Message
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          View Message
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </div>

                  {open && (

                    <div className="mt-6 pt-6 border-t">

                      <h4 className="font-semibold mb-3">
                        Message
                      </h4>

                      <p className="whitespace-pre-line leading-relaxed text-slate-600">
                        {msg.message}
                      </p>

                    </div>

                  )}

                </div>

              </div>

            );

          })}

        </div>

      </main>

    </div>
  );
}