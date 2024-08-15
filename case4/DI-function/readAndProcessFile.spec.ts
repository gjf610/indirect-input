import { it, expect, describe } from 'vitest'
import { readAndProcessFile, FileReader } from './readAndProcessFile';
describe('di function', () => {
  it('read and process file', () => {
    class StubFileReader implements FileReader {
      read(filePath: string) {
        return "gjf"
      }
    }

    const r = readAndProcessFile("./test", new StubFileReader())

    expect(r).toBe("gjf -> test unit")
  })
})