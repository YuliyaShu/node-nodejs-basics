const parseEnv = () => {
    const obj = process.env;
    obj.RSS_foo='bar';
    obj.RSS_bar='baz';
    Object.entries(obj).forEach(([key, value]) => {
        if (key.startsWith('RSS_')) {
            console.log(`${key}=${value}`);
        }
    })
};

parseEnv();