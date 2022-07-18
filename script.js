const result = document.getElementById("result");
const number1= document.getElementById("number1");
const number2= document.getElementById("number2");

let count = 1;
let answer ;


function dis(val)
{
    if(count===1)
        document.getElementById("number1").value+=val

    else if(count===2)
        document.getElementById("number2").value+=val
}

function islem(val){
    answer = document.getElementById("number1").value
    answer += val
    count++
}
  
//function that evaluates the digit and return result
function solve()
{
    answer += document.getElementById("number2").value
    let y = eval(answer)
    document.getElementById("result").value = y
    count++
}
  
//function that clear the display
function clr()
{
    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""
    document.getElementById("result").value = ""
    count = 1
}

function sil()
{
    if(count===1)
        document.getElementById("number1").value = document.getElementById("number1").value.slice(0,-1)
    else if(count===2)
        document.getElementById("number2").value = document.getElementById("number2").value.slice(0,-1)
}
