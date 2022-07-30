export default [
  {
    target: 'log',
    format: 'console.log($label, $value)',
    depict: '打印基本日志快捷键入',
  },
  {
    target: 'info',
    format: 'console.info($label, $value)',
    depict: '打印信息日志快捷键入',
  },
  {
    target: 'warn',
    format: 'console.warn($label, $value)',
    depict: '打印警告日志快捷键入',
  },
  {
    target: 'error',
    format: 'console.error($label, $value)',
    depict: '打印错误日志快捷键入',
  },
]
