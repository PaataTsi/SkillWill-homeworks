const changer = document.getElementById("changer");


changer.onclick = function() {
    let color = document.getElementById("color").value;
    if(color == 'red'){
        document.body.style.backgroundColor = 'red';
    }else if(color == 'blue'){
        document.body.style.backgroundColor = 'blue';
    }else if(color == 'green'){
        document.body.style.backgroundColor = 'green';
    }else if(color == 'black'){
        document.body.style.backgroundColor = 'black';
    }else if(color == 'white'){
        document.body.style.backgroundColor = 'white';
    }else{
        modal2.style.display = "block";
        alert();
    }

}



const alert = function alert(){

changer.onclick = function() {
        modal2.style.display = "block";
    }
    const modal2 = document.getElementById("modal2");
    const modal2_span = document.getElementById("modal2_span")[0];
    
}
modal2_span.onclick = function() {
    modal2.style.display = "none";
}