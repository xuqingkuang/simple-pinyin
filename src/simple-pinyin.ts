import dictionary from './dict';

interface IPinyinLetters {
  first: string;
  py: string;
}

interface IPinyin {
  full: string[];
  short: string[];
}

/**
 * RegExp for normal string;
 */
const NORMAL_STRING = new RegExp('[a-zA-Z0-9]');

/**
 * Get the Pinyin word.
 * 
 * @param {string} pinyin The pinyin(key) of dictionary
 * returns {object}
 */
const getPinyin = (pinyin: string): IPinyinLetters => {
  if (pinyin.length <= 0) {
    return {
      first: '',
      py: '',
    };
  }
  const first = pinyin.substr(0, 1).toUpperCase();
  const spare = pinyin.substr(1, pinyin.length);
  const py = first + spare;
  return {
    first,
    py,
  };
};

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
const simplePinyin = (sentence: string): IPinyin => {
  if (typeof sentence !== 'string') {
    throw TypeError('Input for simplePinyin must be string');
  }
  // Filter
  const dataFilter = getFilter();
  // Initial the returns
  let full: string[] = [];
  let short: string[] = [];

  // Splite the Chinese sentence
  for (let i = 0; i < sentence.length; i++) {
    // Get the character one by one
    const str = sentence.substr(i, 1);

    // Blank
    if (str.trim().length === 0 || str === ' ') {
      continue;
    }

    // Process normal english
    if (NORMAL_STRING.test(str)) {
      const previousStr = sentence.substr(i - 1, 1);
      if (i !== 0 && NORMAL_STRING.test(previousStr)) {
        full[full.length - 1] += str;
        short[short.length - 1] += str;
      } else {
        full.push(str);
        short.push(str);
      }
      continue;
    }

    // Get the pinyin
    [full, short] = ((str, f, s) => {
      const iterator = getIterator(str);
      const targetRow = dataFilter(iterator);
      let pinyin: IPinyinLetters;
      if (targetRow) {
        pinyin = getPinyin(targetRow[0]);
      } else {
        pinyin = {
          first: str,
          py: str,
        };
      }
      f.push(pinyin.py);
      s.push(pinyin.first);
      return [f, s];
    })(str, full, short);
  }
  return {
    full,
    short,
  };
};

export default simplePinyin;
