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
        <div className="container mx-auto px-3 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Characters Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 sm:gap-2 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                onClick={() => setIsCharactersOpen(!isCharactersOpen)}
              >
                <span className="text-foreground font-work-sans font-medium text-sm sm:text-base">Characters</span>
                <ChevronDown
                  className={`w-3 h-3 sm:w-4 sm:h-4 text-foreground transition-transform ${
                    isCharactersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCharactersOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 sm:w-64 bg-background border border-border rounded-2xl shadow-lg overflow-hidden z-50">
                  {characters.map((character) => (
                    <button
                      key={character.id}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-muted transition-colors border-b border-border last:border-b-0"
                      onClick={() => handleCharacterClick(character)}
                    >
                      <span className="font-work-sans font-medium text-foreground text-sm sm:text-base">
                        {character.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Logo/Title */}
            <div className="text-center">
              <h1 className="text-lg sm:text-2xl font-work-sans font-medium text-orange-500">
                Stellar Stories
              </h1>
            </div>

            {/* Action Buttons - Made equal width on mobile */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                onClick={() => setShowLogin(true)}
                variant="secondary"
                className="bg-muted hover:bg-muted/80 text-foreground font-work-sans font-medium rounded-2xl px-2 sm:px-6 text-xs sm:text-sm w-20 sm:w-auto"
              >
                <span className="hidden sm:inline">Already a learner</span>
                <span className="sm:hidden">Login</span>
              </Button>
              <Button
                onClick={() => setShowSignup(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-work-sans font-medium rounded-2xl px-2 sm:px-6 text-xs sm:text-sm w-20 sm:w-auto"
              >
                <span className="hidden sm:inline">Become a Learner</span>
                <span className="sm:hidden">Sign Up</span>
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