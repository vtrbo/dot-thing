import * as vscode from 'vscode'
import type { IOption } from './types'
import { CompletionProvider } from './provider'
import defaultLanguage from './defaultLanguage'
import defaultComplete from './defaultComplete'
import { compute$Label, matchRealType } from './utils'

/**
 * 设置补全指令
 */
function setDocumentCommand() {
  const command = 'dot-thing-replace'
  const callback = (
    textEditor: vscode.TextEditor,
    edit: vscode.TextEditorEdit,
    position: vscode.Position,
    option: IOption,
  ): void => {
    const lineText = textEditor.document.lineAt(position.line).text
    const matchReg = new RegExp(`^(.*?).(${option.target})$`)
    const [lineContent, content, target] = lineText.trim().match(matchReg) || []
    if (target) {
      let insertContent = option.format
      const positionIndex = lineText.indexOf(content)
      edit.delete(
        new vscode.Range(
          position.with(undefined, positionIndex),
          position.with(undefined, positionIndex + lineContent.length),
        ),
      )

      const format: {
        [key: string]: string
      } = {
        $simple: matchRealType(content).substring(0, 3),
        $stamp: matchRealType(content),
        $label: compute$Label(content),
        $value: content,
      }
      const formatReg = new RegExp(Object.keys(format).map((m: string) => `\\${m}`).join('|'), 'g')

      insertContent = insertContent.replace(formatReg, (key: string) => format[key])

      edit.insert(position.with(undefined, positionIndex), insertContent)
    }
  }
  return vscode.commands.registerTextEditorCommand(command, callback)
}

/**
 * 设置代码补全
 */
function setDefaultProvider() {
  const dotThing: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('dotThing')
  const language: vscode.DocumentSelector = (dotThing.get('language') || []) as string[]
  const options: IOption[] = (dotThing.get('options') || []) as IOption[]

  const selector: vscode.DocumentSelector = [...defaultLanguage, ...language]
  const provider: vscode.CompletionItemProvider = new CompletionProvider([...defaultComplete, ...options])
  return vscode.languages.registerCompletionItemProvider(selector, provider, '.')
}

// /**
//  * 更新代码补全
//  */
// function setSettingProvider(context: vscode.ExtensionContext) {
//   vscode.workspace.onDidChangeConfiguration((event: vscode.ConfigurationChangeEvent) => {
//     const configList = ['dotThing.options', 'dotThing.language']
//     const isChange = configList.some((s: string) => event.affectsConfiguration(s))

//     if (isChange) {
//       const dotThing: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('dotThing')
//       const language: vscode.DocumentSelector = (dotThing.get('language') || []) as string[]
//       const options: IOption[] = (dotThing.get('options') || []) as IOption[]

//       const selector: vscode.DocumentSelector = [...defaultLanguage, ...language]
//       const provider: vscode.CompletionItemProvider = new CompletionProvider([...defaultComplete, ...options])

//       context.subscriptions.splice(1, 1, vscode.languages.registerCompletionItemProvider(selector, provider, '.'))
//     }
//   })
// }

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(setDocumentCommand())
  context.subscriptions.push(setDefaultProvider())
}

export function deactivate(): void {}
