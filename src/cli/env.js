const parseEnv = () => {
    process.env.RSS_foo='bar';
    process.env.RSS_bar='baz';
    const obj = process.env;
    Object.entries(obj).forEach(([key, value]) => {
        if (key.startsWith('RSS_')) {
            console.log(`${key}=${value}`);
        }
    })
};

parseEnv();