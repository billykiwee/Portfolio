import React from "react";
import Bubble from "./Bubble";

export default function Background() {
  return (
    <>
      <div className="background">
        <div className="page"></div>
        <div className="bubbles">
          <Bubble dimension={333} style={{ left: "10%" }} />
          <Bubble dimension={600} style={{ left: "76%" }} />
          <Bubble dimension={400} style={{ left: "30%" }} />
        </div>
      </div>
    </>
  );
}
