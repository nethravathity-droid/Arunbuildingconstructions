export default function PageHero({
  title,
  image = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
}) {
  return (
    <section className="relative h-[260px] overflow-hidden bg-black sm:h-[340px] md:h-[420px] lg:h-[500px]">
      <img src={image} alt="" className="hero-bg-img absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-x-0 bottom-8 z-10 px-4 text-center sm:bottom-12">
        <h1 className="font-conthrax text-sm tracking-widest text-white sm:text-xl md:text-2xl">{title}</h1>
      </div>
    </section>
  );
}
