function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4 ){
        return pin;

    }
    else{
        return getPin();
    }
}

function generatePin(){
const pin = getPin();
 document.getElementById('display-pin').value = pin;
// console.log(pin);

}
document.getElementById('any-key').addEventListener('click',function(event){
    const number = event.target.innerText;
    const  calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
       if(number == 'C'){
        calcInput.value = '';
       }
    }
    else{
        const previousnumber =  calcInput.value;
        const newNumber = previousnumber + number;
         calcInput.value = newNumber;
    }
})
function verifyPin(){
const pin = document.getElementById('display-pin').value;
const typePin = document.getElementById('typed-numbers').value;
const success = document.getElementById('noty-success');
const failError = document.getElementById('noty-fail');
if( pin == typePin){
    failError.style.display = 'none';
  success.style.display = ' block';

}
else{
    success.style.display = ' none';
   failError.style.display = 'block';

}
}