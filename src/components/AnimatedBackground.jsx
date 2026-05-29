const AnimatedBackground = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "500px",
          height: "500px",
          borderRadius: "9999px",
          background: "#7c3aed",
          filter: "blur(120px)",
          opacity: 0.35,
          top: "-100px",
          left: "-100px",
          zIndex: 0,
          animation: "float1 10s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          borderRadius: "9999px",
          background: "#38bdf8",
          filter: "blur(120px)",
          opacity: 0.3,
          top: "35%",
          right: "-100px",
          zIndex: 0,
          animation: "float2 12s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "fixed",
          width: "450px",
          height: "450px",
          borderRadius: "9999px",
          background: "#2563eb",
          filter: "blur(120px)",
          opacity: 0.3,
          bottom: "-100px",
          left: "30%",
          zIndex: 0,
          animation: "float3 14s ease-in-out infinite",
        }}
      />
    </>
  );
};

export default AnimatedBackground;