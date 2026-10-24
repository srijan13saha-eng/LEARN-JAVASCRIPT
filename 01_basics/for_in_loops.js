// understanding for in loops
const obj ={ //creating an object
    A:23,
    B:34,
    C:6
}
for(let a in obj)
{
    console.log("Marks of"+a+ " is "+obj[a]);
}
// for in loops are used primarily to access the keys