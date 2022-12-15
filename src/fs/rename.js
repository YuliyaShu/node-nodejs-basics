import { readdir, rename as renameFs } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(dirName, '/files');
const fileOldName = 'wrongFilename.txt';
const fileNewName = 'properFilename.md';
const pathToOldFile = path.join(pathToFolder, fileOldName);
const pathToNewFile = path.join(pathToFolder, fileNewName);

const rename = async () => {
    try {
        const files = await readdir(pathToFolder);
        (!files.includes(fileOldName)) ? err : await renameFs(pathToOldFile, pathToNewFile);     
    } catch (err) {
        if (err) throw new Error('FS operation failed');
    } 
};

await rename();
