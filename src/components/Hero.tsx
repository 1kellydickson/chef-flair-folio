import { Button } from "@/components/ui/button";
import chefHero from "@/assets/chef-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={chefHero}
          alt="Professional chef creating culinary masterpieces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          Chef Alexandre
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-in-up animate-delay-100">
          Culinary Creator & Food Innovator
        </p>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
          Crafting extraordinary culinary experiences with passion, precision, and creativity. 
          From intimate dinners to grand celebrations, every dish tells a story.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
          <Button
            variant="hero"
            size="hero"
            onClick={() => scrollToSection('portfolio')}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            View Portfolio
          </Button>
          <Button
            variant="elegant"
            size="hero"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </div>

        {/* Services Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-primary-foreground/80 animate-fade-in-up animate-delay-400">
          <div className="text-center">
            <div className="text-sm font-medium">Private Chef</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium">Catering</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium">Recipe Development</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium">Cooking Classes</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;