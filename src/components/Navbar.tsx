import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "عن المخيم" },
  { href: "#programs", label: "البرامج" },
  { href: "#schedule", label: "الجدول" },
  { href: "#activities", label: "الأنشطة" },
  { href: "#levels", label: "المستويات" },
  { href: "#register", label: "التسجيل" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-3 font-display font-extrabold text-base md:text-lg group">
          <img
            src={logo}
            alt="شعار أكاديمية فلسطين التعليمية"
            className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
          />
          <span className="hidden sm:block leading-tight">
            <span className="block">أكاديمية فلسطين</span>
            <span className="block text-primary text-sm">التعليمية</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-bold text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <a href="#register">سجّل الآن</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-blue"
          aria-label="القائمة"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl font-bold text-foreground/80 hover:bg-primary/10 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-2">
              <a href="#register" onClick={() => setOpen(false)}>سجّل الآن</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
