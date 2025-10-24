import randomData from "@/constants/random";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

const icons = {
  funny: "fa-solid:laugh-beam",
  informative: "heroicons:light-bulb",
  romantic: "heroicons:heart",
  facts: "heroicons:sparkles",
  other: "heroicons:star",
}

const iconColors = {
  funny: "from-yellow-400 to-orange-500",
  informative: "from-blue-400 to-indigo-500",
  romantic: "from-pink-400 to-rose-500",
  facts: "from-purple-400 to-violet-500",
  other: "from-emerald-400 to-teal-500",
}

export default function Random({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [randomFact, setRandomFact] = useState("");
  const [author, setAuthor] = useState("");
  const [icon, setIcon] = useState("");
  const [type, setType] = useState<"funny" | "informative" | "romantic" | "facts" | "other">("funny");

  useEffect(() => {
    fetchRandomFact();
  }, []);

  const fetchRandomFact = async () => {
    const data = Math.floor(Math.random() * randomData.length);
    const itemType = randomData[data].type as "funny" | "informative" | "romantic" | "facts" | "other";
    setRandomFact(randomData[data].content);
    setAuthor(randomData[data].author);
    setIcon(icons[itemType]);
    setType(itemType);
  };

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeInUp"
      onClick={() => setOpen(false)}>
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative transform transition-all animate-fadeInUp"
        onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-tertiary hover:bg-gray-200 transition-colors"
          onClick={() => setOpen(false)}>
          <Icon icon="akar-icons:cross" className="text-xl" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${iconColors[type]} flex items-center justify-center shadow-lg`}>
            <Icon icon={icon} className="text-4xl text-white" />
          </div>
        </div>

        {/* Type Badge */}
        <div className="flex justify-center mb-4">
          <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
            type === "funny" 
              ? "bg-yellow-100 text-yellow-700" 
              : type === "informative" 
              ? "bg-blue-100 text-blue-700" 
              : type === "romantic"
              ? "bg-pink-100 text-pink-700"
              : type === "facts"
              ? "bg-purple-100 text-purple-700"
              : "bg-emerald-100 text-emerald-700"
          }`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>

        {/* Content */}
        <p className="text-quaternary text-lg leading-relaxed mb-4 text-center">
          {randomFact ? randomFact : "Loading..."}
        </p>
        
        {/* Author */}
        {author && (
          <p className="text-tertiary text-sm text-right italic mb-6">
            — {author}
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          <button
            className="flex-1 bg-secondary text-quaternary py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
            onClick={() => setOpen(false)}>
            Close
          </button>
          <button
            className="flex-1 bg-accent text-white py-3 px-6 rounded-xl font-medium hover:bg-accent-hover transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            onClick={() => {
              fetchRandomFact();
            }}>
            <Icon icon="akar-icons:shuffle" className="text-lg" />
            <span>Random</span>
          </button>
        </div>
      </div>
    </div>
  );
}
