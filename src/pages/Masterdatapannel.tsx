import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogOut, RefreshCw, Search, Download, Eye, EyeOff } from "lucide-react";

interface Lead {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone_country_code: string;
  phone_number: string;
  project_name: string | null;
  cta_type: string;
  requirement: string | null;
  download_url: string | null;
}

export default function Masterdatapannel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);

  const fetchLeads = async (u: string, p: string) => {
    const { data, error } = await supabase.functions.invoke("get-leads", {
      body: { username: u, password: p },
    });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    return data.data as Lead[];
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");
    try {
      const data = await fetchLeads(username, password);
      setLeads(data);
      setIsAuthenticated(true);
      setLastRefreshed(new Date());
    } catch {
      setLoginError("Invalid username or password. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      const data = await fetchLeads(username, password);
      setLeads(data);
      setLastRefreshed(new Date());
    } catch {
      // ignore
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setLeads([]);
    setLastRefreshed(null);
  };

  const exportCSV = () => {
    const headers = ["#", "Name", "Email", "Phone", "Project", "CTA Type", "Requirement", "Date"];
    const rows = filteredLeads.map((l, i) => [
      i + 1,
      l.full_name,
      l.email,
      `${l.phone_country_code}${l.phone_number}`,
      l.project_name ?? "-",
      l.cta_type,
      l.requirement ?? "-",
      new Date(l.created_at).toLocaleDateString("en-GB"),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredLeads = leads.filter((l) => {
    const q = searchQuery.toLowerCase();
    return (
      l.full_name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      (l.project_name ?? "").toLowerCase().includes(q) ||
      (l.requirement ?? "").toLowerCase().includes(q) ||
      l.phone_number.includes(q)
    );
  });

  // ── LOGIN SCREEN ────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* Logo / Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-primary fill-current">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground">Master Data Panel</h1>
            <p className="text-sm text-muted-foreground mt-1">FutureHome AI — Leads CMS</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div className="space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {loginError && (
              <p className="text-sm text-destructive bg-destructive/10 rounded-lg px-3 py-2">
                {loginError}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={isLoggingIn}>
              {isLoggingIn ? "Signing in…" : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // ── CMS DASHBOARD ───────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-base font-display font-bold text-foreground leading-none">
              Master Data Panel
            </h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              {leads.length} lead{leads.length !== 1 ? "s" : ""} total
              {lastRefreshed && (
                <> · Last refreshed {lastRefreshed.toLocaleTimeString()}</>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isLoading}
              className="gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={exportCSV}
              disabled={filteredLeads.length === 0}
              className="gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="gap-1.5 text-muted-foreground hover:text-destructive"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 space-y-5">
        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Total Leads", value: leads.length },
            {
              label: "This Month",
              value: leads.filter((l) => {
                const d = new Date(l.created_at);
                const now = new Date();
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
              }).length,
            },
            {
              label: "Today",
              value: leads.filter((l) => {
                const d = new Date(l.created_at);
                const now = new Date();
                return (
                  d.getDate() === now.getDate() &&
                  d.getMonth() === now.getMonth() &&
                  d.getFullYear() === now.getFullYear()
                );
              }).length,
            },
            {
              label: "Projects",
              value: new Set(leads.map((l) => l.project_name).filter(Boolean)).size,
            },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-4">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground mt-0.5">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Search leads…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>CTA Type</TableHead>
                <TableHead>Requirement</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-12 text-muted-foreground text-sm">
                    {searchQuery ? "No leads match your search." : "No leads submitted yet."}
                  </TableCell>
                </TableRow>
              ) : (
                filteredLeads.map((lead, i) => (
                  <TableRow key={lead.id}>
                    <TableCell className="text-muted-foreground text-xs">{i + 1}</TableCell>
                    <TableCell className="font-medium">{lead.full_name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{lead.email}</TableCell>
                    <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                      {lead.phone_country_code} {lead.phone_number}
                    </TableCell>
                    <TableCell>
                      {lead.project_name ? (
                        <span className="text-sm font-medium">{lead.project_name}</span>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {lead.cta_type}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground max-w-[200px] truncate">
                      {lead.requirement ?? "—"}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                      <br />
                      <span className="opacity-60">
                        {new Date(lead.created_at).toLocaleTimeString("en-GB", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {filteredLeads.length > 0 && (
          <p className="text-xs text-muted-foreground text-center">
            Showing {filteredLeads.length} of {leads.length} leads
          </p>
        )}
      </main>
    </div>
  );
}
