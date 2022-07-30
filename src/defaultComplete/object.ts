export default [
  {
    target: 'forin',
    format: [
      'for (const k in $value) {',
      '  const v = $value[i]',
      '  ',
      '}',
    ],
    depict: 'object for in 循环键入',
  },
]
