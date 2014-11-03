assert        = require 'assert'
simplePinyin  = require '../simple-pinyin'

describe 'simplePinyin', ->
  describe 'translate', ->
    chinese = "你好 NodeJS"

    it 'should "NiHao"', ->
      assert.equal "NiHao", simplePinyin(chinese).full
    
    it 'should "NH-NodeJS"', ->
      assert.equal "NH-NodeJS", simplePinyin(chinese).short
