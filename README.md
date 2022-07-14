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

## 效果图 Effect Picture
- 你可以通过键入 XXX.log 实现 console.log('XXX', XXX) 的快速日志输出

![console.log](https://github.com/vtrbo/dot-thing/blob/main/res/effect-picture/dot-log.gif?raw=true#pic_center)

- 你可以通过键入 XXX.info 实现 console.info('XXX', XXX) 的快速日志输出

![console.info](https://github.com/vtrbo/dot-thing/blob/main/res/effect-picture/dot-info.gif?raw=true#pic_center)

- 你可以通过键入 XXX.warn 实现 console.warn('XXX', XXX) 的快速日志输出

![console.warn](https://github.com/vtrbo/dot-thing/blob/main/res/effect-picture/dot-warn.gif?raw=true#pic_center)

- 你可以通过键入 XXX.error 实现 console.error('XXX', XXX) 的快速日志输出

![console.error](https://github.com/vtrbo/dot-thing/blob/main/res/effect-picture/dot-error.gif?raw=true#pic_center)

- 你可以通过键入 XXX.var 实现 var typeof XXX = XXX 的快速变量声明

![console.error](https://github.com/vtrbo/dot-thing/blob/main/res/effect-picture/dot-var.gif?raw=true#pic_center)

- 你可以通过键入 XXX.let 实现 let typeof XXX = XXX 的快速变量声明

![console.error](https://github.com/vtrbo/dot-thing/blob/main/res/effect-picture/dot-let.gif?raw=true#pic_center)

- 你可以通过键入 XXX.const 实现 const typeof XXX = XXX 的快速常量声明

![console.error](https://github.com/vtrbo/dot-thing/blob/main/res/effect-picture/dot-const.gif?raw=true#pic_center)

## 自定义配置 Custom Settings
<p>你可以添加自定义配置。</p>

### 配置项 dotThing.options
<p>类型是 IOption 数组。</p>

#### 默认配置 Default Options
##### settings.json
```json
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

<h4>IOption属性</h4>

| 键 | 名 | 类型 |
| --- | --- | --- |
| keyword | 关键字 | string |
| formatter | 格式化样式 | string |
| description | 描述信息 | string |

<p>formatter 属性支持插值表达式。</p>

<h4>formatter 插值</h4>

| 名称 | 描述 |
| --- | --- |
| $simple | 类型简写 基于 $stamp 取的值 |
| $stamp | 内容标识 |
| $label | 标签名 |
| $value | 输入值 |

### 配置项 dotThing.languages
<p>类型是字符串数组</p>

#### 默认配置 Default Languages
##### settings.json
```json
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
