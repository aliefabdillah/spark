"use client";

import React, { useState } from "react";

const suggestionQuestions = [
    {
      words: "Headchache",
    },
    {
      words: "Football",
    },
  ];

export default function VictoryPage () {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [direction, setDirection] = useState(0);
    const handleSuggestionClick = (questionTitle) => {
        const index = suggestionQuestions.findIndex((q) => q.words === questionTitle);
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
            <p className="text-sm text-gray-300 mt-1 font-jakarta">GMO</p>
            </div>
        </div>

        {/* Card Section */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm mx-auto">
            <div className="flex justify-center mb-4">
            <span className="text-6xl">🎉</span>
            </div>
            <h2 className="text-xl font-bold font-jakarta text-gray-800">Victory is yours!</h2>
            <p className="text-gray-600 mt-2">
            You&apos;ve conquered <span className="font-bold text-purpleCustom">GMO</span> like a true champion!
            </p>

            {/* Back Button */}
            <button
            onClick={() => window.history.back()}
            className="bg-white hover:bg-gray-200 text-black text-sm font-medium font-jakarta py-2 px-4 rounded-lg mt-6 w-full"
            >
            Back
            </button>
        </div>

        {/* Suggestions Section */}
        <div className="w-full max-w-sm mx-auto mt-4 flex flex-col items-start">
            <p className="text-xs font-jakarta text-white mb-1">Learn other keywords</p>
            {suggestionQuestions.slice(0, 2).map((q) => (
            <button
                key={q.id}
                onClick={() => handleSuggestionClick(q.words)}
                className="text-sm font-jakarta text-white hover:text-gray-500 mt-1"
            >
                {q.words}
            </button>
            ))}
        </div>
    </div>
  );
};
