const $qwerty = $('#qwerty');
const $phrase = $('#phrase');
const $startBtn = $('.btn__reset');
let missed = 0;

const phrases = ['i love you',  // create an array of phrases
    'i miss you',
    'you are my life',
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
    if (listItems.textContent === " ") {
        listItems.classList.add('space')
    } else  {
        listItems.classList.add('letter')
    }
}
    $('#phrase ul').append(docFragment);
}

addPhraseToDisplay(phraseArray);


function checkLetter (button) {
   
  let list = document.getElementsByClassName('letter');
  let match = null;
  for (let i = 0; i < list.length; i++) {
      if (button === list[i].innerHTML) {
          list[i].classList.add('show');
          match = button;
      } else {
          match = null;
      }
  }
  return match;
};

$startBtn.click(function () {
    $('#overlay').hide()
});

$qwerty.on( "click", function( event ) {
   let chosen = event.target;
   chosen.className += 'chosen';
   
    let letterFound = event.target.innerHTML;
    checkLetter(letterFound);
   /*  let heart = document.querySelectorAll('.tries')
    if (letterFound === null) {
        heart.nextElementSibling.remove()
        missed++;
    }  */
    checkWin();
  });


  function checkWin() {
    let show = document.querySelectorAll('.show').length;
    let letter = document.querySelectorAll('.letter').length;
   
    if (show === letter) {
        document.querySelector('.win').style.display = 'block';
    } if(missed => 5) {
        document.querySelector('.lose').style.display = 'block';
    }
  }