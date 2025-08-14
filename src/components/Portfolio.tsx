import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const Portfolio = () => {
  const dishes = [
    {
      id: 1,
      image: dish1,
      title: "Seared Scallops",
      description: "Pan-seared scallops with cauliflower purée, crispy pancetta, and micro herbs",
      category: "Appetizers"
    },
    {
      id: 2,
      image: dish2,
      title: "Lamb Wellington",
      description: "Herb-crusted lamb wellington with seasonal vegetables and red wine reduction",
      category: "Main Courses"
    },
    {
      id: 3,
      image: dish3,
      title: "Chocolate Soufflé",
      description: "Dark chocolate soufflé with gold leaf, fresh berries, and vanilla bean ice cream",
      category: "Desserts"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Culinary Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated selection of signature dishes that showcase creativity, 
              technique, and an unwavering commitment to culinary excellence.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <div
                key={dish.id}
                className={`group hover-lift animate-fade-in-up animate-delay-${index * 100 + 100}`}
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-soft">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.title}
                      className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-smooth"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-sm text-accent font-medium mb-2">
                      {dish.category}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-3">
                      {dish.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <div className="inline-block">
              <span className="text-muted-foreground">
                More culinary creations coming soon
              </span>
              <div className="w-full h-px bg-accent mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;