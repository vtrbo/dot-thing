export default [
  {
    target: 'for',
    format: [
      'for (let i = 0; i < $value.length; i++) {',
      '  const f = $value[i]',
      '  ',
      '}',
    ],
    depict: 'array for i 循环键入',
  },
  {
    target: 'forof',
    format: [
      'for (const v of $value) {',
      '  ',
      '}',
    ],
    depict: 'array for of 循环键入',
  },
  {
    target: 'foreach',
    format: [
      '$value.forEach((f, fi) => {',
      '  ',
      '})',
    ],
    depict: 'array forEach 循环键入',
  },
  {
    target: 'map',
    format: [
      '$value.map((m, mi) => {',
      '  ',
      '})',
    ],
    depict: 'array map 循环键入',
  },
]

