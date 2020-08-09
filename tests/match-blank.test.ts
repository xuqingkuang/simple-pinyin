import test from 'ava';
import simplePinyin from '../src/index';

const options = {
  matchFullText: 'blank' as const,
};

test('should returns orginal English', (t) => {
  t.deepEqual(simplePinyin('Hello world', options), ['', '', '', '', '', '', '', '', '', '', '']);
});

test('should returns Chinese Pinyin including symbol', (t) => {
  t.deepEqual(simplePinyin('你好，简单拼音', options), ['ni', 'hao', '', 'jian', 'dan', 'pin', 'yin']);
});

test('should return mixed Pinyin and English including symbol', (t) => {
  t.deepEqual(simplePinyin('你好，simplePinyin', options), ['ni', 'hao', '', '', '', '', '', '', '', '', '', '', '', '', '']);
});
