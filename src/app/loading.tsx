
import React from "react";

const LoadingPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#09090b] px-6 text-white">
      <div className="flex flex-col items-center text-center">
        {/* Animated loader */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-zinc-800 border-t-lime-400" />

          <div className="h-12 w-12 animate-pulse rounded-full bg-lime-400/10 shadow-lg shadow-lime-400/20" />

          <div className="absolute h-3 w-3 rounded-full bg-lime-400" />
        </div>

        {/* Loading text */}
        <h2 className="mt-8 text-2xl font-bold tracking-tight sm:text-3xl">
          Loading<span className="text-lime-400">.</span>
        </h2>

        <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">
          Please wait while we prepare everything for you.
        </p>

        {/* Progress indicator */}
        <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full w-1/3 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-lime-400" />
        </div>

        <p className="mt-4 text-xs font-medium tracking-[0.2em] text-zinc-600">
          PLEASE WAIT
        </p>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </main>
  );
};

export default LoadingPage;
