import { Transform } from 'stream';
const transform = async () => {
    try {
        process.stdout.write("Hello! Insert text. (To exit, press ctr+c) \n");
        process.on('SIGINT', () => {
            process.stdout.write('Buy!');
            process.exit();
        });
        process.stdin.on('data', data => {
            process.stdout.write(`Reversed text: ${data.reverse()}`);
            process.exit();
        })
    } catch (err) {
        if (err) throw new Error(err);
    } 
};

await transform();