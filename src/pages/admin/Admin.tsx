import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import type { Session } from "@supabase/supabase-js";
import { Outlet, useNavigate } from "react-router-dom";

export default function Admin() {
   useEffect(() => {
    document.title = "Admin | GMH Solutions";
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  // Logged in → render nested routes
  if (session) {
    return <Outlet />;
  }

  // Not logged in → show login page
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/solarpanel.avif')",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative w-full max-w-md rounded-2xl bg-white p-10 shadow-2xl">
        <img
          src="/images/full-logo.png"
          alt="GMH Engineering Solutions"
          className="h-16 mx-auto mb-6"
        />

        <h1 className="text-3xl text-slate-800 font-semibold mb-6 text-center">
          Admin Login
        </h1>

        <input
          className="w-full mb-4 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#719743] focus:outline-none"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-4 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#719743] focus:outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 mb-4 text-sm">
            {error}
          </p>
        )}

        <button
          onClick={login}
          className="w-full rounded-lg bg-[#719743] py-3 text-white hover:bg-[#62863a] transition"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full text-sm text-[#719743] hover:underline"
        >
          ← Return to Website
        </button>
      </div>
    </div>
  );
}