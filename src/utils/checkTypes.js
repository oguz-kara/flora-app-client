export const isObject = (data) => {
  return Object.getPrototypeOf(data) === Object.prototype;
};

export const isArrayAndHasItems = (data) => {
  return Array.isArray(data) && data.length > 0;
};

export const isObjectAndHasItems = (data) => {
  return isObject(data) && Object.keys(data).length > 0;
};
