const R = require('ramda');
const isEven = x => x % 2 == 0;

console.log(R.map(x => x * 2, [1, 2, 3]));
console.log(R.filter(isEven, [1, 2, 3, 4, 5, 6, 7]));
console.log(R.reject(R.complement(isEven), [1, 2, 3, 4, 5, 6, 7]));

const peter = {
    country: 'India',
    naturalisationDate: null,
    age: 21,
    hasValidPassport: true
};

const OUR_COUNTRY = 'India';
const ourCountry = person => person.country === OUR_COUNTRY;
const isLegalAge = person => person.age >= 18;
const hasPassport = person => person.hasValidPassport;
const isNaturalised = person => R.Boolean(person.naturalisationDate);
const isCitizen = R.anyPass([ourCountry, isNaturalised, hasPassport]);
const canVote = R.allPass([isCitizen, isLegalAge]);

console.log(canVote(peter));

const operate = R.pipe(
    (x, y) => x + y,
    x => x + 1,
    x => x * x
);

console.log(operate(2, 3));

const cart = [
    {
        item: 'Pen',
        qty: 2,
        price: 2.5
    },
    {
        item: 'Pencil',
        qty: 1,
        price: 1.5
    },
    {
        item: 'Paper',
        qty: 10,
        price: 0.5
    }
];
const DISCOUNT = 0.1;
const TAX = 0.2;
const computePrice = R.pipe(
    x => R.reduce((acc, each) => acc + each.qty * each.price, 0, x),
    total => total - total * DISCOUNT,
    total => total + total * TAX
);

console.log(computePrice(cart));

console.log(R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']));      //=> ['a', 'B', 'c', 'd']

