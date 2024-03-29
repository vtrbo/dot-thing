import type { IOption } from './types'
/**
 * @description 根据特征判断是否是某个具体的类型
 * @param content 内容
 * @returns 具体的类型
 */
export function matchRealType(content: string): string {
  const strategy: {
    [key: string]: string
  } = {
    '^(\'|\"|\`)(.*?)(\'|\"|\`)$': 'string',
    '^(\{)(.*?)(\})$': 'object',
    '^(\\[)(.*?)(\\])$': 'array',
    '^[0-9]*$': 'number',
    '^(-?\\d+)(\.\\d+)?$': 'float',
  }
  let realType = 'string'
  const strategyReg = Object.keys(strategy)
  for (let i = 0; i < strategyReg.length; i++) {
    const f = strategyReg[i]
    if (new RegExp(f).test(content)) {
      realType = strategy[f]
      break
    }
  }
  return realType
}

/**
 * @description 计算 $label 的值
 * @param content 内容
 * @returns 具体的值
 */
export function compute$Label(content: string): string {
  return JSON.stringify(content)
}

/**
 * 兼容 v0.0.8 之前版本配置
 *
 * 预计 v1.0.0 之后不再支持
 */
export function compatible(option: IOption): IOption {
  if (option.keyword && !option.target)
    option.target = option.keyword
  if (option.formatter && !option.format)
    option.format = option.formatter
  if (option.description && option.depict)
    option.depict = option.description
  return option
}
