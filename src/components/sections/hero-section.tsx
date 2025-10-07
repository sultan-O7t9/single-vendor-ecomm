export const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-112px)] max-h-[652px] bg-gradient-to-br from-mmb-primary/10 via-white to-mmb-primary/5 wrapper overflow-hidden">
      <div className="h-[calc(100vh-140px)] sm:h-[calc(100vh-112px)] w-full max-h-[652px] wrapper px-base bg-cover bg-center flex justify-center flex-col gap-10">
        <h1 className="max-w-[540px] capitalize leading-[1.2] text-4xl sm:text-6xl font-bold text-mmb-primary">
          Shopping and department store.
        </h1>
        <p className="max-w-[495px] text-mmb-text-dark sm:text-xl">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <a
          href="#"
          className="bg-mmb-primary rounded-full py-3 px-8 text-[17px] font-semibold self-start text-white hover:bg-white hover:text-mmb-primary border border-mmb-primary transition-all duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};
