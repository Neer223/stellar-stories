import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StoryGrid from "@/components/StoryGrid";
import StoryPage from "@/components/StoryPage";

// Import all generated images
import solarFlareCharacter from "@/assets/solar-flare-character.jpg";
import farmerAurora from "@/assets/farmer-aurora.jpg";
import pilotCockpit from "@/assets/pilot-cockpit.jpg";
import astronautStation from "@/assets/astronaut-station.jpg";
import powerGridOperator from "@/assets/power-grid-operator.jpg";
import publicAurora from "@/assets/public-aurora.jpg";

const stories = [
  {
    id: "solar-flare",
    title: "Meet Our Solar Flare Friend",
    character: "Solar Flare Sam",
    imageSrc: solarFlareCharacter,
    backgroundColor: "bg-solar-orange/20",
    textColor: "text-solar-orange",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    physics: "Solar flares release massive amounts of electromagnetic radiation from the Sun's corona, traveling at the speed of light.",
    impact: "Can disrupt radio communications and GPS systems on Earth within 8 minutes of the flare occurring.",
    tip: "Monitor space weather forecasts during solar maximum periods for better preparedness."
  },
  {
    id: "farmer",
    title: "The Farmer's Weather Warning",
    character: "Farmer Elena",
    imageSrc: farmerAurora,
    backgroundColor: "bg-aurora-green/20",
    textColor: "text-aurora-green",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    physics: "Charged particles from solar storms interact with Earth's magnetic field, creating beautiful aurora displays.",
    impact: "Can affect precision agriculture GPS systems used for automated farming equipment.",
    tip: "Keep backup manual navigation tools for critical farming operations during geomagnetic storms."
  },
  {
    id: "pilot",
    title: "Navigation Challenges Above",
    character: "Captain Marcus",
    imageSrc: pilotCockpit,
    backgroundColor: "bg-nebula-pink/20",
    textColor: "text-nebula-pink",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    physics: "High-energy particles from solar storms can interfere with aircraft communication and navigation systems.",
    impact: "Pilots may need to change flight paths or altitudes to maintain communication during solar events.",
    tip: "Commercial flights monitor space weather and may reroute over lower latitudes during severe storms."
  },
  {
    id: "astronaut",
    title: "Views from the Space Station",
    character: "Astronaut Zara",
    imageSrc: astronautStation,
    backgroundColor: "bg-stellar-blue/20",
    textColor: "text-stellar-blue",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    physics: "Astronauts experience direct exposure to solar radiation without Earth's protective atmosphere.",
    impact: "Space station crews may need to shelter in protective areas during major solar particle events.",
    tip: "The ISS has special shielded areas where astronauts can take refuge during radiation storms."
  },
  {
    id: "grid-operator",
    title: "Keeping the Lights On",
    character: "Grid Operator Alex",
    imageSrc: powerGridOperator,
    backgroundColor: "bg-plasma-yellow/20",
    textColor: "text-plasma-yellow",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    physics: "Geomagnetic storms induce electrical currents in power lines, potentially overloading transformers.",
    impact: "Power grids at higher latitudes are more vulnerable to space weather-induced blackouts.",
    tip: "Modern power grids have protective systems that can disconnect vulnerable equipment automatically."
  },
  {
    id: "public",
    title: "City Lights in the Sky",
    character: "The Community",
    imageSrc: publicAurora,
    backgroundColor: "bg-cosmic-purple/20",
    textColor: "text-cosmic-purple",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    physics: "Aurora borealis occurs when solar particles collide with gases in Earth's upper atmosphere.",
    impact: "Strong geomagnetic storms can make aurora visible much farther south than usual.",
    tip: "Check aurora forecast apps to know when you might see the northern lights in your area!"
  }
];

const Index = () => {
  const [currentView, setCurrentView] = useState<"grid" | "story">("grid");
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleStorySelect = (storyId: string) => {
    const index = stories.findIndex(story => story.id === storyId);
    setCurrentStoryIndex(index);
    setCurrentView("story");
  };

  const handleNext = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const handleBack = () => {
    setCurrentView("grid");
  };

  if (currentView === "story") {
    const currentStory = stories[currentStoryIndex];
    return (
      <StoryPage
        story={currentStory}
        currentIndex={currentStoryIndex}
        totalStories={stories.length}
        onNext={currentStoryIndex < stories.length - 1 ? handleNext : undefined}
        onPrevious={currentStoryIndex > 0 ? handlePrevious : undefined}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <HeroSection />
        <StoryGrid stories={stories} onStorySelect={handleStorySelect} />
        
        {/* Mini Simulation Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-b from-background to-card/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-work-sans font-bold text-5xl mb-8 text-gray-600">
              Interactive Space Weather Simulation
            </h2>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border mb-8">
              <p className="text-xl text-gray-600 mb-8 font-work-sans">
                Experience how solar particles interact with Earth's magnetosphere in this simplified visualization.
              </p>
              
              {/* Placeholder for future simulation */}
              <div className="aspect-video bg-gradient-to-r from-solar-orange/30 via-cosmic-purple/30 to-aurora-green/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-background/20" />
                <div className="relative z-10 text-center">
                  <div className="stellar-glow">
                    <div className="w-24 h-24 bg-solar-orange/50 rounded-full mx-auto mb-4 cosmic-float" />
                  </div>
                  <p className="font-work-sans font-bold text-2xl text-gray-600">
                    Interactive Simulation Coming Soon!
                  </p>
                  <p className="text-gray-600 mt-2 font-work-sans">
                    Watch particles travel from Sun to Earth's protective magnetic field
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <h3 className="font-work-sans font-bold text-xl mb-3 text-primary">
                  Solar Wind Speed
                </h3>
                <p className="text-3xl font-bold text-primary mb-2 font-work-sans">400-800 km/s</p>
                <p className="text-sm text-gray-600 font-work-sans">
                  Typical speed of solar particles
                </p>
              </div>
              
              <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
                <h3 className="font-work-sans font-bold text-xl mb-3 text-accent">
                  Travel Time
                </h3>
                <p className="text-3xl font-bold text-accent mb-2 font-work-sans">1-3 days</p>
                <p className="text-sm text-gray-600 font-work-sans">
                  From Sun to Earth
                </p>
              </div>
              
              <div className="bg-aurora-green/10 rounded-2xl p-6 border border-aurora-green/20">
                <h3 className="font-work-sans font-bold text-xl mb-3 text-aurora-green">
                  Aurora Altitude
                </h3>
                <p className="text-3xl font-bold text-aurora-green mb-2 font-work-sans">80-400 km</p>
                <p className="text-sm text-gray-600 font-work-sans">
                  Above Earth's surface
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-work-sans font-bold text-2xl mb-4 text-gray-600">
            Continue Your Space Journey
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-work-sans">
            This interactive storybook helps young minds understand the fascinating connection 
            between our Sun and life on Earth through space weather.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary/30 text-primary rounded-full font-work-sans font-medium">
              Solar Physics
            </span>
            <span className="px-4 py-2 bg-accent/30 text-accent rounded-full font-work-sans font-medium">
              Space Weather
            </span>
            <span className="px-4 py-2 bg-aurora-green/30 text-aurora-green rounded-full font-work-sans font-medium">
              Earth Sciences
            </span>
            <span className="px-4 py-2 bg-cosmic-purple/30 text-cosmic-purple rounded-full font-work-sans font-medium">
              Interactive Learning
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;