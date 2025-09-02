let calculate = document.getElementById("calculate");
let result = document.getElementById('result');
calculate.addEventListener('click', function(){
let number = Number(document.getElementById("number").value) ;
let number2 = Number(document.getElementById("number2").value);
let operator = document.getElementById("operator").value;
let output;
if(operator==="+"){
    output = number + number2
}
else if(operator==="-"){
    output = number - number2
}
else if(operator==="*"){
    output = number * number2
}
else if(operator==="/"){
    output = number / number2
}
result.value = output;
})
