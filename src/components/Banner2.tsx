const banners = [
  {
    id: 1,
    tag: "OEM / ODM",
    title: "Your Brand. Our Factory.",
    subtitle:
      "We manufacture to your exact specs — from sole to upper. Private-label and white-label programs available for any volume.",
    cta: "Explore OEM Services",
    href: "#contact",
    img: "/mob.png",
    mobileImg: "/mob.png",
  },
];

export function Banner2() {
  return (
    <section id="banners" className="py-10 sm:py-24">
      <div className="w-full">
        <div className="group relative overflow-hidden h-[260px] sm:h-[360px] md:h-[780px]">
          
          {/* Image */}
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
          <div className="absolute inset-0 bg-black/40" />

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-start mt-2  md:mt-12  text-center px-6 z-10">
        

            <h2 className="mt-4 text-xl sm:text-5xl md:text-7xl font-bold text-white max-w-5xl">
              {banners[0].title}
            </h2>

            <p className="mt-2 max-w-3xl text-xs sm:text-lg md:text-md text-white/90">
              {banners[0].subtitle}
            </p>

       
          </div>
        </div>
      </div>
    </section>
  );
}