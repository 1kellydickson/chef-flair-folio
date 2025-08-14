import { Button } from "@/components/ui/button";
import { ChefHat, Users, GraduationCap, Utensils, Calendar, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Private Chef",
      description: "Intimate dining experiences in the comfort of your home with personalized menus tailored to your preferences.",
      features: ["Custom menu design", "Fresh ingredient sourcing", "Professional service", "Dietary accommodations"]
    },
    {
      icon: Users,
      title: "Catering",
      description: "Elegant catering for weddings, corporate events, and special celebrations with impeccable presentation.",
      features: ["Event planning", "Professional staff", "Equipment rental", "Full-service setup"]
    },
    {
      icon: GraduationCap,
      title: "Cooking Classes",
      description: "Learn professional techniques and recipes in hands-on cooking classes for all skill levels.",
      features: ["Small group sessions", "Professional techniques", "Recipe cards included", "Wine pairings"]
    },
    {
      icon: Utensils,
      title: "Recipe Development",
      description: "Custom recipe creation for restaurants, food brands, and culinary publications.",
      features: ["Menu consultation", "Recipe testing", "Nutritional analysis", "Food styling"]
    },
    {
      icon: Calendar,
      title: "Event Appearances",
      description: "Live cooking demonstrations, food festivals, and culinary events to showcase exceptional cuisine.",
      features: ["Live demonstrations", "Tasting experiences", "Media appearances", "Brand partnerships"]
    },
    {
      icon: Sparkles,
      title: "Consulting",
      description: "Restaurant consulting, menu development, and culinary business strategy for hospitality ventures.",
      features: ["Menu optimization", "Kitchen design", "Staff training", "Operations strategy"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Culinary Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate dinner parties to large-scale events, I offer comprehensive 
              culinary services tailored to your unique needs and vision.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className={`bg-card rounded-lg p-6 shadow-soft hover-lift animate-fade-in-up animate-delay-${index * 100 + 100}`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="cta"
              size="hero"
              onClick={scrollToContact}
              className="animate-fade-in-up"
            >
              Book Your Experience
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Let's discuss your culinary vision and create something extraordinary
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;