/**
 * param - search param
 */
let param = '';

/**
 * name - array data
 */
let namesArray = ['amber', 'jane', 'jessica', 'mary', 'baby', 'bae', 'bai', 'bby', 'angel', 'sweet', 'care', 'bear', 'cat', 'queen', 'princess', 'jess', 'danny', 'daniel', 'emma', 'babe', 'sophia', 'mia', 'amelia', 'emily', 'melissa', 'ella', 'elizabeth', 'sofia', 'victoria', 'vicky', 'luna', 'grace', 'zoe', 'zoey', 'lily', 'lilly', 'hanna', 'hannah', 'natalie', 'violet', 'pink', 'purple', 'audrey', 'aurora', 'claire', 'lucy', 'anna', 'anne', 'willow', 'elena', 'joey', 'ivy', 'alex', 'alexa', 'sophie', 'maria', 'faith', 'rose', 'alexandra', 'ashley', 'andrea', 'maria', 'jasmine', 'izzy', 'isabel', 'alyssa', 'ariel', 'molly', 'morgan', 'kim', 'kimberely', 'gwen', 'lauren', 'laura', 'elise', 'alexis', 'fog', 'london', 'blood', 'scary', 'blue', 'dead', 'death', 'sienna', 'gracie', 'josie', 'mya', 'kathy', 'cathie', 'brooke', 'summer', 'sunny', 'sun', 'moon', 'danielle', 'amy', 'rebecca', 'nicole', 'nicky', 'nikky', 'lola', 'lila', 'vanessa', 'june', 'juliet', 'tess', 'tessa', 'samara', 'michelle', 'ruth', 'kamila', 'olivia', 'kate', 'katie', 'dragon', 'lady', 'girl'];

/**
 * DOM
 */
const paramSubmit = document.getElementById('paramSubmit');
const stopSearch = document.getElementById('stop');
const results = document.getElementById('results');

/**
 * generateList - generate the list based off the search term
 */
paramSubmit.addEventListener("submit", generateList);

function generateList( event ) {
  event.preventDefault();

  clearList();
  
  // Get the value of the field
  let paramSub = document.getElementById('param');
  param = paramSub.value;

  returnResults( param );  
}

/**
 * clearList - remove past results
 */
function clearList( ) {
  results.innerHTML = '';
}

stopSearch.addEventListener("click", stopIt);

function stopIt( event ) {
  event.preventDefault();

  clearList();
  window.stop(); // weird? but okay - the images don't load anymore
}

/**
 * returnResults - return the list on the page
 */
function returnResults( param ) {
  let appendType = document.getElementById('appendType').value;
  let betweenType = document.getElementById('betweenType').value;
  let generatedArray;
  let numbersArray;
  let numberCount = 500;
  let selectVal = 1;

  switch ( appendType ) {
    case 'names':
      numbersArray = namesArray;
      break;

    case 'random':
      numbersArray = Array.from({length: numberCount}, () => Math.floor(Math.random() * 10000));
      break;

    case 'randomH':
      numbersArray = Array.from({length: numberCount}, () => Math.floor(Math.random() * 100000));
      break;

    // fix duplicated numberArray, helper functions resulted in undefined error - DRY

    case '1001':
      selectVal = 1001;
      numberCount = 1000;
      numbersArray = Array.from({length: numberCount}, (v, k) => (k + selectVal));
      break;

    case '2001':
      selectVal = 2001;
      numberCount = 1000;
      numbersArray = Array.from({length: numberCount}, (v, k) => (k + selectVal));
      break;

    case '3001':
      selectVal = 3001;
      numberCount = 1000;
      numbersArray = Array.from({length: numberCount}, (v, k) => (k + selectVal));
      break;

    case '501':
      selectVal = 501;
      numbersArray = Array.from({length: numberCount}, (v, k) => (k + selectVal));
      break;

    default:
      numbersArray = Array.from({length: numberCount}, (v, k) => (k + selectVal));      
  }

  generatedArray = numbersArray;

  for ( let eachItem of generatedArray ) {
    let item = `<a href="http://neopets.com/~${param}${betweenType}${eachItem}" target="_blank"><img src="http://pets.neopets.com/cpn/${param}${betweenType}${eachItem}/1/1.png"></a>`;
    results.innerHTML += item; 
  }
}
