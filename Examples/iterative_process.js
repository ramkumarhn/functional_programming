function factorial(n) {
    return n == 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));

// product = count * product
// count = count + 1
function fact_iter(product, count, max_count) {
    return count > max_count ? product : fact_iter(count * product, count + 1, max_count);
}

function factorial1(n) {
    return fact_iter(1, 1, n);
}

console.log(factorial1(5));