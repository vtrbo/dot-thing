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
