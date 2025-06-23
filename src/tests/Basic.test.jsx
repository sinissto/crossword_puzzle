import { describe, test, expect } from "vitest";

function sum(x, y) {
  return x + y;
}

//Create your test here.
describe("Sample Test", () => {
  test("Testing Sample", () => {
    expect(true).toBe(true);
  });
});

describe("Sum test", () => {
  test("Testing Sum", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
