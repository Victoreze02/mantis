// src/components/Navbar.jsx
import { React, useState } from "react";
import { Menu, X, Bell, Github } from "lucide-react";



export default function SearchBar({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow sticky top-0 z-20">
      {/* Left: Hamburger + Search Bar */}
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="text-gray-600">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="🔍 (Ctrl + K)"
            className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
        >
          <Github size={20} />
        </a>
        <button className="text-gray-600 hover:text-black">
          <Bell size={20} />
        </button>
        <span className="text-2xl">👤</span>
        <span className="font-medium text-gray-800">John Doe</span>
      </div>
    </header>
  );
}

// Example usage in App.jsx or Layout.jsx
// import Navbar from "./components/Navbar";
// const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
