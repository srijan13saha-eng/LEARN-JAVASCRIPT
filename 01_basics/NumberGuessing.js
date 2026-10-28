//program to build a number guessing game 
let a= Math.floor(Math.random()*100)+1;
const read= require('readline')
const r = read.createInterface({
    input : process.stdin,
    output : process.stdout
})
let count=0
function RepeatInput()
{
    r.question("Enter the number :", function call(m){
        let i =Number.parseInt(m);
        if(i==m)
        {
        if(i>a)
        {
            console.log("Too High! Try again" )
            count++
            RepeatInput()
        }
        else if(i<a)
          
        {
            console.log("Too Low! Try again" )
            count++
            RepeatInput()
        }
        else{
            console.log("Found the correct Number which is "+a)
        console.log("Number of tries taken before correct guess is:"+count)
        r.close()
        }
    }
    else{
        console.log("Incorrect input type.... Enter a number")
        RepeatInput()
    }
    
    })
}

RepeatInput()
