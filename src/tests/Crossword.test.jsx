import { act, renderHook } from "@testing-library/react";
import { Crossword } from "../Crossword";
import { describe, test, expect } from "vitest";

const crosswordGrid = [
  { char: "", label: 1, status: "W" },
  { char: "", status: "W" },
  { char: "", label: 2, status: "W" },
  { char: "", status: "W" },
  { char: "", status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: ".", status: "W" },
  { char: ".", status: "W" },
  { char: ".", status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: "", label: 3, status: "W" },
  { char: "", status: "W" },
  { char: "", status: "W" },
  { char: "", status: "W" },
  { char: "", label: 4, status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: ".", status: "W" },
  { char: ".", status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: ".", status: "W" },
  { char: "", label: 5, status: "W" },
  { char: "", status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: ".", status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: ".", status: "W" },
  { char: ".", status: "W" },
  { char: "", status: "W" },
  { char: "", label: 6, status: "W" },
  { char: "", status: "W" },
  { char: "", status: "W" },
  { char: "", status: "W" },
  { char: "", status: "W" },
  { char: ".", status: "W" },
  { char: ".", status: "W" },
];

//Create your test here.
describe("Sample Test", () => {
  test("Testing Sample", () => {
    expect(true).toBe(true);
  });
});
