const $qwerty = $('#qwerty');
const $phrase = $('#phrase');
const $startBtn = $('.btn__reset');
let missed = 0;
const overlay = document.getElementById('overlay');
const tries = document.querySelectorAll('.tries');
let match;


const phrases = ['i love you', // create an array of phrases
    'i miss you',
    'you are my life',
    'you are my breath',
    'you are my cat'
];

function getRandomPhraseAsArray(arr) {
    // get random phrase from 'phrases array  and split it into chars'
    for (let i = 0; i < arr.length; i++) {
        let randomNumber = arr[Math.floor(Math.random() * arr.length)] // 
        return randomNumber.split('');
    }
}

const phraseArray = getRandomPhraseAsArray(phrases); // function of random phrases stocked in a variable;

function addPhraseToDisplay(arr) {   // add phrase to display function
    const docFragment = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i++) {
        const listItems = document.createElement('li');
        const liContent = document.createTextNode(arr[i]);
        listItems.appendChild(liContent);
        docFragment.appendChild(listItems);
        if (listItems.textContent === " ") {
            listItems.classList.add('space')
        } else {
            listItems.classList.add('letter')
        }
    }
    $('#phrase ul').append(docFragment);
}

addPhraseToDisplay(phraseArray);


function checkLetter(button) {  // the checkLetter function
    match = false;
    let list = document.getElementsByClassName('letter');
    match = null;
    for (let i = 0; i < list.length; i++) {
        if (button === list[i].innerHTML) {
            list[i].classList.add('show');
            match = true;
        }
    }
    return match;
};

$startBtn.click(function () {
    $('#overlay').hide()
});

$qwerty.on("click", function (event) {

    let chosen = $(event.target);
    if (chosen.hasClass('letter')) {
        chosen.className += 'chosen';
        chosen.disabled = true;
        let letterFound = event.target.innerHTML;
        checkLetter(letterFound);
        if (!match) {
            tries[missed].style.display = 'none';
            missed += 1;
        }
        
    } else {
        return  checkWin();
    }


});


function checkWin() {   // the checkWin function
  
    let show = document.querySelectorAll('.show').length;
    let letter = document.querySelectorAll('.letter').length;
    if (show === letter) {
        overlay.classList.add('win');
        overlay.style.display = 'block';
        document.querySelector('#overlay h2').innerHTML = 'you win !!!'

    }
    if (missed >= 5) {
        overlay.classList.add('lose');
        overlay.style.display = 'block';
        document.querySelector('#overlay h2').innerHTML = 'Sorry Try again !!!'
    }
}