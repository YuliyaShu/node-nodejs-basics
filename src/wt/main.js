import { Worker } from 'node:worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'node:fs/promises';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathToWorker = path.join(dirName, './worker.js');
const data = 11;
const worker = new Worker(pathToWorker, {
    workerData: data,
});

worker.on('message', msg => console.log(`Fibonacci result: ${msg[0]}`));
    worker.on('error', (err) => {
        throw new Error(err);
    });
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });

const performCalculations = async () => {
  worker.on('message', async msg => {
    const result = [];
    for (let i = 0; i < msg[1]; i += 1) {
      const pathToIWorker = path.join(dirName, `./worker${i}.js`);
      const workerCPU = new Worker(pathToIWorker);
      await writeFile(pathToIWorker, "import { parentPort } from 'node:worker_threads'; \n parentPort.on('message', msg => parentPort.postMessage(msg));");
      workerCPU.postMessage(10 + i);
      result.push(new Promise((res, rej) => {
        workerCPU.on('message', msg => res({ status: 'resolved', data: msg }));
        workerCPU.on('error', () => rej({ status: 'error', data: null }));
      }));
    }
    Promise.all(result).then((value) => {
      console.log('🚀 ~ Promise.all ~ value', value);
      process.exit();
    })
  })
};

await performCalculations();
