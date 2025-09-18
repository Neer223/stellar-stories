import { Play, BookOpen, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import sunEarthJourney from "@/assets/sun-earth-journey.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={sunEarthJourney} 
          alt="Solar flare journey from Sun to Earth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="stellar-glow mb-8">
          <h1 className="font-work-sans font-medium text-6xl md:text-8xl mb-4 text-solar-orange">
            Stellar Stories
          </h1>
          <h2 className="font-work-sans font-normal text-2xl md:text-4xl mb-6 text-cosmic-purple">
            Space Through the Eyes of Earthlings
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-work-sans">
          Join our lively solar flare friend on an incredible journey from the Sun to Earth, 
          discovering how space weather affects everyone from farmers to astronauts!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-solar-orange to-plasma-yellow hover:from-solar-orange/90 hover:to-plasma-yellow/90 text-background font-work-sans font-medium px-8 py-4 rounded-2xl text-lg"
          >
            <Play className="w-6 h-6 mr-2" />
            Start the Adventure
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple hover:text-background font-work-sans font-medium px-8 py-4 rounded-2xl text-lg"
          >
            <BookOpen className="w-6 h-6 mr-2" />
            Learn More
          </Button>
        </div>

        {/* Mini Animation Preview */}
        <div className="mt-16 flex justify-center">
          <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-6 border border-border">
            <div className="flex items-center gap-4 text-accent">
              <div className="w-4 h-4 bg-solar-orange rounded-full stellar-glow" />
              <div className="flex-1 h-0.5 bg-gradient-to-r from-solar-orange via-cosmic-purple to-stellar-blue" />
              <Zap className="w-6 h-6 text-stellar-blue cosmic-float" />
              <div className="flex-1 h-0.5 bg-gradient-to-r from-stellar-blue to-aurora-green" />
              <div className="w-8 h-8 bg-aurora-green rounded-full stellar-glow flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-full" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 font-work-sans">
              Watch the solar flare's journey across space
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;