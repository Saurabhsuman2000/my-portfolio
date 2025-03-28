import React, { useEffect, useRef } from "react";

function AnimationWaves() {
  const pathRef = useRef(null);

  useEffect(() => {
    let requestId;
    let t = 0;

    const animate = () => {
      const wavePath = pathRef.current;
      const waveHeight = 40;
      const waveLength = 200;
      const points = [];

      for (let i = 0; i <= 1440; i += 20) {
        const y =
          Math.sin((i / waveLength + t)) * waveHeight + 200;
        points.push(`${i},${y}`);
      }

      const d =
        `M0,280 ` +
        points.map((p) => `L${p}`).join(" ") +
        ` L1440,280 L0,280 Z`;

      if (wavePath) {
        wavePath.setAttribute("d", d);
      }

      t += 0.004;
      requestId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="absolute bottom-0 w-full overflow-hidden hidden lg:block">
      <svg
        viewBox="0 0 1440 280"
        className="wave w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#592af3" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          fill="url(#waveGradient)"
        />
      </svg>
    </div>
  );
}

export default AnimationWaves;
