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
const ob ={
    HArry:98,
    Shiv:90,
    Krish:67

}
for (let a in ob)
{
    console.log("MArks of"+a+" is "+ob[a]);// the variavle a is used to access the keys of the object
}// to print marks of students just using for loop
for(let i=0; i<Object.keys (ob).length;i++)// Object.keys(ob) cretaes an array which contains the keys of the object ob
{
    console.log("Marks of"+Object.keys (ob)[i]+" are"+ ob[Object.keys(ob)[i]]);
}