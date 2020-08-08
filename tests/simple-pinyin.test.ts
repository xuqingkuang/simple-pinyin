import test from 'ava';
import simplePinyin from '../src/index';

test('simplePinyin translation', (t) => {
  t.deepEqual(simplePinyin('Hello world'), []);
});

test('should returns Chinese Pinyin', (t) => {
  t.deepEqual(simplePinyin('你好，简单拼音'), ['ni', 'hao', 'jian', 'dan', 'pin', 'yin']);
});

test('should return mixed Pinyin and English', (t) => {
  t.deepEqual(simplePinyin('你好，simplePinyin'), ['ni', 'hao']);
});

const options = {
  pinyinOnly: false,
};

test('should returns orginal English', (t) => {
  t.deepEqual(simplePinyin('Hello world', options), ['Hello', 'world']);
});

test('should returns Chinese Pinyin including symbol', (t) => {
  t.deepEqual(simplePinyin('你好，简单拼音', options), ['ni', 'hao', '，', 'jian', 'dan', 'pin', 'yin']);
});

test('should return mixed Pinyin and English including symbol', (t) => {
  t.deepEqual(simplePinyin('你好，simplePinyin', options), ['ni', 'hao', '，', 'simplePinyin']);
});
