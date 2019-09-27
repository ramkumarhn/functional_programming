const R = require('ramda');


const person = {
    name: 'Terry',
    cats: [{
      name: 'Korin',
      age: 4
    }, {
      name: 'Sweep',
      age: 3
    }, {
      name: 'Catarina',
      age: 2
    }]
};

const double = x => x * 2;
const catsLens = R.lensProp('cats');
const ageLens = R.lensProp('age');
const getAgeDoubledCats = R.over(catsLens, R.map(R.over(ageLens, double)));
console.log(getAgeDoubledCats(person));

const game = {
    name: 'Candy Crush',
    genres: ['3 Piece Puzzle', 'Freemium Gold'],
    publisher: {
      name: 'Steel Crate Games',
      location: 'Ottawa'
    }
  };

const response = {
    statusCode: 200,
    body: game
};

const pubNameLens = R.lensPath(['publisher', 'name']);
const bodyLens = R.lensProp('body');

const trace = label => value => {
    console.log(`label: value`);
    return value;
};
const bodypubNameLens = R.compose(bodyLens, pubNameLens); // f . g = g(f(x))

const b = R.view(bodypubNameLens, response);
console.log(b);
console.log(R.view(pubNameLens, R.view(bodyLens, response) ));

const reverse = R.pipe(R.split(' '), R.reverse, R.map(R.reverse), R.join(' '));
const name = R.lensProp('name');
const publisherName = R.lensPath(['publisher', 'name']);
const genres = R.lensProp('genres');

const mods = [
    R.set(name, 'Alienation'),
    R.over(publisherName, R.toUpper),
    R.over(genres, R.map(reverse))
];
console.log(R.compose(...mods)(game));