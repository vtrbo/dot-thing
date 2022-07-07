import type * as vscode from 'vscode'
import type { IOption } from './types'

/**
 * 默认配置
 */
export const defaultOptions: IOption[] = [
  {
    keyword: 'log',
    formatter: 'console.log($label, $value)',
    description: '打印基本日志快捷键入',
  },
  {
    keyword: 'info',
    formatter: 'console.info($label, $value)',
    description: '打印信息日志快捷键入',
  },
  {
    keyword: 'warn',
    formatter: 'console.warn($label, $value)',
    description: '打印警告日志快捷键入',
  },
  {
    keyword: 'error',
    formatter: 'console.error($label, $value)',
    description: '打印错误日志快捷键入',
  },
  {
    keyword: 'var',
    formatter: 'var $stamp = $value',
    description: '声明全局变量快捷键入',
  },
  {
    keyword: 'let',
    formatter: 'let $stamp = $value',
    description: '声明局部变量快捷键入',
  },
  {
    keyword: 'const',
    formatter: 'const $stamp = $value',
    description: '声明局部常量快捷键入',
  },
]

/**
 * 默认语言
 */
export const defaultLanguages: vscode.DocumentSelector = [
  'html',
  'javascript',
  'javascriptreact',
  'typescript',
  'typescriptreact',
  'vue',
]
