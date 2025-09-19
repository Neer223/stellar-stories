import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SignupPage from "@/components/SignupPage";
import LoginPage from "@/components/LoginPage";

const Navigation = ({ onPageChange, onCharacterSelect }) => {
  const [isCharactersOpen, setIsCharactersOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const characters = [
    { id: 1, name: "Surya - The Sun", page: 1, storyId: "surya-sun" },
    { id: 2, name: "Farmer Vijay", page: 2, storyId: "farmer-vijay" },
    { id: 3, name: "Captain Arjun", page: 2, storyId: "captain-arjun" },
    { id: 4, name: "Astronaut Sara", page: 6, storyId: "astronaut-sara" },
    { id: 5, name: "Grid Operator Kartik", page: 6, storyId: "grid-operator-kartik" },
    { id: 6, name: "The Community", page: 6, storyId: "the-community" }
  ];

  const handleCharacterClick = (character) => {
    onCharacterSelect?.(character.storyId, character.name);
    onPageChange?.(character.page);
    setIsCharactersOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Characters Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                onClick={() => setIsCharactersOpen(!isCharactersOpen)}
              >
                <span className="text-foreground font-work-sans font-medium">Characters</span>
                <ChevronDown
                  className={`w-4 h-4 text-foreground transition-transform ${
                    isCharactersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCharactersOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-2xl shadow-lg overflow-hidden z-50">
                  {characters.map((character) => (
                    <button
                      key={character.id}
                      className="w-full px-4 py-3 text-left hover:bg-muted transition-colors border-b border-border last:border-b-0"
                      onClick={() => handleCharacterClick(character)}
                    >
                      <span className="font-work-sans font-medium text-foreground">
                        {character.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Logo/Title */}
            <div className="text-center">
              <h1 className="text-2xl font-work-sans font-medium text-orange-500">
                Stellar Stories
              </h1>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setShowLogin(true)}
                variant="secondary"
                className="bg-muted hover:bg-muted/80 text-foreground font-work-sans font-medium rounded-2xl px-6"
              >
                Already a learner
              </Button>
              <Button
                onClick={() => setShowSignup(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-work-sans font-medium rounded-2xl px-6"
              >
                Become a Learner
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
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
