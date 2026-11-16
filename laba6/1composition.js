const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new Error('All pipe arguments should be functions');
        }
    }
    return x => fns.reduce((acc, curr) => fn(acc), x);
}


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);   
const x1 = f(5);
console.log(x1);

const f1 = pipe(inc, inc);
const x2 = f1(7);
console.log(x2);