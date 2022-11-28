     // exercise1
     
     const users = [
     { name: "Temo", age: 25 },
     { name: "Lasha", age: 21 },
     { name: "Ana", age: 28 },
    ];
    
    
    function getMinAge(users) {
     let minAge = users[0].age;
     let name = users['0'].name;
    
     for (let item of users) {
       if (item.age < minAge) {
         minAge = item.age;
         name = item.name;
       }
     }
    
     return 'Youngest age: ' + minAge + ', Name: ' + name;
    
    }
    console.log(getMinAge(users));


//     exercise2

const user1 = {
     name: 'Paata',
     lastName: 'Tsitsishvili',
     age: 26,
     about: 'SkillWill student'
   }
   const user2 = {
     ...user1
   }
   console.log('User 1 info:', user1);
   console.log('User 2 info:', user2);

   
   
//    exercise3

let game=0;
let player1=0;
let player2=0;

function getWinner(){
 return parseInt(Math.random() * 7);
}

while (player1 !== 3 && player2 !== 3 ) {
  game++;
  player1 = getWinner();
  player2 = getWinner();
 console.log('game ' + game + ': ', player1, player2);
 result();
}

function result(){
 if(player1 == 3 && player2 !==3){
  console.log('WINNER: Player 1 - in game ' + game);
 }else if(player1 !==3 && player2 ==3){
  console.log('WINNER: Player 2 - in game ' + game);
 }else if(player1 ==3 && player2 ==3) {
  console.log('DRAW: in game ' + game);
 }
}



      
    
