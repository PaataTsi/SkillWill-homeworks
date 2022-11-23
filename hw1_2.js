let farenheit=30;

function celsiusConverter (farenheit){
    if(typeof farenheit !== "number"){
        return 'false';
    }else {
        return (farenheit-32)*5/9;
    }
}

console.log(celsiusConverter(farenheit));