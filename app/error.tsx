"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-navy-900 text-white flex flex-col items-center justify-center min-h-screen p-6 text-center font-sans">
      <h2 className="text-3xl font-serif mb-4 text-uva-orange">Something went wrong</h2>
      <p className="text-white/70 mb-6 max-w-md">
        An error occurred while loading this section.
      </p>
      <button
        onClick={() => unstable_retry()}
        className="px-6 py-3 bg-uva-orange hover:bg-uva-orange-light text-navy-900 font-semibold rounded transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
