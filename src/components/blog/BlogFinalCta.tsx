import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogFinalCta() {
  return (
    <section className="my-14 rounded-2xl bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal p-8 sm:p-12 text-center relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D6C7A1' fill-opacity='1'%3E%3Cpath d='M20 20h20v20H20zM0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
          Looking to Invest in Dubai Off-Plan?
        </h2>
        <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
          Explore verified off-plan projects with real payment plans, handover timelines, and developer profiles — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="gold" size="lg">
            <Link to="/projects">
              Explore All Projects
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
          <Button asChild variant="hero-outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
            <a
              href="https://wa.me/971000000000?text=Hi%2C%20I%20found%20you%20on%20OffPlanProjects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
