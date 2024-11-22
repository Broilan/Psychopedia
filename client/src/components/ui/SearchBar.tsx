import React from "react";
import { Search } from "lucide-react";

export function SearchBar() {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add search logic here
  };

  return (
    <form
      className="flex items-center w-full max-w-lg border-2 border-gray-300 rounded-full bg-white shadow-sm"
      onSubmit={handleSubmit}
    >
      {/* Input Field */}
      <input
        type="text"
        className="flex-grow px-4 py-2 text-sm text-gray-700 bg-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
  );
};