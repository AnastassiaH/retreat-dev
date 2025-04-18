"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function ReviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const stepParam = searchParams.get("step");
  const step = parseInt(stepParam || "1");

  const [inputValue, setInputValue] = useState("");
  const goToStep = (newStep) => {
    router.push(`/review/?step=${newStep}`);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Step {step}</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 w-full max-w-md"
        placeholder="Введіть щось..."
      />

      <div className="space-x-2">
        {/* <button
          onClick={() => goToStep(step - 1)}
          disabled={step <= 1}
          className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button> */}
        <Link
          href={`/review?step=${step - 1}`}
          className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </Link>

        <button
          onClick={() => goToStep(step + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>

        <button
          onClick={() => goToStep(3)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Step 3
        </button>
        {/* <Link
          href={`/review?step=${step + 1}`}
          className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </Link> */}
      </div>
    </div>
  );
}
