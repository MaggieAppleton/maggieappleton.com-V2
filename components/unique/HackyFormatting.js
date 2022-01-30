import * as React from "react";

function HackyFormatting() {
  return (
    <div
      style={{
        position: "relative",
        top: "0",
        left: "0",
        height: "400px",
        width: "100%",
        marginBottom: "2rem",
        fontFamily: "var(--font-body)",
      }}
    >
      <div style={{ position: "absolute", top: "30px", left: "30px" }}>
        Unless
      </div>
      <div style={{ position: "absolute", top: "80px", left: "100px" }}>
        you
      </div>
      <div style={{ position: "absolute", top: "100px", left: "150px" }}>
        want
      </div>
      <div style={{ position: "absolute", top: "150px", left: "160px" }}>
        to
      </div>
      <div style={{ position: "absolute", top: "180px", left: "120px" }}>
        get
      </div>
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "240px",
          transform: "rotateZ(-15deg)",
        }}
      >
        weird
      </div>
      <div style={{ position: "absolute", top: "220px", left: "300px" }}>
        and
      </div>
      <div
        style={{
          position: "absolute",
          top: "270px",
          left: "400px",
          transform: "rotateZ(10deg)}",
        }}
      >
        hacky
      </div>
      <div style={{ position: "absolute", top: "290px", left: "490px" }}>
        with the
      </div>
      <div style={{ position: "absolute", top: "350px", left: "420px" }}>
        formatting
      </div>
    </div>
  );
}

export default HackyFormatting;
