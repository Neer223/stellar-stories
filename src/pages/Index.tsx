import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StoryGrid from "@/components/StoryGrid";
import StoryPage from "@/components/StoryPage";

// Import all generated images
import solarFlareCharacter from "@/assets/solar-flare-character.jpg";
import farmerAurora from "@/assets/farmer-aurora.jpg";
// import pilotCockpit from "@/assets/pilot-cockpit.jpg";

import pilotpriya from "@/assets/pilot-priya.jpeg";
import astronautStation from "@/assets/astronaut-station.jpg";
import powerGridOperator from "@/assets/power-grid-operator.jpg";
import publicAurora from "@/assets/public-aurora.jpg";

const stories = [
  {
    id: "solar-flare",
    title: "Meet Our Solar Flare Friend",
    character: "Solar Flare Sol",
    imageSrc: solarFlareCharacter,
    backgroundColor: "bg-solar-orange/20",
    textColor: "text-solar-orange",
    content: <p className="text-gray-800">Hello there! I'm Sol, the big bright Sun you see every day.
      I keep Earth warm, help plants grow, and make daytime bright.
      But guess what? I'm not always calm and quiet.

      Sometimes I get a little too excited and ACHOO! I send out a huge burst of energy called a solar flare. It's like my way of sneezing light across space!

      And that's not all. Once in a while, I blow out a giant bubble of hot gas and magnetic fields. Scientists call this a coronal mass ejection, but you can just call it a giant space bubble!

      When I do this, space turns stormy. These space storms travel across the Solar System and sometimes reach Earth. They can make the skies dance with colorful lights called auroras. Don't worry — Earth has a shield that keeps you safe!</p>,
    physics: "Solar flares release massive amounts of electromagnetic radiation from the Sun's corona, traveling at the speed of light.",
    impact: "Can disrupt radio communications and GPS systems on Earth within 8 minutes of the flare occurring.",
    tip: "Monitor space weather forecasts during solar maximum periods for better preparedness."
  },
  {
    id: "farmer",
    title: "Farmer Ravi and the Dancing Sun",
    character: "Farmer Ravi",
    imageSrc: farmerAurora,
    backgroundColor: "bg-aurora-green/20",
    textColor: "text-teal-700",
    content: <div className="text-gray-800">
      <p className="mb-4">
        "Farmer Ravi woke up one bright morning to see the Sun looking extra sparkly. 'Good day for the crops!' he cheered, grabbing his hat. But by afternoon, strange things began to happen. His radio stopped working, the tractor's GPS went all silly, and when Ravi looked up, he saw colorful lights dancing across the sky — even though it wasn't night!"
      </p>

      <p className="mb-4"> Grandma Meera chuckled. 'That's a solar flare, Ravi. The Sun sent a big burst of energy to Earth!' </p>

      <p className="mb-4">'But will my crops be okay?' he asked, worried. </p>

      <p className="mb-4">Grandma nodded. 'Plants love sunlight, but too much can be tricky. Let's give them extra water and shade.'</p>

      <p>Together, they covered the fields with nets. Days later, the crops stood tall and healthy. Ravi smiled. 'Thank you, Sun — and thank you, Grandma. Next time you dance, I'll be ready!'</p>
    </div>,
    physics: "Charged particles from solar storms interact with Earth's magnetic field, creating beautiful aurora displays.",
    impact: "Can affect precision agriculture GPS systems used for automated farming equipment.",
    tip: "Keep backup manual navigation tools for critical farming operations during geomagnetic storms."
  },
  {
    id: "pilot",
    title: "Pilot Priya and the Sun's Surprise",
    character: "Captain Priya",
    imageSrc: pilotpriya, 
    backgroundColor: "bg-nebula-pink/20",
    textColor: "text-nebula-pink",
    content: <div className="text-gray-800">
      <p className="mb-4">
        "Pilot Priya loved flying her little blue airplane. One bright morning, she was taking passengers to a nearby city when suddenly, her navigation screen blinked and went blank!"
      </p>
      
      <p className="mb-4">
        "Oh no!" said Priya. "How will we know where to go?"
      </p>

      <p className="mb-4">
        Just then, the radio crackled. "Pilot Priya," said the controller, "the Sun sent out a solar flare. It's playing tricks with GPS and radios. Don't worry — stay calm."
      </p>

      <p className="mb-4">
        Priya took a deep breath. "Okay, time for old-school flying!" She used her compass, looked at the roads below, and followed the river she knew led to the city.
      </p>

      <p className="mb-4">
        Soon, the control tower came back on. "Navigation is fixed, welcome back!"
      </p>

      <p>
        The passengers cheered as Priya landed safely. That evening, she watched the sky glow with dancing lights and smiled. "Thank you, Sun," she said, "for keeping me on my toes!"
      </p>
    </div>,
    physics: "High-energy particles from solar storms can interfere with aircraft communication and navigation systems.",
    impact: "Pilots may need to change flight paths or altitudes to maintain communication during solar events.",
    tip: "Commercial flights monitor space weather and may reroute over lower latitudes during severe storms."
  },
  {
    id: "astronaut",
    title: "Views from the Space Station",
    character: "Astronaut Zara",
    imageSrc: astronautStation,
    backgroundColor: "bg-sky-200",
    textColor: "text-stellar-blue",
    content: <p className="text-gray-800">Up here in space, life is anything but ordinary! I'm an astronaut aboard the International Space Station, speeding around Earth and watching the universe unfold. From this amazing vantage point, our planet shines like a glowing jewel, but space itself can be full of surprises.

      Sometimes, the Sun lets out massive bursts of energy called solar flares, like an enormous cosmic sneeze! These solar flares send waves of powerful radiation shooting through space. When they reach us, they can shake up the space station's systems and paint Earth's skies with glowing auroras.

      As astronauts, we keep a close eye on these solar flares. They remind us how powerful the Sun really is. Floating here, surrounded by stars and endless darkness, I'm amazed everyday by the Sun's energy and the delicate beauty of our home planet.</p>,
    physics: "Astronauts experience direct exposure to solar radiation without Earth's protective atmosphere.",
    impact: "Space station crews may need to shelter in protective areas during major solar particle events.",
    tip: "The ISS has special shielded areas where astronauts can take refuge during radiation storms."
  },
  {
    id: "grid-operator",
    title: "Keeping the Lights On",
    character: "Grid Operator Kartik",
    imageSrc: powerGridOperator,
    backgroundColor: "bg-plasma-yellow/20",
    textColor: "text-plasma-yellow",
    content: <p className="text-gray-800"> Ever wonder who keeps your lights glowing when the power flickers? I'm Kartik, a grid operator, working behind the scenes in a busy control room to make sure electricity flows smoothly. But sometimes, the Sun throws a curveball.

      When giant solar storms hit Earth, they send powerful electric currents racing through long power lines. These surges can overload transformers and cause power cuts, leaving cities in the dark. That's when we step up.

      We're always watching the grid, ready to act fast. With special tools and careful planning, we protect the system and fix problems before they spread. It's a big responsibility, but keeping homes bright and safe makes it all worth it.

      So next time the lights flicker, remember — there's a team working hard to bring the power back.</p>,
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
    content: <p className="text-gray-800">When the Sun sends powerful bursts of energy toward Earth, something magical happens in our skies. These solar storms create beautiful dancing lights called auroras, usually seen near the North and South poles. But during strong storms, these colorful curtains of light can appear much farther south, surprising people in cities who rarely get to see them.

      Communities come together during these rare events, gathering in parks and on rooftops to witness the incredible light show. Children point excitedly at the green and purple waves flowing across the dark sky, while adults capture photos to share with friends and family.

      These moments remind us that we're all connected to the vast universe around us, and that our Sun continues to surprise us with its incredible power and beauty.</p>,
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
            <h2 className="font-bold text-5xl mb-8 text-gray-700">
              Interactive Space Weather Simulation
            </h2>

            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border mb-8">
              <p className="text-xl text-gray-700 mb-8">
                Experience how solar particles interact with Earth's magnetosphere in this simplified visualization.
              </p>

              {/* Placeholder for future simulation */}
              <div className="aspect-video bg-gradient-to-r from-solar-orange/30 via-cosmic-purple/30 to-aurora-green/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-background/20" />
                <div className="relative z-10 text-center">
                  <div className="stellar-glow">
                    <div className="w-24 h-24 bg-solar-orange/50 rounded-full mx-auto mb-4 cosmic-float" />
                  </div>
                  <p className="font-bold text-2xl text-gray-700">
                    Interactive Simulation Coming Soon!
                  </p>
                  <p className="text-gray-700 mt-2">
                    Watch particles travel from Sun to Earth's protective magnetic field
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <h3 className="font-bold text-xl mb-3 text-primary">
                  Solar Wind Speed
                </h3>
                <p className="text-3xl font-bold text-primary mb-2">400-800 km/s</p>
                <p className="text-sm text-gray-700">
                  Typical speed of solar particles
                </p>
              </div>

              <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
                <h3 className="font-bold text-xl mb-3 text-accent">
                  Travel Time
                </h3>
                <p className="text-3xl font-bold text-accent mb-2">1-3 days</p>
                <p className="text-sm text-gray-700">
                  From Sun to Earth
                </p>
              </div>

              <div className="bg-aurora-green/10 rounded-2xl p-6 border border-aurora-green/20">
                <h3 className="font-bold text-xl mb-3 text-aurora-green">
                  Aurora Altitude
                </h3>
                <p className="text-3xl font-bold text-aurora-green mb-2">80-400 km</p>
                <p className="text-sm text-gray-700">
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
          <h3 className="font-bold text-2xl mb-4 text-gray-700">
            Continue Your Space Journey
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            This interactive storybook helps young minds understand the fascinating connection
            between our Sun and life on Earth through space weather.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary/30 text-primary rounded-full font-medium">
              Solar Physics
            </span>
            <span className="px-4 py-2 bg-accent/40 text-blue-600 rounded-full font-medium">
              Space Weather
            </span>
            <span className="px-4 py-2 bg-aurora-green/30 text-aurora-green rounded-full font-medium">
              Earth Sciences
            </span>
            <span className="px-4 py-2 bg-cosmic-purple text-indigo rounded-full font-medium">
              Interactive Learning
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;