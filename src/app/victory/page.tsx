"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";

const suggestionQuestions = [
  {
    id: 1,
    words: "Headchache",
  },
  {
    id: 2,
    words: "Football",
  },
];

export default function VictoryPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const pathname = usePathname();
  const [direction, setDirection] = useState(0);
  const queryQuestion = localStorage.getItem("query");
  const handleSuggestionClick = (questionTitle: String) => {
    const index = suggestionQuestions.findIndex(
      (q) => q.words === questionTitle
    );
    if (index !== -1 && index !== currentQuestion) {
      setDirection(index > currentQuestion ? 1 : -1);
      setCurrentQuestion(index);
    }
  };

  return (
    <div className="min-h-screen bg-purpleCustom flex flex-col justify-between text-center px-4 py-8">
      {/* Wrapper for container and header */}
      <div className="w-full max-w-sm mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-white text-4xl font-bold font-jakarta">sparks</h1>
          <p className="text-sm text-gray-300 mt-1 font-jakarta">{queryQuestion || "sparks-prompt"}</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Slide in from the left to normal position
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm mx-auto"
        >
          {/* Card Section */}
          <div className="">
            {/* Progress Bar */}
            <div className="flex items-center space-x-2 justify-center bg-white mb-8">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 bg-gray-300 rounded-full`}
                ></div>
              ))}
              <div className="w-4 h-4 flex items-center justify-center text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-orange-500"
                >
                  <path d="M12 2l2.09 6.26h6.6l-5.35 3.9 2.09 6.26-5.35-3.9-5.35 3.9 2.09-6.26-5.35-3.9h6.6z" />
                </svg>
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex justify-center mb-4">
              <span className="text-6xl">🎉</span>
            </div>
            <h2 className="text-xl font-bold font-jakarta text-gray-800">
              Victory is yours!
            </h2>
            <p className="text-gray-600 mt-2">
              You&apos;ve conquered{" "}
              <span className="font-bold text-purpleCustom">{queryQuestion || "sparks-prompt"}</span> like a
              true champion!
            </p>

            {/* Back Button */}
            <button
              onClick={() => window.history.back()}
              className="btn bg-white hover:bg-gray-200 text-black text-sm font-medium font-jakarta py-2 px-4 rounded-lg mt-6 w-full"
            >
              Back
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Suggestions Section */}
      <div className="w-full max-w-sm mx-auto mt-4 flex flex-col items-start">
        <p className="text-xs font-jakarta font text-white mb-1">
          Learn other keywords
        </p>
        {suggestionQuestions.slice(0, 2).map((q) => (
          <button
            key={q.id}
            onClick={() => handleSuggestionClick(q.words)}
            className="text-sm font-jakarta font-semibold text-white hover:text-gray-500 mt-2"
          >
            {q.words}
          </button>
        ))}
      </div>
    </div>
  );
}
