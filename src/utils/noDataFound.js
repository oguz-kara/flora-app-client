export const noDataFound = (data) => {
  return Array.isArray(data) && data.length <= 0;
};
