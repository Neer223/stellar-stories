import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";

interface StoryPageProps {
  story: {
    id: string;
    title: string;
    character: string;
    imageSrc: string;
    backgroundColor: string;
    textColor: string;
    content: string;
    physics: string;
    impact: string;
    tip: string;
  };
  currentIndex: number;
  totalStories: number;
  onPrevious?: () => void;
  onNext?: () => void;
  onBack: () => void;
}

const StoryPage = ({ story, currentIndex, totalStories, onPrevious, onNext, onBack }: StoryPageProps) => {
  const [showHotspot, setShowHotspot] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-border/20">
        <Button
          onClick={onBack}
          variant="ghost"
          className="font-work-sans"
        >
          <ChevronLeft className="mr-2" />
          Back to Stories
        </Button>
        
        <div className="flex gap-4">
          {onPrevious && (
            <Button
              onClick={onPrevious}
              variant="outline"
              className="font-work-sans"
            >
              <ChevronLeft className="mr-2" />
              Previous
            </Button>
          )}
          
          {onNext && (
            <Button
              onClick={onNext}
              variant="outline"
              className="font-work-sans"
            >
              Next
              <ChevronRight className="ml-2" />
            </Button>
          )}
        </div>
      </nav>

      {/* Story Content */}
      <div className={`${story.backgroundColor} min-h-[calc(100vh-80px)]`}>
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-wrap items-center gap-12">
            {/* Image Section */}
            <div className="flex-1 min-w-[300px] relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative group">
                <img
                  src={story.imageSrc}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Interactive Hotspot */}
                <button
                  className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300"
                  onMouseEnter={() => setShowHotspot(true)}
                  onMouseLeave={() => setShowHotspot(false)}
                >
                  <Info className="w-5 h-5 text-white" />
                </button>

                {/* Hotspot Information */}
                {showHotspot && (
                  <div className="absolute top-4 right-20 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-white/30 max-w-sm animate-fade-in">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-work-sans font-medium text-sm text-primary mb-1">🔬 Physics</h4>
                        <p className="text-xs text-muted-foreground">{story.physics}</p>
                      </div>
                      <div>
                        <h4 className="font-work-sans font-medium text-sm text-primary mb-1">⚡ Impact</h4>
                        <p className="text-xs text-muted-foreground">{story.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-work-sans font-medium text-sm text-primary mb-1">💡 Tip</h4>
                        <p className="text-xs text-muted-foreground">{story.tip}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 min-w-[400px]">
              <h1 className={`font-work-sans font-medium text-4xl mb-4 ${story.textColor}`}>
                {story.title}
              </h1>
              
              <div className="mb-6">
                <span className={`px-4 py-2 rounded-full font-work-sans text-sm border ${story.textColor} bg-white/20 border-white/30`}>
                  {story.character}
                </span>
              </div>
              
              <div className={`font-work-sans text-lg leading-relaxed ${story.textColor}/90 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20`}>
                {story.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// 
export default StoryPage;