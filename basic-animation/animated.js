// Declaring variables and assigning value to it:
var kirby = document.querySelector("#kirby");
var kirby1 = document.querySelector("#kirby1");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var button5 = document.querySelector("#button5");
var button6 = document.querySelector("#button6");
var button7 = document.querySelector("#button7");
var button8 = document.querySelector("#button8");
var button9 = document.querySelector("#button9");
var button10 = document.querySelector("#button10");
var playing = false; //helps toggle on/off of the buttons.
var playing1 = false;
// Animation assignments to buttons
button1.addEventListener ("click", function (){
    if ( !playing ) { // If not playing
        kirby.style.animation = "move 5s linear infinite";
        // `this` refers to `button1`
        // `innerText` refers to text content in `button1`
        this.innerText = 'Stop'; // `this refers to `button1`
        playing = true;
    } else {
        kirby.style.animation = ""; // clear the animation property
        // `this` refers to `button1`
        // `innerText` refers to text content in `button1`
        this.innerText = 'Move';
        playing=false;
    }
});

button2.addEventListener ("click", function (){
    if ( !playing ) {
        kirby.style.animation = "moveTo30 3s ease-out 1 forwards";
        this.innerText = 'Stop';
        playing = true;
    } else {
        kirby.style.animation = "";
        this.innerText = 'Move to 30';
        playing = false;
    }
});

button3.addEventListener ("click", function (){
    if ( !playing ) {
        kirby.style.animation = "moveFrom30 3s ease-in 1 forwards";
        this.innerText = 'Stop';
        playing = true;
    } else {
        kirby.style.animation = "";
        this.innerText = 'Move from 30';
        playing = false;
    }
});

button4.addEventListener ("click", function (){
    if ( !playing ) {
        kirby.style.animation = "oneJump 2s ease-in-out 1";
        this.innerText = 'Stop';
        playing = true;
    } else {
        kirby.style.animation = "";
        this.innerText = 'Jump once';
        playing = false;
    }
});

button5.addEventListener ("click", function (){
    if ( !playing ) {
        kirby.style.animation = "jumping 1.5s ease-out infinite alternate";
        this.innerText = 'Stop';
        playing = true;
    } else {
        kirby.style.animation = "";
        this.innerText = 'Continuous jumping';
        playing = false;
    }
});

button6.addEventListener ("click", function (){
    if ( !playing ) {
        kirby.style.animation = "fade 2s ease-in-out infinite alternate";
        this.innerText = 'Stop';
        playing = true;
    } else {
        kirby.style.animation = "";
        this.innerText = 'Fade';
        playing = false;
    }
});

button7.addEventListener ("click", function (){
    if ( !playing ) {
        kirby.style.animation = "glow 6s linear infinite alternate";
        this.innerText = 'Stop';
        playing = true;
    } else {
        kirby.style.animation = "";
        this.innerText = 'Glow';
        playing = false;
    }
});

button8.addEventListener ("click", function (){
    if ( !playing ) {
        kirby.style.animation = "shake 0.5s linear 3 forwards";
        this.innerText = 'Stop';
        playing = true;
    } else {
        kirby.style.animation = "";
        this.innerText = 'Shake';
        playing = false;
    }
});

button9.addEventListener ("click", function (){
    if ( !playing ) {
        kirby.style.animation = "mirror 4s ease-in 1 forwards";
        this.innerText = 'Stop';
        playing = true;
    } else {
        kirby.style.animation = "";
        this.innerText = 'Mirror';
        playing = false;
    }
});

button10.addEventListener ("click", function (){
    if ( !playing ) {
        kirby.style.animation = "fallDown 3s linear 1 forwards";
        this.innerText = 'Stop';
        playing = true;
    } else {
        kirby.style.animation = "";
        this.innerText = 'Fall down';
        playing = false;
    }
});