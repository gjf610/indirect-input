import { it, expect, describe, vi } from 'vitest'
import { tellName } from "./use-variable";

vi.mock("./config", async (importOriginal) => {
  const config = await importOriginal()
  return {
    ...config as any,
    name: 'wang'
  }
})
describe('使用变量的形式', () => {
  it('tell name', () => {
    const r = tellName()
    expect(r).toBe("wang, nice!")
  })
})