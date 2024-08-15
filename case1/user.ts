export function userAge() {
  // api
  // return user.age
  return 28
}

export function fetchUserAge(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(28)
    }, 0)
  })
}
