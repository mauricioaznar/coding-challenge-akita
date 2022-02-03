export function bubbleSort(numbers: number[]): number[] {
  const len = numbers.length;

  for (let i = 0; i < len; i++) {
    const maxJLength = len - i - 1;

    for (let j = 0; j < maxJLength; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return numbers;
}
