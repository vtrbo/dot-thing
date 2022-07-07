import * as vscode from 'vscode'
import type { IOption } from './types'
import { matchRealType } from './utils'
import { CompletionItemProvider } from './provider'
import { defaultLanguages, defaultOptions } from './constant'

export function activate(context: vscode.ExtensionContext): void {
  const dotThing: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('dotThing')
  const options: IOption[] = [...defaultOptions, ...(dotThing.get('options') as IOption[] || [])]

  if (!options)
    return

  const selector: vscode.DocumentSelector = [...defaultLanguages as string[], ...(dotThing.get('languages') as string[] || [])]
  const provider: vscode.CompletionItemProvider = new CompletionItemProvider(options)
  const trigger = '.'

  const command = 'dot-thing-replace'
  const callback = (
    textEditor: vscode.TextEditor,
    edit: vscode.TextEditorEdit,
    position: vscode.Position,
    option: IOption,
  ): void => {
    const lineText = textEditor.document.lineAt(position.line).text
    const matchReg = new RegExp(`^(.*?).(${option.keyword})$`)
    const [lineContent, content, keyword] = lineText.trim().match(matchReg) || []
    if (keyword) {
      let insertContent = option.formatter
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
        $label: `'${content.replace(/^\'(.*?)\'$/g, '$1')}'`,
        $value: content,
      }
      const formatReg = new RegExp(Object.keys(format).map((m: string) => `\\${m}`).join('|'), 'g')

      insertContent = insertContent.replace(formatReg, (key: string) => format[key])

      edit.insert(position.with(undefined, positionIndex), insertContent)
    }
  }

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand(command, callback),
  )
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(selector, provider, trigger),
  )
}

export function deactivate(): void {}
