import { Button } from "@/components/ui/button";
import { Sparkles, Star, Sun, Rocket, ArrowLeft } from "lucide-react";
import heroKids from "@/assets/hero-kids.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden gradient-soft">
      {/* فقاعات زخرفية */}
      <div className="absolute top-32 -right-16 w-72 h-72 bg-secondary/40 blob animate-float" />
      <div className="absolute bottom-10 -left-10 w-80 h-80 bg-primary/20 blob animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-fun/30 blob animate-float" style={{ animationDelay: "0.8s" }} />

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* النصوص */}
        <div className="text-center lg:text-right animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 text-secondary-foreground font-bold mb-6 shadow-yellow">
            <Sparkles className="w-4 h-4" />
            <span>التسجيل مفتوح الآن</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-6">
            ابنِ <span className="text-gradient-hero">مستقبل طفلك</span>
            <br />
            هذا الصيف! 🌞
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            مخيم يجمع بين <span className="font-bold text-primary">التعليم</span>،{" "}
            <span className="font-bold text-accent">المتعة</span>، و
            <span className="font-bold text-success"> تنمية المهارات</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <Button asChild variant="hero" size="xl">
              <a href="#register" className="gap-2">
                سجّل الآن
                <ArrowLeft className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href="#about">تعرّف على المخيم</a>
            </Button>
          </div>

          {/* إحصائيات */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {[
              { num: "50%", label: "تعليم", color: "text-primary" },
              { num: "30%", label: "مهارات", color: "text-success" },
              { num: "20%", label: "متعة", color: "text-accent" },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-3xl p-4 shadow-card text-center hover-lift">
                <div className={`text-2xl md:text-3xl font-display font-black ${s.color}`}>{s.num}</div>
                <div className="text-xs md:text-sm font-bold text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* الصورة */}
        <div className="relative animate-scale-in">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-float border-8 border-card">
            <img
              src={heroKids}
              alt="أطفال سعداء يتعلمون في المخيم الصيفي"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>

          {/* بطاقات عائمة */}
          <div className="absolute -top-4 -right-4 bg-card rounded-2xl px-4 py-3 shadow-yellow flex items-center gap-2 animate-bounce-soft">
            <div className="w-10 h-10 rounded-xl gradient-sun flex items-center justify-center">
              <Star className="w-5 h-5 text-secondary-foreground" fill="currentColor" />
            </div>
            <div>
              <div className="font-display font-extrabold text-sm">تعليم ممتع</div>
              <div className="text-xs text-muted-foreground">للصفوف 1-4</div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl px-4 py-3 shadow-orange flex items-center gap-2 animate-bounce-soft" style={{ animationDelay: "0.5s" }}>
            <div className="w-10 h-10 rounded-xl gradient-fun flex items-center justify-center">
              <Rocket className="w-5 h-5 text-fun-foreground" />
            </div>
            <div>
              <div className="font-display font-extrabold text-sm">تطوّر حقيقي</div>
              <div className="text-xs text-muted-foreground">بثقة وأمان</div>
            </div>
          </div>

          <Sun className="absolute -top-8 -left-2 w-16 h-16 text-secondary animate-spin-slow" />
        </div>
      </div>
    </section>
  );
};
