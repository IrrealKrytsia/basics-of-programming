'use strict';

const ip = "127.0.0.1";
const numerify_IP_To_Int = (ip) => {
    return ip.split('.')
        .map(str => Number(str))
        .reduce((acc, byte) => (acc << 8) + byte, 0);

};


console.log(numerify_IP_To_Int("10.0.0.1"));
console.log(numerify_IP_To_Int('192.168.1.10'));