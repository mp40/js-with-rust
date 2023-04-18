import { findNth } from "./js/fib.js";

function run() {
  console.time("getNth JS");
  const jsResult = findNth(100);
  console.timeEnd("getNth JS");
  console.log("JS Result > ", jsResult);
}

run();
