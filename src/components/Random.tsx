import randomData from "@/constants/random";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

const icons = {
  joke: "fa-solid:laugh-beam",
  quote: "fa-solid:quote-left",
  fact: "mdi:lightbulb-on-outline",
}

export default function Random({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [randomFact, setRandomFact] = useState("");
  const [author, setAuthor] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    fetchRandomFact();
  }, []);

  const fetchRandomFact = async () => {
    const data = Math.floor(Math.random() * randomData.length);
    setRandomFact(randomData[data].content);
    setAuthor(randomData[data].author);
    setIcon(icons[randomData[data].type as "joke" | "quote" | "fact"]);
  };

  return (
    <>
      {
        open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full p-6 relative">
              <div className="flex justify-center mb-4">
                <span className="bg-quaternary text-white p-2 rounded-full">
                  <Icon icon={icon} className="text-4xl" />
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                {randomFact ? randomFact : "Loading..."}
              </p>
              <p className="text-gray-500 text-right mb-4">- {author}</p>
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-secondary text-gray-700 py-2 px-4 rounded-xl focus:outline-none"
                  onClick={() => setOpen(false)}>
                  Close
                </button>
                <button
                  className="bg-quaternary text-white py-2 px-4 rounded-xl focus:outline-none"
                  onClick={() => {
                    fetchRandomFact();
                  }}>
                  Random
                </button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}
