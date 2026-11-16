
const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};

const removeElements = (array, ...items) => {
  for (const item of items) {removeElement(array, item)};
};

const unique = (array) => {
    const result = [];

    for (const item of array) {
        if (!result.includes(item)) {
            result.push(item);
       }
    }
    return result;
};

const difference = (array1, array2) => {
  const result = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// removing an element
const arr1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(arr1, 5);
console.log(arr1); 

const cities1 = ['Kyiv', 'Odesa', 'Kharkiv', 'Donetsk', 'Dnipro'];
removeElement(cities1, 'Kharkiv');
removeElement(cities1, 'Amsterdam'); 
console.log(cities1);

// removing elements
const arr2 = [1, 2, 3, 4, 5, 6, 7];
removeElements(arr2, 5, 1, 6);
console.log(arr2); 

const cities2 = ['Kyiv', 'Beijing', 'Lima', 'Michigan'];
removeElements(cities2, 'Lima', 'Berlin', 'Kyiv');
console.log(cities2); 

// unique
console.log(unique([2, 1, 1, 3, 2]));
console.log(unique(['top', 'bottom', 'top', 'left'])); 

// difference
console.log(difference([7, -2, 10, 5, 0], [0, 10])); 
console.log(difference(['Paris', 'Kyiv'], ['Kyiv', 'London', 'Baghdad'])); 