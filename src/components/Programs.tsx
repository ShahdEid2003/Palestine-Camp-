import { 
  Languages, BookA, Calculator, 
  Lightbulb, MessageCircle, Palette, Puzzle,
  Sprout, Rocket
} from "lucide-react";

const foundation = [
  { icon: Languages, title: "اللغة الإنجليزية", desc: "قراءة، أصوات الحروف (Phonics)، ومحادثة" },
  { icon: BookA, title: "اللغة العربية", desc: "قراءة، كتابة، إملاء وإثراء لغوي" },
  { icon: Calculator, title: "الرياضيات", desc: "أرقام، عمليات حسابية، ومسائل ذكية" },
];

const skills = [
  { icon: Lightbulb, title: "التفكير النقدي", desc: "تحليل المعلومات واتخاذ القرارات" },
  { icon: MessageCircle, title: "مهارات التحدث", desc: "إلقاء، حوار، وعرض أمام الآخرين" },
  { icon: Palette, title: "الإبداع وصناعة القصص", desc: "تخيّل، تصميم، وسرد قصصي" },
  { icon: Puzzle, title: "حل المشكلات", desc: "تفكير منطقي وألغاز ذهنية" },
];

export const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold mb-3">
            برامج <span className="text-blue-600">شاملة ومتكاملة</span>
          </h2>
          <p className="text-gray-500">تعليم + مهارات + متعة</p>
        </div>

        {/* FOUNDATION */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Sprout className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold">مواد التأسيس</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {foundation.map((s) => (
              <div key={s.title} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <s.icon className="w-7 h-7 text-green-600" />
                </div>
                <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold">المهارات العليا</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s) => (
              <div key={s.title} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <s.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};