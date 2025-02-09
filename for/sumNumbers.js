/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */

let sum = 0;
for(let i = 91; i<=129; i+=2){
    console.log(i);
    sum = sum+i;
}
console.log("sum of all the odd numbers from 91 to 129 is :", sum);

/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */
let sum =0;
for(let a = 51; a <=85; a= a+1){
    if(a% 2==0){
        console.log(a);
    }
    sum= sum+a;  
}
console.log("sum of all the even numbers from 51 to 85:", sum)
