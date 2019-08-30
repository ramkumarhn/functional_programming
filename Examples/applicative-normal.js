function square(x) {
    return x * x;
}
// x^2 + y^2
function sum_of_squares(x, y) {
    return square(x) + square(y);
}

function f(a) {
    return sum_of_squares(a + 1, a * 2);
}
/*
    Applciative order
    f(5)
    sum_of_squares(5 + 1, 5 * 2)
    sum_of_squares(6, 10)
    square(6) + square(10)
    (6 * 6) + square(10)
    36 + square(10)
    36 + (10 * 10)
    36 + 100
    136
*/

/*
    Normal Order
    f(5)
    sum_of_squares(5 + 1, 5 * 2)
    square(5 + 1) + square(5 * 2)
    (5 + 1)  * (5 + 1)  + (5 * 2) * (5 * 2)
    6 * (5 + 1)  + (5 * 2) * (5 * 2)
    36  + (5 * 2) * (5 * 2)
    36 + 10 * (5 * 2)
    36 + 10 * 10
    36 + 100
    136
*/