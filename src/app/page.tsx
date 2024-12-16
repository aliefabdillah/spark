// "use client"; // Menandakan bahwa komponen ini adalah Client Component

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from 'next/navigation';
// import { motion } from "framer-motion";

// export default function Home() {
//   const router = useRouter();
//   const [placeholder, setPlaceholder] = useState("cars");
//   const [isTyping, setIsTyping] = useState(false);
//   const [loading, setLoading] = useState(false); // State untuk loading
//   const [response, setResponse] = useState(""); // State untuk jawaban dari BE

//   const suggestions = [""];

//   // Mengubah placeholder
//   const changePlaceholder = () => {
//     const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
//     setPlaceholder(randomSuggestion);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIsTyping(false);
//       setTimeout(() => {
//         changePlaceholder();
//         setIsTyping(true);
//       }, 500);
//     }, 2500);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Mengirim pertanyaan ke backend Flask
//   const handleSubmit = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/questions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ query: placeholder }), // Mengirim input pengguna
//       });

//       const data = await res.json();
//       if (data.questions) {
//         // Simpan jawaban ke localStorage agar bisa diakses di halaman berikutnya
//         localStorage.setItem("questions", JSON.stringify(data.questions));
//         router.push("/question"); // Navigasi ke halaman '/question'
//       } else {
//         console.error("Error fetching response:", data.error);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-purpleCustom">
//       <div className="text-center mb-8">
//         <h1 className="text-8xl font-bold text-white font-jakarta">sparks</h1>
//         <p className="text-white text-lg font-bold mt-2 opacity-80">Ignite Your Curiosity</p>
//       </div>

//       {/* Input Form */}
//       <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
//         <p className="text-center text-gray-600 mb-2">I want to learn about...</p>
//         <div className="flex items-center w-full border border-gray-300 rounded-lg">
//           <motion.input
//             type="text"
//             // value={placeholder}
//             // onChange={(e) => setPlaceholder(e.target.value)}
//             placeholder="Type your question here..."
//             className="text-gray-700 w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-l-lg"
//             key={placeholder}
//             initial={{ width: 0 }}
//             animate={{ width: "100%" }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           />
//           <button
//             onClick={handleSubmit}
//             className="absolute right-5 top-20 transform -translate-y-1/2 flex justify-center items-center rounded-r-lg p-3"
//             disabled={loading}
//           >
//             {loading ? (
//               <div className="loader"></div> // Bisa diganti animasi loader
//             ) : (
//               <Image
//                 src="/images/enter.png"
//                 alt="Submit Icon"
//                 width={24}
//                 height={24}
//               />
//             )}
//           </button>
//         </div>
//         {response && (
//           <div className="mt-4 bg-gray-100 p-3 rounded-lg text-gray-700">
//             <h4 className="font-bold">Response:</h4>
//             <p>{response}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ErrorQuery from "./components/ErrorQuery";
import Recommendation from "./components/Recommendation";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState(""); // State untuk input query
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const reccomendation = [
    "Fiscal monetary",
    "DPR",
  ]

  // Fungsi untuk mengirim query ke backend Flask
  const handleSubmit = async () => {
    setError("");
    setLoading(true);

    if (!query) {
      // Pastikan query tidak kosong
      setLoading(false);
      setError("Query cannot be empty!");
      return;
    }

    try {
      /* TEST BE */
      const res = await fetch("http://localhost:1337/api/answers", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.data) {
        localStorage.setItem("questions", JSON.stringify(data.data)); // Simpan respons di localStorage
        localStorage.setItem("query", query)
        router.push(`/question`); // Pindah ke halaman '/question'
      } else {
        setError(data.error);
        console.error("Error fetching response:", data.error);
      }

      // FIX BE
      /* const res = await fetch("http://localhost:5000/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      if (data.questions) {
        localStorage.setItem("questions", JSON.stringify(data.questions)); // Simpan respons di localStorage
        localStorage.setItem("query", query)
        router.push("/question"); // Pindah ke halaman '/question'
      } else {
        setError(data.error)
        console.error("Error fetching response:", data.error);
      } */
    } catch (error) {
      setError("Failed to fetch response");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(); // Memicu fungsi klik tombol
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purpleCustom">
      <h1 className="text-8xl font-bold text-white font-jakarta">sparks</h1>
      <p className="text-white text-lg font-bold mt-5 opacity-80 mb-8">
        Ignite Your Curiosity
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative mt-6">
        <p className="text-center text-gray-600 mb-2">
          I want to learn about...
        </p>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="input input-bordered join-item w-full rounded-l-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Type your question here..."
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-r-lg absolute inset-y-0 right-0 px-5"
          >
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 fill-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 fill-purple-800 hover:fill-purple-950 disabled:fill-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M20.239 3.749a.75.75 0 0 0-.75.75V15H5.549l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3.75 3.75a.75.75 0 0 0 0 1.06l3.75 3.75a.75.75 0 1 0 1.06-1.06L5.55 16.5h14.69a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.751Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        {error && (
          <div className="px-2 mt-2">
            <ErrorQuery message={error} />
          </div>
        )}

        <Recommendation data={reccomendation} question={false}/>
      </div>
      {/* <input
        type="text"
        placeholder="Type your question here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-gray-700 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-purple-600 text-white px-3 py-2 rounded-lg"
      >
        {loading ? "Loading..." : "Ask"}
      </button> */}
    </div>
  );
}

// import React from "react";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-purpleCustom">
//       {/* Logo */}
//       <div className="text-center mb-8">
//         <h1 className="text-8xl font-bold text-white font-jakarta">sparks</h1>
//         <p className="text-white text-lg font-bold mt-2 opacity-80">Ignite Your Curiosity</p>
//       </div>

//       {/* Input Form */}
//       <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
//         <input
//           type="text"
//           placeholder="I want to learn about...                                             ↩"
//           className="text-grayWordCust w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//         />

//         <ul className="mt-4 space-y-2">
//           <li className="flex items-center justify-between py-2 px-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
//             <span className="text-grayWordCust">Fiscal monetary</span>
//             <span className="text-grayWordCust">→</span>
//           </li>
//           <li className="flex items-center justify-between py-2 px-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
//             <span className="text-grayWordCust">DPR</span>
//             <span className="text-grayWordCust">→</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
