export default function count(x, y) {
    return x - y;
}

export default function sum(...args) {
    return args.reduce((p, c) => p + c, 0);
}
