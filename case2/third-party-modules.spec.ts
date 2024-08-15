import { test, expect, vi } from 'vitest'
import { doubleUserAge } from './third-party-modules';
import axios from 'axios';

vi.mock("axios")
test('第三方模块的处理 axios', async () => {
  // vi.mocked(axios).mockResolvedValue({ name: 'gjf', age: 2 })
  vi.mocked(axios.get).mockResolvedValue({ name: 'gjf', age: 2 })

  const r = await doubleUserAge()

  expect(r).toBe(4)
})


