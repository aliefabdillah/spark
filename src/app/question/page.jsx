// "use client";

// import React, { useState } from "react";

// const questions = [
//   {
//     id: 1,
//     title: "What is Genetic Modification?",
//     description: "Understanding genetic modification is essential because it forms the foundation of GMOs. By grasping how genetic material can be altered, you can better comprehend how GMOs are created and their potential effects.",
//     explanation:
//       "Genetic modification alters an organism's DNA to add or improve traits like pest resistance or faster growth. Using tools like CRISPR, scientists precisely replace parts of DNA, making the process faster and more accurate than traditional breeding.",
//     next: "How Are GMOs Created?",
//   },
//   {
//     id: 2,
//     title: "How Are GMOs Created?",
//     description: "GMOs are created through genetic engineering, a process that introduces desired traits into an organism's genome.",
//     explanation: [
//       "Scientists identify traits of interest.",
//       "Genes responsible for those traits are isolated.",
//       "The genes are inserted into the target organism's genome using techniques like CRISPR or gene guns.",
//     ],
//     next: "Why Are GMOs Used?",
//   },
//   {
//     id: 3,
//     title: "Why Are GMOs Used?",
//     description: "GMOs offer solutions to global challenges, especially in agriculture and medicine.",
//     explanation: [
//       "Increased crop yields and pest resistance.",
//       "Production of life-saving medications like insulin.",
//       "Reduced need for chemical pesticides, promoting sustainability.",
//     ],
//     next: "Are GMOs Safe?",
//   },
//   {
//     id: 4,
//     title: "Are GMOs Safe?",
//     description: "Scientific consensus holds that GMOs are as safe as their non-GMO counterparts when properly tested.",
//     explanation:
//       "Rigorous safety assessments are performed before GMOs are released into the market. These evaluations ensure they pose no harm to humans, animals, or the environment.",
//     next: "What Are the Ethical Concerns of GMOs?",
//   },
//   {
//     id: 5,
//     title: "What Are the Ethical Concerns of GMOs?",
//     description: "Ethical concerns revolve around ownership, environmental impact, and public health.",
//     explanation: [
//       "Potential monopolization of seed supply by corporations.",
//       "Unintended ecological consequences like reduced biodiversity.",
//       "Debates over labeling and consumer choice.",
//     ],
//     next: null,
//   },
// ];

// export default function QuestionPage() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion((prev) => prev - 1);
//     }
//   };

//   const handleSuggestionClick = (questionTitle) => {
//     const index = questions.findIndex((q) => q.title === questionTitle);
//     if (index !== -1 && index !== currentQuestion) {
//       setCurrentQuestion(index);
//     }
//   };

//   const current = questions[currentQuestion];

//   return (
//     <div className="min-h-screen bg-purpleCustom flex flex-col justify-center items-center p-6">
//       {/* Card */}
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-md transition duration-500 ease-in-out transform">
//         {/* Progress Indicator */}
//         <div className="h-2 bg-gray-300 rounded-full overflow-hidden mb-4">
//           <div
//             className="h-full bg-purple-600 transition-all"
//             style={{
//               width: `${((currentQuestion + 1) / questions.length) * 100}%`,
//             }}
//           />
//         </div>

//         {/* Content */}
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">
//           {current.title}
//         </h2>
//         <p className="text-gray-600 mb-4">{current.description}</p>
//         <div>
//           <h3 className="text-purple-600 font-bold mb-2">Explanation</h3>
//           {Array.isArray(current.explanation) ? (
//             <ul className="list-disc list-inside text-gray-600">
//               {current.explanation.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600">{current.explanation}</p>
//           )}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="mt-6 flex justify-between items-center">
//           {/* Prev Button */}
//           {currentQuestion > 0 && (
//             <button
//               onClick={handlePrev}
//               className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow hover:bg-gray-200"
//             >
//               <span className="material-icons text-gray-500 mr-2">←</span>
//               <div className="text-left">
//                 <p className="text-sm text-gray-400">Prev</p>
//                 <p className="text-sm text-gray-800">
//                   {questions[currentQuestion - 1]?.title}
//                 </p>
//               </div>
//             </button>
//           )}

//           {/* Next Button */}
//           {current.next ? (
//             <button
//               onClick={handleNext}
//               className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow hover:bg-gray-200"
//             >
//               <div className="text-right">
//                 <p className="text-sm text-gray-400">Next</p>
//                 <p className="text-sm text-gray-800">
//                   {questions[currentQuestion + 1]?.title}
//                 </p>
//               </div>
//               <span className="material-icons text-gray-500 ml-2">→</span>
//             </button>
//           ) : (
//             <p className="text-gray-600 text-center mt-4">
//               You’ve reached the end of the questions!
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Suggestions */}
//       <ul className="mt-6 space-y-2 w-full sm:max-w-md">
//         {questions
//           .filter((_, index) => index !== currentQuestion) // Exclude the current question
//           .map((question) => (
//             <li
//               key={question.id}
//               className="flex items-center justify-between py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-500"
//               onClick={() => handleSuggestionClick(question.title)}
//             >
//               <span className="text-white">{question.title}</span>
//               <span className="text-white">→</span>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from 'next/navigation';
"use client";

