/*
function sum_integers(a, b) {
    return a > b ? 0 : a + sum_integers(a + 1, b);
}

function sum_cubes(a, b) {
    return a > b ? 0 : cube(a) + sum_cubes(a + 1, b);
}
function cube(x) {
    return x * x * x;
}

function pi_sum(a, b) {
    return a > b ? 0 : 1.0 / (a * (a + 2)) + pi_sum(a + 4, b);
}*/



function sum_integers(a, b) {
    return sum(a, x => x, x => x + 1, b);
}

function sum_cubes(a, b) {
    return sum(a, x => x * x * x, x => x + 1, b);
}

function pi_sum(a, b) {
    function pi_term(a) {
        return 1.0 / (a * (a + 2));
    }

    function pi_next(a) {
        return a + 4;
    }

    return sum(a, pi_term, pi_next, b);

}
function sum(a,term, next,  b) {
    return a > b ? 0: term(a) + sum(next(a), term, next, b);
}

// pi_sum = 1/1*3 + 1/5*7 + 1/9*11 + …..
console.log(sum_integers(1, 10));
console.log(sum_cubes(1, 3));
console.log(pi_sum(1, 1000) * 8);