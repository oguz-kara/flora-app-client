export default function mergeClasses(classList) {
  let result = '';
  classList.forEach((cls) => {
    result = `${result} ${cls}`;
  });
  return result;
}
