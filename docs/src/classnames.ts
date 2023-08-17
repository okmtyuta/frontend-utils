export function classNames(...classes: Array<string | { [key: string]: boolean }>) {
  const names: string[] = []
  classes.map((c) => {
    if (typeof c === 'string') {
      names.push(c)
    } else {
      Object.entries(c).forEach(([k, v]) => {
        // eslint-disable-next-line no-extra-boolean-cast
        if (Boolean(v)) {
          names.push(k)
        }
      })
    }
  })
  return names.join(' ')
}
