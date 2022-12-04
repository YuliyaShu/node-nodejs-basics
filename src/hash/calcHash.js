import { createHash } from 'node:crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs/promises';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(dirName, '/files');
const fileName = 'fileToCalculateHashFor.txt';
const pathToFile = path.join(pathToFolder, fileName);
const fileContent = await readFile(pathToFile);
const hash = createHash('sha256');

const calculateHash = async () => {
    hash.update(fileContent);
    console.log(hash.digest('hex')); 
};

await calculateHash();