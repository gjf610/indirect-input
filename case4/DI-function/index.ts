import { readAndProcessFile, FileReader } from "./readAndProcessFile";
import { readFileSync } from "fs";

class TxtFileReader implements FileReader {
  read(filePath: string) {
    return readFileSync(filePath, { encoding: "utf-8" })
  }
}

const result = readAndProcessFile("example.txt", new TxtFileReader())

console.log(result)