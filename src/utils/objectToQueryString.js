export function objectToQueryString(obj) {
  if (obj && Object.keys(obj).length > 0) {
    let result = '';
    Object.keys(obj).forEach((key) => {
      result += `${key}=${obj[key]}&`;
    });

    return `?${result.substring(0, result.length - 1)}`;
  }
  return '';
}
