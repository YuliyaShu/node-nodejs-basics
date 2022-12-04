import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const fileName = 'fileToWrite.txt';
const pathToFolder = path.join(dirName, '/files');
const pathToFile = path.join(pathToFolder, fileName);

const write = async () => {
    try {
        const stream = createWriteStream(pathToFile);
        process.stdout.write("Hello! Insert text. (To exit, press ctr+c) \n");
        process.on('SIGINT', () => {
            process.stdout.write('Buy!');
            process.exit();
        });
        process.stdin.on('data', data => stream.write(data.toString()));
    } catch (err) {
        if (err) throw new Error(err);
    }
};

await write();