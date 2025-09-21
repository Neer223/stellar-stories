import React, { useState } from 'react';
import { Play, BookOpen, Zap, ArrowLeft, Sparkles } from "lucide-react";
import sunEarthJourney from "@/assets/sun-earth-journey.jpg";
// Solar Flare Story Page Component
const SolarFlareStoryPage = ({ onBack }) => {
  const [currentChapter, setCurrentChapter] = useState(0);

  const storyChapters = [
    {
      title: "Chapter 1: The Sun's Great Awakening",
      content: `Once upon a time, in the vast cosmic garden of our solar system, lived a magnificent star we call the Sun. Now, dear one, imagine the Sun as a great cosmic grandmother herself, ancient and wise, with a heart that burns with the love of a billion fires.

On this particular day, something extraordinary was stirring deep within the Sun's golden heart. The magnetic fields, like invisible ribbons of light, began to dance and twist in ways they hadn't for many moons. "Oh my," whispered the Sun to herself, "I feel such energy building within me, like the excitement of having wonderful news to share!"

The Sun's corona, that beautiful wispy hair of light that surrounds her, began to shimmer and glow more brilliantly than usual. She could feel something special was about to happen - a message that needed to travel across the cosmic distances to reach her beloved Earth.`,
    },
    {
      title: "Chapter 2: The Solar Flare's Birth",
      content: `And then, with a joy that could light up galaxies, the Sun released her gift - a magnificent solar flare! Picture, if you will, a shower of golden sparkles mixed with the most beautiful orange and yellow lights, dancing and swirling as they burst forth from the Sun's surface.

"Go, my little messengers of light!" the Sun called out warmly. "Travel across the cosmic sea and bring word of my love to Earth!" These weren't just any ordinary lights, mind you. They were charged particles, each one carrying a piece of the Sun's own energy, like tiny letters in a cosmic mail delivery.

The solar flare danced and spiraled through space, painting invisible trails of magnetic wonder. Some of the particles raced ahead like excited children, while others followed in graceful waves, creating the most beautiful celestial parade you could ever imagine.`,
    },
    {
      title: "Chapter 3: The Journey Through Space",
      content: `Now, space is not empty, dear child - oh no! It's filled with the Sun's gentle breath, called the solar wind, which carries whispers and songs across the cosmic distances. Our brave little solar flare particles joined this cosmic breeze, surfing on invisible waves of magnetism.

As they traveled, they passed by the Moon, who smiled and waved her silver face in greeting. "Safe travels, little lights!" the Moon called out. "Give my regards to the Earth when you arrive!"

The journey wasn't quick like flipping a light switch. No, no - it took time, like a thoughtful letter traveling from a distant relative. For one whole day and night, and then another day, our solar messengers danced their way through the cosmic darkness, guided by the invisible threads that connect our Sun to our precious Earth.`,
    },
    {
      title: "Chapter 4: Earth's Magnificent Welcome",
      content: `Finally, after their long cosmic journey, our solar visitors arrived at Earth's doorstep! But Earth, being the wise and protective mother she is, had prepared a beautiful welcome - her magnetic field, like an invisible shield of love, embraced the solar particles.

"Welcome, dear visitors from the Sun!" Earth whispered. "But you're far too energetic to come down to where my children live. Instead, let me show you something magical!" And with that, Earth guided the solar particles toward her polar regions, where something absolutely wonderful happened.

High up in the sky, where the air is thin and the stars seem close enough to touch, the solar particles began to dance with Earth's own magnetic field. And oh! What a dance it was! Green ribbons of light began to shimmer and flow across the sky like silk curtains in a gentle breeze.

The aurora had begun - nature's own magical light show, painted across the heavens in brilliant greens, dancing purples, and shimmering golds. It was Earth's way of saying "thank you" to the Sun for sharing her light and energy across the vast cosmic distances.

And so ends our tale of the solar flare's journey, dear one. A story of connection, of messages sent with love across impossible distances, and of the beautiful dance that happens when the Sun and Earth embrace through the magic of space weather.`,
    }
  ];

  // Enhanced Solar Flare Animation for Story Page
  const SolarFlareAnimation = () => {
    const [animationPhase, setAnimationPhase] = useState(0);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setAnimationPhase(prev => (prev + 1) % 4);
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    const particles = Array.from({ length: 12 }, (_, i) => i);

    return (
      <div className="relative w-full h-48 md:h-64 bg-gradient-to-r from-indigo-950 via-purple-950 to-indigo-950 rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl">
        {/* Stars background */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Sun */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <div 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle, #FFD700, #FF8C00, #FF4500)',
              boxShadow: '0 0 40px #FF8C00, 0 0 80px #FF4500',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          >
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, transparent 60%, #FFD700 70%, transparent 90%)',
                animation: 'rotate 10s linear infinite',
              }}
            />
            
            {animationPhase === 0 && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-10 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-pulse" />
            )}
          </div>
        </div>

        {/* Solar flare particles */}
        <div className="absolute left-32 top-1/2 -translate-y-1/2 w-full h-full">
          {particles.map((particle, i) => (
            <div
              key={particle}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: `radial-gradient(circle, ${['#FFD700', '#FF8C00', '#FF4500', '#FFB347'][i % 4]}, transparent)`,
                left: `${animationPhase * 20}%`,
                top: `${45 + Math.sin(i) * 20}%`,
                opacity: animationPhase >= 1 ? Math.max(0, 1 - (animationPhase - 1) * 0.3) : 0,
                transform: `translateY(${Math.sin(Date.now() * 0.005 + i) * 10}px)`,
                animation: `flareParticle 9s ease-out infinite ${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Energy wave */}
        {animationPhase >= 1 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full"
            style={{
              left: '32px',
              width: `${(animationPhase - 1) * 25}%`,
              background: 'linear-gradient(90deg, #FFD700, #9D4EDD, #00F5FF)',
              boxShadow: '0 0 15px #9D4EDD',
              animation: 'energyPulse 0.5s ease-in-out infinite',
            }}
          />
        )}

        {/* Earth */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2">
          <div 
            className="w-16 h-16 md:w-20 md:h-20 rounded-full relative"
            style={{
              background: 'conic-gradient(from 0deg, #4A90E2, #50C878, #4A90E2, #8FBC8F, #4A90E2)',
              boxShadow: animationPhase >= 3 ? '0 0 30px #50C878, 0 0 60px #4A90E2' : 'none',
              animation: 'earthRotate 8s linear infinite',
            }}
          >
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, transparent 70%, #87CEEB 85%, transparent 100%)',
                animation: animationPhase >= 3 ? 'atmosphereGlow 1s ease-in-out infinite' : 'none',
              }}
            />
            
            {animationPhase >= 3 && (
              <div 
                className="absolute -top-3 -left-3 -right-3 -bottom-3 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse, transparent 60%, #00FF7F 70%, #FF69B4 80%, transparent 90%)',
                  animation: 'aurora 1.5s ease-in-out infinite',
                }}
              />
            )}
          </div>
        </div>

        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes flareParticle {
            0% { 
              transform: translateX(0) translateY(0) scale(0);
              opacity: 0;
            }
            15% { 
              opacity: 1;
              transform: scale(1);
            }
            85% { 
              opacity: 0.6;
            }
            100% { 
              transform: translateX(400px) translateY(20px) scale(0.3);
              opacity: 0;
            }
          }
          
          @keyframes energyPulse {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
          
          @keyframes earthRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes atmosphereGlow {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          
          @keyframes aurora {
            0%, 100% { 
              opacity: 0;
              transform: scale(1);
            }
            50% { 
              opacity: 0.8;
              transform: scale(1.1);
            }
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900">
        {/* Nebula effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Cosmic dust */}
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="p-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>

        {/* Animation Section */}
        <div className="px-6 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4">
                The Solar Flare's Journey
              </h1>
              <p className="text-xl text-purple-200 mb-8">A Cosmic Tale for Earthlings</p>
            </div>
            
            <SolarFlareAnimation />
          </div>
        </div>

        {/* Story Section */}
        <div className="px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Story Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-purple-900/30 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/30">
                <BookOpen className="w-6 h-6 text-yellow-400" />
                <span className="text-lg text-purple-200">Grandma's Cosmic Tale</span>
                <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
              </div>
            </div>

            {/* Chapter Navigation */}
            <div className="flex justify-center mb-8 gap-2 flex-wrap">
              {storyChapters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChapter(index)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    currentChapter === index
                      ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-medium'
                      : 'bg-purple-900/30 text-purple-200 hover:bg-purple-800/40 border border-purple-500/30'
                  }`}
                >
                  Chapter {index + 1}
                </button>
              ))}
            </div>

            {/* Story Content */}
            <div className="bg-slate-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-500/20 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mb-4">
                  {storyChapters[currentChapter].title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto rounded-full"></div>
              </div>

              <div className="prose prose-lg max-w-none text-purple-100 leading-relaxed">
                {storyChapters[currentChapter].content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-purple-500/20">
                <button
                  onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                  disabled={currentChapter === 0}
                  className={`px-6 py-3 rounded-full transition-all ${
                    currentChapter === 0
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                  }`}
                >
                  Previous Chapter
                </button>

                <div className="text-purple-300 font-medium">
                  {currentChapter + 1} of {storyChapters.length}
                </div>

                <button
                  onClick={() => setCurrentChapter(Math.min(storyChapters.length - 1, currentChapter + 1))}
                  disabled={currentChapter === storyChapters.length - 1}
                  className={`px-6 py-3 rounded-full transition-all ${
                    currentChapter === storyChapters.length - 1
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-pink-600 to-yellow-500 hover:from-pink-500 hover:to-yellow-400 text-white'
                  }`}
                >
                  Next Chapter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// Solar Flare Animation Component for Preview
const SolarFlarePreview = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 bg-gradient-to-r from-indigo-950 via-purple-950 to-indigo-950 rounded-3xl overflow-hidden border border-purple-500/30">
      {/* Stars background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Sun */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2">
        <div 
          className="w-16 h-16 rounded-full relative overflow-hidden"
          style={{
            background: 'radial-gradient(circle, #FFD700, #FF8C00, #FF4500)',
            boxShadow: '0 0 30px #FF8C00, 0 0 60px #FF4500',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, transparent 60%, #FFD700 70%, transparent 90%)',
              animation: 'rotate 10s linear infinite',
            }}
          />
        </div>
      </div>

      {/* Energy line with animation phases */}
      <div className="absolute left-24 top-1/2 -translate-y-1/2 flex items-center gap-4 w-2/3">
        <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse" />
        <div 
          className="flex-1 h-0.5 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-400 rounded-full"
          style={{ opacity: animationPhase >= 1 ? 0.8 : 0.3 }}
        />
        <Zap className={`w-6 h-6 text-blue-400 ${animationPhase >= 2 ? 'animate-bounce' : ''}`} />
        <div 
          className="flex-1 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
          style={{ opacity: animationPhase >= 2 ? 0.8 : 0.3 }}
        />
      </div>

      {/* Earth */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2">
        <div 
          className="w-12 h-12 rounded-full relative"
          style={{
            background: 'conic-gradient(from 0deg, #4A90E2, #50C878, #4A90E2, #8FBC8F, #4A90E2)',
            boxShadow: animationPhase >= 3 ? '0 0 20px #50C878' : 'none',
            animation: 'earthRotate 8s linear infinite',
          }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, transparent 70%, #87CEEB 85%, transparent 100%)',
            }}
          />
          <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes earthRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Button Component
const Button = ({ children, size = "default", variant = "default", className = "", onClick = () => {}, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8 rounded-md",
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Main Hero Section Component
const HeroSection = () => {
  const [showStory, setShowStory] = useState(false);

  // If story is active, show the story page
  if (showStory) {
    return <SolarFlareStoryPage onBack={() => setShowStory(false)} />;
  }

  // Otherwise show the hero section
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
        <div className="mb-8">
          <h1 className="font-bold text-6xl md:text-8xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 drop-shadow-lg">
            Stellar Stories
          </h1>
          <h2 className="font-normal text-2xl md:text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Space Through the Eyes of Earthlings
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join our lively solar flare friend on an incredible journey from the Sun to Earth, 
          discovering how space weather affects everyone from farmers to astronauts!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => setShowStory(true)}
            className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-400 hover:to-yellow-300 text-black font-medium px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Play className="w-6 h-6 mr-2" />
            Start the Adventure
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={() => console.log('Learn More clicked')}
            className="border-2 border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-black font-medium px-8 py-4 rounded-2xl text-lg transition-all duration-300"
          >
            <BookOpen className="w-6 h-6 mr-2" />
            Learn More
          </Button>
        </div>

        {/* Mini Animation Preview */}
        <div className="mt-16 flex justify-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30 shadow-2xl">
            <SolarFlarePreview />
            <p className="text-sm text-gray-300 mt-4 font-medium">
              Watch the solar flare's journey across space
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;