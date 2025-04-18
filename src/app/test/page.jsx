"use client";

import useJsonLocalStorage from "@/hooks/useJsonLocalStorage";
import React, { useEffect } from "react";

const stepsInfo = {
  "review-id": {
    "step-number": {},
  },
};

const reviewId = 1;

const GoldHostBadge = () => {
  const [reviewData, setReviewData] = useJsonLocalStorage(
    "review-data", // storage key // naming // user id?
    `review-id-${reviewId}`
  );

  useEffect(() => {
    setReviewData({
      "step-1": "value",
    });
  }, []);

  useEffect(() => {
    console.log(reviewData);
  }, [reviewData]);

  const handleConfirm = (newData) => {
    setReviewData({ ...reviewData, ...newData });
  };

  //35479

  return (
    <div className="flex flex-col">
      <h1 className="mb-5">Test page</h1>
      <div>
        <button
          className="border-1 border-teal-900 rounded-2xl w-40 px-2 py-1 mb-2"
          onClick={() => handleConfirm({ stepNumber: "info" })}
        >
          Add some info
        </button>
      </div>
      <div>
        <button
          className="border-1 border-teal-900 rounded-2xl w-40 px-2 py-1 mb-2"
          onClick={() => handleConfirm({ stepNext: "moreInfo" })}
        >
          Add more info
        </button>
      </div>
    </div>
  );
};

export default GoldHostBadge;
