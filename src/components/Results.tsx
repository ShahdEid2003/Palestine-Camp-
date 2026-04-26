import { TrendingUp, BookOpenCheck, Heart, Users } from "lucide-react";

const results = [
  { icon: BookOpenCheck, title: "تحسين القراءة والكتابة", color: "gradient-hero", shadow: "shadow-blue" },
  { icon: TrendingUp, title: "تقوية الرياضيات", color: "gradient-fresh", shadow: "shadow-green" },
  { icon: Heart, title: "زيادة الثقة بالنفس", color: "gradient-fun", shadow: "shadow-pink" },
  { icon: Users, title: "تطوير مهارات التواصل", color: "gradient-sun", shadow: "shadow-yellow" },
];

export const Results = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-5 py-2 rounded-full bg-success/15 text-success font-bold mb-4">
            📊 النتائج المتوقعة
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black">
            ماذا سيكتسب طفلك <span className="text-gradient-hero">في نهاية المخيم؟</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r) => (
            <div key={r.title} className="bg-card rounded-3xl p-7 shadow-card hover-lift text-center group">
              <div className={`w-20 h-20 mx-auto rounded-3xl ${r.color} ${r.shadow} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                <r.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-display font-extrabold leading-snug">{r.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
