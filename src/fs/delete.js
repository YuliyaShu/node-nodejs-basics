import { readdir, rm } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(dirName, '/files');
const fileName = 'fileToRemove.txt';
const pathToFile = path.join(pathToFolder, fileName);

const remove = async () => {
    try {
        const files = await readdir(pathToFolder);
        (!files.includes(fileName)) ? err : await rm(pathToFile);     
    } catch (err) {
        if (err) throw new Error('FS operation failed');
    }  
};

await remove();