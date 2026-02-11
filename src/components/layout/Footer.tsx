import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  projects: [
    { name: "All Projects", href: "/projects" },
    { name: "New Launches", href: "/projects?filter=new" },
    { name: "Ready Soon", href: "/projects?filter=ready" },
    { name: "Investor Picks", href: "/projects?filter=investor" },
  ],
  areas: [
    { name: "Dubai Marina", href: "/areas/dubai-marina" },
    { name: "Downtown Dubai", href: "/areas/downtown" },
    { name: "Palm Jumeirah", href: "/areas/palm-jumeirah" },
    { name: "Business Bay", href: "/areas/business-bay" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Market Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-background">
      {/* Main Footer */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="font-display text-xl font-semibold text-charcoal">O</span>
                </div>
                <div>
                  <span className="font-display text-2xl font-semibold tracking-tight">
                    OffPlanProjects
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              An AI-powered digital property discovery platform. Browse upcoming
              developments and connect directly with official sales teams.
            </p>
            <div className="space-y-3 text-sm text-background/70">
              <a href="tel:+97144000000" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +971 4 400 0000
              </a>
              <a href="mailto:info@offplanprojects.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@offplanprojects.com
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Downtown Dubai, UAE
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-primary">Projects</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-primary">Top Areas</h4>
            <ul className="space-y-3">
              {footerLinks.areas.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-primary">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-4 mt-12 pt-8 border-t border-background/10">
          <span className="text-sm text-background/50">Follow us:</span>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Disclaimer & Legal Bar */}
      <div className="border-t border-background/10">
        <div className="container-luxury py-6">
          {/* Platform Disclaimer */}
          <div className="text-xs text-background/50 space-y-1.5 mb-5">
            <p>We are an AI-powered digital property discovery platform.</p>
            
            
            <p>All enquiries are forwarded to official developer teams or authorized agents.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-background/10">
            <div className="flex flex-wrap items-center gap-4 text-xs text-background/50">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                AI-Powered Discovery
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Informational Platform
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Independent &amp; Unbiased
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-background/50">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center gap-4">
                  <Link to={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && <span>·</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center text-xs text-background/40 mt-4">
            © {new Date().getFullYear()} OffPlanProjects. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
