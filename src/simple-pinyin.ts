import dictionary from './dict';

interface IPinyinLetters {
  first: string;
  py: string;
}

interface IOptions {
  pinyinOnly: boolean;
}

/**
 * Default Options
 */
const DEFAULT_OPTIONS: IOptions = {
  pinyinOnly: true,
};

/**
 * RegExp for normal string;
 */
const NORMAL_STRING = new RegExp('[a-zA-Z0-9]');

/**
 * Get the iterator for query the targetRow
 */
const getIterator = (str: string) => (pinyinRow: string[]) => {
  return pinyinRow[1].indexOf(str) >= 0;
};

/**
 * Get the data filter
 */
const getFilter = () => {
  if (typeof((<any> Array.prototype).find) === 'function') {
    return (iterator: (value: string[], index: number, array: string[][]) => {}) => {
      return (<any> dictionary).find(iterator);
    };
  }

  if (typeof(Array.prototype.filter) === 'function') {
    return (iterator: (value: string[], index: number, array: string[][]) => {}) => {
      return dictionary.filter(iterator)[0];
    };
  }

  return (iterator: Function) => {
    let targetRow: string[];
    for (let i = 0; i < dictionary.length; i++) {
      const pinyinRow = dictionary[i];
      if (!iterator(pinyinRow)) {
        continue;
      }
      targetRow = pinyinRow;
      break;
    }
    return targetRow;
  };
};

/**
 * Convert chineseWords word to pinyin
 * 
 * @param {string} sentence The chineseWords word.
 * returns {object}
 */
const simplePinyin = (sentence: string, options: IOptions = DEFAULT_OPTIONS): string[] => {
  if (typeof sentence !== 'string') {
    throw TypeError('Input for simplePinyin must be string');
  }
  // Filter
  const dataFilter = getFilter();
  // Initial the returns
  let pinyin: string[] = [];

  // Splite the Chinese sentence
  for (let i = 0; i < sentence.length; i++) {
    // Get the character one by one
    const str = sentence.substr(i, 1);

    // skip empty space
    if (str.trim().length === 0 || str === ' ') {
      continue;
    }

    // Process normal english
    if (NORMAL_STRING.test(str)) {
      if (options.pinyinOnly) {
        continue;
      }
      const previousStr = sentence.substr(i - 1, 1);
      if (i !== 0 && NORMAL_STRING.test(previousStr)) {
        pinyin[pinyin.length - 1] += str;
      } else {
        pinyin.push(str);
      }
      continue;
    }

    // Get the pinyin
    const iterator = getIterator(str);
    const targetRow = dataFilter(iterator);
    if (!targetRow) {
      if (options.pinyinOnly) {
        continue;
      }
      pinyin.push(str);
      continue;
    }
    pinyin.push(targetRow[0]);
  }
  return pinyin;
};

export default simplePinyin;
