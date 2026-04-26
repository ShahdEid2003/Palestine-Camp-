import science from "@/assets/activity-science.jpg";
import talent from "@/assets/activity-talent.jpg";
import escape from "@/assets/activity-escape.jpg";
import arts from "@/assets/activity-arts.jpg";
import competition from "@/assets/activity-competition.jpg";
import games from "@/assets/activity-games.jpg";

const activities = [
  { img: science, title: "يوم العالم الصغير", desc: "تجارب علمية مذهلة ومتعة الاكتشاف", emoji: "🔬", color: "shadow-blue" },
  { img: talent, title: "يوم المواهب", desc: "عرض ثقة وإبداع أمام الطلاب", emoji: "🎤", color: "shadow-pink" },
  { img: escape, title: "غرفة الألغاز", desc: "Escape Room ممتع لتنمية التفكير", emoji: "🔐", color: "shadow-orange" },
  { img: arts, title: "الفنون والأشغال", desc: "رسم، تلوين، وصناعة يدوية مبدعة", emoji: "🎨", color: "shadow-yellow" },
  { img: competition, title: "مسابقات أسبوعية", desc: "تحديات شيّقة وجوائز رائعة", emoji: "🏆", color: "shadow-green" },
  { img: games, title: "ألعاب تفاعلية", desc: "تعلّم بالحركة واللعب الجماعي", emoji: "🎮", color: "shadow-blue" },
];

export const Activities = () => {
  return (
    <section id="activities" className="py-20 md:py-28 gradient-soft relative overflow-hidden">
      <div className="absolute top-20 left-10 w-40 h-40 bg-fun/20 blob animate-float" />
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-secondary/30 blob animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-5 py-2 rounded-full bg-fun/15 text-fun font-bold mb-4">
            🎯 الأنشطة المميزة
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
            لحظات لا تُنسى... <br className="md:hidden" />
            <span className="text-gradient-hero">وذكريات صيفية رائعة</span>
          </h2>
          <p className="text-lg text-muted-foreground">أنشطة مدروسة لتطوير شخصية الطفل وتعزيز ثقته</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {activities.map((a, i) => (
            <div
              key={a.title}
              className={`group relative bg-card rounded-[2rem] overflow-hidden ${a.color} hover-lift transition-all`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-card/95 backdrop-blur flex items-center justify-center text-2xl shadow-card">
                  {a.emoji}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-extrabold mb-2 group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
