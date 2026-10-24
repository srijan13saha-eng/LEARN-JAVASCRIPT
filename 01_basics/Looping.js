//creating a loopng statement
//printing the sum of first n natural numbers
const read= require('readline'); // readline is the default module in node.js which is used to take input from the user and display output on the console
const r1= read.createInterface({
    input : process.stdin,
    output: process.stdout});
    r1.question("Enter the value of n:", function readInput(m){/*readInput() is the callback function which will be called and is 
        used essentially so that the program knows when to pass the value of input after the user has enetered it and pressed enter*/
        let sum =0
        console.log(typeof((m))+" is the type of the input");
let n= Number.parseInt(m);// explaining the above line: the input taken from the user is of type string and we need to convert it into number so that we can perform arithmetic operations on it. Hence we use Number.parseInt() method to convert the string into number

for (let a=1; a<=n; a++)
{
 sum+=a;
}
console.log("The sum of the first "+n+ " natural numbers is "+ sum);
    
    r1.close();
})



