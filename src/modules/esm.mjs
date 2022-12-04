import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import './files/c.js';

const fileName = fileURLToPath(import.meta.url)
const dirName = path.dirname(fileName);
const pathToFileA = path.join(dirName, '/files/a.json');
const pathToFileB = path.join(dirName, '/files/b.json');

const fileA = JSON.parse(await readFile(pathToFileA));
const fileB = JSON.parse(await readFile(pathToFileB));
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = fileA;
} else {
    unknownObject = fileB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileName}`);
console.log(`Path to current directory is ${dirName}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };

