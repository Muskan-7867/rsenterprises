import { useState } from "react";

const categories = ["All", "Running", "Basketball", "Training", "Lifestyle"];

const products = [
  {
    id: 1, name: "AeroStrike Pro", category: "Running", tag: "Bestseller",
    img: "/running_shoe.png",
    description: "Ultra-lightweight design with responsive foam cushioning for peak speed.",
    features: ["Carbon Fiber Plate", "Mesh Upper", "Energy Return Foam"],
  },
  {
    id: 2, name: "CourtDom Elite", category: "Basketball", tag: "New",
    img: "/basketball_shoe.png",
    description: "High-top ankle support with superior court grip for elite players.",
    features: ["Air Cushion", "Leather Upper", "Rubber Outsole"],
  },
  {
    id: 3, name: "FlexForce XT", category: "Training", tag: "OEM Ready",
    img: "/training_shoe.png",
    description: "Versatile cross-trainer engineered for multi-directional movement.",
    features: ["Flexible Sole", "Breathable Mesh", "Shock Absorption"],
  },
  {
    id: 4, name: "SpeedBurst Runner", category: "Running", tag: "Popular",
    img: "/running_shoe.png",
    description: "Competition-grade running shoe with aerodynamic profile and race-day feel.",
    features: ["Race Last", "TPU Heel Counter", "Road Grip Outsole"],
  },
  {
    id: 5, name: "DunkRise High", category: "Basketball", tag: "",
    img: "/basketball_shoe.png",
    description: "Explosive cushioning and lateral lockdown for game-changing moves.",
    features: ["Zoom Air Unit", "Lace-Lock System", "Herringbone Traction"],
  },
  {
    id: 6, name: "PowerGrip Trainer", category: "Lifestyle", tag: "OEM Ready",
    img: "/training_shoe.png",
    description: "Built for gym warriors — stability, grip, and all-day comfort.",
    features: ["Wide Toe Box", "Non-Slip Outsole", "Padded Collar"],
  },
];

export function Collection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="showroom" className="py-12 sm:py-14 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-4 sm:mb-8">
          <span className="inline-block text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-500 px-4 py-1.5 rounded-full ">
            Our Collection
          </span>
          <h2 className=" text-[clamp(1.75rem,5vw,3rem)] font-semibold text-slate-900 leading-tight mb-3">
            Premium Footwear Catalog{" "}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed px-2">
            Every pair is engineered with precision and built for performance. Browse our
            manufacturing-ready catalogue for OEM, ODM, and custom brand orders.
          </p>
        </div>

        {/* Filter — scrollable on mobile */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-3 sm:mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border-2 transition-all duration-200 cursor-pointer whitespace-nowrap ${
                active === cat
                  ? "bg-orange-500 text-white border-transparent "
                  : "bg-white text-slate-500 border-slate-200 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-transparent  transition-all duration-300 relative"
            >
              

              {/* Image */}
              <div className="h-48 sm:h-56 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="text-[0.65rem] font-medium text-center uppercase tracking-[0.1em] text-orange-500 mb-1">
                  {product.category}
                </p>
                <h3 className="font-heading text-base sm:text-lg font-semibold text-center text-slate-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3 text-center sm:text-left">
                  {product.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-1 mb-4">
                  {product.features.map((f, i) => (
                    <span
                      key={i}
                      className="text-[0.65rem] font-semibold bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
