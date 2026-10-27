//using recursion to solve the clash bw the asynchronous function and the synchronous function
let cn=4

const read= require('readline')
     const r1= read.createInterface(
     {
        input:process.stdin,
        output: process.stdout
     });
function c()
{
r1.question("Enter the number", function call(m){
    let n=Number.parseInt(m);
    if (n==cn)
    {
        console.log("Entered the correct number")
        r1.close();

    }
    else
        c();

    
});
}
c()