# webpack-numbers
基于webpack和typescript和一个库demo

# 说明
本项目基于webpack中文网[关于如何使用webpack创建一个js库](https://www.webpackjs.com/guides/author-libraries/)。
原文是使用js编写，我这里将其改成了ts。至于webpack和typescript之间的结合可以参考使用webpack中文网的[说明](https://www.webpackjs.com/guides/typescript/)。

## 注意点
tyepscript2.9之后支持直接引入json文件，但是默认关闭的，而且通过"tsc --init"生成的默认的tsconfig.json也没有说明如何开启该特性，因此特别说明：
```JSON
{
  "compilerOptions": {
    /* Basic Options */
    "resolveJsonModule": true, //开启之后ts支持引入json文件
  }
}
```
