/*
√x = the y such y ≥ 0 and y^2 = x
*/

/*
function sqrt(x) {
    return the y with y >= 0 && square(y) == x;
}
*/

/*
    Algorithm:
    sqrt(2)
    Guess       Quotient (Number / Guess)       Average ((Quotient + Guess) / 2)
    1           2/1 = 2                         (2 + 1)/2 = 1.5
    1.5         2/1.5 = 1.3333                  (1.3333 + 1.5) / 2 = 1.4167
    1.4167      2/1.4167 = 1.4118               (1.4118 + 1.4167) / 2 = 1.4142
    1.4142      ...                             ...
*/



function average(a, b) {
    return (a + b) / 2.0;
}

function square(x) {
    return x * x;
}

function abs(x) {
    return x > 0 ? x : -x;
}

function sqrt(x) {
    function sqrt_iter(guess) {
        return good_enough(guess) ?
          guess: 
          sqrt_iter(improve(guess));
    }
    
    function improve(guess) {
        return average(guess, x / guess);
    }

    function good_enough(guess) {
        return abs(square(guess) - x) < 0.001;
    }
    return sqrt_iter(1);
}

console.log(sqrt(2));