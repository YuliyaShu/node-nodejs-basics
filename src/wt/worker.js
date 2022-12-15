import { parentPort, workerData } from 'node:worker_threads';
import os from 'node:os';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
const countOfWorkers = os.cpus().length;
const sendResult = () => parentPort.postMessage([nthFibonacci(workerData), countOfWorkers]);

sendResult();
