const getAverage = document.querySelector("#getAverage");
const nums = document.querySelector("#nums");

getAverage.addEventListener("click", () => {
    let nums = document.querySelector("#nums").value;
    let inputArr = nums.split(";").map((v) => Number(v));
    let sum = inputArr.reduce((a, b) => a + b, 0);
    console.log(sum / inputArr.length);
  });

