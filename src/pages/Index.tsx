import { useState, useEffect, useRef } from "react";
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

// Solar Flare Simulation Component
const SolarFlareSimulation = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [particles, setParticles] = useState([]);
  const [showLabels, setShowLabels] = useState(true);
  const animationRef = useRef();
  const containerRef = useRef();

  const createParticle = () => ({
    id: Math.random(),
    x: 80, // Start from sun position
    y: Math.random() * 200 + 150, // Random Y around sun center
    speed: Math.random() * 2 + 1,
    size: Math.random() * 3 + 2,
    color: Math.random() > 0.5 ? '#f97316' : '#eab308', // Orange or yellow
    opacity: 1,
    deflected: false,
    deflectionAngle: 0
  });

  const animateParticles = () => {
    setParticles(prevParticles => {
      return prevParticles
        .map(particle => {
          let newParticle = { ...particle };
          
          // Check if particle is approaching magnetosphere (around x=570)
          if (!newParticle.deflected && newParticle.x > 570 && newParticle.x < 730) {
            const earthCenterY = 200;
            const distanceFromEarth = Math.sqrt(
              Math.pow(newParticle.x - 650, 2) + Math.pow(newParticle.y - earthCenterY, 2)
            );
            
            // If within magnetosphere range (about 80 units from Earth)
            if (distanceFromEarth < 80) {
              // 85% of particles get deflected
              if (Math.random() < 0.85) {
                newParticle.deflected = true;
                // Calculate deflection based on magnetic field lines
                const angleToEarth = Math.atan2(newParticle.y - earthCenterY, newParticle.x - 650);
                newParticle.deflectionAngle = angleToEarth + (Math.random() - 0.5) * Math.PI;
                newParticle.color = '#10b981'; // Change color to green when deflected
              }
            }
          }
          
          if (newParticle.deflected) {
            // Move in deflection direction
            newParticle.x += Math.cos(newParticle.deflectionAngle) * newParticle.speed;
            newParticle.y += Math.sin(newParticle.deflectionAngle) * newParticle.speed;
            newParticle.opacity = Math.max(0, newParticle.opacity - 0.015);
          } else {
            // Normal forward movement
            newParticle.x += newParticle.speed;
            if (newParticle.x > 600) {
              newParticle.opacity = Math.max(0, newParticle.opacity - 0.02);
            }
          }
          
          return newParticle;
        })
        .filter(particle => 
          particle.opacity > 0 && 
          particle.x > -50 && particle.x < 850 && 
          particle.y > -50 && particle.y < 450
        );
    });
  };

  useEffect(() => {
    if (isRunning) {
      // Add new particles periodically
      const particleInterval = setInterval(() => {
        if (particles.length < 50) {
          setParticles(prev => [...prev, createParticle()]);
        }
      }, 100);

      // Animate existing particles
      const animate = () => {
        animateParticles();
        animationRef.current = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        clearInterval(particleInterval);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [isRunning, particles.length]);

  const startSimulation = () => {
    setIsRunning(true);
    setParticles([]);
  };

  const stopSimulation = () => {
    setIsRunning(false);
    setParticles([]);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  return (
    <div className="w-full">
      {/* Control Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={startSimulation}
          disabled={isRunning}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            isRunning 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-solar-orange text-white hover:bg-solar-orange/80 shadow-lg hover:shadow-xl'
          }`}
        >
          Start Simulation
        </button>
        <button
          onClick={stopSimulation}
          disabled={!isRunning}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            !isRunning 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl'
          }`}
        >
          Stop Simulation
        </button>
      </div>

      {/* Simulation Canvas */}
      <div 
        ref={containerRef}
        className="relative aspect-video bg-gradient-to-r from-black via-purple-900/20 to-blue-900/20 rounded-2xl overflow-hidden border-2 border-gray-300"
        style={{ minHeight: '400px' }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 400"
          className="absolute inset-0"
        >
          {/* Background gradient */}
          <defs>
            <radialGradient id="sunGradient" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="70%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </radialGradient>
            <radialGradient id="earthGradient" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="70%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </radialGradient>
            <radialGradient id="magnetosphereGradient" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
              <stop offset="50%" stopColor="rgba(16, 185, 129, 0.3)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.6)" />
            </radialGradient>
          </defs>

          {/* Sun */}
          <circle 
            cx="80" 
            cy="200" 
            r="40" 
            fill="url(#sunGradient)"
            className="drop-shadow-lg"
          >
            <animate
              attributeName="r"
              values="38;42;38"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Solar flare burst effect */}
          {isRunning && (
            <>
              <circle cx="80" cy="200" r="50" fill="rgba(251, 191, 36, 0.3)" opacity="0.8">
                <animate
                  attributeName="r"
                  values="40;60;40"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="80" cy="200" r="35" fill="rgba(249, 115, 22, 0.5)" opacity="0.6">
                <animate
                  attributeName="r"
                  values="30;45;30"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </>
          )}

          {/* Earth's Magnetosphere - Enhanced with field lines */}
          <ellipse 
            cx="650" 
            cy="200" 
            rx="80" 
            ry="60" 
            fill="url(#magnetosphereGradient)"
            stroke="rgba(16, 185, 129, 0.8)"
            strokeWidth="2"
            opacity="0.7"
          />
          
          {/* Magnetic field lines */}
          <g stroke="rgba(16, 185, 129, 0.6)" strokeWidth="2" fill="none">
            <path d="M 570 200 Q 620 180 650 200 Q 680 220 730 200" opacity="0.8"/>
            <path d="M 575 180 Q 620 160 650 180 Q 680 200 725 180" opacity="0.6"/>
            <path d="M 575 220 Q 620 240 650 220 Q 680 200 725 220" opacity="0.6"/>
            <path d="M 580 160 Q 625 140 650 160 Q 675 180 720 160" opacity="0.4"/>
            <path d="M 580 240 Q 625 260 650 240 Q 675 220 720 240" opacity="0.4"/>
          </g>

          {/* Earth */}
          <circle 
            cx="650" 
            cy="200" 
            r="25" 
            fill="url(#earthGradient)"
            className="drop-shadow-lg"
          />

          {/* Earth continents (simplified) */}
          <path
            d="M 635 190 Q 645 185 655 190 Q 665 195 655 205 Q 645 210 635 205 Z"
            fill="rgba(34, 197, 94, 0.8)"
          />
          <path
            d="M 640 195 Q 650 192 660 195 Q 655 202 640 202 Z"
            fill="rgba(34, 197, 94, 0.8)"
          />

          {/* Animated Particles */}
          {particles.map(particle => (
            <circle
              key={particle.id}
              cx={particle.x}
              cy={particle.y}
              r={particle.size}
              fill={particle.color}
              opacity={particle.opacity}
              className="drop-shadow-sm"
            />
          ))}

          {/* Solar Wind Lines */}
          <g stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1" fill="none">
            <path d="M 120 180 Q 400 170 580 190" opacity="0.6">
              {isRunning && (
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              )}
            </path>
            <path d="M 120 200 Q 400 200 580 200" opacity="0.6">
              {isRunning && (
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              )}
            </path>
            <path d="M 120 220 Q 400 230 580 210" opacity="0.6">
              {isRunning && (
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              )}
            </path>
          </g>

          {/* Labels with arrows */}
          {showLabels && (
            <g>
              {/* Sun Label */}
              <g transform="translate(80, 120)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <rect x="-25" y="-25" width="50" height="20" fill="rgba(255, 255, 255, 0.9)" rx="5" />
                <text x="0" y="-10" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">Sun</text>
              </g>

              {/* Solar Flare Label */}
              <g transform="translate(200, 120)">
                <line x1="0" y1="0" x2="-80" y2="60" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <rect x="-35" y="-25" width="70" height="20" fill="rgba(255, 255, 255, 0.9)" rx="5" />
                <text x="0" y="-10" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">Solar Flare</text>
              </g>

              {/* Solar Wind Label */}
              <g transform="translate(400, 100)">
                <line x1="0" y1="0" x2="0" y2="80" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <rect x="-35" y="-25" width="70" height="20" fill="rgba(255, 255, 255, 0.9)" rx="5" />
                <text x="0" y="-10" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">Solar Wind</text>
              </g>

              {/* Magnetosphere Label */}
              <g transform="translate(650, 120)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <rect x="-45" y="-25" width="90" height="20" fill="rgba(255, 255, 255, 0.9)" rx="5" />
                <text x="0" y="-10" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">Magnetosphere</text>
              </g>

              {/* Earth Label */}
              <g transform="translate(650, 320)">
                <line x1="0" y1="0" x2="0" y2="-70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <rect x="-25" y="5" width="50" height="20" fill="rgba(255, 255, 255, 0.9)" rx="5" />
                <text x="0" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">Earth</text>
              </g>

              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#374151" />
                </marker>
              </defs>
            </g>
          )}
        </svg>

        {/* Status overlay */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg">
          <p className="text-sm font-semibold">
            Status: {isRunning ? (
              <span className="text-green-400">Simulation Running</span>
            ) : (
              <span className="text-gray-300">Simulation Stopped</span>
            )}
          </p>
          <p className="text-xs text-gray-300">
            Active Particles: {particles.length}
          </p>
          <p className="text-xs text-gray-300">
            Deflected: {particles.filter(p => p.deflected).length}
          </p>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white p-3 rounded-lg text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span>Solar Particles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
              <span>Deflected Particles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              <span>Solar Flare</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Earth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Information */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">What's Happening?</h4>
        <p className="text-blue-800 text-sm mb-2">
          When the Sun releases a solar flare, high-energy particles travel through space as solar wind. 
          Earth's magnetosphere (our magnetic shield) deflects about 85% of these particles, protecting us from 
          harmful radiation. Watch the different outcomes:
        </p>
        <ul className="text-blue-800 text-sm space-y-1 ml-4">
          <li><span className="text-yellow-600 font-semibold">Yellow/Orange:</span> Solar particles traveling from the Sun</li>
          <li><span className="text-green-600 font-semibold">Green:</span> Particles deflected away by Earth's magnetic field</li>
        </ul>
        <p className="text-blue-800 text-sm mt-2">
          The remaining particles that aren't deflected continue toward Earth and create beautiful auroras!
        </p>
      </div>
    </div>
  );
};

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
        currentIndex={currentStoryIndex >= 0 ? currentStoryIndex : undefined}
        totalStories={stories.length}
        onNext={currentStoryIndex < stories.length - 1 ? handleNext : undefined}
        onPrevious={currentStoryIndex > 0 ? handlePrevious : undefined}
        onBack={handleBack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onStorySelect={handleStorySelect} />

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

              <SolarFlareSimulation />
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

          {/* Did You Know Section */}
          <div className="mb-8">
            <h4 className="font-bold text-xl mb-6 text-gray-700">
              Did You Know?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-solar-orange/10 rounded-2xl p-6 border border-solar-orange/20">
                <div className="text-3xl mb-3">☀️</div>
                <h5 className="font-semibold text-lg text-solar-orange mb-2">
                  The Sun's 11-Year Cycle
                </h5>
                <p className="text-gray-700 text-sm">
                  Our Sun goes through an 11-year cycle where it becomes more and less active. 
                  During solar maximum, we see more solar flares and beautiful auroras on Earth!
                </p>
              </div>

              <div className="bg-aurora-green/10 rounded-2xl p-6 border border-aurora-green/20">
                <div className="text-3xl mb-3">🌌</div>
                <h5 className="font-semibold text-lg text-aurora-green mb-2">
                  Auroras on Other Planets
                </h5>
                <p className="text-gray-700 text-sm">
                  Jupiter, Saturn, and even Mars have their own auroras! Jupiter's are 1,000 times 
                  brighter than Earth's because of its super strong magnetic field.
                </p>
              </div>

              <div className="bg-stellar-blue/10 rounded-2xl p-6 border border-stellar-blue/20">
                <div className="text-3xl mb-3">🛰️</div>
                <h5 className="font-semibold text-lg text-stellar-blue mb-2">
                  Space Weather Forecasting
                </h5>
                <p className="text-gray-700 text-sm">
                  Just like regular weather, scientists can predict space weather! They use special 
                  satellites to warn astronauts and protect power grids from solar storms.
                </p>
              </div>
            </div>
          </div>

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