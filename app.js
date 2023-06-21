console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let number = 1; number <= 100; number++){
    if( number % 2 !== 0){
        console.log(number)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let number = 1; number <= 100; number++){
    if( number % 5 === 0 && number % 3 === 0)
    {
        console.log("FIZZBUZZ");
    }
    else if (number % 5 === 0)
    {
        console.log("FIZZ")
    }
    else if ( number % 3 === 0)
    {
        console.log("BUZZ")
    }
    else
    {
        console.log("NADA")
    }
}

// Exercise 3 Section
let num = 1
while(num <= 100)
{
 if ( num % 2 !== 0)
 {
 console.log(num)
}
num++;
}

let number =1;
do
{
if(number % 5 === 0 && number % 3 === 0)
{
console.log('FIZZBUZZ')
}
else if ( number % 5 === 0)
{
    console.log('BUZZ')
}
else if ( number %  3 === 0){
    console.log('FIZZ');
}
else{
    console.log('NADA');
}
number++;
}
while (number <= 100);


let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = false;

for( let i = 1; i<=n; i++){
    if(i === value){
        console.log("found value!");
        found = true;
        break;
    }
}

if (!found){
    console.log("Did not find value.")
}