import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToOffices = () => {
    if (location.pathname === "/") {
      document.getElementById("offices")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "offices" } });
    }
  };

  const linkClass =
    "text-sm text-gray-400 hover:text-white transition-colors text-left";

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/10">

          {/* Logo + blurb */}
          <div className="max-w-sm">
            <img
              src="/images/logo-white.png"
              alt="GMH Engineering Solutions"
              className="h-14 w-auto"
            />
            <p className="mt-5 text-sm leading-7 text-gray-400">
              Delivering multidisciplinary engineering, project control,
              and consulting services across Europe and Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex flex-col gap-3">
              <button onClick={() => navigate("/AboutUs")} className={linkClass}>
                About
              </button>
              <button onClick={() => navigate("/pages/engineering")} className={linkClass}>
                Engineering Services
              </button>
              <button onClick={() => navigate("/Consultingservices")} className={linkClass}>
                Consulting & HR Support
              </button>
              <button onClick={() => navigate("/joinus")} className={linkClass}>
                Join us 
              </button>
              <button onClick={() => navigate("/contact")} className={linkClass}>
                Contact
              </button>
              <button onClick={()=> navigate("/projects")} className={linkClass}>
                References
              </button>
            </div>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Offices
            </h3>
            <div className="flex flex-col gap-3">
              <button onClick={goToOffices} className={`${linkClass} flex items-center gap-2`}>
                France
              </button>
              <button onClick={goToOffices} className={`${linkClass} flex items-center gap-2`}>
              
                Morocco
              </button>
              <button onClick={goToOffices} className={`${linkClass} flex items-center gap-2`}>
                Tunisia
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:contact@gmh-sols.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#7aa24a] shrink-0" />
                contact@gmh-sols.com
              </a>
              <a
              
                href="tel:+33632570744"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#7aa24a] shrink-0" />
                +33 632 570 744
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} GMH Engineering Solutions. All rights reserved.
          </p>

          <div className="flex gap-6">
            <button className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-white transition-colors">
              Terms of Use
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer