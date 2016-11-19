import simplePinyin from '../index';

describe('simplePinyin Convert funtions', () => {
  it('should returns orginal English', () => {
    expect(simplePinyin('Hello world')).toEqual(
      ['Hello', 'world']
    );
  });

  it('should returns Chinese Pinyin', () => {
    expect(simplePinyin('你好，简单拼音')).toEqual(
      ['ni', 'hao', '，', 'jian', 'dan', 'pin', 'yin']
    );
  });

  it('should return mixed Pinyin and English', () => {
    expect(simplePinyin('你好，simplePinyin')).toEqual(
      ['ni', 'hao', '，', 'simplePinyin']
    );
  });
});
