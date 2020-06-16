const $qwerty = $('#qwerty');
const $phrase = $('#phrase');
const $startBtn = $('.btn__reset');
let guess = 0;

const phrases = ['i love you',  // create an array of phrases
    'i miss you',
    'you aremy life',
    'you are my breath',
    'you are my cat'
];

function getRandomPhraseAsArray(arr) {
    // get random phrase from 'phrases array  and split it into chars'
    for (let i = 0; i < arr.length; i++) {
        let randomNumber = arr[Math.floor(Math.random() * arr.length)] // 
        return  randomNumber.split('');  
    }
 
}

const phraseArray = getRandomPhraseAsArray(phrases);  // function of random phrases stocked in a variable;

function addPhraseToDisplay(arr) {
    const docFragment = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i++) {
    const listItems = document.createElement('li');
    const liContent = document.createTextNode(arr[i]);
    listItems.appendChild(liContent);
    docFragment.appendChild(listItems);
    if (listItems.textContent === arr[i]) {
        listItems.classList.add('letter')
    } else  {
        listItems.classList.add('space')
    }
}
    $('#phrase ul').append(docFragment);
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
