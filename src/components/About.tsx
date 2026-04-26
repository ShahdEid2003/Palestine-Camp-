import { BookOpen, Brain, PartyPopper, Heart } from "lucide-react";

const pillars = [
  {
    pct: "50%",
    icon: BookOpen,
    title: "تعليم أساسي",
    desc: "رياضيات، إنجليزي، عربي بأسلوب حديث وممتع",
    bg: "gradient-hero",
    shadow: "shadow-blue",
  },
  {
    pct: "30%",
    icon: Brain,
    title: "مهارات عليا",
    desc: "تفكير نقدي، تواصل فعّال، إبداع وحل مشكلات",
    bg: "gradient-fresh",
    shadow: "shadow-green",
  },
  {
    pct: "20%",
    icon: PartyPopper,
    title: "أنشطة ممتعة",
    desc: "ألعاب، فنون، مسابقات، وتجارب لا تُنسى",
    bg: "gradient-fun",
    shadow: "shadow-pink",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-success/15 text-success font-bold mb-4">
            <Heart className="w-4 h-4" fill="currentColor" />
            <span>عن المخيم</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-6">
            مخيم متكامل... <span className="text-gradient-hero">لطفل واثق ومتميّز</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            نهدف إلى رفع مستوى الطفل الدراسي وبناء شخصيته وثقته بنفسه من خلال منهجية متوازنة تجمع بين
            التعليم الجاد، تنمية المهارات الحياتية، والأنشطة المرحة.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative bg-card rounded-[2rem] p-8 shadow-card hover-lift transition-all"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-20 h-20 rounded-3xl ${p.bg} ${p.shadow} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                <p.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-5xl font-display font-black text-gradient-hero mb-2">{p.pct}</div>
              <h3 className="text-2xl font-display font-extrabold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
