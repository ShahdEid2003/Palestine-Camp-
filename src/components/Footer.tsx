import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src={logo}
            alt="شعار أكاديمية فلسطين التعليمية"
            className="w-16 h-16 object-contain bg-background/95 rounded-2xl p-1 hover:rotate-12 transition-transform duration-500"
          />
          <span className="text-xl font-display font-extrabold">أكاديمية فلسطين التعليمية</span>
        </div>
        <p className="text-background/70 mb-6 font-bold">
          المخيم الصيفي الذكي • تعلّم • العب • تطوّر
        </p>
        <p className="text-sm text-background/50 flex items-center justify-center gap-2">
          صُنع بـ <Heart className="w-4 h-4 text-fun animate-pulse" fill="currentColor" /> لأطفالنا
          • © {new Date().getFullYear()} جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};
