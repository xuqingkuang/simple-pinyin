import simplePinyin from '../index';

describe('simplePinyin Convert funtions', () => {
  it('should returns orginal English', () => {
    expect(simplePinyin('Hello world')).toEqual({
      full: ['Hello', 'world'],
      short: ['Hello', 'world'],
    });
  });

  it('should returns Chinese Pinyin', () => {
    expect(simplePinyin('你好，简单拼音')).toEqual({
      full: ['Ni', 'Hao', '，', 'Jian', 'Dan', 'Pin', 'Yin'],
      short: ['N', 'H', '，', 'J', 'D', 'P', 'Y'],
    });
  });

  it('should return mixed Pinyin and English', () => {
    expect(simplePinyin('你好，simplePinyin')).toEqual({
      full: ['Ni', 'Hao', '，', 'simplePinyin'],
      short: ['N', 'H', '，', 'simplePinyin'],
    });
  });
});
