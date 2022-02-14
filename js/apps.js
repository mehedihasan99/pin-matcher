function getPin(){
    const pin = Math.round(Math.random()*10000);
    const stringPin = pin + "";
    if(stringPin.length == 4){
        return pin;
        
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}
document.getElementById("key-pad").addEventListener("click", function(event){
    const number = event.target.innerText;
    const inputElement  = document.getElementById("typed-value");
    if(isNaN(number) ){
        if(number == "C"){

            inputElement.value = "";
        }
        
    }
    else{
        const previousNumber = inputElement.value;
        const newNumber = previousNumber + number;
        inputElement.value = newNumber;
    }
})
// 
function submitBtn(){
    const pin = document.getElementById("display-pin").value;
    const typeName = document.getElementById("typed-value").value;
    const successMsg = document.getElementById("notify-success");
    const failureMsg = document.getElementById("notify-fail");
    if(pin == typeName){
        successMsg.style.display = "block";
        failureMsg.style.display = "none";
    }
    else{
        
        failureMsg.style.display = "block";
        successMsg.style.display = "none";
    }
}