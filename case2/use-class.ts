import { User } from "./User";

export function doubleUserAge(): number {
  const user = new User()

  return user.age * 2
}
export function doubleGetUserAge() {
  const user = new User()

  return user.getAge() * 2
}