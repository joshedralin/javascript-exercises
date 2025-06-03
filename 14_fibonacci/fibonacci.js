const fibonacci = function(num) {
    num = Number(num);
    if (num === 0) return 0;
    if (num < 0) return 'OOPS';

    let secondPrev = 0;
    let firstPrev = 1;
    for (let i = 2; i <= num; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }
    return firstPrev;
};

//1, 1, 2, 3, 5, 8,

// Do not edit below this line
module.exports = fibonacci;
