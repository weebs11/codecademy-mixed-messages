// Main JS file for Mixed Messages
// testing some changes for the branch

const noun = [
  'actor',
  'airport',
  'hamburger',
  'horse',
  'potato',
  'rainbow',
  'traffic',
  'whale',
];
const verb = [
  'break',
  'dance',
  'eat',
  'jump',
  'play',
  'run',
  'scream',
  'turn',
  'yank',
];
const adjective = [
  'annoying',
  'bored',
  'charming',
  'determined',
  'graceful',
  'hungry',
  'rich',
  'super',
  'ugly',
  'wild',
];
const adverb = [
  'abnormally',
  'enthusiastically',
  'hourly',
  'joyfully',
  'limply',
  'nervously',
  'patiently',
  'rigidly',
  'sharply',
  'urgently',
  'wildly',
];
const name = [
  'Kelly',
  'Elizabeth',
  'Ben',
  'Andy',
  'Catherine',
  'Daniel',
  'Warren',
  'Bailey',
];
const bodyPart = [
  'hand',
  'face',
  'leg',
  'nose',
  'arm',
  'butt',
  'finger',
  'chest',
  'toe',
];
const pluralNoun = [
  'women',
  'men',
  'balloons',
  'pickles',
  'speakers',
  'baseballs',
  'babies',
  'screwdrivers',
];
const room = [
  'living room',
  'kitchen',
  'dining room',
  'bedroom',
  'bathroom',
  'garage',
];

// Function to randomly selected a word from the array of the supplied part of speech.
// The function will remove the word from the array in order to avoid duplicate selections in the Mad Lib.
const chooseWord = (partOfSpeech) => {
  let x = Math.floor(Math.random() * partOfSpeech.length);
  let word = partOfSpeech[x];
  partOfSpeech.splice(x, 1); // Unsure if there's a way to splice the array without storing the index in a new variable (word).
  return word;
};

// Function to print the Mad Lib to the console. The function accepts a random number (0-3) to choose the Mad Lib., and calls the chooseWord function for each choice.
const buildString = (madLib) => {
  switch (madLib) {
    case 0:
      console.log(
        `Please excuse ${chooseWord(name)}, who is far too ${chooseWord(
          adjective
        )} to attend ${chooseWord(noun)} class.`
      );
      break;
    case 1:
      console.log(
        `Ye can always pretend to be a bloodthirsty ${chooseWord(
          noun
        )}, threatening everyone by waving her ${chooseWord(
          adjective
        )} sword in the air, but until ye learn to ${chooseWord(
          verb
        )} like a pirate, ye'll never be ${chooseWord(
          adverb
        )} acepted as an authentic ${chooseWord(
          noun
        )}. So here's what ye do: Cleverly work into yer daily conversations ${chooseWord(
          adjective
        )} pirate phrases such as "Ahoy there, ${chooseWord(
          pluralNoun
        )}," "Avase, ye ${chooseWord(pluralNoun)}," and "Shiver me ${chooseWord(
          pluralNoun
        )}."`
      );
      break;
    case 2:
      console.log('test3');
      break;
    default:
      console.log('default');
      break;
  }
};

const stringChoice = Math.floor(Math.random() * 3);

buildString(stringChoice);
