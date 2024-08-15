
import { userAge, fetchUserAge } from './user';

import { beforeEach, vi, it, expect, describe } from 'vitest'
import { doubleUserAge, fetchDoubleUserAge } from './index';
// 要控制间接 input 的值（user userAge）
// 替换掉真实的逻辑实现
vi.mock("./user", () => {
  return {
    userAge: () => 4,
    fetchUserAge: () => Promise.resolve(4)
  }
})

// vi.mock("./user")

describe('间接 input', () => {
  // beforeEach(() => {
  //   vi.doMock("./user", () => {
  //     return { userAge: () => 4 }
  //   })
  // })
  it('first', () => {
    // given
    // vi.mocked(userAge).mockReturnValue(4)
    // const { doubleUserAge } = await import("./index");

    // when
    const r = doubleUserAge()
    // then
    expect(r).toBe(8)
  })
  it('second', () => {
    // vi.mocked(userAge).mockReturnValue(10)

    console.log(userAge())
  })
  it('third', async () => {
    // when
    const r = await fetchDoubleUserAge()
    // then
    expect(r).toBe(8)
  })
})