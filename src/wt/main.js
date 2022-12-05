import { Worker } from 'node:worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToWorker = path.join(dirName, './worker.js');
const data = 11;
const worker = new Worker(pathToWorker, {
    workerData: data,
});
worker.on('message', msg => console.log(`Fibonacci result: ${msg}`));
    worker.on('error', (err) => {
        throw new Error(err);
    });
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });

const performCalculations = async () => {
    
};

await performCalculations();