'use strict';

const forLoop = (...args) => {
    let value = 0;
    for (let i = 0; i < args.length; i++) {
        value += args[i];
    }
    return value;
};

const forOfLoop = (...args) => {
    let value = 0;
    for (let i of args){
        value += i;
    } 
    return value;
};

const whileLoop = (...args) => {
    let value = 0;
    let i = 0;

    while(i < args.length){
        value += args[i];
        i++;
    }
    return value;
};

const doWhileLoop = (...args) => {
    let value = 0;
    let i = 0;

    do {
        value += args[i];
        i++;
    } while (i < args.length);
    return value;
};

const withReduce = (...args) => {
    return args.reduce((acc, cur) => acc + cur, 0);
};

const a = forLoop(1, 2, 3);
const b = forOfLoop(50, 0, 3);
const c = whileLoop(3, 4, 5);
const d = doWhileLoop(1, 1, 1);
const e = withReduce(700, 500, 300, 100, 0);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);