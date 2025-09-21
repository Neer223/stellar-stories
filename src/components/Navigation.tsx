import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SignupPage from "@/components/SignupPage";
import LoginPage from "@/components/LoginPage";

const Navigation = ({ onStorySelect }) => {
  const [isCharactersOpen, setIsCharactersOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const characters = [
    { id: 1, name: "Sol-The Sun", storyId: "solar-flare" },
    { id: 2, name: "Farmer Ravi", storyId: "farmer" },
    { id: 3, name: "Captain Priya", storyId: "pilot" },
    { id: 4, name: "Astronaut Zara", storyId: "astronaut" },
    { id: 5, name: "Grid Operator Kartik", storyId: "grid-operator" },
    { id: 6, name: "The Community", storyId: "public" }
  ];

  const handleCharacterClick = (character) => {
    onStorySelect?.(character.storyId);
    setIsCharactersOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Characters Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 p-1.5 sm:p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                onClick={() => setIsCharactersOpen(!isCharactersOpen)}
              >
                <span className="text-foreground font-work-sans font-medium text-xs sm:text-sm lg:text-base">Characters</span>
                <ChevronDown
                  className={`w-3 h-3 sm:w-4 sm:h-4 text-foreground transition-transform ${
                    isCharactersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCharactersOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 sm:w-56 lg:w-64 bg-background border border-border rounded-2xl shadow-lg overflow-hidden z-50">
                  {characters.map((character) => (
                    <button
                      key={character.id}
                      className="w-full px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 text-left hover:bg-muted transition-colors border-b border-border last:border-b-0"
                      onClick={() => handleCharacterClick(character)}
                    >
                      <span className="font-work-sans font-medium text-foreground text-xs sm:text-sm lg:text-base">
                        {character.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Logo/Title */}
            <div className="text-center">
              <h1 className="text-base sm:text-lg lg:text-2xl font-work-sans font-medium text-orange-500">
                Stellar Stories
              </h1>
            </div>

            {/* Action Buttons - Responsive sizing */}
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
              <Button
                onClick={() => setShowLogin(true)}
                variant="secondary"
                className="bg-muted hover:bg-muted/80 text-foreground font-work-sans font-medium rounded-2xl px-1.5 sm:px-3 lg:px-6 text-xs sm:text-sm w-16 sm:w-20 lg:w-auto h-7 sm:h-8 lg:h-10"
              >
                <span className="hidden lg:inline">Already a learner</span>
                <span className="lg:hidden">Login</span>
              </Button>
              <Button
                onClick={() => setShowSignup(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-work-sans font-medium rounded-2xl px-1.5 sm:px-3 lg:px-6 text-xs sm:text-sm w-16 sm:w-20 lg:w-auto h-7 sm:h-8 lg:h-10"
              >
                <span className="hidden lg:inline">Become a Learner</span>
                <span className="lg:hidden">Sign Up</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
            <LoginPage
              onClose={() => setShowLogin(false)}
              onSwitchToSignup={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
            <SignupPage
              onClose={() => setShowSignup(false)}
              onSwitchToLogin={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;