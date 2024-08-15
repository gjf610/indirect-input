import { it, expect, describe, vi } from 'vitest'
import { doubleUserAge, doubleGetUserAge } from "./use-class";
import { User } from "./User";
vi.mock("./User", () => {
  return {
    User: class User {
      age: number = 2;
    }
  }
})

describe('使用class的形式', () => {
  it('属性', () => {
    const r = doubleUserAge()
    expect(r).toBe(4)
  })
  it('方法', () => {
    User.prototype.getAge = () => {
      return 2
    }
    const r = doubleGetUserAge()
    expect(r).toBe(4)
  })
})