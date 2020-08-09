# simple-pinyin

[![npm version](https://badge.fury.io/js/simple-pinyin.svg)](https://badge.fury.io/js/simple-pinyin)
[![Bower version](https://badge.fury.io/bo/simple-pinyin.svg)](https://badge.fury.io/bo/simple-pinyin)
[![license](https://img.shields.io/badge/license-MIT)](https://github.com/xuqingkuang/simple-pinyin/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/xuqingkuang/simple-pinyin/pulls) [![Actions Status](https://github.com/xuqingkuang/simple-pinyin/workflows/build/badge.svg?branch=master)](https://github.com/xuqingkuang/simple-pinyin/actions) [![Codecov](https://img.shields.io/codecov/c/github/xuqingkuang/simple-pinyin)](https://codecov.io/gh/xuqingkuang/simple-pinyin)

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

    const { default: simpleyPinyin } = require('simple-pinyin');

ES6 Module

    import simplePinyin from 'simple-pinyin';

然后就可以直接输入中文，输出拼音了。

    simplePinyin('你好 simplePinyin!', { pinyinOnly: false });
    >> ["ni", "hao", "simplePinyin", "!"]

可以参考[范例](http://xuqingkuang.github.io/simple-pinyin/)。

Select2 的过滤可以使用 [matcher 参数](https://select2.org/searching#customizing-how-results-are-matched)，CollectionView for ChaplinJS 可以使用 [filterer 参数](http://docs.chaplinjs.org/chaplin.collection_view.html#filterer)，更多框架还请参考各自文档。

### 参数

| 参数名称       | 类型      | 解释                                       | 默认值  |
| ---------- | ------- | ---------------------------------------- | ---- |
| matchFullText | blank or original | 完整匹配文本参数，可以输出和原文本一样长度的数组，blank 参数对不是拼音文本你输出空字符，original 会输出原始文本文本。如果不设置的话则跟 3.0 时不加 pinyinOnly 时效果一样。 | 无 |

## Roadmap

* 4.1
  * 增加字典树，实现多音字功能，输出和 4.0 保持一致

## 更新历史
* 4.0 - 2020年8月8日
  * 更新到最新依赖，用 rollup 替换掉 webpack、eslint 替换掉 tslint、ava 替换掉 jest
  * 将文本在加载时转成 Hashmap，进一步提升转换速度，0.02毫秒就可以翻译出来原文本。
  * 将 pinyinOnly 参数改为 matchFullText，开启后输出的数组顺序将和原文本相同，方便进行注音标注。
* 3.0 - 2016年11月20日
  * 进一步调整输出，取消 short 的拼音首字母输出，如果需要可以直接使用 pinyin.map(p => p[0]).join('') 便能恢复到和 1.0 时相同的首字母拼音输出。
  * 增加 pinyinOnly 参数，默认开启，直接 join 配合上一条可以做到和 1.0 时 full 输出一样的结果。
  * 取消完全没必要的拼音首字母大写。
  * 进一步优化代码，依然是“妈妈跟我说再也不用担心我的 Chinese 不知道怎么念了。”，性能由 2.0 的 3 毫米，缩减到 1-2 毫秒 之间。
* 2.0 - 2016年11月18日
  * 对逻辑进行了调整，输出由字符串改成了数组，包含英文和特殊符号，这样方便上层应用处理。
  * 使用 TypeScript 重写，变成了 ES6 的模块，通过 webpack 编译。
  * 增加了单元测试。
  * 重构了字典结构，使用原生的 find、fiter 方法进行过滤，性能提升5倍，参考文本“妈妈跟我说再也不用担心我的 Chinese 不知道怎么念了。”，1.0 需要 16 毫秒，2.0 只需要 3 毫秒。
* 1.1 - 2015年2月27日
  * 主要增加了 AMD 支持。
* 1.0 - 2014年11月3日
  * 第一个版本发布。
