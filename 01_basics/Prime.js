//program to check for a prime number
const read= require('readline');
const r= read.createInterface(
    {
        input: process.stdin,
        output:process.stdout

    }
);
r.question("Enter the number to be checked", function readInput(m)
{
    let count =0;
    let n= Number.parseInt(m);
    for (let a=1;a<=n;a++)
    {
        if(n%a==0)
            count++;
    }
    if(count==2)
        console.log(n+" is a Prime numrber");
    else 
        console.log(n+" is not a Prime numrber");
    r.close();
});