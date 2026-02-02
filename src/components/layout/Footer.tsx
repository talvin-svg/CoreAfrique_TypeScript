import { companyInfo } from "@/lib/data/company";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/investment-advisory", label: "Advisory" },
    { href: "/services/blockchain-education", label: "Education" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logos/core_afrique_logo.png"
                alt="CoreAfrique"
                width={800}
                height={200}
                className="h-[200px] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Investment advisory and blockchain education for Africa&apos;s digital economy.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-medium text-white mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-medium text-white mb-4 text-sm">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-white mb-4 text-sm">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-secondary transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li>{companyInfo.phone}</li>
            </ul>
            {/* Social links */}
            <div className="flex gap-3 mt-4">
              {companyInfo.socialLinks.linkedin && (
                <a
                  href={companyInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {companyInfo.socialLinks.twitter && (
                <a
                  href={companyInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-light/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} CoreAfrique. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-white/50 hover:text-secondary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-secondary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
