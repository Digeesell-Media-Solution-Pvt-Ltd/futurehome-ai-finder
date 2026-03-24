import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  projects: [
  { name: "All Projects", href: "/projects" },
  { name: "New Launches", href: "/projects?filter=new" },
  { name: "Ready Soon", href: "/projects?filter=ready" },
  { name: "Investor Picks", href: "/projects?filter=investor" }],

  areas: [
  { name: "Dubai Marina", href: "/areas/dubai-marina" },
  { name: "Downtown Dubai", href: "/areas/downtown" },
  { name: "Palm Jumeirah", href: "/areas/palm-jumeirah" },
  { name: "Business Bay", href: "/areas/business-bay" }],

  company: [
  { name: "About Us", href: "/about" },
  { name: "Market Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
  { name: "Project Onboarding", href: "/project-onboarding" }],

  legal: [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" }]

};

const socialLinks = [
{ name: "Instagram", icon: Instagram, href: "https://www.instagram.com/offplanproperties.uae/" },
{ name: "LinkedIn", icon: Linkedin, href: "#" },
{ name: "Facebook", icon: Facebook, href: "#" },
{ name: "Twitter", icon: Twitter, href: "#" }];


export function Footer() {
  return (
    <footer className="bg-charcoal text-background">
      {/* Main Footer */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="flex flex-col items-start leading-none">
                <span className="text-[1.5rem] font-bold tracking-[0.15em] uppercase text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
                  OFFPLAN
                </span>
                <div className="w-full h-[2px] bg-primary my-[3px]" />
                <span className="text-[0.7rem] font-medium tracking-[0.35em] uppercase text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
                  PROJECTS
                </span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Where your future home begins. Discover AI-powered property matching 
              for off-plan investments across the UAE.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-primary">Projects</h4>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) =>
              <li key={link.name}>
                  <Link
                  to={link.href}
                  className="text-sm text-background/70 hover:text-primary transition-colors">

                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <Link to="/areas">
              <h4 className="font-display text-lg font-medium mb-4 text-primary">
                Top Areas
              </h4>
            </Link>
            <ul className="space-y-3">
              {footerLinks.areas.map((link) =>
              <li key={link.name}>
                  <Link
                  to={link.href}
                  className="text-sm text-background/70 hover:text-primary transition-colors">

                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-4 text-primary">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) =>
              <li key={link.name}>
                  <Link
                  to={link.href}
                  className="text-sm text-background/70 hover:text-primary transition-colors">

                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-4 mt-12 pt-8 border-t border-background/10">
          <span className="text-sm text-background/50">Follow us:</span>
          {socialLinks.map((social) =>
          <a
            key={social.name}
            href={social.href}
            className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-charcoal transition-all duration-300"
            aria-label={social.name}>

              <social.icon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-t border-background/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-xs text-background/50">
              



              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                DLD Approved Listings
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                AI-Verified Properties
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-background/50">
              {footerLinks.legal.map((link, index) =>
              <span key={link.name} className="flex items-center gap-4">
                  <Link to={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && <span>·</span>}
                </span>
              )}
            </div>
          </div>
          <div className="text-center text-xs text-background/40 mt-4">
            © {new Date().getFullYear()} OffPlanProjects. All rights reserved.
          </div>
        </div>
      </div>
    </footer>);

}