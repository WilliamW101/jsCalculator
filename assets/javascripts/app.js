var calcButtons = document.getElementsByClassName('calc-btn');
console.log(calcButtons);
var num1 = parseFloat(this.innerText);
var operator = '';
var num2 = parseFloat(this.innerText)
var result;

for(var i = 0; i < calcButtons.length; i ++) {
  var calcButton = calcButtons[i];
  calcButton.addEventListener('click', function(){
    console.log(parseFloat(this.innerText));
  });
}

switch(operator) {
  case '+':
      result = num1 + num2;
      break;
  case '-':
      result = num1 - num2;
      break;
  case '*':
      result = num1 * num2;
      break;
  case '/':
      result = num1 / num2;
      break;
  default:
    result = 'Not a valid operator';
}

// console.log(result);
