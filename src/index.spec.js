import { expect, test } from "vitest";
import { sayHelloTo } from ".";

test("sayHelloTo should return hello and the name passed in", () => {
  expect(sayHelloTo("Sam")).toBe("Hello Sam");
});
