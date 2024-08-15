// import { readFileSync } from "fs";

// export class ReadAndProcessFile {
//   run(filePath: string) {
//     const content: string = readFileSync(filePath, { encoding: "utf-8" });
//     return content + "-> test unit"
//   }
// }

export interface FileReader {
  read(filePath: string): string
}
export class ReadAndProcessFile {
  private _fileReader: FileReader;

  constructor(fileReader: FileReader) {
    this._fileReader = fileReader
  }
  run(filePath: string) {
    const content: string = this._fileReader.read(filePath);
    return content + " -> test unit"
  }
}