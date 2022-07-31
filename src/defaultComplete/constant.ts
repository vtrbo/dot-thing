export default [
  {
    target: 'var',
    format: 'var $stamp = $value',
    depict: 'var type = value',
  },
  {
    target: 'let',
    format: 'let $stamp = $value',
    depict: 'let type = value',
  },
  {
    target: 'const',
    format: 'const $stamp = $value',
    depict: 'const type = value',
  },
]
