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
    <section className={`py-16 px-6 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="container mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Image Container */}
          <div className={`relative ${reverse ? 'lg:col-start-2' : ''}`}>
            <div className={`relative ${backgroundColor} rounded-3xl p-8 min-h-[400px] shadow-2xl`}>
              <img 
                src={imageSrc} 
                alt={title}
                className="w-full h-full object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
              
              {/* Enhanced Interactive Hotspot */}
              <div className="absolute top-6 right-6">
                <button
                  className="w-14 h-14 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white/70 hover:scale-110 transition-all duration-300"
                  onClick={() => setShowHotspot(!showHotspot)}
                >
                  <Info className="w-6 h-6 text-gray-700" />
                </button>
                
                {showHotspot && (
                  <div className="absolute top-0 right-20 w-96 bg-white/97 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-white/80 z-20">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-work-sans font-bold text-lg text-gray-900">Scientific Deep Dive</h4>
                      <button 
                        onClick={() => setShowHotspot(false)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-blue-600" />
                          <span className="font-work-sans font-bold text-sm text-gray-800">Physics Explained</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{physics}</p>
                      </div>
                      
                      <div className="bg-red-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="w-5 h-5 text-red-600" />
                          <span className="font-work-sans font-bold text-sm text-gray-800">Real Impact</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{impact}</p>
                      </div>
                      
                      <div className="bg-yellow-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-5 h-5 text-yellow-600" />
                          <span className="font-work-sans font-bold text-sm text-gray-800">Expert Tip</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className={`space-y-6 ${reverse ? 'lg:col-start-1' : ''}`}>
            <div>
              <h2 className="font-work-sans font-bold text-5xl text-gray-900 mb-4 leading-tight">
                {title}
              </h2>
              
              <div className="mb-6">
                <span className="px-6 py-3 bg-gray-800 text-white rounded-full font-work-sans font-medium text-base">
                  {character}
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-lg">
              <h3 className="font-work-sans font-bold text-2xl mb-6 text-gray-900">
                {character}'s Story
              </h3>
              
              <div className="space-y-4 text-lg leading-relaxed text-gray-700 mb-6">
                {content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-work-sans font-medium">
                  Solar Physics
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-work-sans font-medium">
                  Space Weather
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-work-sans font-medium">
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