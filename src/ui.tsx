import { render, useWindowResize, Button } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { ResizeWindowHandler } from "./types";
import { h, Fragment } from "preact";

function Plugin() {
  function onWindowResize(windowSize: { width: number; height: number }) {
    emit<ResizeWindowHandler>("RESIZE_WINDOW", windowSize);
  }
  useWindowResize(onWindowResize, {
    maxHeight: 320,
    maxWidth: 320,
    minHeight: 120,
    minWidth: 120,
    resizeBehaviorOnDoubleClick: "minimize",
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        gap: "20px",
      }}
    >
      <h1>Flutter</h1>
      <h3>Color Constant</h3>
      {/* <input
        type="text"
        style={{
          background: "white",
          color: "black",
          cursor: "pointer",
          padding: "10px",
        }}
        placeholder={"File name?"}
      /> */}

      <Button onClick={() => emit("GENERATE")}>Generate</Button>
    </div>
  );
}

export default render(Plugin);
