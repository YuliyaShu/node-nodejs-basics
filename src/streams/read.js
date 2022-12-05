import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const fileName = 'fileToRead.txt';
const pathToFolder = path.join(dirName, '/files');
const pathToFile = path.join(pathToFolder, fileName);

const read = async () => {
    try {
        const stream = createReadStream(pathToFile, 'utf-8');
        stream.on('data', (data) => process.stdout.write(data));
    } catch (err) {
        if (err) throw new Error(err);
    }
};

await read();
