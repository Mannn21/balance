"use client";

import React, { useState, useEffect } from "react";

const ProgressBar = ({ count, target, color }) => {
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		setPercentage((count / target) * 100);
	}, [count, target]);

	return (
		<div className="w-full h-2 bg-color-grayOpacity rounded-md overflow-hidden">
			<div
				className="h-full transition-all duration-1000 ease-in-out"
				style={{ width: `${percentage || 0}%`, backgroundColor: color }}></div>
		</div>
	);
};

export default ProgressBar;
