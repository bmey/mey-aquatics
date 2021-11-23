export const isEmpty = (string: string): boolean =>
  !string || string.trim().length === 0

const sortEmptyStringToEnd = (a: string, b: string): number => {
  if (isEmpty(a) && isEmpty(b)) {
    return 0
  } else if (isEmpty(a)) {
    return 1
  } else {
    // b is empty
    return -1
  }
}

export const compareCaseInsentitive = (
  a: string,
  b: string,
  descendingOrder = false
): number => {
  if (isEmpty(a) || isEmpty(b)) {
    return sortEmptyStringToEnd(a, b)
  }

  const comparison = a.toLowerCase().localeCompare(b.toLowerCase())
  return descendingOrder ? -1 * comparison : comparison
}

export const containsCaseInsensitive = (
  subject: string,
  test: string
): boolean => {
  if (isEmpty(test)) {
    return true
  }

  return subject.toLowerCase().includes(test.toLowerCase())
}
