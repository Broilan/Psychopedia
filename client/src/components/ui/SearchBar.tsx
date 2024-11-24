import React, { useState } from "react";
import { Search } from "lucide-react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<{ title: string; description: string }[]>([]);

  // Fake possibilities (to be replaced with database queries in the future)
  const possibilities = [
    {
      title: "Artificial Intelligence in Learning",
      description: "Exploring how AI enhances learning methods.",
    },
    {
      title: "Behavioral Psychology",
      description: "The study of the connection between behaviors and the mind.",
    },
    {
      title: "Cognitive Biases",
      description: "Examining systematic errors in human thinking.",
    },
    {
      title: "Memory and Cognition",
      description: "Understanding how memory works and its connection to cognition.",
    },
    {
      title: "Neuroscience Basics",
      description: "An introduction to the structure and function of the brain.",
    },
    {
      title: "Psychology of Learning",
      description: "Understanding the psychological mechanisms behind learning.",
    },
    {
      title: "Social Psychology",
      description: "The study of how people influence each other's behavior.",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);

    // Filter and sort suggestions based on input
    if (input.trim() === "") {
      setSuggestions([]);
    } else {
      setSuggestions(
        possibilities
          .filter((item) =>
            item.title.toLowerCase().includes(input.toLowerCase())
          )
          .sort((a, b) => a.title.localeCompare(b.title)) // Lexicographical sort
          .slice(0, 5) // Limit to 5 suggestions
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search submitted:", query);
  };

  return (
    <div className="relative w-full max-w-lg">
      <form
        className="flex items-center w-full border-2 border-gray-300 rounded-full bg-white shadow-sm"
        onSubmit={handleSubmit}
      >
        {/* Input Field */}
        <input
          type="text"
          className="flex-grow px-4 py-2 text-sm text-gray-700 bg-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={query}
          onChange={handleInputChange}
          placeholder="Search articles, topics, or tests..."
        />

        {/* Search Button */}
        <button
          type="submit"
          className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <Search strokeWidth={1.5} />
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                setQuery(suggestion.title);
                setSuggestions([]); // Clear suggestions after selection
              }}
            >
              <div className="font-medium text-gray-800">{suggestion.title}</div>
              <div className="text-gray-600 text-xs truncate">
                {suggestion.description}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
