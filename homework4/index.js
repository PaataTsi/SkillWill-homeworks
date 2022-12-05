
  // exercise1

  const switching = (string, valueToReplace, valueToReplaceWith) =>
    string.slice(0, string.indexOf(valueToReplace)) +
    valueToReplaceWith +
    string.slice(string.indexOf(valueToReplace) +  valueToReplace.length);
  
  console.log(switching("SkillWill is the worst company", "worst", "best"));
  
  
  
  /// exercise2
  
  
  const upLetter = "skillwill is the best company";
  
  console.log(upLetter.toUpperCase());
  
  
  
  /// exercise3
  
  
  const users = [
   { name: "Temo", age: 25 },
   { name: "Lasha", age: 21 },
   { name: "Ana", age: 28 }
  ];
  
  const sort = (users) => users.sort((a, b) => a.age - b.age);
  console.log(sort(users));