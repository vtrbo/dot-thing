export default [
  {
    target: 'forin',
    format: [
      'for (const k in $value) {',
      '  const v = $value[i]',
      '  ',
      '}',
    ],
    depict: 'or (const k in array)',
  },
]
