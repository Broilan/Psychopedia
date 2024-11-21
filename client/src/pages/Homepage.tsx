import React from "react";
import brain from "../assets/brain.jpg";
import SearchBar from "../components/ui/SearchBar";
import HomeFooter from "../components/ui/HomeFooter";

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Centered Globe and Categories */}
      <div className="text-center my-12">
        {/* Hero Title */}
        <h1 className="text-4xl font-bold text-blue-700 mb-16">Psychopedia</h1>

        {/* Logo and Categories */}
        <div className="relative flex flex-col items-center">
          {/* Placeholder for Globe/Logo */}
          <img
            className="w-80 h-80 rounded-full shadow-lg mb-6"
            src={brain}
            alt="Brain"
          />

          {/* Categories */}
          <div className="absolute h-[20rem] flex justify-center items-center">
            {[
              "Neurology",
              "Psychoanalysis",
              "Neuroscience",
              "Noetics",
              "Psychology",
              "Psychometrics",
            ].map((category, index) => (
              <div
                key={index}
                className="absolute text-sm bg-white text-blue-700 px-3 py-1 rounded-full shadow-md hover:bg-blue-100 cursor-pointer"
                style={{
                  transform: `rotate(${index * (360 / 6)}deg) translate(210px) rotate(-${index * (360 / 6)}deg)`,
                }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-10">
          <SearchBar />
        </div>
      </div>
        
        {/* Footer */}
        <HomeFooter />
    </div>
  );
};

export default Homepage;
