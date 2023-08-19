let num = 110;
let a = 0;
let b = 1;
let sum = a + b;
while(sum <= num) {
    console.log(sum);
    a = b;
    b = sum;
    sum = a + b;
}