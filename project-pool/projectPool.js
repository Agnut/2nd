
var buttons = document.querySelectorAll('input[type="button"');//Selects all input type = "button"
var input = document.getElementById('input');//Declaring input field as variable
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() { // when a button gets clicked, an function will fire
    input.value += this.value; // 'this' is the button that gets clicked. We add its value to the input field
  });
};
var clear = document.getElementById ("clear");//declaring C button as variable

clear.addEventListener('click', function() {
  input.value = "";
});//attaching evenListener to clear input field

var equal = document.getElementById ("equal");//Declaring = button as variable

equal.addEventListener('click', function (){
	input.value = eval(input.value);
});//Adding event listener to = button to evaluate equation in input field and replace it with answer