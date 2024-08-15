import { config } from "./config";

export function tellAge() {
  if (config.allowTellAge) {
    return 18
  }
  return "无所谓啦~~"
}

export function tellByFunction() {
  return config.getAge() === 28 ? "yes" : "no"
}