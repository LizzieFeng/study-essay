const o = {
    a: 1,
    b: 2
};

const handler = {
    get: function(obj, prop) {
        console.log('handler.get => obj, prop', obj, prop);
        return obj[prop];
    }
};

const p = new Proxy(o, handler);

const a = p.a;