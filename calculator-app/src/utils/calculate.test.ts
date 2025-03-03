import { calculate } from "./calculate";

describe("Функция calculate", () => {
  // Тесты для арифметических операций
  test("Сложение арабских чисел", () => {
    expect(calculate("2 + 3")).toBe("5");
  });

  test("Вычитание арабских чисел", () => {
    expect(calculate("10 - 7")).toBe("3");
  });

  test("Умножение арабских чисел", () => {
    expect(calculate("4 * 5")).toBe("20");
  });

  test("Деление арабских чисел", () => {
    expect(calculate("20 / 5")).toBe("4");
  });

  // Тесты для римских чисел
  test("Сложение римских чисел", () => {
    expect(calculate("X + V")).toBe("XV");
  });

  test("Вычитание римских чисел", () => {
    expect(calculate("X - V")).toBe("V");
  });

  test("Неверное выражение", () => {
    expect(() => calculate("10 +")).toThrow("Некорректное выражение");
  });

  // Тесты для новых операций
  test("Возведение в степень", () => {
    expect(calculate("2^3")).toBe("8");
    expect(calculate("4**2")).toBe("16");
  });

  test("Корень квадратный", () => {
    expect(calculate("sqrt(9)")).toBe("3");
    expect(calculate("sqrt(16)")).toBe("4");
  });

  test("Ошибка при некорректном вводе", () => {
    expect(() => calculate("sqrt()")).toThrow("Некорректное выражение");
    expect(() => calculate("2^^3")).toThrow("Некорректное выражение");
  });
});
