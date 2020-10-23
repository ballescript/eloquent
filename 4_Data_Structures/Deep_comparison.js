let deepEqual = (a,b) => {
  if (a === b) return true;

  if (typeof a != "object" || a == null || typeof b != "object" || typeof b == null) return false;

  for (var prop in a) {
    if (!(prop in b) || !deepEqual(a[prop],b[prop])) return false;
  }

  for (var prop in b) {
    if (!(prop in a) || !deepEqual(a[prop],b[prop])) return false;
  }

  return true;
}
