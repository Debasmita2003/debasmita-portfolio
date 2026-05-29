import { useEffect, useState } from "react";

const CustomCursor = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (

    <div
      className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-screen"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        background:
          "linear-gradient(135deg, #a855f7, #38bdf8, #2563eb)",
        boxShadow:
          "0 0 20px rgba(168,85,247,0.8), 0 0 40px rgba(56,189,248,0.5)",
        transition: "transform 0.08s linear",
      }}
    />

  );
};

export default CustomCursor;