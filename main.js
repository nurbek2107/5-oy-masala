// 1-masala 98
// function func(a, b, c) {
//     if (a + b > c && b + c > a && a + c > b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(func(2, 3, 4));

// 2-masala 99
// let a = 2
// let b = 11
// const arr = []
// function func(a,b) {
//     for (let i = a; i < b; i++){
//         arr.push(i)
//     }
// }
// func(a, b)
// console.log(arr)

// 3-masala 100

// function func(a) {
//     const [tag, n] = a.split('*');
//     return Array.from({ length: parseInt(n) }, () => `<${tag}></${tag}>`).join('');
// }

// console.log(func("div*4"));


// 4-masala 101

// let a = 10
// function func(a) {
//     sum = 0
//     for (let i = 0; i <= a; i++)
//     {
//         sum += i
//     }
//     console.log(sum)
// }
// func(a)

// 5-masala 102
// let a = 4
// let obj = {
//     min: 1, max: 5
// }
// function func(a, obj) {
//     if (a <= obj.min  ||  a >= obj.max) {
//         return false
//     }
//     else {
//         return true
//     }
// }
// console.log(func(a, obj));

// 6-masala 103
// function func(n) {
//     const square = n * n;
//     const lastDigit = square % 10;
//     return lastDigit === n;
// }

// console.log(func(6));

// 7-masala 104
// function func(arr) {
//     return arr.map((element, index) => element + index);
// }

// console.log(func([5, 4, 3, 2, 1]));

// 8 - masala 105
// function func(arr) {
//     return arr.filter(item => item !== "cola" && item !== "fanta");
// }

// console.log(func(["fanta", "cola", "water"]));
// console.log(func(["fanta", "cola"]));
// console.log(func(["lemonade", "beer", "water"]));

// 9 - masala 106
// function func(arr) {
//     return String(arr).length
// }
// console.log(func(123));

//  10- masala 107
