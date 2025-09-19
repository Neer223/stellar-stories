import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";

const StoryPage = ({ story, currentIndex, totalStories, onPrevious, onNext, onBack }) => {
  const [showHotspot, setShowHotspot] = useState(false);

  if (!story) {
    return (
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Story not found</h2>
          <Button onClick={onBack} variant="outline">
            <ChevronLeft className="mr-2 w-4 h-4" />
            Back to Stories
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Navigation - Fixed height */}
      <nav className="flex justify-between items-center px-6 py-3 border-b border-border/20 bg-white/50 backdrop-blur-sm flex-shrink-0 h-16">
        <Button
          onClick={onBack}
          variant="ghost"
          className="font-medium text-gray-800"
        >
          <ChevronLeft className="mr-2 w-4 h-4" />
          Back to Stories
        </Button>
        
        <div className="flex gap-3">
          {onPrevious && currentIndex > 0 && (
            <Button
              onClick={onPrevious}
              variant="outline"
              className="font-medium text-gray-800 px-4 py-2 text-sm"
            >
              <ChevronLeft className="mr-1 w-4 h-4" />
              Previous
            </Button>
          )}
          
          {onNext && currentIndex < totalStories - 1 && (
            <Button
              onClick={onNext}
              variant="outline"
              className="font-medium text-gray-800 px-4 py-2 text-sm"
            >
              Next
              <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          )}
        </div>
      </nav>

      {/* Story Content - Takes remaining height */}
      <div className={`${story.backgroundColor || 'bg-gradient-to-br from-blue-400 to-purple-600'} flex-1 flex items-center overflow-hidden`}>
        <div className="container mx-auto px-6 h-full max-h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
            {/* Image Section */}
            <div className="flex justify-center items-center h-full max-h-[80vh]">
              <div className="aspect-square w-full max-w-md relative group">
                {story.animatedComponent ? (
                  <div className="w-full h-full rounded-3xl overflow-hidden relative border-4 border-white/30 shadow-2xl">
                    {story.animatedComponent}
                    
                    {/* Interactive Hotspot */}
                    <button
                      className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 hover:bg-white/40 transition-all duration-300 z-10"
                      onMouseEnter={() => setShowHotspot(true)}
                      onMouseLeave={() => setShowHotspot(false)}
                    >
                      <Info className="w-4 h-4 text-white" />
                    </button>

                    {/* Hotspot Information */}
                    {showHotspot && (
                      <div className="absolute top-4 right-16 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-white/40 max-w-xs animate-fade-in z-20 shadow-lg">
                        <div className="space-y-2">
                          <div>
                            <h4 className="font-medium text-xs text-blue-700 mb-1">🔬 Physics</h4>
                            <p className="text-xs text-gray-700 leading-tight">{story.physics}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-xs text-blue-700 mb-1">⚡ Impact</h4>
                            <p className="text-xs text-gray-700 leading-tight">{story.impact}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-xs text-blue-700 mb-1">💡 Tip</h4>
                            <p className="text-xs text-gray-700 leading-tight">{story.tip}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full rounded-3xl overflow-hidden relative border-4 border-white/30 shadow-2xl bg-gray-200">
                    {story.imageSrc ? (
                      <img
                        src={story.imageSrc}
                        alt={story.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback placeholder */}
                    <div 
                      className={`w-full h-full flex items-center justify-center text-gray-500 ${story.imageSrc ? 'hidden' : 'flex'}`}
                      style={{ display: story.imageSrc ? 'none' : 'flex' }}
                    >
                      <div className="text-center">
                        <div className="text-6xl mb-4">📖</div>
                        <p className="text-lg font-medium">{story.character}</p>
                      </div>
                    </div>
                    
                    {/* Interactive Hotspot */}
                    {(story.physics || story.impact || story.tip) && (
                      <>
                        <button
                          className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 hover:bg-white/40 transition-all duration-300"
                          onMouseEnter={() => setShowHotspot(true)}
                          onMouseLeave={() => setShowHotspot(false)}
                        >
                          <Info className="w-4 h-4 text-white" />
                        </button>

                        {/* Hotspot Information */}
                        {showHotspot && (
                          <div className="absolute top-4 right-16 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-white/40 max-w-xs animate-fade-in shadow-lg">
                            <div className="space-y-2">
                              {story.physics && (
                                <div>
                                  <h4 className="font-medium text-xs text-blue-700 mb-1">🔬 Physics</h4>
                                  <p className="text-xs text-gray-700 leading-tight">{story.physics}</p>
                                </div>
                              )}
                              {story.impact && (
                                <div>
                                  <h4 className="font-medium text-xs text-blue-700 mb-1">⚡ Impact</h4>
                                  <p className="text-xs text-gray-700 leading-tight">{story.impact}</p>
                                </div>
                              )}
                              {story.tip && (
                                <div>
                                  <h4 className="font-medium text-xs text-blue-700 mb-1">💡 Tip</h4>
                                  <p className="text-xs text-gray-700 leading-tight">{story.tip}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center h-full py-4 max-h-[80vh] overflow-hidden">
              <h1 className={`font-bold text-3xl lg:text-4xl mb-4 ${story.textColor || 'text-white'} leading-tight`}>
                {story.title || 'Untitled Story'}
              </h1>
              
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-sm border ${story.textColor || 'text-white'} bg-white/30 border-white/40 font-medium`}>
                  {story.character || 'Unknown Character'}
                </span>
              </div>
              
              <div className={`bg-white/20 backdrop-blur-sm rounded-2xl p-5 border border-white/30 shadow-lg flex-1 overflow-y-auto max-h-[50vh]`}>
                <div className="text-base lg:text-lg leading-relaxed text-gray-800 font-medium">
                  {story.content || 'Story content will appear here...'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="bg-white/50 backdrop-blur-sm border-t border-border/20 py-2 px-6 flex-shrink-0">
        <div className="flex justify-center items-center">
          <div className="flex space-x-2">
            {Array.from({ length: totalStories || 1 }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-4 text-sm text-gray-600 font-medium">
            {(currentIndex || 0) + 1} of {totalStories || 1}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;