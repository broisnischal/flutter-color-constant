import { expect, test } from "vitest";
import { rgbaToHex, rgbaToHexa } from "../src/util";

test("Converts RGBA to hex format", () => {
  const hexColor = rgbaToHex(0, 0, 0, 0.5);
  console.log(hexColor);
  expect(hexColor).toBe("Color(0x0000007f)");
});
