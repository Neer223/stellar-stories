// import { Button } from "@/components/ui/button";

// interface Story {
//   id: string;
//   title: string;
//   character: string;
//   imageSrc: string;
//   backgroundColor: string;
//   textColor: string;
// }

// interface StoryGridProps {
//   stories: Story[];
//   onStorySelect: (storyId: string) => void;
// }

// const StoryGrid = ({ stories, onStorySelect }: StoryGridProps) => {
//   return (
//     <section className="py-16 px-6 bg-background/50">
//       <div className="container mx-auto">
//         <h2 className="font-work-sans font-medium text-4xl mb-12 text-center text-primary">
//           Choose Your Space Adventure
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {stories.map((story) => (
//             <div
//               key={story.id}
//               className={`${story.backgroundColor} rounded-3xl p-6 border border-border/20 hover:scale-105 transition-all duration-300`}
//             >
//               <div className="aspect-square rounded-2xl overflow-hidden mb-6">
//                 <img
//                   src={story.imageSrc}
//                   alt={story.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               <h3 className={`font-work-sans font-medium text-xl mb-3 ${story.textColor}`}>
//                 {story.title}
//               </h3>
              
//               <p className={`font-work-sans text-sm mb-4 ${story.textColor}/80`}>
//                 {story.character}
//               </p>
              
//               <Button
//                 onClick={() => onStorySelect(story.id)}
//                 className={`w-full ${story.textColor} bg-white/20 hover:bg-white/30 border border-white/30 font-work-sans font-medium`}
//                 variant="outline"
//               >
//                 LEARN NOW
//               </Button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StoryGrid;
import { Button } from "@/components/ui/button";
import { Gamepad2, BookOpen, Users, ExternalLink, Globe, Satellite, Zap } from "lucide-react";
import { useState } from "react";

interface Story {
  id: string;
  title: string;
  character: string;
  imageSrc: string;
  backgroundColor: string;
  textColor: string;
}

interface StoryGridProps {
  stories: Story[];
  onStorySelect: (storyId: string) => void;
}

const StoryGrid = ({ stories, onStorySelect }: StoryGridProps) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [gameScore, setGameScore] = useState(0);

  const characters = [
    { 
      id: 1, 
      name: "Surya", 
      icon: "☀️", 
      fact: "I'm the source of all solar flares! My magnetic field lines can stretch millions of miles into space.",
      color: "text-orange-600"
    },
    { 
      id: 2, 
      name: "Captain Arjun", 
      icon: "✈️", 
      fact: "As a pilot, I need to know about solar storms because they can disrupt GPS and radio communications at high altitudes.",
      color: "text-blue-600"
    },
    { 
      id: 3, 
      name: "Farmer Vijay", 
      icon: "🌾", 
      fact: "Solar storms affect my GPS-guided tractors and can interfere with precision farming techniques.",
      color: "text-green-600"
    },
    { 
      id: 4, 
      name: "Grid Operator Kartik", 
      icon: "⚡", 
      fact: "I manage the power grid, and solar storms can cause massive blackouts by overloading transformers.",
      color: "text-yellow-700"
    },
    { 
      id: 5, 
      name: "Astronaut Sara", 
      icon: "🚀", 
      fact: "In space, I'm exposed to dangerous radiation during solar storms and need to take shelter in shielded areas.",
      color: "text-purple-600"
    }
  ];

  const miniGameItems = [
    { id: 1, name: "Astronaut", impact: "High", correct: true },
    { id: 2, name: "Farmer", impact: "Medium", correct: false },
    { id: 3, name: "Power Grid", impact: "High", correct: true },
    { id: 4, name: "Pilot", impact: "Medium", correct: false },
    { id: 5, name: "City Dweller", impact: "Low", correct: false }
  ];

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDrop = (e, target) => {
    e.preventDefault();
    if (draggedItem && target === "high-impact" && draggedItem.correct) {
      setGameScore(gameScore + 1);
    }
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-work-sans font-bold text-5xl mb-4 text-gray-900">
            Choose Your Space Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how space weather affects life on Earth through the eyes of different characters
          </p>
        </div>
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`${story.backgroundColor} rounded-3xl p-6 border-2 border-white/30 hover:scale-105 transition-all duration-300 shadow-xl`}
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                <img
                  src={story.imageSrc}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="font-work-sans font-bold text-2xl mb-3 text-gray-900">
                {story.title}
              </h3>
              
              <p className="font-work-sans text-base mb-6 text-gray-700 font-medium">
                {story.character}
              </p>
              
              <Button
                onClick={() => onStorySelect(story.id)}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-work-sans font-bold py-3 rounded-2xl text-base transition-colors"
              >
                LEARN NOW
              </Button>
            </div>
          ))}
        </div>

        {/* About Space Weather Section - MOVED TO TOP */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-100 to-cyan-50 rounded-3xl p-10 border-2 border-indigo-200 shadow-xl mb-16">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <Satellite className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-work-sans font-bold text-4xl mb-6 text-gray-900">
              Understanding Space Weather
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white/80 rounded-2xl p-6 border border-indigo-200">
              <h4 className="font-work-sans font-bold text-xl mb-3 text-gray-800">What Is It?</h4>
              <p className="font-work-sans text-gray-700 leading-relaxed">
                Space weather refers to dynamic conditions in Earth's magnetosphere, ionosphere, and thermosphere 
                caused by solar wind and energetic particles from the Sun.
              </p>
            </div>
            
            <div className="bg-white/80 rounded-2xl p-6 border border-purple-200">
              <h4 className="font-work-sans font-bold text-xl mb-3 text-gray-800">How It Works</h4>
              <p className="font-work-sans text-gray-700 leading-relaxed">
                Solar flares and coronal mass ejections travel through space at millions of miles per hour, 
                creating geomagnetic storms when they interact with Earth's magnetic field.
              </p>
            </div>
            
            <div className="bg-white/80 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-work-sans font-bold text-xl mb-3 text-gray-800">Real Impact</h4>
              <p className="font-work-sans text-gray-700 leading-relaxed">
                These storms can disrupt GPS, satellite communications, power grids, and pose radiation 
                hazards to astronauts and airline passengers at high altitudes.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-work-sans text-lg text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
              Understanding space weather is crucial for protecting our technology and preparing for impacts 
              in our increasingly connected world. Join our characters as they experience these cosmic events firsthand!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-work-sans font-bold px-8 py-3 rounded-2xl transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                NASA Space Weather
              </Button>
              <Button
                variant="outline"
                className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-work-sans font-bold px-8 py-3 rounded-2xl transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                NOAA Space Weather
              </Button>
            </div>
          </div>
        </div>

        {/* Meet Our Characters Section - MOVED BELOW */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h3 className="font-work-sans font-bold text-4xl mb-4 text-gray-900">
              Meet Our Characters
            </h3>
            <p className="text-xl text-gray-600">
              Each character experiences space weather in their own unique way
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {characters.map((character) => (
              <button
                key={character.id}
                className="bg-white hover:bg-gray-50 rounded-2xl px-4 py-6 border-2 border-gray-200 transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                onClick={() => handleCharacterClick(character)}
              >
                <div className="text-center">
                  <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{character.icon}</span>
                  <span className={`font-work-sans font-bold text-sm ${character.color} block`}>
                    {character.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Enhanced Character Fact Bubble */}
          {selectedCharacter && (
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-8 border-2 border-purple-200 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="text-6xl">{selectedCharacter.icon}</div>
                <div className="flex-1">
                  <h4 className={`font-work-sans font-bold text-2xl mb-3 ${selectedCharacter.color}`}>
                    {selectedCharacter.name} explains:
                  </h4>
                  <p className="font-work-sans text-lg text-gray-700 leading-relaxed mb-4">
                    {selectedCharacter.fact}
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white/70 text-gray-700 rounded-full text-sm font-work-sans font-medium">
                      Space Weather Expert
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCharacter(null)}
                  className="w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mini-Game Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-work-sans font-bold text-4xl mb-4 text-gray-900">
              Interactive Learning Challenge
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Test your knowledge with our space weather impact game
            </p>
            <Button
              onClick={() => setShowMiniGame(!showMiniGame)}
              className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white font-work-sans font-bold px-8 py-4 rounded-2xl text-lg shadow-xl"
            >
              <Gamepad2 className="w-6 h-6 mr-2" />
              {showMiniGame ? 'Hide Challenge' : 'Start Challenge'}
            </Button>
          </div>

          {showMiniGame && (
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-10 border-2 border-blue-200 shadow-xl">
              <div className="text-center mb-8">
                <h4 className="font-work-sans font-bold text-2xl mb-4 text-gray-900">
                  Drag & Drop Challenge: Who faces the highest impact from solar storms?
                </h4>
                <div className="flex justify-center items-center gap-4">
                  <span className="text-2xl">🎯</span>
                  <p className="text-lg text-gray-700 font-work-sans font-medium">Score: {gameScore}</p>
                  <span className="text-2xl">🏆</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Draggable Items */}
                <div className="bg-white/80 rounded-2xl p-6 border border-blue-200">
                  <h5 className="font-work-sans font-bold text-xl mb-6 text-gray-800">Characters to Sort:</h5>
                  <div className="space-y-3">
                    {miniGameItems.map((item) => (
                      <div
                        key={item.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                        className="bg-white hover:bg-gray-50 rounded-xl p-4 cursor-move border-2 border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-work-sans font-bold text-gray-800">{item.name}</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-work-sans font-medium ${
                            item.impact === 'High' ? 'bg-red-100 text-red-700' :
                            item.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            Impact: {item.impact}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drop Zone */}
                <div className="bg-white/80 rounded-2xl p-6 border border-blue-200">
                  <h5 className="font-work-sans font-bold text-xl mb-6 text-gray-800">High Impact Zone:</h5>
                  <div
                    onDrop={(e) => handleDrop(e, "high-impact")}
                    onDragOver={handleDragOver}
                    className="min-h-48 bg-gradient-to-br from-red-100 to-orange-100 border-3 border-dashed border-red-300 rounded-2xl p-6 text-center flex flex-col items-center justify-center hover:border-red-400 transition-colors"
                  >
                    <Users className="w-12 h-12 mb-4 text-red-500" />
                    <h6 className="text-red-600 font-work-sans font-bold text-lg mb-2">High Impact Characters</h6>
                    <p className="text-red-500 font-work-sans text-sm">
                      Drop characters who are most affected by solar storms here
                    </p>
                    {gameScore > 0 && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-2xl">✅</span>
                        <span className="text-green-600 font-work-sans font-bold">Great job!</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600 font-work-sans">
                  💡 Hint: Think about who relies heavily on technology or works in exposed environments
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoryGrid;