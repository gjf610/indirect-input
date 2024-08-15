export interface FileReader {
  read(filePath: string): string
}


export function readAndProcessFile(filePath: string, fileReader: FileReader): string {
  const content: string = fileReader.read(filePath);
  return content + " -> test unit"
}