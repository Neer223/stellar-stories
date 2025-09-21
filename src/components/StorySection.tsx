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
    <section className={`py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto max-w-7xl">
        {/* Mobile: Stack vertically, Desktop: Side by side with reverse option */}
        <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Image Container - Optimized for all screen sizes */}
          <div className={`relative w-full ${reverse ? 'lg:col-start-2' : ''}`}>
            <div className={`relative ${backgroundColor} rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 min-h-[200px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[400px] shadow-lg sm:shadow-xl lg:shadow-2xl`}>
              <img 
                src={imageSrc} 
                alt={title}
                className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg lg:shadow-xl hover:scale-[1.02] sm:hover:scale-105 transition-transform duration-500"
              />
              
              {/* Enhanced Interactive Hotspot - Better mobile positioning */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-6 lg:right-6">
                <button
                  className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white/70 hover:scale-110 transition-all duration-300 touch-manipulation"
                  onClick={() => setShowHotspot(!showHotspot)}
                  aria-label="Show scientific details"
                >
                  <Info className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" />
                </button>
                
                {/* Mobile-first responsive hotspot popup */}
                {showHotspot && (
                  <div className="absolute top-0 right-10 sm:right-12 md:right-16 lg:right-20 w-[calc(100vw-2rem)] max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px] bg-white/98 backdrop-blur-md p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl border border-white/80 z-30">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <h4 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 leading-tight">Scientific Deep Dive</h4>
                      <button 
                        onClick={() => setShowHotspot(false)}
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors touch-manipulation"
                        aria-label="Close details"
                      >
                        <X className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-600" />
                      </button>
                    </div>
                    
                    <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                      <div className="bg-blue-50 rounded-lg md:rounded-xl p-2.5 sm:p-3 md:p-4">
                        <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                          <span className="font-bold text-xs sm:text-sm text-gray-800">Physics Explained</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-700">{physics}</p>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg md:rounded-xl p-2.5 sm:p-3 md:p-4">
                        <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                          <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0" />
                          <span className="font-bold text-xs sm:text-sm text-gray-800">Real Impact</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-700">{impact}</p>
                      </div>
                      
                      <div className="bg-yellow-50 rounded-lg md:rounded-xl p-2.5 sm:p-3 md:p-4">
                        <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                          <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-600 flex-shrink-0" />
                          <span className="font-bold text-xs sm:text-sm text-gray-800">Expert Tip</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-700">{tip}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Container - Better mobile typography and spacing */}
          <div className={`space-y-3 sm:space-y-4 md:space-y-6 w-full ${reverse ? 'lg:col-start-1' : ''}`}>
            <div>
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight text-center lg:text-left px-2 lg:px-0">
                {title}
              </h2>
              
              <div className="mb-3 sm:mb-4 md:mb-6 text-center lg:text-left">
                <span className="inline-block px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 bg-gray-800 text-white rounded-full font-medium text-sm sm:text-base">
                  {character}
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-200 shadow-md sm:shadow-lg">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 md:mb-6 text-gray-900">
                {character}'s Story
              </h3>
              
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-5 md:mb-6">
                {content.split('\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  )
                ))}
              </div>
              
              {/* Tags - Better mobile layout */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center lg:justify-start">
                <span className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                  Solar Physics
                </span>
                <span className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm font-medium">
                  Space Weather
                </span>
                <span className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">
                  Earth Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay backdrop when hotspot is open */}
      {showHotspot && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setShowHotspot(false)}
        />
      )}
    </section>
  );
};

export default StorySection;