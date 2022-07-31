export default [
  {
    target: 'fori',
    format: [
      'for (let i = 0; i < $value.length; i++) {',
      '  const f = $value[i]',
      '  ',
      '}',
    ],
    depict: 'for (let i = 0; i < array.length; i++)',
  },
  {
    target: 'forr',
    format: [
      'for (let i = $value.length - 1; i >= 0; i--) {',
      '  const f = $value[i]',
      '  ',
      '}',
    ],
    depict: 'for (let i = array.length - 1; i >= 0; i--)',
  },
  {
    target: 'forof',
    format: [
      'for (const v of $value) {',
      '  ',
      '}',
    ],
    depict: 'for (const value of array)',
  },
  {
    target: 'forEach',
    format: [
      '$value.forEach((f, fi) => {',
      '  ',
      '})',
    ],
    depict: 'array.forEach(() => {})',
  },
  {
    target: 'map',
    format: [
      '$value.map((m, mi) => {',
      '  ',
      '})',
    ],
    depict: 'array.map(() => {})',
  },
]

