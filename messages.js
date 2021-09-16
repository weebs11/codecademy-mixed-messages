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
const verbPast = [];
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
const bodyPart = [];
const pluralNoun = [];

const chooseWord = (partOfSpeech) =>
  partOfSpeech[Math.floor(Math.random() * partOfSpeech.length)];

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
      console.log('test2');
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
