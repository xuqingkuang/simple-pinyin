# simple-pinyin

[![Build Status](https://travis-ci.org/xuqingkuang/simple-pinyin.svg?branch=master)](https://travis-ci.org/xuqingkuang/simple-pinyin)
[![codecov](https://codecov.io/gh/xuqingkuang/simple-pinyin/branch/master/graph/badge.svg)](https://codecov.io/gh/xuqingkuang/simple-pinyin)
[![devDependency Status](https://david-dm.org/xuqingkuang/simple-pinyin/dev-status.svg)](https://david-dm.org/xuqingkuang/simple-pinyin?type=dev)

一个简单的汉字转换到拼音模块，目前覆盖了 401 个常用音和和 6765 个常用汉字，可以同时应用于 NodeJS
和浏览器环境。

可以很方便地应用于需要对汉字数据进行转换、或者过滤的各类场合。

## 安装方法

    npm install simple-pinyin

或者

    bower install simple-pinyin

## 使用方法

### 直接引用

    <script src="simple-pinyin/dist/index.min.js"></script>
    <script>
        simplePinyin.default('你好 simplePinyin');
    </script>

### 模块加载器

CMD

    const simplePinyin = require('simple-pinyin').default;

ES6 Module

    import simplePinyin from 'simple-pinyin';

然后就可以直接输入中文，输出拼音了。

    simplePinyin('你好 simplePinyin!');
    >> ["ni", "hao", "simplePinyin", "!"]

可以参考[范例](http://xuqingkuang.github.io/simple-pinyin/)。

Select2 的过滤可以使用 [matcher 参数](http://select2.github.io/examples.html#matcher)，
CollectionView for ChaplinJS 可以使用 [filterer 参数](http://docs.chaplinjs.org/chaplin.collection_view.html#filterer)，
更多框架还请参考各自文档。

## 更新历史

* 2.0 - 2016年11月18日
  * 对逻辑进行了调整，输出由字符串改成了数组，包含英文和特殊符号，这样方便上层应用处理。
  * 使用 TypeScript 重写，变成了 ES6 的模块，通过 webpack 编译。
  * 增加了单元测试。
  * 重构了字典结构，使用原生的 find、fiter 方法进行过滤，性能提升5倍，参考文本“妈妈跟我说再也不用担心我的 Chinese 不知道怎么念了。”，1.0 需要 16 毫秒，2.0 只需要 3 毫秒。
* 1.1 - 2015年2月27日
  * 主要增加了 AMD 支持。
* 1.0 - 2014年11月3日
  * 第一个版本发布。
