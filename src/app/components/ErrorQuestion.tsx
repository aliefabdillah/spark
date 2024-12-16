import React from "react";

export default function ErrorQuestion({ message }: { message: String }) {
  return (
    <div className="flex flex-col py-6 items-center justify-center space-y-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-x"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
      <p className="font-bold text-2xl text-center">{message}</p>
    </div>
  );
}
