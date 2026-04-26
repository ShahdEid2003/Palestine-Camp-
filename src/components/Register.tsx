import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  MessageCircle,
  PhoneCall,
  Megaphone,
  AlertCircle,
} from "lucide-react";

const WHATSAPP = "970599000000";
const PHONE = "+970 59 900 0000";

export const Register = () => {
  return (
    <section id="register" className="py-20 md:py-28 gradient-soft">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/15 text-primary font-bold mb-4">
            <PhoneCall className="w-4 h-4" />
            التسجيل والتواصل
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
            سجّل طفلك <span className="text-gradient-hero">الآن</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            تواصل معنا مباشرة عبر واتساب أو الهاتف
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <a
            href={`https://wa.me/${WHATSAPP}?text=السلام%20عليكم،%20أرغب%20بالتسجيل%20في%20المخيم%20الصيفي`}
            target="_blank"
            rel="noreferrer"
            className="group bg-success text-success-foreground rounded-3xl p-7 shadow-green hover-lift animate-fade-in"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5 group-hover:rotate-12 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>

            <div className="font-bold opacity-90 text-sm mb-1">
              واتساب مباشر
            </div>

            <div className="text-2xl font-display font-extrabold mb-2">
              تواصل الآن
            </div>

            <p className="opacity-90 text-sm">
              أسرع طريقة للاستفسار والتسجيل
            </p>
          </a>

          <a
            href={`tel:${PHONE}`}
            className="group bg-card rounded-3xl p-7 shadow-card hover-lift animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-16 h-16 rounded-2xl gradient-hero shadow-blue flex items-center justify-center mb-5 group-hover:rotate-12 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>

            <div className="font-bold text-muted-foreground text-sm mb-1">
              اتصل بنا
            </div>

            <div className="text-2xl font-display font-extrabold mb-2" dir="ltr">
              {PHONE}
            </div>

            <p className="text-muted-foreground text-sm">
              متاحون لخدمتكم طوال الأسبوع
            </p>
          </a>

          <div
            className="group bg-card rounded-3xl p-7 shadow-card hover-lift animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-16 h-16 rounded-2xl gradient-sun shadow-yellow flex items-center justify-center mb-5 group-hover:rotate-12 group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-secondary-foreground" />
            </div>

            <div className="font-bold text-muted-foreground text-sm mb-1">
              موقعنا
            </div>

            <div className="text-2xl font-display font-extrabold mb-2">
              مدرسة فلسطين التعليمية
            </div>

            <p className="text-muted-foreground text-sm">
              مكان تعليمي آمن ومجهّز
            </p>
          </div>
        </div>

        <div className="mt-10 text-center animate-fade-in">
          <Button asChild variant="hero" size="xl">
            <a
              href={`https://wa.me/${WHATSAPP}?text=السلام%20عليكم،%20أرغب%20بالتسجيل%20في%20المخيم%20الصيفي`}
              target="_blank"
              rel="noreferrer"
              className="gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              سجّل عبر واتساب
            </a>
          </Button>
        </div>

        <div className="mt-14 max-w-4xl mx-auto animate-scale-in">
          <div className="relative bg-gradient-to-br from-secondary via-accent to-fun rounded-[2rem] p-1 animate-pulse-glow">
            <div className="bg-card rounded-[1.85rem] p-7 md:p-9 text-center">
              <div className="flex justify-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center animate-bounce-soft">
                  <Megaphone className="w-6 h-6 text-accent" />
                </div>

                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center animate-pulse">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>

                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center animate-bounce-soft">
                  <Megaphone className="w-6 h-6 text-accent" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-black mb-2">
                التسجيل في المخيم الصيفي{" "}
                <span className="text-gradient-hero">متاح الآن</span>
              </h3>

              <p className="text-lg md:text-xl font-bold text-muted-foreground">
                ننتظركم في مدرسة فلسطين التعليمية!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};