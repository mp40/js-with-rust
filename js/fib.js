export function findNth(n) {
  if (n === 0) {
    return 0;
  }

  if (n < 3) {
    return 1;
  }

  let prev2 = 1;
  let prev1 = 1;

  for (let i = 3; i < n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1 + prev2;
}

export function findNthRecursive(n) {
  if (n < 2) {
    return n;
  }

  return findNthRecursive(n - 1) + findNthRecursive(n - 2);
}
