export function everage(numbers){
  let averagenumber = 0
  numbers.forEach(number => {
    averagenumber += number

  });

  return averagenumber/numbers.length
}