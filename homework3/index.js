// exercise1

function myfunc(num1,num2,...numbers)
{
    let mult=1;
    for(i of numbers){
        mult*=i
    }
    return [num1+num2, mult];   
}
console.log(myfunc(1,2,3,4,5,6,7,8,9,10));

// exercise2


const user={
    name:'Paata'
}
const{address:{city}={city:'Tbilisi'}}=user;
console.log(city);



// exercise3

const user1={
    name:'Paata',
    address:{
        city:'Tbilisi'
    }

}

const user2={...user1,};
user2.address.city='Paris';

console.log(user1.name, user1.address.city);
    



   
