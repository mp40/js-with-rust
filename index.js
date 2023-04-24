import ffi from "ffi-napi";
import { findNth } from "./js/fib.js";

const lib = ffi.Library("./rs/fib/target/release/libfind_nth", {
  find_nth: ["int", ["int"]],
});

/*
  78th position is largest that will return a value <= Number.MAX_SAFE_INTEGER
*/

function run() {
  console.time("getNth 20 JS");
  const jsResult20 = findNth(20);
  console.timeEnd("getNth 20 JS");
  console.log("JS Get 20 Result > ", jsResult20);

  console.time("getNth 20 RS");
  const rsResult20 = lib.find_nth(20);
  console.timeEnd("getNth 20 RS");
  console.log("RS Get 20 Result > ", rsResult20);

  console.time("getNth 78 JS");
  const jsResult78 = findNth(78);
  console.timeEnd("getNth 78 JS");
  console.log("JS Get 78 Result > ", jsResult78);

  console.time("getNth 78 RS");
  const rsResult78 = lib.find_nth(78);
  console.timeEnd("getNth 78 RS");
  console.log("RS Get 78 Result > ", rsResult78);
}

run();
