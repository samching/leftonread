import { delimList } from '../utils/delimList';
import { lowerCaseList } from '../utils/lowerCaseList';

const stopWordsList = [
  'got',
  'see',
  'say',
  'could',
  "it's",
  'need',
  'still',
  'back',
  'ill',
  'r',
  'thats',
  'ok',
  'well',
  'lot',
  'also',
  'gonna',
  'great',
  'want',
  'know',
  'dont',
  'yes',
  'going',
  'go',
  'think',
  "you're",
  'good',
  '',
  ' ',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  '1st',
  '2nd',
  '3rd',
  '4th',
  '5th',
  '6th',
  '7th',
  '8th',
  '9th',
  '10th',
  '11th',
  '12th',
  '13th',
  '14th',
  '15th',
  '16th',
  '17th',
  '18th',
  '19th',
  '20th',
  '21st',
  '22nd',
  '23rd',
  '24th',
  '25th',
  '26th',
  '27th',
  '28th',
  '29th',
  '30th',
  '31st',
  'lets',
  'u',
  'would',
  'like',
  'im',
  'ur',
  'get',
  'yeah',
  'cause',
  'i',
  'me',
  'my',
  'myself',
  'we',
  'our',
  'ours',
  'ourselves',
  'you',
  'your',
  'yours',
  'yourself',
  'yourselves',
  'he',
  'him',
  'his',
  'himself',
  'she',
  'her',
  'hers',
  'herself',
  'it',
  'its',
  'itself',
  'they',
  'them',
  'their',
  'theirs',
  'themselves',
  'what',
  'which',
  'who',
  'whom',
  'this',
  'that',
  'these',
  'those',
  'am',
  'is',
  'are',
  'was',
  'were',
  'be',
  'been',
  'being',
  'have',
  'has',
  'had',
  'having',
  'do',
  'does',
  'did',
  'doing',
  'a',
  'an',
  'the',
  'and',
  'but',
  'if',
  'or',
  'because',
  'as',
  'until',
  'while',
  'of',
  'at',
  'by',
  'for',
  'with',
  'about',
  'against',
  'between',
  'into',
  'through',
  'during',
  'before',
  'after',
  'above',
  'below',
  'to',
  'from',
  'up',
  'put',
  'down',
  'in',
  'out',
  'on',
  'off',
  'over',
  'under',
  'again',
  'further',
  'then',
  'once',
  'here',
  'there',
  'when',
  'where',
  'why',
  'how',
  'all',
  'any',
  'both',
  'each',
  'few',
  'more',
  'most',
  'other',
  'some',
  'id',
  'such',
  'no',
  'nor',
  'not',
  'only',
  'own',
  'same',
  'saw',
  'so',
  'than',
  'too',
  'very',
  's',
  't',
  'can',
  'will',
  'just',
  'don',
  'should',
  'now',
  'much',
  'it’s',
  'you’re',
  'can’t',
  'I’m',
  'wanna',
  'w',
  'w/',
  'ive',
  'actually',
  'I’m',
  'way',
  '“I',
  'really',
  'might',
  'make',
  'time',
  'oh',
  'around',
  'right',
  "i'll",
  "i'm",
  'one',
  'don’t',
  'people',
  'I’ll',
  'that’s',
  'take',
  'even',
  'us',
  "don't",
  "that's",
  "she's",
  "there's",
  'look',
  'gotta',
  'maybe',
  'next',
  '$',
  'new',
  'hey',
  'pm',
  'am',
  'sure',
  'probably',
  '”', // very weird quote, not sure what this is
];
export const stopWords = delimList(lowerCaseList(stopWordsList));
