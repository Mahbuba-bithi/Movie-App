"use client";

export { useeffect } from "react";
export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 dark:bg-slate-900">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Something went wrong!</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{error.message}</p>
        <button
          onClick={() => reset()}
            className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Try Again
        </button>
    </div>
  );
}