import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { doubleUserAge } from "./env";

afterEach(() => {
  vi.unstubAllEnvs()
})

it('process', () => {
  vi.stubEnv("USER_AGE", "8")
  const r = doubleUserAge()
  expect(r).toBe(16)
})

