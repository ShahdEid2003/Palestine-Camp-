import { Gamepad2, Languages, Calculator, Coffee, BookA, Brain, PartyPopper } from "lucide-react";

const schedule = [
  { time: "8:00", title: "ألعاب تفاعلية", icon: Gamepad2, color: "bg-fun text-fun-foreground" },
  { time: "8:45", title: "حصة الإنجليزي", icon: Languages, color: "bg-primary text-primary-foreground" },
  { time: "9:45", title: "حصة الرياضيات", icon: Calculator, color: "bg-success text-success-foreground" },
  { time: "10:45", title: "استراحة", icon: Coffee, color: "bg-secondary text-secondary-foreground" },
  { time: "11:15", title: "حصة العربي", icon: BookA, color: "bg-accent text-accent-foreground" },
  { time: "12:15", title: "تنمية المهارات", icon: Brain, color: "bg-primary text-primary-foreground" },
  { time: "1:00", title: "نشاط ممتع", icon: PartyPopper, color: "bg-fun text-fun-foreground" },
];

export const Schedule = () => {
  return (
    <section id="schedule" className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-5 py-2 rounded-full bg-secondary/40 text-secondary-foreground font-bold mb-4">
            🗓️ الجدول اليومي
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
            يوم مليء بـ <span className="text-gradient-sun">التعلّم والمرح</span>
          </h2>
          <p className="text-lg text-muted-foreground">جدول متوازن مصمّم خصيصاً لتركيز وحيوية الطفل</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* الخط الزمني */}
          <div className="absolute right-6 md:right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full md:translate-x-1/2" />

          <div className="space-y-6">
            {schedule.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-center gap-4 md:gap-6 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* النقطة */}
                <div className={`absolute right-6 md:right-1/2 w-5 h-5 rounded-full ${item.color} ring-4 ring-background md:translate-x-1/2 z-10`} />

                {/* البطاقة */}
                <div className="flex-1 mr-16 md:mr-0 md:w-5/12">
                  <div className="bg-card rounded-2xl p-5 shadow-card hover-lift flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-muted-foreground">{item.time}</div>
                      <div className="text-lg font-display font-extrabold">{item.title}</div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
