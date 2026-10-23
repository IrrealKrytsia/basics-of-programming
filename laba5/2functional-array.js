const array = () => {
    const items = [];
    const a = (index) => {
        return items[index];
    }
    a.push = (value) => {
        return items.push(value);
    }
    a.pop = () => {
        return items.pop();
    }

    return a;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2)); 

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());