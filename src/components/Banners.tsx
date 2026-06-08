const banners = [
  {
    id: 1, tag: "OEM / ODM",
    title: "Your Brand. Our Factory.",
    subtitle: "We manufacture to your exact specs — from sole to upper. Private-label and white-label programs available for any volume.",
    cta: "Explore OEM Services",
    href: "#inquiry",
    img: "/banner.png",
    mobileImg: "/mob2.png",
    ctaClass: "bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_4px_18px_rgba(249,115,22,0.45)] hover:shadow-[0_6px_24px_rgba(249,115,22,0.65)]",
    overlayClass: "bg-gradient-to-r from-[#050d1a]/90 via-[#050d1a]/70 to-orange-600/20",
  },

];

export function Banners() {
  return (
    <section id="banners" className="py-12 sm:py-14">
      <div className="w-full flex flex-col gap-4 sm:gap-5">
        <div className="group relative overflow-hidden h-[260px] sm:h-[360px] md:h-[600px] cursor-pointer">

          {/* Banner Image */}
          <picture className="absolute inset-0 w-full h-full">
            <source
              media="(max-width: 639px)"
              srcSet={banners[0].mobileImg || banners[0].img}
            />
            <img
              src={banners[0].img}
              alt={banners[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </picture>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-xl px-5 sm:px-10 md:px-16 text-white">



              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
                {banners[0].title}
              </h2>

              <p className="text-xs sm:text-base md:text-md text-white/90 mb-5 max-w-lg">
                {banners[0].subtitle}
              </p>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
