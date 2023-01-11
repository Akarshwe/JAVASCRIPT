const num = prompt("Enter a positive numnber : ");
console.log(`the factor of ${num} is :`);
for (let i = 1; i <= num; i++){
    if (num % i == 0){
        console.log(i);
    }
}