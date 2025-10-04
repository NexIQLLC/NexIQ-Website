import Link from "next/link";
import { Linkedin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[hsl(207_100%_23%)] text-white dark:bg-primary dark:text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-xl mb-4">
              NexiqLLC
            </div>
            <p className="text-sm opacity-80 mb-4">
              Smarter IT Solutions for a Smarter Future. Empowering businesses with cutting-edge IT solutions.
            </p>
            <p className="text-xs opacity-60">Based in Pennsylvania, USA</p>
          </div>
          

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm underline-offset-4 hover:underline smooth-transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+12152627084" className="hover:underline">+1(215)262-7084</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:nexiqllc.info@gmail.com" className="hover:underline">nexiqllc.info@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-8">
                <a
                  href="https://www.linkedin.com/company/nexiqllc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-white hover:bg-white/90 transition-all rounded"
                  aria-label="Visit our LinkedIn profile"
                  style={{
                    background: 'linear-gradient(135deg, #0A66C2 0%, #0A66C2 100%)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

        <div className="border-t border-black/10 dark:border-white/20 mt-4 pt-4 text-center">
          <p className="text-xs opacity-60">© {new Date().getFullYear()} NexiqLLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


