import * as prettier from "prettier";

export function generateCode(colors: PaintStyle[]) {}

export function generateOutputText(code: string) {
  return prettier.format(code, {
    parser: "dart",
  });
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
