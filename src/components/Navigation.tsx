// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navigation = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Navigation Arrows */}
//           <div className="flex items-center justify-between w-20">
//             <button className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
//               <ChevronLeft className="w-5 h-5 text-foreground" />
//             </button>
//             <button className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors">
//               <ChevronRight className="w-5 h-5 text-foreground" />
//             </button>
//           </div>

//           {/* Logo/Title */}
//           <div className="text-center">
//             <h1 className="text-2xl font-work-sans font-medium text-solar-orange">
//               Stellar Stories
//             </h1>
//             {/* <p className="text-sm text-muted-foreground font-work-sans">Space Through the Eyes of Earthlings</p> */}
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center gap-4">
//             <Button
//               variant="secondary"
//               className="bg-muted hover:bg-muted/80 text-foreground font-work-sans font-medium rounded-2xl px-6"
//             >
//               Already a learner
//             </Button>
//             <Button
//               className="bg-solar-orange hover:bg-solar-orange/90 text-primary-foreground font-work-sans font-medium rounded-2xl px-6"
//             >
//               Become a Learner
//             </Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = ({ onPageChange }) => {
  const [isCharactersOpen, setIsCharactersOpen] = useState(false);

  const characters = [
    { id: 1, name: "Surya - The Sun", page: 1 },
    { id: 2, name: "Farmer Vijay", page: 2 },
    { id: 3, name: "Captain Arjun", page: 2 },
    { id: 4, name: "Astronaut Sara", page: 6 },
    { id: 5, name: "Grid Operator Kartik", page: 6 },
    { id: 6, name: "The Community", page: 6 }
  ];

  const handleCharacterClick = (character) => {
    if (onPageChange) {
      onPageChange(character.page);
    }
    setIsCharactersOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Characters Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-2 p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              onClick={() => setIsCharactersOpen(!isCharactersOpen)}
            >
              <span className="text-foreground font-work-sans font-medium">Characters</span>
              <ChevronDown className={`w-4 h-4 text-foreground transition-transform ${isCharactersOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isCharactersOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-2xl shadow-lg overflow-hidden">
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
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              className="bg-muted hover:bg-muted/80 text-foreground font-work-sans font-medium rounded-2xl px-6"
            >
              Already a learner
            </Button>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-work-sans font-medium rounded-2xl px-6"
            >
              Become a Learner
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;