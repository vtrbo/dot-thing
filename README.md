<p align="center">
<img src="https://vtrbo.gallerycdn.vsassets.io/extensions/vtrbo/dot-thing/0.0.4/1657184239551/Microsoft.VisualStudio.Services.Icons.Default" alt="Logo" height="100"/>
</p>

<h1 align="center">
<p align="center">Dot Thing</p>
<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=vtrbo.dot-thing" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/vtrbo.dot-thing.svg?color=228cb3&amp;label=" alt="Visual Studio Marketplace Version" /></a>
</p>
</h1>

<p>
<p align="center">这是一款通过符号'.'更快键入代码的 vscode 插件。</p>
<p align="center">This is a Vscode plugin passing symbol. to type content quickly.</p>
</p>

## 自定义配置 <font color=#4d9375>Custom Settings</font>
你可以添加自定义配置。
You can set custom options.

### 配置项 <font color=#4d9375>dotThing.options</font>
类型是 IOption 数组。
this is an IOption array.

#### <font color=#4d9375>IOption</font>属性 <font color=#4d9375>IOption</font> attribute
| 键 key | 名 name | 类型 type |
| --- | --- | --- |
| keyword | 关键字 keyword | 字符串 string |
| <font color=#4d9375>formatter</font> | 格式化样式 formatter | 字符串 string |
| description | 描述信息 description | 字符串 string |

<p><font color=#4d9375>formatter</font> 属性支持插值表达式。</p>
<p><font color=#4d9375>formatter</font> support keyword placeholder.</p>

| 名称 name | 描述 description |
| --- | --- |
| $simple | 类型简写 基于 $stamp type simple |
| $stamp | 内容标识 content stamp |
| $label | 标签名 label name |
| $value | 输入值 value text |

#### 默认配置 <font color=#4d9375>Default Options</font>
```json
// setting.json
{
  "dotThing.options": [
    {
      "keyword": "log",
      "formatter": "console.log($label, $value)",
      "description": "打印基本日志快捷键入"
    },
    {
      "keyword": "info",
      "formatter": "console.info($label, $value)",
      "description": "打印信息日志快捷键入"
    },
    {
      "keyword": "warn",
      "formatter": "console.warn($label, $value)",
      "description": "打印警告日志快捷键入"
    },
    {
      "keyword": "error",
      "formatter": "console.error($label, $value)",
      "description": "打印错误日志快捷键入"
    },
    {
      "keyword": "var",
      "formatter": "var $stamp = $value",
      "description": "声明全局变量快捷键入"
    },
    {
      "keyword": "let",
      "formatter": "let $stamp = $value",
      "description": "声明局部变量快捷键入"
    },
    {
      "keyword": "const",
      "formatter": "const $stamp = $value",
      "description": "声明局部常量快捷键入"
    }
  ]
}
```

### 配置项 <font color=#4d9375>dotThing.languages</font>
类型是字符串数组
This is a string array.

#### 默认配置 <font color=#4d9375>Default Languages</font>
```json
// setting.json
{
  "dotThing.languages": [
    "html",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ]
}
```

## License

[MIT](./LICENSE) License © 2022 [Victor Bo](https://github.com/vtrbo)
