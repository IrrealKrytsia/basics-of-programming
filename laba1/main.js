'use strict';


/////// task 1
function inc (n) {
    if (typeof n !== 'number') throw new Error('Result should be Number');
    return n + 1;
}

const a = 5;
const b = inc(a);
console.dir({a, b});



//////// task 2
// Перевірку на те, чи є n числом, не робив, тому що в умовах задачі не вказано якого типу властивість об'єкту n
function inc1 (num){ // Оскільки в умові задачі не достатньо указано які дані будуть прийматися, буде перевірка на валідність даних оскільки не описано, що саме має виконуватися в такому випадку
    if (num == null || typeof num !== 'object' || num.n == undefined && typeof n !== 'number'){
        throw new Error('Invalid object type');
    }

    num.n = inc(num.n); 
}

const obj = { n: 5 }; 
inc1(obj); 
console.dir(obj);

///////// task 3
const arr = [false, 'mediocre', 193, true, false, 9, 'fantastic', 123, 0, true, true, true, '02', 100000, 'here', false, 'late'];
const obj1 = { number: 0, string: 0, boolean: 0 };


for (const element of arr) {
    const type = typeof element;
    obj1[type]++;
}

console.dir(obj1);

///////// task 4
const obj2 = {};

for (const element of arr) {
    const type = typeof element;

    if (obj2[type] === undefined) {
        obj2[type] = 0;
    }

    obj2[type]++;
}

console.log(obj2);