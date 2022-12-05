import { readdir, rm } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(dirName, '/files');

const list = async () => {
    try {
        const files = await readdir(pathToFolder);
        console.log('🚀 ~ list ~ files', files);
        
    } catch (err) {
        if (err) throw new Error('FS operation failed');
    }  
};

await list();
