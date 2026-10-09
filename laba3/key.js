'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, characters) => {
    let i;
    let randKey = '';
    for (i = 0; i < length; i++) {
        randKey += characters[Math.floor((Math.random()*characters.length))]
    }

    return randKey;
};

console.log(generateKey(32, characters));