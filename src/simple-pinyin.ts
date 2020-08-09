import DICTIONARY from './dict';

interface IPinyinLetters {
  first: string;
  py: string;
}

interface IOptions {
  /**
   * Match the pinyin length as same as original text
   */
  matchFullText?: 'blank' | 'original';
}

// Convert the dictonary array to be a Chinese word as key and pinyin as the value map.
const DICT_MAP = DICTIONARY.reduce<{[key: string]: string[]}>((map_, current: string[]) => {
  const map = map_;
  const [pinyin, hans] = current;
  hans.split('').forEach((han) => {
    if (!map[han]) {
      map[han] = [];
    }
    map[han].push(pinyin);
  });
  return map;
}, {});

/**
 * Convert chineseWords word to pinyin
 *
 * @param {string} sentence The chineseWords word.
 * returns {object}
 */
const simplePinyin = (sentence: string, options?: IOptions): string[] => {
  if (typeof sentence !== 'string') {
    throw TypeError('Input for simplePinyin must be string');
  }

  // Initial the returns
  const pinyin: string[] = [];

  // Match text option
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let matchFullText = (word: string) => {};
  if (options && options.matchFullText) {
    if (options.matchFullText === 'blank') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      matchFullText = (word: string) => pinyin.push('');
    } else if (options.matchFullText === 'original') {
      matchFullText = (word: string) => pinyin.push(word);
    } else {
      throw new Error('Incorrect matchFullText option');
    }
  }

  // Splite the Chinese sentence
  for (let i = 0; i < sentence.length; i += 1) {
    // Get the character one by one
    const word = sentence[i];
    if (!Object.prototype.hasOwnProperty.call(DICT_MAP, word)) {
      matchFullText(word);
    } else {
      // Assume the first pinyin
      // TODO: Use the dictionary tree to support multiple pronunciation word.
      pinyin.push(DICT_MAP[word][0]);
    }
  }
  return pinyin;
};

export default simplePinyin;
