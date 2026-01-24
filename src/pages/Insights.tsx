import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";

const insights = [
  {
    id: 1,
    title: "Top 10 Off-Plan Projects to Watch in 2024",
    summary: "Our AI-curated list of the most promising off-plan investments launching this year.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Investment Guide",
    date: "Jan 15, 2024",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Understanding Payment Plans: A Complete Guide",
    summary: "Everything you need to know about off-plan payment structures in the UAE.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    category: "Buyer's Guide",
    date: "Jan 10, 2024",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "ROI Trends in Dubai Marina vs Business Bay",
    summary: "Comparative analysis of rental yields and capital appreciation in two prime locations.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    category: "Market Analysis",
    date: "Jan 5, 2024",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "First-Time Investor? Here's Your Off-Plan Checklist",
    summary: "Essential steps and due diligence before making your first off-plan investment.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "Buyer's Guide",
    date: "Dec 28, 2023",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Dubai Real Estate Market Forecast 2024",
    summary: "Expert predictions on market trends, pricing, and investment opportunities.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
    category: "Market Analysis",
    date: "Dec 20, 2023",
    readTime: "12 min read",
  },
  {
    id: 6,
    title: "How RERA Protects Off-Plan Buyers",
    summary: "Understanding your legal rights and protections as an off-plan investor in Dubai.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    category: "Legal & Regulatory",
    date: "Dec 15, 2023",
    readTime: "5 min read",
  },
];

const categories = ["All", "Investment Guide", "Buyer's Guide", "Market Analysis", "Legal & Regulatory"];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container-luxury">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-3 block">
              Knowledge Hub
            </span>
            <h1 className="text-display text-foreground mb-4">
              Market Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with expert analysis, market trends, and investment 
              guides for UAE off-plan real estate.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group mb-12"
          >
            <Link to={`/insights/${insights[0].id}`} className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-luxury transition-shadow">
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={insights[0].image}
                  alt={insights[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="badge-tag">{insights[0].category}</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {insights[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {insights[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                  {insights[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {insights[0].summary}
                </p>
                <Button variant="gold" className="self-start">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Link>
          </motion.article>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="group card-luxury"
              >
                <Link to={`/insights/${article.id}`}>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="badge-tag">{article.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-10 bg-cream rounded-2xl text-center"
          >
            <h2 className="text-2xl font-display font-medium text-foreground mb-4">
              Stay Updated on Market Trends
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for weekly insights, new project launches, 
              and exclusive investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="gold">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
