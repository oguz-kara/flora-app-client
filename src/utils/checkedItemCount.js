export const checkedItemCount = (items) => {
  let count = 0;

  items.forEach((item) => {
    if (item.checked === true) count++;
  });

  return count;
};
