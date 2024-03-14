import { on, showUI } from "@create-figma-plugin/utilities";

import { ResizeWindowHandler } from "./types";

export default function () {
  on<ResizeWindowHandler>(
    "RESIZE_WINDOW",
    function (windowSize: { width: number; height: number }) {
      const { width, height } = windowSize;
      figma.ui.resize(width, height);
    }
  );

  on("GENERATE", async function () {
    // console.log("trying to generate the file.");
    const colors = await fetchColors();
    console.log("Colors:", colors);
  });

  showUI({
    height: 240,
    width: 240,
  });
}

// Function to fetch color variables and swatches
async function fetchColors() {
  // use getLocalPaintStylesAsync instead it's depreciated
  const colors = await figma.getLocalPaintStyles();
  return colors;
}
