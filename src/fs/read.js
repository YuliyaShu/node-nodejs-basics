import { readFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(dirName, '/files');
const fileName = 'fileToRead.txt';
const pathToFile = path.join(pathToFolder, fileName);

const read = async () => {
    try {
        const content = await readFile(pathToFile, { encoding: 'utf8' });
        console.log('🚀 ~ read ~ content', content);
    } catch (err) {
        if (err) throw new Error('FS operation failed');
    }  
};

await read();