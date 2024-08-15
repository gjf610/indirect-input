import { it, expect, describe } from 'vitest'
import { ReadAndProcessFile, FileReader } from "./readAndProcessFile";

describe('di class', () => {
  it('构造函数', () => {
    class StubFileReader implements FileReader {
      read(filePath: string): string {
        return "gjf"
      }
    }

    const readAndProcessFile = new ReadAndProcessFile(new StubFileReader())

    expect(readAndProcessFile.run("./text")).toBe("gjf -> test unit")
  })
  it('属性', () => {

  })
  it('方法', () => {

  })
})