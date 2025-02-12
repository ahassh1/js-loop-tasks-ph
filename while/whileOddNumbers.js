/***
Subtask-1:

Display sum of all the odd numbers from 81 to 131.
 */

let sum =0;
let i = 81;
while(i<=131){
    if(i % 2!==0){
        console.log(i);
    }
    i ++;  
    sum =sum +i;
    }
    console.log("the total numbers are :",sum);

/***
Subtask-2:

Display sum of all the even numbers from 206 to 311.
 */

let total = 0;
let i =81;
while(i<=131){
    if(i%2==0){
        console.log(i);
    }
    i+=1;
    total=total+i;
}
console.log("the even number of the sum is:", total);
