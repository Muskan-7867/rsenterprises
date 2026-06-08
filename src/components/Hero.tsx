import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50K+", label: "Pairs / Month" },
  { value: "30+", label: "Countries" },
  { value: "200+", label: "Brand Partners" },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[70vh] sm:h-[85vh]  flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <img
          src="/hero_shoe.png"
          alt="Sports Shoes"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/25 via-black/50 lg:via-black/40 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center text-center mx-auto max-w-4xl">
            <div className="flex flex-col items-center mt-6">
          

              {/* Heading */}
              <h1 className="text-white font-bold leading-[1.05] text-2xl sm:text-4xl  lg:text-[clamp(3rem,8vw,5rem)] ">
                Built For
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Champions
                </span>
              </h1>

              {/* Description */}
              <p className="mt-3 sm:mt-6 max-w-xl text-white/70 text-xs sm:text-base lg:text-md leading-relaxed px-2">
                High-performance sports shoes engineered with advanced
                materials, innovative cushioning technology, and precision
                craftsmanship trusted by athletes worldwide.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-10 w-full sm:w-auto">
                <Link
                  to="/"
                  className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition text-white font-semibold shadow-lg text-sm sm:text-base"
                >
                  Explore Collection
                </Link>

                <Link
                  to="/"
                  className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/30 hover:bg-white/10 transition text-white font-semibold text-sm sm:text-base"
                >
                  Request Quote
                </Link>
              </div>

              {/* Stats */}
              <div className="hidden md:grid grid-cols-4 gap-8 mt-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-orange-500">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 md:hidden w-full max-w-sm">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3"
                  >
                    <div className="text-lg font-bold text-orange-500">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/60 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}