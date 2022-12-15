const parseArgs = () => {
    const arr = process.argv
        .slice(2)
        .map((item) => (item.startsWith('--')) 
            ? item.slice(2) 
            : item);
    for (let i = 0; i < arr.length; i += 2) {
        console.log(`${arr[i]} is ${arr[i + 1]}`)
    }
};

parseArgs();
