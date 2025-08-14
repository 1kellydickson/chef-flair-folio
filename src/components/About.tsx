import chefPortrait from "@/assets/chef-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-elegant">
                <img
                  src={chefPortrait}
                  alt="Chef Alexandre portrait"
                  className="w-full h-auto object-cover transition-smooth hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full shadow-glow opacity-80"></div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                Passion Meets Precision
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of culinary experience, I've had the privilege of working in 
                Michelin-starred kitchens across Europe and bringing that expertise to create 
                unforgettable dining experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My culinary philosophy centers on using the finest seasonal ingredients, 
                innovative techniques, and artistic presentation to create dishes that not only 
                taste exceptional but tell a story.
              </p>

              {/* Milestones */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Culinary Institute of Excellence</h4>
                    <p className="text-muted-foreground">Advanced Culinary Arts & Pastry</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Le Bernardin, New York</h4>
                    <p className="text-muted-foreground">Sous Chef • 3 Michelin Stars</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">James Beard Award Nominee</h4>
                    <p className="text-muted-foreground">Rising Chef of the Year</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Featured Chef</h4>
                    <p className="text-muted-foreground">Food & Wine Magazine, Bon Appétit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;