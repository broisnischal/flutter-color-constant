import rgb2hex from "rgb2hex";

export function generateCode(colors: PaintStyle[]) {
  let code = `
  import 'package:flutter/material.dart';

  class ColorConst {
    ${colors
      .map((color) => {
        return color.paints
          .map((item) => {
            if (!(item.type === "SOLID")) {
              return null;
            }

            console.log(item.color);
            console.log(item.opacity);

            console.log(RGBAToHexA(`rgba(255, 255, 255, 0)`));

            return `    static const Color ${color.name} = Color(0x${rgbaToHexa(
              item.color.r,
              item.color.g,
              item.color.b,
              item.opacity !== undefined ? item.opacity : 1
            )});`;
          })
          .join("\n");
      })
      .join("\n")}
}

  `;

  return code;
}

export function generateOutputText(code: string) {
  return code;
}

export function copy(val: string) {
  navigator.clipboard
    .writeText(val)
    .then(() => {
      console.log("copied");
    })
    .catch((err) => {
      throw new Error(err);
    });
}

// function rgbaToHex(rgba: string): number {
//   const [r, g, b, a] = rgba.match(/\d+/g)!.map(Number);
//   const hex = (a * 255 << 24) | (r << 16) | (g << 8) | b;
//   return hex >>> 0; // Convert to unsigned 32-bit integer
// }

export function rgbaToHexa(r: number, g: number, b: number, a: number) {
  const red = componentToHex(r);
  const green = componentToHex(g);
  const blue = componentToHex(b);

  const alpha = a && alphaToHex(a);

  return `${red}${green}${blue}${alpha || ""}`;
}

function componentToHex(c: number) {
  const hex = parseInt(c as unknown as string).toString(16);
  const returnValue = hex.length == 1 ? "0" + hex : hex;
  return returnValue.toUpperCase();
}

function alphaToHex(value: number) {
  value = Math.round(value * 100) / 100;
  const alpha = Math.min(Math.round(value * 255), 255);
  const hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
  // const perc = Math.round(value * 100);

  return hex;
}

export function rgbaToHex(r: number, g: number, b: number, a: number): string {
  const alphaHex = alphaToHex(a);

  const red = componentToHex(r);

  const green = componentToHex(g);
  const blue = componentToHex(b);

  return `Color(0x${red}${green}${blue}${alphaHex})`;
}
