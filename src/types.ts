export interface IOption {
  /**
   * 触发器
   */
  target: string

  /**
   * 补全格式
   */
  format: string | string[]

  /**
   * 描述
   */
  depict: string

  /**
   * 兼容 v0.0.8 之前
   */
  keyword?: string
  formatter?: string | string[]
  description?: string
}