const questions = [
  {
    id: 1,
    title: "What is Genetic Modification?",
    description: "Understanding genetic modification is essential because it forms the foundation of GMOs. By grasping how genetic material can be altered, you can better comprehend how GMOs are created and their potential effects.",
    explanation:
      "Genetic modification alters an organism's DNA to add or improve traits like pest resistance or faster growth. Using tools like CRISPR, scientists precisely replace parts of DNA, making the process faster and more accurate than traditional breeding.Genetic modification alters an organism's DNA to add or improve traits like pest resistance or faster growth. Using tools like CRISPR, scientists precisely replace parts of DNA, making the process faster and more accurate than traditional breeding.Genetic modification alters an organism's DNA to add or improve traits like pest resistance or faster growth. Using tools like CRISPR, scientists precisely replace parts of DNA, making the process faster and more accurate than traditional breeding.Genetic modification alters an organism's DNA to add or improve traits like pest resistance or faster growth. Using tools like CRISPR, scientists precisely replace parts of DNA, making the process faster and more accurate than traditional breeding.",
    next: "How Are GMOs Created?",
    topic: "GMO",
  },
  {
    id: 2,
    title: "How Are GMOs Created?",
    description: "GMOs are created through genetic engineering, a process that introduces desired traits into an organism's genome.",
    explanation: [
      "Scientists identify traits of interest.",
      "Genes responsible for those traits are isolated.",
      "The genes are inserted into the target organism's genome using techniques like CRISPR or gene guns.",
    ],
    next: "Why Are GMOs Used?",
    topic: "GMO Creation",
  },
  {
    id: 3,
    title: "Why Are GMOs Used?",
    description: "GMOs offer solutions to global challenges, especially in agriculture and medicine.",
    explanation: [
      "Increased crop yields and pest resistance.",
      "Production of life-saving medications like insulin.",
      "Reduced need for chemical pesticides, promoting sustainability.",
    ],
    next: "Are GMOs Safe?",
    topic: "GMO Benefits",
  },
  {
    id: 4,
    title: "Are GMOs Safe?",
    description: "Scientific consensus holds that GMOs are as safe as their non-GMO counterparts when properly tested.",
    explanation:
      "Rigorous safety assessments are performed before GMOs are released into the market. These evaluations ensure they pose no harm to humans, animals, or the environment.",
    next: "What Are the Ethical Concerns of GMOs?",
    topic: "GMO Safety",
  },
  {
    id: 5,
    title: "What Are the Ethical Concerns of GMOs?",
    description: "Ethical concerns revolve around ownership, environmental impact, and public health.",
    explanation: [
      "Potential monopolization of seed supply by corporations.",
      "Unintended ecological consequences like reduced biodiversity.",
      "Debates over labeling and consumer choice.",
    ],
    next: null,
    topic: "Ethics of GMOs",
  },
];

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function QuestionPage() {
  // const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [direction, setDirection] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();

  // Ambil data dari localStorage
  useEffect(() => {
    // const storedQuestions = localStorage.getItem("questions");
    try {
      // if (storedQuestions) {
      //   const parsedQuestions = JSON.parse(storedQuestions);
      //   if (Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
      //     setQuestions(parsedQuestions);
      //   } else {
      //     setError("Data tidak valid. Pastikan backend mengirimkan format JSON yang benar.");
      //     router.push("/");
      //   }
      // } else {
      //   setError("Tidak ada data ditemukan. Silakan ajukan pertanyaan lagi.");
      //   router.push("/");
      // }
    } catch (err) {
      console.error("Failed to parse questions:", err);
      setError("Terjadi kesalahan dalam membaca data.");
      router.push("/");
    }
  }, [router]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setDirection(1);
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const current = questions[currentQuestion];

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
  };

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  // if (questions.length === 0) {
  //   return <div className="text-white text-center mt-10">Loading...</div>;
  // }

  return (
    <div className="min-h-screen flex flex-col items-center bg-purpleCustom p-4">
      <div className="w-full max-w-md">
        <div className="p-6">
            {/* Header Section */}
            <h1 className="text-white text-4xl font-bold font-jakarta">sparks</h1>
            <p className="text-sm text-gray-300 mt-1 font-jakarta">GMO</p>
        </div>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentQuestion}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-slate-800">{current.title || "No Title"}</h2>
            <p className="mt-2 text-slate-700 text-sm">{current.description || "No Description"}</p>
            <div className="mt-4">
              <h3 className="text-purple-600">Explanation</h3>
              <p className="text-gray-950">{current.explanation || "No Explanation Available"}</p>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className={`text-gray-700 ${currentQuestion === 0 && "opacity-50 cursor-not-allowed"}`}
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
                className={`text-gray-700 ${currentQuestion === questions.length - 1 && "opacity-50 cursor-not-allowed"}`}
              >
                Next
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}







