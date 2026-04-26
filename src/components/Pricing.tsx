import { Check, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const features = [
    "أسعار مرنة حسب المستوى والبرنامج",
    "باقات تناسب جميع الطلاب",
    "خصومات للأخوة والتسجيل المبكر",
    "إمكانية اختيار البرنامج الكامل أو الجزئي",
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 gradient-soft">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-card rounded-[2.5rem] p-8 md:p-12 shadow-float relative overflow-hidden">
          <div className="absolute -top-16 -left-16 w-48 h-48 gradient-sun blob opacity-30" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 gradient-hero blob opacity-20" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent font-bold mb-4">
                <Tag className="w-4 h-4" />
                <span>الأسعار</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
                باقات <span className="text-gradient-sun">مرنة وعادلة</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                نوفّر باقات متعددة تتناسب مع احتياجات كل طالب وميزانية كل أسرة.
                تواصل معنا لمعرفة تفاصيل الأسعار حسب المستوى والبرنامج الذي يناسب طفلك.
              </p>
              <Button asChild variant="hero" size="lg">
                <a href="#register">احصل على عرض السعر</a>
              </Button>
            </div>

            <div className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3 bg-muted/50 rounded-2xl p-4">
                  <div className="w-9 h-9 rounded-xl gradient-fresh shadow-green flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-success-foreground" strokeWidth={3} />
                  </div>
                  <span className="font-bold">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
