import { fromRoman, toRoman } from "./roman";

export function calculate(expression: string): string {
  try {
    const sanitizedExpr = expression.replace(/\s+/g, "");

    // Проверка на римские числа
    const isRoman = /^[IVXLCDM+\-*/^()sqrt]+$/.test(sanitizedExpr);

    let result: number;

    if (isRoman) {
      // Преобразуем римские числа в арабские
      const convertedExpr = sanitizedExpr.replace(/[IVXLCDM]+/g, (match) =>
        fromRoman(match).toString()
      );
      result = eval(convertedExpr);
      return result >= 1 ? toRoman(Math.floor(result)) : "";
    } else {
      // Поддержка операций возведения в степень и квадратного корня
      let modifiedExpression = sanitizedExpr
        .replace(/\^/g, "**")
        .replace(/sqrt\((\d+)\)/g, "Math.sqrt($1)");

      result = eval(modifiedExpression);
      return result.toString();
    }
  } catch (error) {
    throw new Error("Некорректное выражение");
  }
}
