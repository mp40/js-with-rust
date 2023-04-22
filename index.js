import ffi from "ffi-napi";
import { findNth } from "./js/fib.js";

const lib = ffi.Library("./rs/fib/target/release/libfind_nth", {
  find_nth: ["int", ["int"]],
});

function run() {
  console.time("getNth 20 JS");
  const jsResult20 = findNth(20);
  console.timeEnd("getNth JS");
  console.log("JS Get 20 Result > ", jsResult20);

  console.time("getNth 20 RS");
  const rsResult20 = lib.find_nth(20);
  console.timeEnd("getNth 20 RS");
  console.log("RS Get 20 Result > ", rsResult20);

  console.time("getNth 100 JS");
  const jsResult100 = findNth(100);
  console.timeEnd("getNth JS");
  console.log("JS Get 100 Result > ", jsResult100);

  console.time("getNth 100 RS");
  const rsResult100 = lib.find_nth(100);
  console.timeEnd("getNth RS");
  console.log("RS Get 100 Result > ", rsResult100);
}

run();
