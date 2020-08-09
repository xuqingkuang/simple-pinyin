import test from 'ava';
import simplePinyin from '../src/index';

test('simplePinyin meets incorrect input', (t) => {
  t.throws(() => {
    simplePinyin(null as any);
  }, { instanceOf: TypeError }, 'Input for simplePinyin must be string');
});

test('simplePinyin meets incorrect options', (t) => {
  t.throws(() => {
    simplePinyin('Hello world', { matchFullText: 'asdf' as any });
  }, { instanceOf: Error }, 'Incorrect matchFullText option');
});

test('simplePinyin translation', (t) => {
  t.deepEqual(simplePinyin('Hello world'), []);
});

test('should returns Chinese Pinyin', (t) => {
  t.deepEqual(simplePinyin('你好，简单拼音'), ['ni', 'hao', 'jian', 'dan', 'pin', 'yin']);
});

test('should return mixed Pinyin and English', (t) => {
  t.deepEqual(simplePinyin('你好，simplePinyin'), ['ni', 'hao']);
});
