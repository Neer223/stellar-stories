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
  const [droppedItems, setDroppedItems] = useState([]);

  const characters = [
    { 
      id: 1, 
      name: "Sol", 
      icon: "☀️", 
      fact: "I'm the source of all solar flares! My magnetic field lines can stretch millions of miles into space.",
      color: "text-orange-600"
    },
    { 
      id: 2, 
      name: "Captain Priya", 
      icon: "✈️", 
      fact: "As a pilot, I need to know about solar storms because they can disrupt GPS and radio communications at high altitudes.",
      color: "text-blue-600"
    },
    { 
      id: 3, 
      name: "Farmer Ravi", 
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
      name: "Astronaut Zara", 
      icon: "🚀", 
      fact: "In space, I'm exposed to dangerous radiation during solar storms and need to take shelter in shielded areas.",
      color: "text-purple-600"
    }
  ];

  const miniGameItems = [
    { id: 1, name: "Astronaut", impact: "???", correct: true },
    { id: 2, name: "Farmer", impact: "???", correct: false },
    { id: 3, name: "Power Grid", impact: "???", correct: true },
    { id: 4, name: "Pilot", impact: "???", correct: false },
    { id: 5, name: "City Dweller", impact: "???", correct: false }
  ];

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDrop = (e, target) => {
    e.preventDefault();
    if (draggedItem && target === "high-impact") {
      if (!droppedItems.find(item => item.id === draggedItem.id)) {
        setDroppedItems([...droppedItems, draggedItem]);
        if (draggedItem.correct) {
          setGameScore(gameScore + 1);
        }
      }
    }
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  // Mobile touch handlers for drag and drop
  const handleItemClick = (item) => {
    if (!droppedItems.find(dropped => dropped.id === item.id)) {
      setDroppedItems([...droppedItems, item]);
      if (item.correct) {
        setGameScore(gameScore + 1);
      }
    }
  };

  const resetGame = () => {
    setGameScore(0);
    setDroppedItems([]);
    setDraggedItem(null);
  };

  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="font-bold text-3xl sm:text-5xl mb-2 sm:mb-4 text-gray-900">
            Choose Your Space Adventure
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Discover how space weather affects life on Earth through the eyes of different characters
          </p>
        </div>
        
        {/* Story Grid - Better mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-20">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`${story.backgroundColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 border-white/30 hover:scale-105 transition-all duration-300 shadow-xl`}
            >
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                <img
                  src={story.imageSrc}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="font-bold text-lg sm:text-2xl mb-2 sm:mb-3 text-gray-900">
                {story.title}
              </h3>
              
              <p className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-700 font-medium">
                {story.character}
              </p>
              
              <Button
                onClick={() => onStorySelect(story.id)}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base transition-colors"
              >
                LEARN NOW
              </Button>
            </div>
          ))}
        </div>

        {/* About Space Weather Section - Mobile optimized */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-100 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-indigo-200 shadow-xl mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <Satellite className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-2xl sm:text-4xl mb-4 sm:mb-6 text-gray-900">
              Understanding Space Weather
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-10">
            <div className="bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-indigo-200">
              <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-800">What Is It?</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Space weather refers to dynamic conditions in Earth's magnetosphere, ionosphere, and thermosphere 
                caused by solar wind and energetic particles from the Sun.
              </p>
            </div>
            
            <div className="bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-200">
              <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-800">How It Works</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Solar flares and coronal mass ejections travel through space at millions of miles per hour, 
                creating geomagnetic storms when they interact with Earth's magnetic field.
              </p>
            </div>
            
            <div className="bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200">
              <h4 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-gray-800">Real Impact</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                These storms can disrupt GPS, satellite communications, power grids, and pose radiation 
                hazards to astronauts and airline passengers at high altitudes.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed max-w-3xl mx-auto">
              Understanding space weather is crucial for protecting our technology and preparing for impacts 
              in our increasingly connected world. Join our characters as they experience these cosmic events firsthand!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://science.nasa.gov/heliophysics/focus-areas/space-weather/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl transition-colors text-sm sm:text-base"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                NASA Space Weather
              </a>
              <a
                href="https://www.swpc.noaa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl transition-colors text-sm sm:text-base"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                NOAA Space Weather
              </a>
            </div>
          </div>
        </div>

        {/* Meet Our Characters Section - Mobile horizontal layout */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-10">
            <h3 className="font-bold text-2xl sm:text-4xl mb-2 sm:mb-4 text-gray-900">
              Meet Our Characters
            </h3>
            <p className="text-lg sm:text-xl text-gray-600">
              Each character experiences space weather in their own unique way
            </p>
          </div>
          
          {/* Character buttons - horizontal scrollable on mobile */}
          <div className="overflow-x-auto pb-4 mb-6 sm:mb-10">
            <div className="flex gap-3 sm:grid sm:grid-cols-5 sm:gap-4 min-w-max sm:min-w-0">
              {characters.map((character) => (
                <button
                  key={character.id}
                  className="bg-white hover:bg-gray-50 rounded-xl sm:rounded-2xl px-4 py-4 sm:py-6 border-2 border-gray-200 transition-all duration-200 hover:scale-105 hover:shadow-lg group flex-shrink-0 w-24 sm:w-auto"
                  onClick={() => handleCharacterClick(character)}
                >
                  <div className="text-center">
                    <span className="text-3xl sm:text-4xl mb-2 sm:mb-3 block group-hover:scale-110 transition-transform">{character.icon}</span>
                    <span className={`font-bold text-xs sm:text-sm ${character.color} block`}>
                      {character.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Enhanced Character Fact Bubble - Mobile optimized horizontal layout */}
          {selectedCharacter && (
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 border-2 border-purple-200 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Mobile: Icon and name in horizontal layout */}
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2 w-full sm:w-auto">
                  <div className="text-4xl sm:text-6xl flex-shrink-0">{selectedCharacter.icon}</div>
                  <h4 className={`font-bold text-lg sm:text-2xl ${selectedCharacter.color} sm:mb-3`}>
                    {selectedCharacter.name} explains:
                  </h4>
                </div>
                
                <div className="flex-1 w-full">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                    {selectedCharacter.fact}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/70 text-gray-700 rounded-full text-sm font-medium">
                      Space Weather Expert
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedCharacter(null)}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mini-Game Section - Mobile optimized */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-10">
            <h3 className="font-bold text-2xl sm:text-4xl mb-2 sm:mb-4 text-gray-900">
              Interactive Learning Challenge
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 px-2">
              Test your knowledge with our space weather impact game
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                onClick={() => setShowMiniGame(!showMiniGame)}
                className="bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-700 hover:to-yellow-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-xl"
              >
                <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                {showMiniGame ? 'Hide Challenge' : 'Start Challenge'}
              </Button>
              {showMiniGame && (
                <Button
                  onClick={resetGame}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-xl"
                >
                  Reset Game
                </Button>
              )}
            </div>
          </div>

          {showMiniGame && (
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl sm:rounded-3xl p-4 sm:p-10 border-2 border-blue-200 shadow-xl">
              <div className="text-center mb-6 sm:mb-8">
                <h4 className="font-bold text-lg sm:text-2xl mb-3 sm:mb-4 text-gray-900">
                  Challenge: Who faces the highest impact from solar storms?
                </h4>
                <div className="flex justify-center items-center gap-4">
                  <span className="text-xl sm:text-2xl">🎯</span>
                  <p className="text-base sm:text-lg text-gray-700 font-medium">Score: {gameScore}</p>
                  <span className="text-xl sm:text-2xl">🏆</span>
                </div>
              </div>
              
              {/* Mobile: Single column layout, Desktop: Two columns */}
              <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:space-y-0">
                {/* Characters to Sort */}
                <div className="bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200">
                  <h5 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-gray-800">Characters to Sort:</h5>
                  <div className="space-y-2 sm:space-y-3">
                    {miniGameItems.filter(item => !droppedItems.find(dropped => dropped.id === item.id)).map((item) => (
                      <div
                        key={item.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                        onClick={() => handleItemClick(item)} // Mobile tap support
                        className="bg-white hover:bg-gray-50 active:bg-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4 cursor-pointer border-2 border-gray-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md touch-manipulation"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-gray-800 text-sm sm:text-base">{item.name}</span>
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                            item.impact === 'High' ? 'bg-red-100 text-red-700' :
                            item.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            Impact: {item.impact}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 sm:hidden">
                          Tap to move to high impact zone
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drop Zone */}
                <div className="bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200">
                  <h5 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-gray-800">High Impact Zone:</h5>
                  <div
                    onDrop={(e) => handleDrop(e, "high-impact")}
                    onDragOver={handleDragOver}
                    className="min-h-32 sm:min-h-48 bg-gradient-to-br from-red-100 to-orange-100 border-4 border-dashed border-red-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center justify-center hover:border-red-400 transition-colors"
                  >
                    <Users className="w-8 h-8 sm:w-12 sm:h-12 mb-2 sm:mb-4 text-red-500" />
                    <h6 className="text-red-600 font-bold text-base sm:text-lg mb-1 sm:mb-2">High Impact Characters</h6>
                    <p className="text-red-500 text-xs sm:text-sm mb-2 sm:mb-4 px-2">
                      Drop or tap characters who are most affected by solar storms here
                    </p>
                    
                    {/* Show dropped items */}
                    {droppedItems.length > 0 && (
                      <div className="space-y-1 sm:space-y-2 w-full">
                        {droppedItems.map((item) => (
                          <div key={item.id} className={`p-2 rounded-lg text-xs sm:text-sm font-medium ${
                            item.correct ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                          }`}>
                            {item.name} {item.correct ? '✅' : '❌'}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {gameScore > 0 && (
                      <div className="mt-2 sm:mt-4 flex items-center gap-2">
                        <span className="text-lg sm:text-2xl">🎉</span>
                        <span className="text-green-600 font-bold text-sm sm:text-base">
                          {gameScore === 2 ? 'Perfect Score!' : `${gameScore} correct!`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6 sm:mt-8">
                <p className="text-gray-600 text-sm sm:text-base px-2">
                  💡 Hint: Think about who relies heavily on technology or works in exposed environments
                </p>
                {droppedItems.length === miniGameItems.length && (
                  <div className="mt-4 p-3 sm:p-4 bg-green-100 rounded-xl sm:rounded-2xl border border-green-200">
                    <h6 className="font-bold text-green-800 text-base sm:text-lg">Game Complete! 🎊</h6>
                    <p className="text-green-700 text-sm sm:text-base">
                      Final Score: {gameScore}/{miniGameItems.filter(item => item.correct).length} 
                      {gameScore === 2 ? ' - Excellent work!' : ' - Good effort!'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoryGrid;