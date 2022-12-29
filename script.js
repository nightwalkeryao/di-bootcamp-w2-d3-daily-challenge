// Daily Challenge: Stars

// 1. Write a JavaScript program that recreates the pattern below.
// 2. Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).

// with one loop
for(let i = 1; i <= 6; i++)
    console.log(`* `.repeat(i));


// with two nested loops
for(let i = 1; i <= 6; i++) {
    let str = ''
    for(let j = 0; j < i; j++){
        str += `* `
    }
    console.log(str)
}