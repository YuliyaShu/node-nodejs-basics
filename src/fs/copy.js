import { readdir, mkdir, copyFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(dirName, '/files');
const pathToNewFolder = path.join(dirName, '/files_copy');

const copy = async () => {
    try {
        const files = await readdir(pathToFolder); 
        await mkdir(pathToNewFolder);
        for (const file of files) {
            await copyFile(path.join(pathToFolder, file), path.join(pathToNewFolder, file));
        }
    } catch (err) {
        if (err) throw new Error('FS operation failed');
    }
};

copy();
