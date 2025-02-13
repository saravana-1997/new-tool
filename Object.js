let obj={
    name:"saravana",
    age:28,
    id:123,
};
obj.pincode=1234;  //add the data to object
console.log(obj);

delete obj.age;    //remove data from the object
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));

console.log(Object.entries(obj));

for(let a in obj)
{
    console.log(obj[a]); //for keys only
    
}