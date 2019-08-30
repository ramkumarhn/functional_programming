// λx.x 
function identity(x) {
    return x;
}
//λa. (λb.a)
function True(first, second) {
    return first;
}
  

function False(first, second) {
    return second;
}

function cond(pred, expr1, expr2) {
    return pred(expr1, expr2);
}
function Or(exp1, exp2) {
    return exp1(exp1, exp2);
}

function And(exp1, exp2) {
    return exp1(exp2, exp1);
}

console.log(cond(False, 'Hello', 'World'));
console.log(cond(Or(True, False), 'Hello', 'World'));
 console.log(cond(Or(False, True), 'Hello', 'World'));

console.log('================AND Truth table==================');
console.log(And(True, True));
console.log(And(True, False));
console.log(And(False, True));
console.log(And(False, False));

console.log('================OR Truth table==================');
console.log(Or(True, True));
console.log(Or(True, False));
console.log(Or(False, True));
console.log(Or(False, False));


