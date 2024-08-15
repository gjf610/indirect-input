import { it, expect, vi } from 'vitest'
import { doubleUserAge } from "./user";

it('double user age', () => {
  vi.stubEnv("VITE_USER_AGE", "2")
  const r = doubleUserAge()
  expect(r).toBe(4)
  vi.unstubAllEnvs()
})

