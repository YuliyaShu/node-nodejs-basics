import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const pathToFolder = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files');
const pathToFresh = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fresh.txt');
const textToFresh = 'I am fresh and young';
const create = async () => {
    fs.readdir(pathToFolder, (err, files) => {
        if (err) throw err;
        if (files.includes('fresh.txt')) {
            throw new Error('FS operation failed');
        } else {
            fs.appendFile(pathToFresh, textToFresh, (err) => {
                if (err) throw err;
            } )
        };  
    });
};

await create();