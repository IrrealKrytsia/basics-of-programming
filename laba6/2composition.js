const compose = (...fns) => {
  const reversed = [...fns].reverse();
  const events = { error: [] };

  const pushError = (err) => {
    for (const event of events.error) {
      try {
        event(err);
      } catch {
        
      }
    }
  };

  const composed = (x) => {
    try {
      return reversed.reduce((acc, fn) => {
        if (typeof fn !== 'function') {
          throw new TypeError(`${String(fn)} is not a function!`);
        }
        return fn(acc);
      }, x);
    } catch (err) {
      pushError(err);
      return undefined;
    }
  };

  composed.on = (name, event) => {
    if (name === 'error' && typeof event === 'function') {
      events.error.push(event);
    }
    return composed;
  };

  return composed;
};


const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f1 = compose(inc, twice, cube);
console.log(f1(5)); 

const f2 = compose(inc, inc);
console.log(f2(7)); 

const f3 = compose(inc, 7, cube);
f3.on('error', (e) => console.log("Error:", e.message));
console.log(f3(1)); 
