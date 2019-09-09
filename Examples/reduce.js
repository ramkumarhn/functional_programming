function reduce(iterable, reduceFn, accumulator) {
    for (let each of iterable) {
        accumulator = reduceFn(accumulator, each);
    }
    return accumulator;
}

console.log(reduce([1, 2, 3, 4], (acc, each) => acc + each, 0));
console.log(reduce([20, 30, -10, 45, 5], (acc, each) => Math.max(acc, each), 0));
console.log(reduce(new Set([20, 10 , -5, 100]), (acc, each) => Math.min(acc, each), 0));
let currencyMap = new Map([
    ['India', 70.0],
    ['UK', 30.0],
    ['Japan', 120.5]]
);
let least = reduce(currencyMap, (acc, each) => acc < each[1] ? acc : each, currencyMap.entries().next().value);
console.log(least);

let data = [
    {
      country: 'China',
      pop: 1409517397,
    },
    {
      country: 'India',
      pop: 1339180127,
    },
    {
      country: 'USA',
      pop: 324459463,
    },
    {
      country: 'Indonesia',
      pop: 263991379,
    }
  ];

  console.log('Population ' +  reduce(data, (acc, each) => each.country === 'China' ? acc : acc + each.pop, 0));