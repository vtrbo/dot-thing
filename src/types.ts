export interface IOption {
  /**
   * 触发器
   */
  target: string

  /**
   * 补全格式
   */
  format: string

  /**
   * 描述
   */
  depict: string

  /**
   * v0.0.8 之前
   */
  keyword?: string
  formatter?: string
  description?: string
}
