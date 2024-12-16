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

// const questions = [
//   {
//     id: 1,
//     title: "What is Genetic Modification?",
//     description:
//       "Understanding genetic modification is essential because it forms the foundation of GMOs. By grasping how genetic material can be altered, you can better comprehend how GMOs are created and their potential effects.",
//     explanation:
//       "Genetic modification alters an organism's DNA to add or improve traits like pest resistance or faster growth. Using tools like CRISPR, scientists precisely replace parts of DNA, making the process faster and more accurate than traditional breeding.Genetic modification alters an organism's DNA to add or improve traits like pest resistance or faster growth. Using tools like CRISPR, scientists precisely replace parts of DNA, making the process faster and more accurate than traditional breeding.Genetic modification alters an organism's DNA to add or improve traits like pest resistance or faster growth. Using tools like CRISPR, scientists precisely replace parts of DNA, making the process faster and more accurate than traditional breeding.Genetic modification alters an organism's DNA to add or improve traits like pest resistance or faster growth. Using tools like CRISPR, scientists precisely replace parts of DNA, making the process faster and more accurate than traditional breeding.",
//     next: "How Are GMOs Created?",
//     topic: "GMO",
//   },
//   {
//     id: 2,
//     title: "How Are GMOs Created?",
//     description:
//       "GMOs are created through genetic engineering, a process that introduces desired traits into an organism's genome.",
//     explanation: [
//       "Scientists identify traits of interest.",
//       "Genes responsible for those traits are isolated.",
//       "The genes are inserted into the target organism's genome using techniques like CRISPR or gene guns.",
//     ],
//     next: "Why Are GMOs Used?",
//     topic: "GMO Creation",
//   },
//   {
//     id: 3,
//     title: "Why Are GMOs Used?",
//     description:
//       "GMOs offer solutions to global challenges, especially in agriculture and medicine.",
//     explanation: [
//       "Increased crop yields and pest resistance.",
//       "Production of life-saving medications like insulin.",
//       "Reduced need for chemical pesticides, promoting sustainability.",
//     ],
//     next: "Are GMOs Safe?",
//     topic: "GMO Benefits",
//   },
//   {
//     id: 4,
//     title: "Are GMOs Safe?",
//     description:
//       "Scientific consensus holds that GMOs are as safe as their non-GMO counterparts when properly tested.",
//     explanation:
//       "Rigorous safety assessments are performed before GMOs are released into the market. These evaluations ensure they pose no harm to humans, animals, or the environment.",
//     next: "What Are the Ethical Concerns of GMOs?",
//     topic: "GMO Safety",
//   },
//   {
//     id: 5,
//     title: "What Are the Ethical Concerns of GMOs?",
//     description:
//       "Ethical concerns revolve around ownership, environmental impact, and public health.",
//     explanation: [
//       "Potential monopolization of seed supply by corporations.",
//       "Unintended ecological consequences like reduced biodiversity.",
//       "Debates over labeling and consumer choice.",
//     ],
//     next: null,
//     topic: "Ethics of GMOs",
//   },
// ];

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Loading from "../components/Loading";
import ErrorQuestion from "../components/ErrorQuestion";
import { Answer } from "../types/Answer";
import Recommendation from "../components/Recommendation";

const reccomendation = [
  "Why is genetic modification considered precise?",
  "How does genetic modification differ from traditional breeding?",
]

export default function QuestionPage() {
  const [questions, setQuestions] = useState<Answer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(20);
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const [error, setError] = useState("");
  const router = useRouter();
  const queryQuestion = localStorage.getItem("query");

  // Ambil data dari localStorage
  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    try {
      if (storedQuestions) {
        const parsedQuestions: any = JSON.parse(storedQuestions);
        if (Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
          setQuestions(parsedQuestions);
        } else {
          setError(
            "Data tidak valid. Pastikan backend mengirimkan format JSON yang benar."
          );
          router.push("/");
        }
      } else {
        setError("Tidak ada data ditemukan. Silakan ajukan pertanyaan lagi.");
        router.push("/");
      }
    } catch (err) {
      console.error("Failed to parse questions:", err);
      setError("Terjadi kesalahan dalam membaca data.");
      router.push("/");
    }
  }, [router]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setDirection(1);
      setProgress(progress + 20); //state for progress bar default
      setPage(page + 1); //state for progress bar custom
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setProgress(progress - 20); //state for progress bar default
      setPage(page - 1); //state for progress bar custom
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    router.push("/victory");
  };

  const current = questions[currentQuestion];
  const next = questions[currentQuestion + 1];
  const prev = questions[currentQuestion - 1];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-purpleCustom p-4">
      <div className="w-full max-w-md">
        <div className="p-6">
          {/* Header Section */}
          <h1 className="text-white text-4xl font-bold font-jakarta">sparks</h1>
          <p className="text-sm text-gray-300 mt-1 font-jakarta">{queryQuestion || "sparks-prompt"}</p>
        </div>
        {questions.length === 0 && (
          <div className="flex my-32 justify-center items-center">
            <Loading />
          </div>
        )}

        {error && <ErrorQuestion message={error} />}

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentQuestion}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg mt-8"
          >
            {/* Progress Bar Custom */}
            <div className="flex items-center space-x-2 justify-center bg-white mb-4">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 ${
                    index + 1 === page ? "w-4 bg-secondary" : "w-2 bg-gray-300"
                  } rounded-full`}
                ></div>
              ))}

              <div className="w-4 h-4 flex items-center justify-center text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 2l2.09 6.26h6.6l-5.35 3.9 2.09 6.26-5.35-3.9-5.35 3.9 2.09-6.26-5.35-3.9h6.6z" />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800">
              {current?.title || "No Title"}
            </h2>
            <p className="mt-2 text-slate-700 text-sm">
              {current?.description || "No Description"}
            </p>

            <div className="mt-4">
              <h3 className="text-purple-600 mb-2">Explanation</h3>
              <p className="text-slate-900 leading-7">
                {current?.explanation || "No Explanation Available"}
              </p>
            </div>

            <div
              className={`flex flex-row ${
                prev ? "justify-between space-x-2" : "justify-end"
              } mt-6`}
            >
              {prev && (
                <button
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                  className={`btn text-gray-700 h-fit py-2 w-1/2 flex justify-start ${
                    currentQuestion === 0 && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-3 mr-2 fill-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-gray-500 font-light text-xs">Prev</p>
                    </div>
                    <p className="text-xs font-jakarta font-bold text-left text-clip">
                      {prev?.title}
                    </p>
                  </div>
                </button>
              )}

              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleFinish}
                  className="btn btn-secondary hover:bg-purpleCustom hover:border-purpleCustom text-white"
                >
                  Finish
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-goal"
                  >
                    <path d="M12 13V2l8 4-8 4" />
                    <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                    <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className={`btn text-gray-700 h-fit py-2 w-1/2 flex justify-end ${
                    currentQuestion === questions.length - 1 &&
                    "opacity-50 cursor-not-allowed"
                  }`}
                >
                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center justify-end">
                      <p className="text-gray-500 font-light text-xs">Next</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-3 ml-2 fill-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="font-jakarta font-bold text-xs text-right text-clip">
                      {next?.title}
                    </p>
                  </div>
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <Recommendation data={reccomendation} question={true} />
      </div>
    </div>
  );
}
