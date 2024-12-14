import React from "react";

const CircularProgressBar = ({ percentage, size, strokeWidth }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="rotate-[0deg]">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#e5e7eb" 
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#22c55e" // Green progress color
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progress}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="12"
        fill="#fff"
      >
        {`${percentage}%`}
      
      </text>
      <text
        x="50%"
        y="65%" 
        textAnchor="middle"
        fontSize="10"
        fill="#fff"
      >
        Completed
      </text>
    </svg>
  );
};

export default CircularProgressBar;
