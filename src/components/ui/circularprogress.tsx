import React, { useEffect, useState } from "react";

function CircularProgress({ progress }: any) {
  const radius = 11;
  const circumference = 2 * Math.PI * radius;
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

  useEffect(() => {
    const newStrokeDashoffset =
      circumference - (progress / 100) * circumference;
    setStrokeDashoffset(newStrokeDashoffset);
  }, [progress]);

  return (
    <svg width="25" height="25" viewBox="0 0 25 25">
      <circle
        cx="12.334"
        cy="12.5"
        r={radius}
        stroke="#D0D5DD"
        strokeWidth="2"
        fill="transparent"
      />
      <circle
        cx="12.334"
        cy="12.5"
        r={radius}
        stroke="#3BD6B0"
        strokeWidth="2"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
}

export default CircularProgress;
