import React from "react";

export default function Recommendation({
  data,
  question,
}: {
  data: string[];
  question?: boolean;
}) {
  return (
    <div className={`${question && "mt-20"}`}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`
            flex flex-row justify-between mt-2 p-1 
            items-center 
            ${question ? "": "hover:bg-gray-200"} hover:rounded-lg 
            hover:cursor-pointer`}
        >
          <p
            className={`font-jakarta ${
              question ? "text-white hover:text-gray-300" : "text-gray-500"
            }`}
          >
            {item}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`size-4 ml-2 ${
              question ? "fill-white" : "fill-gray-500"
            }`}
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
