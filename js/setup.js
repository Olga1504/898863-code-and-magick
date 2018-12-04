document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var nameArr = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameArr = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];

function createCharacterObject()
{
  return {
    name: (getRandomArrayValue(nameArr) + ' ' + getRandomArrayValue(surnameArr)),
    coatColor: getRandomArrayValue(coatColorArr),
    eyesColor: getRandomArrayValue(eyesColorArr)
  }
}
function getRandomArrayValue(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
var arrCharacter = new Array();
for(var i=0; i<4; ++i)
{
  arrCharacter[i] = createCharacterObject();
}
function createDOMWizards(arr)
{
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  for (var i = 0; i < arr.length; i++)
  {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = arr[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;
    similarListElement.appendChild(wizardElement);
  }
}
createDOMWizards(arrCharacter);

