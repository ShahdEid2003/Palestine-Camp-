import { Sprout, TreePine, Trees, ClipboardCheck } from "lucide-react";

const levels = [
  {
    icon: Sprout,
    title: "مستوى تأسيسي",
    desc: "للطلاب الذين يحتاجون لبناء قاعدة قوية في الأساسيات",
    color: "gradient-fresh",
    shadow: "shadow-green",
    badge: "🌱",
  },
  {
    icon: TreePine,
    title: "مستوى متوسط",
    desc: "لمن أتقن الأساسيات ويرغب بتعزيز مهاراته أكثر",
    color: "gradient-hero",
    shadow: "shadow-blue",
    badge: "🌳",
  },
  {
    icon: Trees,
    title: "مستوى متقدم",
    desc: "للطلاب المتميزين الباحثين عن تحديات أعلى",
    color: "gradient-fun",
    shadow: "shadow-pink",
    badge: "🌟",
  },
];

export const Levels = () => {
  return (
    <section id="levels" className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-5 py-2 rounded-full bg-primary/15 text-primary font-bold mb-4">
            🧠 نظام المستويات
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
            كل طفل يتعلّم <span className="text-gradient-hero">على مستواه</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7 mb-10">
          {levels.map((l) => (
            <div key={l.title} className="bg-card rounded-[2rem] p-8 shadow-card hover-lift text-center">
              <div className={`w-24 h-24 mx-auto rounded-3xl ${l.color} ${l.shadow} flex items-center justify-center mb-5 text-4xl`}>
                {l.badge}
              </div>
              <h3 className="text-2xl font-display font-extrabold mb-3">{l.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-secondary/20 border-2 border-secondary/40 rounded-3xl p-6 md:p-7 flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl gradient-sun shadow-yellow flex items-center justify-center shrink-0">
            <ClipboardCheck className="w-7 h-7 text-secondary-foreground" strokeWidth={2.5} />
          </div>
          <p className="font-bold text-base md:text-lg">
            يتم تحديد مستوى الطالب من خلال <span className="text-primary">اختبار بسيط</span> لضمان وضعه في المجموعة المناسبة لقدراته.
          </p>
        </div>
      </div>
    </section>
  );
};
