import React from "react";

export default function ErrorQuery({ message }: { message: String }) {
  return <p className="text-red-500">{message}</p>;
}
