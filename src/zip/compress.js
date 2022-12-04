import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { createGzip } from 'node:zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const fileName = 'fileToCompress.txt';
const fileZipName = 'archive.gz'
const pathToFolder = path.join(dirName, '/files');
const pathToFile = path.join(pathToFolder, fileName);
const pathToZipFile = path.join(pathToFolder, fileZipName);

const compress = async () => {
    const zip = createGzip();
    const sourceFIleStream = createReadStream(pathToFile);
    const destinationFileStream = createWriteStream(pathToZipFile);

    pipeline(sourceFIleStream, zip, destinationFileStream, (err) => {
        if (err) {
            throw new Error(err);
        }
    })
};

await compress();