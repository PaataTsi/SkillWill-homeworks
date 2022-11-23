let a = 0;
let b = 5;
let op = '+';

function calculator (a,b,op){
    if(typeof a !== "number" & typeof b !== "number" ){
        return 'false';
    }

    if(op !== '+' & op !== '-' & op!=='/' & op!== '*'){
        return 'false'
    }else{
        return operations();
    }

}

function operations (){
    if(op == '+'){
        return a+b;
    }else{
        if(op== '-'){
            return a-b;
        }else{
            if(op=='*'){
                return a*b;
            }else{
                if(op=='/'){
                    return a/b;
                }
            }
        }
    }
}

console.log(calculator(a,b,op));