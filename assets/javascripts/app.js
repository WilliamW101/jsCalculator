var nums = '';

var calcButtons = document.getElementsByClassName('calc-btn');
for(var i = 0; i < calcButtons.length; i += 1) {
  var calcButton = calcButtons[i];
  calcButton.addEventListener('click', function(){
    nums += this.innerText;
    putNumber(nums);
  });
}

var display = document.getElementById('display');
function putNumber(num) {
  display.innerHTML = parseFloat(num);
  console.log(num);
    console.log(num.innerText);
      num.innerText = calcButtons;
  // console.log(parseFloat(num));
  //   num.innerText = calcButtons;
}

var equalButton = document.getElementById('equal-btn');
equalButton.addEventListener('click', function(){
  nums = eval(nums);
  putNumber(nums);
  if(display.innerHTML === 'Infinity' || display.innerHTML === 'NaN') {
    putNumber('error');
    nums = '';
  }
});

var clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', function(){
  nums = '';
  putNumber(0);
});
