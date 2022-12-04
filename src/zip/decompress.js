import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createUnzip } from 'node:zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const fileName = 'fileToCompress.txt';
const fileZipName = 'archive.gz'
const pathToFolder = path.join(dirName, '/files');
const pathToFile = path.join(pathToFolder, fileName);
const pathToZipFile = path.join(pathToFolder, fileZipName);

const decompress = async () => {
    const unzip = createUnzip();
    const sourceFIleStream = createReadStream(pathToZipFile);
    const destinationFileStream = createWriteStream(pathToFile);

    pipeline(sourceFIleStream, unzip, destinationFileStream, (err) => {
        if (err) {
            throw new Error(err);
        }
    }) 
};

await decompress();