export default function analyzeArray(arr) {
  const min = arr.reduce((prev, curr) => Math.min(prev, curr));
  const max = arr.reduce((prev, curr) => Math.max(prev, curr));
  const average = arr.reduce((prev, curr) => prev + curr) / arr.length;
  return {
    average,
    min,
    max,
    length: arr.length,
  };
}
