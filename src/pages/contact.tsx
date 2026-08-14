import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import {useState, useEffect} from "react";

import { Mail, Phone, MapPin, Linkedin } from "lucide-react";


export default function Contact() {
  const {t}=useTranslation();
   useEffect(() => {
    document.title = "Contact | GMH Solutions";
  }, []);
  async function sendMessage() {

const { error } = await supabase
.from("contact_messages")
.insert({

first_name:firstName,

last_name:lastName,

email,

phone,

subject,

message,

status:"New"

});

if(error){

toast.error(error.message);

return;

}
const { error: functionError } =
    await supabase.functions.invoke(
      "send-contact-email",
      {
        body: {
          name: `${firstName} ${lastName}`,
          email,
          phone,
          subject,
          message,
        },
      }
    );

  if (functionError) {
  console.error(functionError);
  toast.error("Your message was saved, but the email notification failed.");
  return;
}

// clear form
setFirstName("");
setLastName("");
setCompany("");
setEmail("");
setPhone("");
setSubject("");
setMessage("");

toast.success(t("contact.toastnotif"), {
  iconTheme: {
    primary: "#719743",
    secondary: "#ffffff",
  },
});
}


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany]= useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="min-h-screen bg-white ">
      <Navbar />

      <main>

        {/* HERO */}
          <section className="relative overflow-hidden bg-white min-h-[520px] sm:min-h-[600px] flex items-center">
           <div className="absolute inset-0 overflow-hidden z-0">
  <img
    src="/images/contactus.webp"
    alt=""
    className="absolute inset-0 w-full h-full object-cover object-center"
/>
 

  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-black/35" />

 <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-45% to-transparent" />
</div>
    

          <div className="relative z-20 max-w-9xl mx-auto px-6 lg:px-8">
            <div className="w-full lg:w-[52%] py-16 sm:py-36">

            <span className="text-[#719743] uppercase tracking-[0.25em] text-sm font-semibold">
              {t("contact.sub")}
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight">
              {t("contact.title")}
            </h1>

            <div className="mt-8 space-y-6 text-base  sm:text-lg text-slate-600 leading-relaxed">
              <p>
               {t("contact.desc")}
              </p>
            </div>

          </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none z-10" />
        </section>


       
        {/* CONTACT SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-[1.6fr_1fr] gap-16">

              {/* FORM */}

              <div>

                <h2 className="text-3xl font-semibold text-slate-900">
                  {t("contact.messagetitle")}
                </h2>

                <p className="mt-3 text-slate-600">
                  {t("contact.messagedesc")}
                </p>

                <div className="mt-10 grid grid-cols-2 gap-5">

                  <input
                    placeholder={t("contact.firstname")}
                    className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#719743]"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    />
             

                  <input
                    placeholder={t("contact.lastname")}
                    className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#719743]"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                  />

                  <input
                    placeholder={t("contact.company")}
                    className="col-span-2 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#719743]"
                    value={company}
                    onChange={(e)=>setCompany(e.target.value)}
                  />

                  <input
                    placeholder={t("contact.email")}
                    className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#719743]"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />

                  <input
                    placeholder={t("contact.phone")}
                    className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#719743]"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                  />

                  <input
                    placeholder={t("contact.subject")}
                    className="col-span-2 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#719743]"
                    value={subject}
                    onChange={(e)=>setSubject(e.target.value)}
                  />

                  <textarea
                    rows={7}
                    placeholder={t("contact.projectdesc")}
                    className="col-span-2 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#719743]"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                  />

                </div>

                <button onClick={sendMessage}>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-3xl border border-[#719743] px-6 py-3 text-[#719743] font-medium hover:bg-[#719743] hover:text-white transition">
                    {t("contact.button")}
                    </div>
                  </button>



              </div>

              {/* CONTACT INFO */}

              <div className="border-l border-slate-200 pl-10">

                <h2 className="text-3xl font-semibold text-slate-900">
                 {t("contact.contactinfo")}
                </h2>

                <div className="mt-10 space-y-8">

                  <div className="flex gap-4">
  <Mail className="text-[#719743] w-6 h-6 mt-1" />

  <div>
    <p className="font-semibold">{t("contact.contactemail")}</p>

    <a
      href="mailto:contact@gmh-sols.com"
      className="text-slate-600 hover:text-[#719743] hover:underline transition-colors"
    >
      contact@gmh-sols.com
    </a>
  </div>
</div>

<div className="flex gap-4">
  <Phone className="text-[#719743] w-6 h-6 mt-1" />

  <div>
    <p className="font-semibold">{t("contact.contactphone")}</p>

    <a
      href="tel:+33632570744"
      className="text-slate-600 hover:text-[#719743] hover:underline transition-colors"
    >
      +33 6 32 57 07 44
    </a>
  </div>
</div>

                  <div className="flex gap-4">
                    <MapPin className="text-[#719743] w-6 h-6 mt-1" />
                    <div>
                      <p className="font-semibold">Offices</p>

                      <p className="text-slate-600 mt-2">
                        Paris, France
                      </p>

                      <p className="text-slate-600">
                        Casablanca, Morocco
                      </p>

                      <p className="text-slate-600">
                        Tunis, Tunisia
                      </p>

                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Linkedin className="text-[#719743] w-6 h-6 mt-1" />
                    <div>
                      <p className="font-semibold">
                        LinkedIn
                      </p>

                      <a
                        href="#"
                        className="text-[#719743] hover:underline"
                      >
                        {t("contact.linkedln")}
                      </a>

                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

       

      </main>

      <Footer />
    </div>
  );
}