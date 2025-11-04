import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start pt-32 pb-16 px-4"
    >
      <div className="container max-w-3xl mx-auto text-center z-10">

        {/* IMAGE ON TOP */}
        <div className="flex justify-center mb-8 opacity-0 animate-fade-in-delay-1">
          <img
            src="/profile.jpg"
            alt="Kaleb"
            className="w-64 h-80 md:w-72 md:h-93 rounded-full  object-cover border border-white/10 shadow-xl"
          />
        </div>

        {/* TEXT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Kaleb</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Asmamaw</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full Stack Web Developer | React • Next.js • Tailwind • Node.js
            <br /> Have a project in mind? Let’s build it!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button mt-8">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary mt-2 animate-pulse" />
      </div>
    </section>
  );
};
