import React from "react";
import { useTranslation } from "react-i18next";
import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", labelKey: "navbar.home", path: "/" },
  { id: "about", labelKey: "navbar.about", path: "/AboutUs", type: "page" },
  { id: "Services", labelKey: "navbar.services", type: "page" },
  {
    id: "engineeringsection",
    labelKey: "navbar.engineering",
    path: "/pages/engineering",
    type: "page",
  },
  {
    id: "consulting",
    labelKey: "navbar.consulting",
    path: "/Consultingservices",
    type: "page",
  },
  {
    id: "success-stories",
    labelKey: "navbar.references",
    path: "/projects",
    type: "page",
  },
  {
    id: "offices",
    labelKey: "navbar.offices",
    type: "scroll",
  },
  {
    id: "join",
    labelKey: "navbar.join",
    path: "/joinus",
    type: "page",
  },
  {
    id: "contact",
    labelKey: "navbar.contact",
    path: "/contact",
    type: "page",
  },
];





function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();
  
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  const servicesActive =
  location.pathname === "/pages/engineering" ||
  location.pathname === "/Consultingservices" 

  const scrollTo = (id: string) => {
  setOpen(false);

  if (location.pathname === "/") {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  } else {
    navigate("/", {
      state: {
        scrollTo: id,
      },
    });
  }
};
const isActive = (item: typeof NAV_ITEMS[number]) => {
  if (item.id === "hero") {
    return location.pathname === "/";
  }

  if (item.path) {
    return location.pathname === item.path;
  }

  return false;
};


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Contact Bar */}

<div className="hidden lg:flex h-9 items-center justify-between text-xs text-slate-500 border-b border-gray-100">

  {/* Left */}

  <div className="flex items-center gap-6">

  {/* Phone */}
  <a
    href="tel:+33632570744"
    className="flex items-center gap-2 hover:text-[#719743] transition-colors"
  >
    <Phone className="w-3.5 h-3.5 text-[#719743]" />
    <span>+33 6 32 57 07 44</span>
  </a>

  {/* Email */}
  <a
    href="mailto:contact@gmh-sols.com"
    className="flex items-center gap-2 hover:text-[#719743] transition-colors"
  >
    <Mail className="w-3.5 h-3.5 text-[#719743]" />
    <span>contact@gmh-sols.com</span>
  </a>

    <div className="flex items-center gap-2">
      <MapPin className="w-3.5 h-3.5 text-[#719743]" />
      <span>2 rue du voyage Vauréal, 95490 - France</span>
    </div>

  </div>

  {/* Right */}

  

<div className="flex items-center gap-1 ml-4">
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

  <a
    href="https://www.linkedin.com/company/gmh-engineering-consulting-solutions/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-[#719743] transition-colors"
  >
    <Linkedin className="px-3 w-4 h-4" />
    LinkedIn
  </a>
</div>

