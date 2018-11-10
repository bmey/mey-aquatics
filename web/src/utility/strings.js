const isEmpty = string => !string || string.trim().length === 0;

const sortEmptyStringToEnd = (a, b) => {
  if (isEmpty(a) && isEmpty(b)) {
    return 0;
  } else if (isEmpty(a)) {
    return 1;
  } else {
    // b is empty
    return -1;
  }
};

export const compareCaseInsentitive = (a, b) => {
  if (isEmpty(a) || isEmpty(b)) {
    return sortEmptyStringToEnd(a, b);
  }

  return a.toLowerCase().localeCompare(b.toLowerCase());
};
