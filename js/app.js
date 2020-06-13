const $qwerty = $('#qwerty');
const $phrase = $('#phrase');
const $startBtn = $('.btn__reset');
let guess = 0;

const phrases = ['i love you',
    'i miss you',
    'you are my life',
    'you are my breath',
    'you are my cat'
];

function getRandomPhraseAsArray(arr) {
    // get random phrase from 'phrases array'
    let randomNumber = arr[Math.floor(Math.random() * arr.length)] // random chiffre basé le nombre de phrase dans "phrase array"
    return  randomNumber.split()
}

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
       let listItem = $('#phrase ul').append('<li>' + arr[i] + '</li>');
       listItem.addClass('letter');
    }
}

addPhraseToDisplay(phraseArray);


function checkLetter (button) {
  
};

$startBtn.click(function () {
    $('#overlay').hide()

    
});

$qwerty.on( "click", function( event ) {
    checkLetter (event.button)
  });
