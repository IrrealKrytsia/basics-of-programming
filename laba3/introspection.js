'use strict';

const iface = {
      m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
}

const introspection = (iface) => {
    let extArr = [];
    

    for (const key of Object.keys(iface)) {
        if (typeof iface[key] === 'function') {
            extArr.push([key, iface[key].length]);
        }
    }

    return extArr;
}

console.log(introspection(iface));
