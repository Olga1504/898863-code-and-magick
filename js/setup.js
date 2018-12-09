document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var nameArr = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

function createCharacterObject() {
  return {
    name: (getRandomArrayValue(nameArr) + ' ' + getRandomArrayValue(surnameArr)),
    coatColor: getRandomArrayValue(coatColorArr),
    eyesColor: getRandomArrayValue(eyesColorArr)
  };
}
function getRandomArrayValue(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
var arrCharacter = new Array();
for (var i = 0; i < 4; ++i) {
  arrCharacter[i] = createCharacterObject();
}
function createDOMWizards(arr) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  for (var i = 0; i < arr.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = arr[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;
    similarListElement.appendChild(wizardElement);
  }
}
createDOMWizards(arrCharacter);




var onEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardСoat = document.querySelector('.wizard-coat');
wizardСoat.addEventListener('click', function () {
  var fillCoant = getRandomArrayValue(coatColorArr);
  wizardСoat.style = 'fill: ' + fillCoant;
  var elWizardWramp = document.querySelector('.setup-wizard-appearance');
  var input = elWizardWramp.querySelector('input#wizard_coat-color');
  input.value = fillCoant;
})

var wizardEyes = document.querySelector('.wizard-eyes');
wizardEyes.addEventListener('click', function () {
  var fillEyes = getRandomArrayValue(eyesColorArr);
  wizardEyes.style = 'fill: ' + fillEyes;
  var elWizardWramp = document.querySelector('.setup-wizard-appearance');
  var input = elWizardWramp.querySelector('input#wizard_eyes-color');
  input.value = fillEyes;
})


var fireball = document.querySelector('.setup-fireball-wrap');
fireball.addEventListener('click', function () {
  var fillfireball = getRandomArrayValue(FIREBALL_COLORS);
  fireball.style.backgroundColor = fillfireball;
  var input = fireball.querySelectorAll('input#fireball-color-wrap');
  input.value = fillfireball;
})