</div>

        <div className="flex items-center justify-between h-14">

          {/* Logo */}

          <button
            onClick={() => {
              if (location.pathname === "/") {
                 scrollTo("hero");
                } else {
                   navigate("/");
                  }
                }}
            className="flex items-center"
          >
            <img
              src="/images/full-logo.png"
              alt="GMH Engineering Solutions"
              className="h-11 w-auto"
            />
          </button>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-1">

           {NAV_ITEMS
  .filter(
    (item) =>
      ![ "Services", "engineeringsection", "consulting", "offices"].includes(item.id)
  )
  .map((item) => {

    if (item.id === "about") {
      return (
        <React.Fragment key="about-services">

 
          <button
            onClick={() =>navigate("/AboutUs")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
  location.pathname === "/AboutUs"
    ? "text-[#7aa24a] bg-[#7aa24a]/10"
    : "text-slate-600 hover:text-[#7aa24a] hover:bg-[#7aa24a]/10"
}`}
          >
            {t("navbar.about")}
          </button>


          <div className="relative group">

            <button
             className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${ servicesActive
              ? "text-[#7aa24a] bg-[#7aa24a]/10": "text-slate-600 hover:text-[#7aa24a] hover:bg-[#7aa24a]/10"}`}
              >
              {t("navbar.services")}
            </button>

            <div
  className="
    absolute
    left-0
    top-full
    mt-2
    w-60
    rounded-lg
    bg-white
    border
    border-gray-200
    shadow-lg
    py-2
    opacity-0
    invisible
    translate-y-2
    transition-all
    duration-200
    group-hover:opacity-100
    group-hover:visible
    group-hover:translate-y-0
    z-50
  "
>
<div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45" />
  <button
    onClick={() => navigate("/pages/engineering")}
    className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-gray-50 hover:text-[#7aa24a] transition-colors"
  >
    {t("navbar.engineering")}
  </button>

  <div className="mx-3 border-t border-gray-100" />

  <button
    onClick={() => navigate("/Consultingservices")}
    className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-gray-50 hover:text-[#7aa24a] transition-colors"
  >
   {t("navbar.consulting")}
  </button>

</div>
          </div>

        </React.Fragment>
      );
    }

    return (
      <button
        key={item.id}
       onClick={() => {
        if (item.id === "hero") {
          scrollTo("hero");
        } else if (item.type === "scroll") {
          scrollTo(item.id);
        } else if (item.path) {
          navigate(item.path);
        }
      }}
        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
          isActive(item)
            ? "text-[#7aa24a] bg-[#7aa24a]/10"
            : "text-slate-600 hover:text-[#7aa24a] hover:bg-[#7aa24a]/10"
        }`}
      >
        {t(item.labelKey)}
      </button>
    );

  })}


          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-900"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Menu */}

     

{open && (
  <div className="lg:hidden bg-white rounded-base shadow-xl mb-4 p-4  border border-slate-100 max-h-[calc(100vh-120px)] overflow-y-auto">


    {NAV_ITEMS
      .filter(
        (item) =>
          !["Services", "offices", "engineeringsection", "consulting"].includes(item.id)
      )
      .map((item) => {
        if (item.id === "about") {
          return (
            <React.Fragment key="mobile-services">

              <button
                onClick={() => navigate("/AboutUs")}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                  location.pathname === "/AboutUs"
                    ? "text-[#719743] bg-[#719743]/10"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t(item.labelKey)}
              </button>

              

              {/* Services */}

<button
  onClick={() => setServicesOpen(!servicesOpen)}
  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
>
  <span>{t("navbar.services")}</span>

  <span
    className={`transition-transform duration-300 ${
      servicesOpen ? "rotate-180" : ""
    }`}
  >
    ▼
  </span>
</button>

<div
  className={`overflow-hidden transition-all duration-300 ${
    servicesOpen ? "max-h-40" : "max-h-0"
  }`}
>
  <button
    onClick={() => {
      navigate("/pages/engineering");
      setOpen(false);
    }}
    className="block w-full text-left px-8 py-3 text-sm text-slate-600 hover:bg-slate-50"
  >
    {t("navbar.engineering")}
  </button>

  <button
    onClick={() => {
      navigate("/Consultingservices");
      setOpen(false);
    }}
    className="block w-full text-left px-8 py-3 text-sm text-slate-600 hover:bg-slate-50"
  >
    {t("navbar.consulting")}
  </button>
</div>

            </React.Fragment>
          );
        }

        return (
          <button
            key={item.id}
            onClick={() => {
              if (item.type === "scroll") {
                scrollTo(item.id);
              } else if (item.path) {
                navigate(item.path);
              }
            }}
            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
              isActive(item)
                ? "text-[#719743] bg-[#719743]/10"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            {t(item.labelKey)}
          </button>
        );
      })}

      {/* Contact Info */}

<div className="mt-5 pt-5 border-t border-slate-200 space-y-3">

  <a
    href="tel:+33632570744"
    className="flex items-center gap-5 text-sm text-slate-600 hover:text-[#719743] transition"
  >
    <Phone className="w-4 h-4 text-[#719743]" />
    <span>+33 632 570 744</span>
  </a>

  <a
    href="mailto:contact@gmh-sols.com"
    className="flex items-center gap-5 text-sm text-slate-600 hover:text-[#719743] transition"
  >
    <Mail className="w-4 h-4 text-[#719743]" />
    <span>contact@gmh-sols.com</span>
  </a>

  <a
    href="https://maps.google.com/?q=2+rue+du+voyage+Vauréal+95490+France"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-5 text-sm text-slate-600 hover:text-[#719743] transition"
  >
    <MapPin className="w-4 h-4 mt-0.5 text-[#719743] shrink-0" />
    <span>
      2 rue du voyage<br />
      Vauréal, 95490 – France
    </span>
  </a>

  <a
    href="https://www.linkedin.com/company/gmh-engineering-consulting-solutions/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-5 text-sm text-slate-600 hover:text-[#719743] transition"
  >
    <Linkedin className="w-4 h-4 text-[#719743]" />
    <span>LinkedIn</span>
  </a>

</div>


  </div>
)}
      </nav>
    </header>
  );
}
export default Navbar;