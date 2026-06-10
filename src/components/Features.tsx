import { Factory, Lock, Palette, Shield, Wind, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-7 h-7 stroke-orange-500 fill-orange-100" />,
    title: "Lightweight Design",
    description: "Ultra-light materials reduce fatigue and enhance athletic performance — engineered for speed.",
  },
  {
    icon: <Shield className="w-7 h-7 stroke-orange-500 fill-orange-100" />,
    title: "Advanced Cushioning",
    description: "Responsive foam and air units absorb impact, delivering all-day comfort under intense conditions.",
  },
  {
    icon: <Lock className="w-7 h-7 stroke-orange-500 fill-orange-100" />,
    title: "Secure Grip",
    description: "High-traction outsoles deliver superior grip on roads, courts, tracks, and gym floors.",
  },
  {
    icon: <Palette className="w-7 h-7 stroke-orange-500 fill-orange-100" />,
    title: "Custom Aesthetics",
    description: "Modern designs and unlimited color options that reflect your brand and lifestyle.",
  },
  {
    icon: <Factory className="w-7 h-7 stroke-orange-500 fill-orange-100" />,
    title: "Built to Last",
    description: "Military-grade stitching and premium materials ensure longevity through thousands of miles.",
  },
  {
    icon: <Wind className="w-7 h-7 stroke-orange-500 fill-orange-100" />,
    title: "Breathable Comfort",
    description: "Engineered mesh uppers promote airflow and moisture-wicking to keep feet fresh all day.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 sm:py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-500 px-4 py-1.5 rounded-full">
            Why Choose Us
          </span>
          <h2 className=" text-[clamp(1.75rem,5vw,3rem)] font-semibold text-slate-900 leading-tight mb-3">
            Engineered for Performance{" "}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed px-2">
            Every RS Enterprises shoe is the result of deep biomechanical research,
            material science expertise, and uncompromising attention to detail.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group relative bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 sm:p-8 overflow-hidden  transition-all duration-300"
            >

              <div className="mb-4 p-3 ">
                {feat.icon}
              </div>
              <h3 className="font-heading text-base sm:text-lg font-semibold text-slate-900 mb-2">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-[1.7]">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}