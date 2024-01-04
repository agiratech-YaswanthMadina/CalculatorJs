let temp = null;
let result = 0;
let output = document.getElementById('maininput');
let numbersArray = [];
let operators = [];
let final = '';
let temporary = null;
function input(x) {
    if(!isNaN(x)){
        numbersArray.push(Number(x));
    }
    output.value += x;
    console.log(output.value);
    temporary = output.value;
}

function allClear() {
    output.value = "";
    a = "";
    numbersArray = [];
    operators = [];
    result = 0
}

function symbol(symbolStyle) {
    temp = symbolStyle;
    // a = "";
    operators.push(symbolStyle);
    console.log(operators);
    // console.log(operators[0]);
    output.value += symbolStyle;
}

function percentage() {
        string = String((output.value) / 100);
        output.value = string;
     }

function del() {
        output.value = output.value.slice(0, -1);
}

function changesign() {
    string = String(-(output.value));
    output.value = string;
}

function cal(){
    let elements = temporary.match(/\d+|[/*+-]/g);
    console.log(elements);
    let precendence = ["/", "*", "+", "-"];
    for(const operator of precendence){
        for(let i=0; i<elements.length; i++){
            if(elements[i] === operator){
                let firstElement = elements[i-1];
                let secondElement =  elements[i+1];
                let result = 0;
                switch (operator){
                    case "-":
                        result = (parseFloat(firstElement)-parseFloat(secondElement));
                        break;
                    case "+":
                        result = (parseFloat(firstElement)+parseFloat(secondElement));
                        break;
                    case "/":
                        result = (parseFloat(firstElement)/parseFloat(secondElement));
                        break;
                    case "*":
                        result = (parseFloat(firstElement)*parseFloat(secondElement));
                        break;
            }
            elements.splice(i-1,3);
            elements.splice(i-1,0,result);
            console.log(elements);
            console.log(result);
            console.log(elements);
            localStorage.setItem(temporary, result);
            sessionStorage.setItem(temporary, result);
            }
        }
    }
    console.log(elements);
    output.value = elements.pop();
}