const romanMap: { [key: string]: number } = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
};

export function fromRoman(roman: string): number {
  let num = 0;
  let i = 0;
  const keys = Object.keys(romanMap).reverse();

  while (i < roman.length) {
    if (i + 1 < roman.length && romanMap[roman[i] + roman[i + 1]]) {
      num += romanMap[roman[i] + roman[i + 1]];
      i += 2;
    } else {
      num += romanMap[roman[i]];
      i++;
    }
  }
  return num;
}
export function toRoman(num: number): string {
  if (num < 1) return "";
  const keys = Object.keys(romanMap).reverse();
  let result = "";
  for (const key of keys) {
    while (num >= romanMap[key]) {
      result += key;
      num -= romanMap[key];
    }
  }
  return result;
}
