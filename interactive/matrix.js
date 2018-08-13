let frame1 = document.querySelector("#frame1");
let groupSong = document.querySelector("#groupSong");

let enter = document.querySelector("#enter");

let frame2 = document.querySelector("#frame2");
let wrapper = document.querySelector("#wrapper");
let neo = document.querySelector("#neo");
let trin = document.querySelector("#trin");
let trinSound = document.querySelector("#trinSound");

let frame3 = document.querySelector("#frame3");
let trin3 = document.querySelector("#trin3");
let wrapper3 = document.querySelector("#wrapper3");
let neo3 = document.querySelector("#neo3");
let morpheus = document.querySelector("#morpheus");
let F3sound = document.querySelector("#F3sound");

let frame4 = document.querySelector("#frame4");
let morpheus4 = document.querySelector("#morpheus4");
let morpheusSound4 = document.querySelector("#morpheusSound4");

let frame5 = document.querySelector("#frame5");
let scene5 = document.querySelector("#scene5");
let fire = document.querySelector("#fire");
let Sound51 = document.querySelector("#Sound51");
let Sound52 = document.querySelector("#Sound52");
let Sound53 = document.querySelector("#Sound53");
let Sound54 = document.querySelector("#Sound54");
let Sound55 = document.querySelector("#Sound55");


let frame6 = document.querySelector("#frame6");
let scene6A = document.querySelector("#scene6A");
let scene6B = document.querySelector("#scene6B");
let Sound6 = document.querySelector("#Sound6");
let wrongPill = document.querySelector("#wrongPill");

let frame7 = document.querySelector("#frame7");
let scene7 = document.querySelector("#scene7");
let Sound7 = document.querySelector("#Sound7");

let frame8 = document.querySelector("#frame8");

enter.classList.add('fade');
neo.addEventListener("mouseover", movetoD);
wrapper.addEventListener("animationend", stopWalk);
frame1.addEventListener("click", gotoFrametwo);

trin3.classList.add('fade');
wrapper3.addEventListener("animationend", stopWalk3);
morpheus.addEventListener("click", gotoFramefour);
morpheus4.addEventListener("dblclick", playSound4);
frame4.addEventListener("animationend", gotoFramefive);

fire.addEventListener("click", flames);
scene5.addEventListener("click", startAudio);

scene6A.addEventListener("click", playAudio7);
frame7.addEventListener("click", gotoFrameeight);

function gotoFrametwo() {
    frame1.style.display = "none";
    frame2.style.display = "block";
}

function movetoD() {
    wrapper.classList.add("movetoD");
    neo.classList.add('walk');
    neo.removeEventListener("mouseover", movetoD);
}

function stopWalk() {
    neo.classList.remove("walk");
    neo3.classList.remove("walk");
    groupSong.pause();
    activateTrin();
}

function activateTrin() {
    trin.classList.add('trin');
    trinSound.play();
    trinSound.addEventListener("ended", openDoors);
}

function openDoors() {
    trin.classList.remove('trin');
    frame2.style.backgroundImage = "url('IMAGES/Scene2B.png')";
    groupSong.pause();
    frame2.addEventListener("click", gotoFramethree);
}

function gotoFramethree() {
    frame2.style.display = "none";
    frame3.style.display = "block";
    groupSong.pause();
    wrapper3.classList.add("movetoD");
    neo3.classList.add('walk');
    neo3.removeEventListener("mouseover", movetoD);
    morpheus.classList.add('scaleM');
}

function stopWalk3() {
    neo3.classList.remove("walk");
    F3sound.play();
}

function gotoFramefour() {
    frame3.style.display = "none";
    frame4.style.display = "block";
    F3sound.pause();
}

function playSound4() {
    morpheusSound4.play();
    morpheus4.classList.add('turn');
}

function gotoFramefive() {
    frame4.style.display = "none";
    frame5.style.display = "block";
    scene5.style.display = "block";
    scene5.classList.add('sit');
    candle.style.display = "block";
}

function flames() {
    fire.classList.toggle('flames');
}

function startAudio() {
    Sound51.play();
    Sound51.onended = function () {
        Sound52.play();
        Sound52.onended = function () {
            Sound53.play();
            Sound53.onended = function () {
                Sound54.play();
                Sound54.onended = function () {
                    Sound55.play();
                    frame5.addEventListener("click", gotoFramesix);
                }
            }
        }
    }

}

function gotoFramesix() {
    Sound51.pause();
    Sound52.pause();
    Sound53.pause();
    Sound54.pause();
    Sound55.pause();
    frame5.style.display = "none";
    frame6.style.display = "block";
    scene6A.style.display = "block";
    scene6B.style.display = "block";
    scene6A.classList.add('fade');
    scene6B.classList.add('fade');
    Sound6.play();
}

function gotoFrameseven() {
    frame6.style.display = "none";
    scene6A.style.display = "none";
    scene6B.style.display = "none";
    frame7.style.display = "block";
    scene7.style.display = "block";
    Sound6.pause();
    scene7.classList.add('pill');
    Sound7.play();
}

function playAudio7() {
    scene6B.addEventListener("click", gotoFrameseven);
    wrongPill.play();
}

function gotoFrameeight() {
    frame7.style.display = "none";
    frame8.style.display = "block";
    groupSong.play();
}
