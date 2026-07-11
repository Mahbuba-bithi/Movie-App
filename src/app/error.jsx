"use client";

export { useeffect } from "react";
export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">    
        <h1 className="text-3xl font-bold text-slate-900">Something went wrong!</h1>
        <p className="mt-2 text-sm text-slate-600">{error.message}</p>
        <button
          onClick={() => reset()}
            className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Try Again
        </button>
    </div>
  );
}