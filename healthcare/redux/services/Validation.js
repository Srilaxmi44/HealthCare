export function validateEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

export function checkNotNull(data) {
  if (data === null || data === undefined) {
    return false;
  }
  if (typeof data === 'boolean') {
    if (data) {
      return true;
    } else {
      return false;
    }
  }
  return true;
}

export function checkNotNullAndEmpty(data) {
  if (checkNotNull(data) && data.toString() !== '') {
    return true;
  }
  return false;
}

export function checkNotNullAndLength(data, length = 0) {
  if (checkNotNull(data) && data.length > length) {
    return true;
  }
  return false;
}
