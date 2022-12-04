import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(dirName, '/files');
const pathToFile = path.join(pathToFolder, '/fresh.txt');
const textToFresh = 'I am fresh and young';

const create = async () => {
    fs.readdir(pathToFolder, (err, files) => {
        if (err) throw err;
        if (files.includes('fresh.txt')) {
            throw new Error('FS operation failed');
        } else {
            fs.writeFile(pathToFile, textToFresh, (err) => {
                if (err) throw err;
            } )
        };  
    });
};

await create();