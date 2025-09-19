import { useState } from "react";
import { Info, Zap, Shield, Lightbulb, X } from "lucide-react";

interface StorySectionProps {
  title: string;
  imageSrc: string;
  backgroundColor: string;
  textColor?: string;
  reverse?: boolean;
  character: string;
  physics: string;
  impact: string;
  tip: string;
  content: string;
}

const StorySection = ({ 
  title, 
  imageSrc, 
  backgroundColor, 
  textColor = "text-foreground",
  reverse = false,
  character,
  physics,
  impact,
  tip,
  content
}: StorySectionProps) => {
  const [showHotspot, setShowHotspot] = useState(false);

  return (
    <section className={`py-8 sm:py-12 lg:py-16 px-3 sm:px-6 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto">
        {/* Mobile: Stack vertically, Desktop: Side by side with reverse option */}
        <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Image Container - Smaller on mobile */}
          <div className={`relative w-full ${reverse ? 'lg:col-start-2' : ''}`}>
            <div className={`relative ${backgroundColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] shadow-xl lg:shadow-2xl`}>
              <img 
                src={imageSrc} 
                alt={title}
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg lg:shadow-xl hover:scale-105 transition-transform duration-500"
              />
              
              {/* Enhanced Interactive Hotspot - Responsive positioning */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6">
                <button
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white/70 hover:scale-110 transition-all duration-300"
                  onClick={() => setShowHotspot(!showHotspot)}
                >
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700" />
                </button>
                
                {/* Mobile-responsive hotspot popup */}
                {showHotspot && (
                  <div className="absolute top-0 right-12 sm:right-16 lg:right-20 w-[280px] sm:w-80 lg:w-96 bg-white/97 backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-white/80 z-20">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <h4 className="font-work-sans font-bold text-base sm:text-lg text-gray-900">Scientific Deep Dive</h4>
                      <button 
                        onClick={() => setShowHotspot(false)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                      </button>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                          <span className="font-work-sans font-bold text-xs sm:text-sm text-gray-800">Physics Explained</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{physics}</p>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                          <span className="font-work-sans font-bold text-xs sm:text-sm text-gray-800">Real Impact</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{impact}</p>
                      </div>
                      
                      <div className="bg-yellow-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                          <span className="font-work-sans font-bold text-xs sm:text-sm text-gray-800">Expert Tip</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{tip}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Container - More space on mobile */}
          <div className={`space-y-4 sm:space-y-6 w-full ${reverse ? 'lg:col-start-1' : ''}`}>
            <div>
              <h2 className="font-work-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 leading-tight text-center lg:text-left">
                {title}
              </h2>
              
              <div className="mb-4 sm:mb-6 text-center lg:text-left">
                <span className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 text-white rounded-full font-work-sans font-medium text-sm sm:text-base">
                  {character}
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg">
              <h3 className="font-work-sans font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-gray-900">
                {character}'s Story
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
                {content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-work-sans font-medium">
                  Solar Physics
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-work-sans font-medium">
                  Space Weather
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-work-sans font-medium">
                  Earth Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;