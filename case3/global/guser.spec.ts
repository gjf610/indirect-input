import { it, expect, vi, afterEach } from 'vitest'
import { doubleUserAge, doubleHeight } from "./guser";
vi.mock("./window.ts", () => {
  return {
    innerHeightFn: () => 200
  }
})
it('double user age', () => {
  vi.stubGlobal("gjf", { age: 18 })
  const r = doubleUserAge()
  expect(r).toBe(36)
})

// it('double inner weight', () => {
//   vi.stubGlobal("innerHeight", 100)
//   const r = doubleHeight()
//   expect(r).toBe(200)
// })
it("doule innerHeightFn", () => {
  const r = doubleHeight()
  expect(r).toBe(400)
})
afterEach(() => {
  vi.unstubAllGlobals()
})

