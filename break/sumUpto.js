/* 
Write a while loop that adds numbers starting from 1, but stops (using break) 
as soon as the sum reaches or exceeds 100
*/
let sum = 0; 
let num = 1;

while (true) {
    sum += num;
    if (sum >= 100) {
        break;
    }
    num++;
}
console.log(sum);  
console.log(num);  