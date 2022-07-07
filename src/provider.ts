import * as vscode from 'vscode'
import type { IOption } from './types'

export class CompletionItemProvider implements vscode.CompletionItemProvider {
  /**
   * @description 配置项
   */
  private options: IOption[]

  /**
   * @description 当前光标位置
   */
  private position?: vscode.Position

  /**
   * @description 初始化
   * @param options 配置项
   */
  constructor(options: IOption[]) {
    this.options = options
  }

  /**
   * @description 定义补全项
   * @param _textDocument 当前文档
   * @param position 当前光标位置
   * @returns 补全项
   */
  public provideCompletionItems(_textDocument: vscode.TextDocument, position: vscode.Position): vscode.CompletionItem[] {
    this.position = position
    const completions = this.options.map((m: IOption): vscode.CompletionItem => {
      const snippet = new vscode.CompletionItem(
        m.keyword,
        vscode.CompletionItemKind.Operator,
      )
      snippet.documentation = new vscode.MarkdownString(m.description)
      return snippet
    }) || []
    return completions
  }

  /**
   * @description 触发补全项
   * @param completionItem 补全项
   * @returns 补全项
   */
  public resolveCompletionItem(completionItem: vscode.CompletionItem): vscode.CompletionItem {
    const label = completionItem.label
    if (this.position && this.options && typeof label === 'string') {
      const option = this.options.find(option => option.keyword === label)
      completionItem.command = {
        title: 'refactor',
        command: 'dot-thing-replace',
        arguments: [this.position.translate(0, label.length + 1), option],
      }
    }
    return completionItem
  }
}

