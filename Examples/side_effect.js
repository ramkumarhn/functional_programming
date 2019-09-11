/*jshint esversion: 9*/
// shared state
const obj = {
    val: 2
};

const inc = (x) => ({...x, val: x.val + 1});
const double = (x) => ({...x, val: x.val * 2});

let doubled = double(obj);

let incremented = inc(obj);

const user = {
    name: 'Ramkumar',
    role: 'TA',
    address: {
        company: 'Robosoft',
        city: 'Udupi'
    }
};

const changeCity = (user, city) => ({...user, address: {...user.address, city: city}});
const changeName = (user, name) => ({...user, name: name});

let cityChanged = changeCity(user, 'Bangalore');
let nameChanged = changeName(user, 'Ravikumar');

console.log(user);
console.log(cityChanged);
console.log(nameChanged);

