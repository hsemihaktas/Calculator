let count = 1;
let answer = "" ;
let proc = "";

function dis(val)
{
    if(count===1){
        document.getElementById("number1").value+=val
        answer += val
    }
    else if(count===2){
        document.getElementById("number2").value+=val
    }
}

function process(val){
    proc += val
    count++
}
  
function solve()
{
    if(document.getElementById("number2").value===""){
        alert("Please enter second number")
    }
    else{
        answer += proc
        answer += document.getElementById("number2").value
        let y = eval(answer)
        document.getElementById("result").value = y
        count++ 
    }
}
  
function clr()
{
    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""
    document.getElementById("result").value = ""
    count = 1
    answer = ""
    proc =""
}

function dlt()
{
    if(count===1){
        document.getElementById("number1").value = document.getElementById("number1").value.slice(0,-1)
    }
    else if(count===2){
        document.getElementById("number2").value = document.getElementById("number2").value.slice(0,-1)
    }
}