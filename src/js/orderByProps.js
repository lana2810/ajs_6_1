export default function orderByProps(obj, arraySort) {
  let result = [];

  arraySort.forEach((key) => {
    result.push({ key, value: obj[key] });
  });

  const keys = Object.keys(obj);
  keys
    .filter((key) => !arraySort.includes(key))
    .sort((a, b) => (a > b ? 1 : -1))
    .forEach((key) => {
      result.push({ key, value: obj[key] });
    });

  return result;
}
