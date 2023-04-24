import ffi from "ffi-napi";
import { findNth, findNthRecursive } from "./js/fib.js";

const lib = ffi.Library("./rs/fib/target/release/libfind_nth", {
  find_nth: ["long", ["long"]],
  find_nth_recursive: ["long", ["long"]],
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

  console.time("getNth Rec 20 JS");
  const jsRecResult20 = findNthRecursive(20);
  console.timeEnd("getNth Rec 20 JS");
  console.log("JS Rec Get 20 Result > ", jsRecResult20);

  console.time("getNth Rec 20 RS");
  const rsRecResult20 = lib.find_nth_recursive(20);
  console.timeEnd("getNth Rec 20 RS");
  console.log("RS Rec Get 20 Result > ", rsRecResult20);

  console.time("getNth Rec 40 JS");
  const jsRecResult40 = findNthRecursive(40);
  console.timeEnd("getNth Rec 40 JS");
  console.log("JS Rec Get 40 Result > ", jsRecResult40);

  console.time("getNth Rec 40 RS");
  const rsRecResult40 = lib.find_nth_recursive(40);
  console.timeEnd("getNth Rec 40 RS");
  console.log("RS Rec Get 40 Result > ", rsRecResult40);

  console.time("getNth Rec 45 JS");
  const jsRecResult45 = findNthRecursive(45);
  console.timeEnd("getNth Rec 45 JS");
  console.log("JS Rec Get 40 Result > ", jsRecResult45);

  console.time("getNth Rec 45 RS");
  const rsRecResult45 = lib.find_nth_recursive(45);
  console.timeEnd("getNth Rec 45 RS");
  console.log("RS Rec Get 45 Result > ", rsRecResult45);

  // console.time("getNth Rec 78 JS");
  // const jsRecResult78 = findNthRecursive(78);
  // console.timeEnd("getNth Rec 78 JS");
  // console.log("JS Rec Get 78 Result > ", jsRecResult78);

  // console.time("getNth Rec 78 RS");
  // const rsRecResult78 = lib.find_nth_recursive(78);
  // console.timeEnd("getNth Rec 78 RS");
  // console.log("RS Rec Get 78 Result > ", rsRecResult78);
}

run();
