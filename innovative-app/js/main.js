// VARIABLES
let iphone = document.getElementById('explanation');
let image = 1;
// FUNCTIONS
// iPhone image changer function
window.onload = () => {
  setInterval(() => {
    // ${} injects a variable inside a string
      iphone.src = `images/iphone${image}.png`;
      if (image < 5){
        image++
      }
      else {
        image = 1;
      }
  }, 3500);
}
