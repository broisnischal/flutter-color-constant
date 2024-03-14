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
  // Get the current Figma file
  const file = figma.root;

  // Array to store color data
  const colors: any = [];

  // Traverse through the file to find all color nodes
  file.findAll((node: any): any => {
    // Check if the node is a solid paint (color)
    if (
      node.type === "RECTANGLE" &&
      node.fills &&
      node.fills.length > 0 &&
      node.fills[0].type === "SOLID"
    ) {
      // Extract color data and add it to the array
      const colorData = {
        name: node.name,
        color: node.fills[0].color,
      };
      colors.push(colorData);
    }
  });

  return colors;
}
