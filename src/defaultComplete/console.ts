export default [
  {
    target: 'log',
    format: 'console.log($label, $value)',
    depict: 'console.log("value", value)',
  },
  {
    target: 'info',
    format: 'console.info($label, $value)',
    depict: 'console.info("value", value)',
  },
  {
    target: 'warn',
    format: 'console.warn($label, $value)',
    depict: 'console.warn("value", value)',
  },
  {
    target: 'error',
    format: 'console.error($label, $value)',
    depict: 'console.error("value", value)',
  },
]
