import { readdir, writeFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(dirName, '/files');
const pathToFile = path.join(pathToFolder, '/fresh.txt');
const textToFresh = 'I am fresh and young';

const create = async () => {
    try {
        const files = await readdir(pathToFolder); 
        (files.includes('fresh.txt')) ? err : await writeFile(pathToFile, textToFresh);  
        
    } catch (err) {
        if (err) throw new Error('FS operation failed');
    }
};

await create();
