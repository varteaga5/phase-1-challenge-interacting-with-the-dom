// **** minus button begins here
const minusBtn = document.querySelector('#minus');
minusBtn.addEventListener('click', clickMinus);
function clickMinus(e){
    h1.innerHTML--;
}
// **** minus button ends here

// **** plus button begins here
const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', clickPlus);
function clickPlus(e){
    h1.innerHTML++;
}
// **** plus button ends here

// **** like button begins here
const likeBtn = document.querySelector('#heart');
likeBtn.addEventListener('click', clickHeart);
function clickHeart(e){
    const newLi = document.createElement('li')
    newLi.appendChild(document.createTextNode(h1.innerHTML+' has been liked 1 time'));
    document.querySelector('.likes').appendChild(newLi);
}
// **** like button ends here

// **** beginning of 'increase counter' section ****
// counter with duration of 1000 miliseconds
let startTime = setInterval(counter, 1000);
// grabs h1 element
let h1 = document.querySelector('#counter');
function counter() {
    // increases contents by 1
    h1.innerHTML++;
}

const pause = document.querySelector('#pause');
let timerRuning = true;
console.log('timerRuning outside: ' +timerRuning)
pause.addEventListener('click', pauseBtn);
let aCounter =1;

function pauseBtn(e) {
    // if timer is runnning then pause
    if(timerRuning === true){
        // stop timer
        clearInterval(startTime);
        clearInterval(aCounter);
        pause.innerHTML='resume'
        // disables buttons when paused
        document.getElementById('minus').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('heart').disabled = true;
        document.getElementById('submit').disabled = true;

        timerRuning = false;      
    } else {
        // resumes the timer
        aCounter = setInterval(counter, 1000);
        pause.innerHTML='pause'
        timerRuning = true
        // enables buttons when paused
        document.getElementById('minus').disabled = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('heart').disabled = false;
        document.getElementById('submit').disabled = false;
    }
}

// **** end of 'increase counter' section ****

// **** beginning of 'add a comment' section ****
// submit button event listener
const commentForm = document.querySelector('#comment-form');
commentForm.addEventListener('submit', clickedSubmit);
// selects comment input
const input = document.querySelector('#comment-input');
// selects div
const div = document.querySelector('#list');
function clickedSubmit(e) {
    e.preventDefault();
    // console.log(input.value);
    // creates p element
    const pElement = document.createElement('p');
    console.log(pElement);
    // add text to p element grab text from input box
    pElement.appendChild(document.createTextNode(input.value));
    // append to div
    div.appendChild(pElement);
    commentForm.reset();
}
// **** end of 'add a comment' section ****