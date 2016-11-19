import simplePinyin from '../index';

describe('simplePinyin translation', () => {
  it('should returns orginal English', () => {
    expect(simplePinyin('Hello world')).toEqual(
      []
    );
  });

  it('should returns Chinese Pinyin', () => {
    expect(simplePinyin('你好，简单拼音')).toEqual(
      ['ni', 'hao', 'jian', 'dan', 'pin', 'yin']
    );
  });

  it('should return mixed Pinyin and English', () => {
    expect(simplePinyin('你好，simplePinyin')).toEqual(
      ['ni', 'hao']
    );
  });
});

describe('simplePinyin translation funtions', () => {
  const options = {
    pinyinOnly: false,
  };

  it('should returns orginal English', () => {
    expect(simplePinyin('Hello world', options)).toEqual(
      ['Hello', 'world']
    );
  });

  it('should returns Chinese Pinyin', () => {
    expect(simplePinyin('你好，简单拼音', options)).toEqual(
      ['ni', 'hao', '，', 'jian', 'dan', 'pin', 'yin']
    );
  });

  it('should return mixed Pinyin and English', () => {
    expect(simplePinyin('你好，simplePinyin', options)).toEqual(
      ['ni', 'hao', '，', 'simplePinyin']
    );
  });
});
