import { renderHook } from "@testing-library/react";
import { HelloWorld } from "../HelloWorld";
import { describe, test, expect, it } from "vitest";

//Create your test here.
describe("Sample Test", () => {
  test("Testing Sample", () => {
    expect(true).toBe(true);
  });
});

describe("Hello World test", () => {
  test("Hello World", () => {
    const { result } = renderHook(HelloWorld);
    expect(result.current.text).toBe("Hello World");
  });
});
