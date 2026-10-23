const seq = (f) => (g) => {
  if (typeof g === 'number') {
    return f(g);
  }
  
  return seq((x) => f(g(x)));
};

const firstSeq = seq(x => x + 7)
  (x => x * 2)(5);

const secondSeq = seq(x => x * 2)
  (x => x + 7)(5);

const thirdSeq = seq(x => x + 1)
  (x => x * 2)
  (x => x / 3)
  (x => x - 4)(7);

console.log(firstSeq, secondSeq, thirdSeq);