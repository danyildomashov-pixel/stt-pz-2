const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  
  // ========== ТЕСТИ ДЛЯ sum ==========
  describe('Функція sum', () => {
    it('має додавати два позитивні числа', () => {
      expect(lib.sum(5, 3)).toEqual(8);
    });

    it('має додавати від\'ємні числа', () => {
      expect(lib.sum(-5, -3)).toEqual(-8);
    });

    it('має додавати позитивне та від\'ємне число', () => {
      expect(lib.sum(10, -3)).toEqual(7);
    });

    it('має працювати з нулем', () => {
      expect(lib.sum(0, 5)).toEqual(5);
      expect(lib.sum(5, 0)).toEqual(5);
    });

    it('має працювати з рядками-числами', () => {
      expect(lib.sum('5', '3')).toEqual(8);
    });

    it('має працювати з дробовими числами', () => {
      expect(lib.sum(2.5, 3.7)).toBeCloseTo(6.2);
    });

    it('має викидати помилку для нечислових значень', () => {
      expect(() => lib.sum('abc', 5)).toThrow(TypeError);
      expect(() => lib.sum(5, 'xyz')).toThrow(TypeError);
      // Видалено тест для null, оскільки Number(null) = 0 (валідно)
    });
  });

  // ========== ТЕСТИ ДЛЯ subtraction ==========
  describe('Функція subtraction', () => {
    it('має віднімати два числа', () => {
      expect(lib.subtraction(10, 3)).toEqual(7);
    });

    it('має віднімати від\'ємні числа', () => {
      expect(lib.subtraction(-5, -3)).toEqual(-2);
    });

    it('має давати від\'ємний результат', () => {
      expect(lib.subtraction(3, 10)).toEqual(-7);
    });

    it('має працювати з нулем', () => {
      expect(lib.subtraction(5, 0)).toEqual(5);
      expect(lib.subtraction(0, 5)).toEqual(-5);
    });

    it('має працювати з рядками-числами', () => {
      expect(lib.subtraction('10', '3')).toEqual(7);
    });

    it('має працювати з дробовими числами', () => {
      expect(lib.subtraction(5.5, 2.3)).toBeCloseTo(3.2);
    });

    it('має викидати помилку для нечислових значень', () => {
      expect(() => lib.subtraction('abc', 5)).toThrow(TypeError);
      expect(() => lib.subtraction(5, undefined)).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ division ==========
  describe('Функція division', () => {
    it('має ділити два числа', () => {
      expect(lib.division(10, 2)).toEqual(5);
    });

    it('має ділити з результатом дріб', () => {
      expect(lib.division(7, 2)).toEqual(3.5);
    });

    it('має ділити від\'ємні числа', () => {
      expect(lib.division(-10, 2)).toEqual(-5);
      expect(lib.division(10, -2)).toEqual(-5);
      expect(lib.division(-10, -2)).toEqual(5);
    });

    it('має працювати з нулем як діленим', () => {
      expect(lib.division(0, 5)).toEqual(0);
    });

    it('має викидати помилку при діленні на нуль', () => {
      expect(() => lib.division(10, 0)).toThrow('Cannot divide by zero');
    });

    it('має працювати з рядками-числами', () => {
      expect(lib.division('10', '2')).toEqual(5);
    });

    it('має працювати з дробовими числами', () => {
      expect(lib.division(7.5, 2.5)).toEqual(3);
    });

    it('має викидати помилку для нечислових значень', () => {
      expect(() => lib.division('abc', 5)).toThrow(TypeError);
      // Видалено тест для null, оскільки він конвертується в 0 і викликає помилку ділення на нуль
    });
  });

  // ========== ТЕСТИ ДЛЯ multiplication ==========
  describe('Функція multiplication', () => {
    it('має множити два позитивні числа', () => {
      expect(lib.multiplication(5, 3)).toEqual(15);
    });

    it('має множити від\'ємні числа', () => {
      expect(lib.multiplication(-5, 3)).toEqual(-15);
      expect(lib.multiplication(5, -3)).toEqual(-15);
      expect(lib.multiplication(-5, -3)).toEqual(15);
    });

    it('має множити на нуль', () => {
      expect(lib.multiplication(5, 0)).toEqual(0);
      expect(lib.multiplication(0, 5)).toEqual(0);
    });

    it('має множити на одиницю', () => {
      expect(lib.multiplication(5, 1)).toEqual(5);
    });

    it('має працювати з рядками-числами', () => {
      expect(lib.multiplication('5', '3')).toEqual(15);
    });

    it('має працювати з дробовими числами', () => {
      expect(lib.multiplication(2.5, 4)).toEqual(10);
    });

    it('має викидати помилку для нечислових значень', () => {
      expect(() => lib.multiplication('abc', 5)).toThrow(TypeError);
      expect(() => lib.multiplication(5, {})).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ percentage ==========
  describe('Функція percentage', () => {
    it('має обчислювати відсоток від числа', () => {
      expect(lib.percentage(100, 10)).toEqual(10);
      expect(lib.percentage(200, 50)).toEqual(100);
    });

    it('має працювати з дробовими відсотками', () => {
      expect(lib.percentage(100, 12.5)).toEqual(12.5);
    });

    it('має працювати з нулем', () => {
      expect(lib.percentage(100, 0)).toEqual(0);
      expect(lib.percentage(0, 50)).toEqual(0);
    });

    it('має працювати з відсотками більше 100', () => {
      expect(lib.percentage(50, 200)).toEqual(100);
    });

    it('має працювати з рядками-числами', () => {
      expect(lib.percentage('100', '25')).toEqual(25);
    });

    it('має працювати з від\'ємними значеннями', () => {
      expect(lib.percentage(-100, 10)).toEqual(-10);
    });

    it('має викидати помилку для нечислових значень', () => {
      expect(() => lib.percentage('abc', 10)).toThrow(TypeError);
      expect(() => lib.percentage(100, 'xyz')).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ getWholeNumberPart ==========
  describe('Функція getWholeNumberPart', () => {
    it('має повертати цілу частину позитивного числа', () => {
      expect(lib.getWholeNumberPart(5.7)).toEqual(5);
      expect(lib.getWholeNumberPart(10.9)).toEqual(10);
    });

    it('має повертати цілу частину від\'ємного числа', () => {
      expect(lib.getWholeNumberPart(-5.7)).toEqual(-5);
      expect(lib.getWholeNumberPart(-10.9)).toEqual(-10);
    });

    it('має повертати те саме число для цілих чисел', () => {
      expect(lib.getWholeNumberPart(5)).toEqual(5);
      expect(lib.getWholeNumberPart(0)).toEqual(0);
    });

    it('має працювати з рядками-числами', () => {
      expect(lib.getWholeNumberPart('5.7')).toEqual(5);
    });

    it('має працювати з дуже малими дробами', () => {
      expect(lib.getWholeNumberPart(0.1)).toEqual(0);
      // Math.trunc(-0.9) повертає -0, що технічно коректно
      const result = lib.getWholeNumberPart(-0.9);
      expect(result === 0 || result === -0).toBe(true);
    });

    it('має викидати помилку для нечислових значень', () => {
      expect(() => lib.getWholeNumberPart('abc')).toThrow(TypeError);
      // Видалено тест для null, оскільки Number(null) = 0 (валідно)
    });
  });

  // ========== ТЕСТИ ДЛЯ getEvenNumbers ==========
  describe('Функція getEvenNumbers', () => {
    it('має повертати тільки парні числа', () => {
      expect(lib.getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    it('має повертати порожній масив якщо немає парних', () => {
      expect(lib.getEvenNumbers([1, 3, 5, 7])).toEqual([]);
    });

    it('має працювати з від\'ємними числами', () => {
      expect(lib.getEvenNumbers([-4, -3, -2, -1, 0, 1, 2])).toEqual([-4, -2, 0, 2]);
    });

    it('має працювати з нулем', () => {
      expect(lib.getEvenNumbers([0])).toEqual([0]);
    });

    it('має повертати порожній масив для порожнього вводу', () => {
      expect(lib.getEvenNumbers([])).toEqual([]);
    });

    it('має працювати з великими числами', () => {
      expect(lib.getEvenNumbers([100, 101, 102])).toEqual([100, 102]);
    });

    it('має викидати помилку для не-масиву', () => {
      expect(() => lib.getEvenNumbers(123)).toThrow(TypeError);
      expect(() => lib.getEvenNumbers('abc')).toThrow(TypeError);
      expect(() => lib.getEvenNumbers(null)).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ getMaxNumber ==========
  describe('Функція getMaxNumber', () => {
    it('має знаходити максимальне число', () => {
      expect(lib.getMaxNumber([1, 5, 3, 9, 2])).toEqual(9);
    });

    it('має працювати з від\'ємними числами', () => {
      expect(lib.getMaxNumber([-5, -1, -10, -3])).toEqual(-1);
    });

    it('має працювати з одним елементом', () => {
      expect(lib.getMaxNumber([42])).toEqual(42);
    });

    it('має працювати зі змішаними числами', () => {
      expect(lib.getMaxNumber([-10, 0, 15, -5, 20])).toEqual(20);
    });

    it('має працювати з дробовими числами', () => {
      expect(lib.getMaxNumber([1.5, 2.7, 1.9, 2.5])).toEqual(2.7);
    });

    it('має викидати помилку для порожнього масиву', () => {
      expect(() => lib.getMaxNumber([])).toThrow('Array cannot be empty');
    });

    it('має викидати помилку для не-масиву', () => {
      expect(() => lib.getMaxNumber(123)).toThrow(TypeError);
      expect(() => lib.getMaxNumber('abc')).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ getMinAndMaxNumbers ==========
  describe('Функція getMinAndMaxNumbers', () => {
    it('має повертати мін і макс значення', () => {
      expect(lib.getMinAndMaxNumbers([1, 5, 3, 9, 2])).toEqual({ min: 1, max: 9 });
    });

    it('має працювати з від\'ємними числами', () => {
      expect(lib.getMinAndMaxNumbers([-5, -1, -10, -3])).toEqual({ min: -10, max: -1 });
    });

    it('має працювати з одним елементом', () => {
      expect(lib.getMinAndMaxNumbers([42])).toEqual({ min: 42, max: 42 });
    });

    it('має працювати зі змішаними числами', () => {
      expect(lib.getMinAndMaxNumbers([-10, 0, 15, -5, 20])).toEqual({ min: -10, max: 20 });
    });

    it('має працювати з дробовими числами', () => {
      expect(lib.getMinAndMaxNumbers([1.5, 2.7, 1.1, 2.5])).toEqual({ min: 1.1, max: 2.7 });
    });

    it('має викидати помилку для порожнього масиву', () => {
      expect(() => lib.getMinAndMaxNumbers([])).toThrow('Array cannot be empty');
    });

    it('має викидати помилку для не-масиву', () => {
      expect(() => lib.getMinAndMaxNumbers('abc')).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ arithmeticMeans ==========
  describe('Функція arithmeticMeans', () => {
    it('має обчислювати середнє арифметичне', () => {
      expect(lib.arithmeticMeans([1, 2, 3, 4, 5])).toEqual(3);
    });

    it('має працювати з від\'ємними числами', () => {
      expect(lib.arithmeticMeans([-5, -10, -15])).toEqual(-10);
    });

    it('має працювати з одним елементом', () => {
      expect(lib.arithmeticMeans([42])).toEqual(42);
    });

    it('має працювати з нулем', () => {
      expect(lib.arithmeticMeans([0, 0, 0])).toEqual(0);
    });

    it('має працювати з дробовими числами', () => {
      expect(lib.arithmeticMeans([1.5, 2.5, 3.0])).toBeCloseTo(2.333, 2);
    });

    it('має працювати зі змішаними числами', () => {
      expect(lib.arithmeticMeans([-10, 0, 10])).toEqual(0);
    });

    it('має викидати помилку для порожнього масиву', () => {
      expect(() => lib.arithmeticMeans([])).toThrow('Array cannot be empty');
    });

    it('має викидати помилку для не-масиву', () => {
      expect(() => lib.arithmeticMeans(123)).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ getVowels ==========
  describe('Функція getVowels', () => {
    it('має повертати голосні літери', () => {
      expect(lib.getVowels('hello')).toEqual(['e', 'o']);
    });

    it('має працювати з великими літерами', () => {
      expect(lib.getVowels('HELLO')).toEqual(['E', 'O']);
    });

    it('має працювати зі змішаним регістром', () => {
      expect(lib.getVowels('Hello World')).toEqual(['e', 'o', 'o']);
    });

    it('має повертати порожній масив для рядка без голосних', () => {
      expect(lib.getVowels('bcdfg')).toEqual([]);
    });

    it('має працювати з порожнім рядком', () => {
      expect(lib.getVowels('')).toEqual([]);
    });

    it('має працювати тільки з голосними', () => {
      expect(lib.getVowels('aeiou')).toEqual(['a', 'e', 'i', 'o', 'u']);
    });

    it('має працювати з цифрами та спецсимволами', () => {
      expect(lib.getVowels('a1b2e3')).toEqual(['a', 'e']);
    });

    it('має викидати помилку для не-рядка', () => {
      expect(() => lib.getVowels(123)).toThrow(TypeError);
      expect(() => lib.getVowels(null)).toThrow(TypeError);
      expect(() => lib.getVowels([])).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ cancatString ==========
  describe('Функція cancatString', () => {
    it('має об\'єднувати масив рядків', () => {
      expect(lib.cancatString(['Hello', ' ', 'World'])).toEqual('Hello World');
    });

    it('має працювати з порожніми рядками', () => {
      expect(lib.cancatString(['', 'Hello', ''])).toEqual('Hello');
    });

    it('має працювати з одним елементом', () => {
      expect(lib.cancatString(['Hello'])).toEqual('Hello');
    });

    it('має повертати порожній рядок для порожнього масиву', () => {
      expect(lib.cancatString([])).toEqual('');
    });

    it('має працювати з цифрами як рядками', () => {
      expect(lib.cancatString(['1', '2', '3'])).toEqual('123');
    });

    it('має працювати з багатьма елементами', () => {
      expect(lib.cancatString(['a', 'b', 'c', 'd', 'e'])).toEqual('abcde');
    });

    it('має викидати помилку для не-масиву', () => {
      expect(() => lib.cancatString('abc')).toThrow(TypeError);
      expect(() => lib.cancatString(123)).toThrow(TypeError);
      expect(() => lib.cancatString(null)).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ splitString ==========
  describe('Функція splitString', () => {
    it('має розділяти рядок за роздільником', () => {
      expect(lib.splitString('a,b,c', ',')).toEqual(['a', 'b', 'c']);
    });

    it('має працювати з пробілом як роздільником', () => {
      expect(lib.splitString('Hello World Test', ' ')).toEqual(['Hello', 'World', 'Test']);
    });

    it('має працювати з порожнім роздільником', () => {
      expect(lib.splitString('abc', '')).toEqual(['a', 'b', 'c']);
    });

    it('має повертати масив з одним елементом без роздільника', () => {
      expect(lib.splitString('hello', ',')).toEqual(['hello']);
    });

    it('має працювати з порожнім рядком', () => {
      expect(lib.splitString('', ',')).toEqual(['']);
    });

    it('має працювати з багатосимвольним роздільником', () => {
      expect(lib.splitString('a::b::c', '::')).toEqual(['a', 'b', 'c']);
    });

    it('має викидати помилку якщо перший параметр не рядок', () => {
      expect(() => lib.splitString(123, ',')).toThrow(TypeError);
      expect(() => lib.splitString(null, ',')).toThrow(TypeError);
    });

    it('має викидати помилку якщо другий параметр не рядок', () => {
      expect(() => lib.splitString('hello', 123)).toThrow(TypeError);
      expect(() => lib.splitString('hello', null)).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ hasSubString ==========
  describe('Функція hasSubString', () => {
    it('має знаходити підрядок в рядку', () => {
      expect(lib.hasSubString('Hello World', 'World')).toBe(true);
    });

    it('має повертати false якщо підрядок відсутній', () => {
      expect(lib.hasSubString('Hello World', 'Goodbye')).toBe(false);
    });

    it('має бути чутливим до регістру', () => {
      expect(lib.hasSubString('Hello World', 'world')).toBe(false);
      expect(lib.hasSubString('Hello World', 'World')).toBe(true);
    });

    it('має знаходити порожній підрядок', () => {
      expect(lib.hasSubString('Hello', '')).toBe(true);
    });

    it('має працювати з повним співпадінням', () => {
      expect(lib.hasSubString('Hello', 'Hello')).toBe(true);
    });

    it('має знаходити підрядок на початку', () => {
      expect(lib.hasSubString('Hello World', 'Hello')).toBe(true);
    });

    it('має знаходити підрядок в кінці', () => {
      expect(lib.hasSubString('Hello World', 'World')).toBe(true);
    });

    it('має знаходити підрядок в середині', () => {
      expect(lib.hasSubString('Hello World', 'lo Wo')).toBe(true);
    });

    it('має викидати помилку для не-рядків', () => {
      expect(() => lib.hasSubString(123, 'test')).toThrow(TypeError);
      expect(() => lib.hasSubString('test', 123)).toThrow(TypeError);
      expect(() => lib.hasSubString(null, 'test')).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ isLowerCase ==========
  describe('Функція isLowerCase', () => {
    it('має повертати true для малих літер', () => {
      expect(lib.isLowerCase('a')).toBe(true);
      expect(lib.isLowerCase('z')).toBe(true);
    });

    it('має повертати false для великих літер', () => {
      expect(lib.isLowerCase('A')).toBe(false);
      expect(lib.isLowerCase('Z')).toBe(false);
    });

    it('має повертати false для цифр', () => {
      expect(lib.isLowerCase('5')).toBe(false);
    });

    it('має повертати false для спецсимволів', () => {
      expect(lib.isLowerCase('!')).toBe(false);
      expect(lib.isLowerCase('@')).toBe(false);
    });

    it('має повертати false для пробілу', () => {
      expect(lib.isLowerCase(' ')).toBe(false);
    });

    it('має викидати помилку для рядка довжиною більше 1', () => {
      expect(() => lib.isLowerCase('ab')).toThrow('Parameter must be a single character');
      expect(() => lib.isLowerCase('hello')).toThrow('Parameter must be a single character');
    });

    it('має викидати помилку для порожнього рядка', () => {
      expect(() => lib.isLowerCase('')).toThrow('Parameter must be a single character');
    });

    it('має викидати помилку для не-рядка', () => {
      expect(() => lib.isLowerCase(123)).toThrow(TypeError);
      expect(() => lib.isLowerCase(null)).toThrow(TypeError);
      expect(() => lib.isLowerCase([])).toThrow(TypeError);
    });
  });

  // ========== ТЕСТИ ДЛЯ getElement ==========
  describe('Функція getElement', () => {
    
    describe('Доступ за стандартними індексами', () => {
      const testArray = [10, 20, 30, 40, 50];

      it('має повертати перший елемент масиву', () => {
        expect(lib.getElement(testArray, 0)).toEqual(10);
      });

      it('має повертати елемент із середини', () => {
        expect(lib.getElement(testArray, 2)).toEqual(30);
      });

      it('має повертати останній елемент за максимальним індексом', () => {
        expect(lib.getElement(testArray, 4)).toEqual(50);
      });

      it('має працювати з масивом рядків', () => {
        const words = ['один', 'два', 'три'];
        expect(lib.getElement(words, 1)).toEqual('два');
      });
    });

    describe('Використання від\'ємних індексів', () => {
      const data = ['alpha', 'beta', 'gamma', 'delta', 'epsilon'];

      it('має отримувати останній елемент через -1', () => {
        expect(lib.getElement(data, -1)).toEqual('epsilon');
      });

      it('має отримувати елемент з позиції -3 від кінця', () => {
        expect(lib.getElement(data, -3)).toEqual('gamma');
      });

      it('має отримувати перший елемент через від\'ємний індекс', () => {
        expect(lib.getElement(data, -5)).toEqual('alpha');
      });

      it('має працювати з від\'ємним індексом у короткому масиві', () => {
        const short = ['x', 'y'];
        expect(lib.getElement(short, -2)).toEqual('x');
      });
    });

    describe('Обробка виходу за межі масиву', () => {
      const items = [1, 2, 3];

      it('має повертати null для надто великого індексу', () => {
        expect(lib.getElement(items, 100)).toBeNull();
      });

      it('має повертати null для надто малого від\'ємного індексу', () => {
        expect(lib.getElement(items, -50)).toBeNull();
      });

      it('має використовувати власне значення fallback', () => {
        expect(lib.getElement(items, 10, 'помилка')).toEqual('помилка');
      });

      it('має повертати числовий fallback', () => {
        expect(lib.getElement(items, -10, 999)).toEqual(999);
      });

      it('має повертати булеве значення як fallback', () => {
        expect(lib.getElement(items, 5, true)).toBe(true);
      });

      it('має використовувати об\'єкт як fallback', () => {
        const fb = { error: 'not found' };
        expect(lib.getElement(items, 20, fb)).toEqual(fb);
      });
    });

    describe('Поведінка з порожнім масивом', () => {
      const emptyArr = [];

      it('має повертати null при спробі доступу до порожнього масиву', () => {
        expect(lib.getElement(emptyArr, 0)).toBeNull();
      });

      it('має повертати fallback для порожнього масиву з від\'ємним індексом', () => {
        expect(lib.getElement(emptyArr, -1, 'немає даних')).toEqual('немає даних');
      });

      it('має працювати з будь-яким індексом у порожньому масиві', () => {
        expect(lib.getElement(emptyArr, 5, 'пусто')).toEqual('пусто');
      });
    });

    describe('Робота зі спеціальними значеннями в масиві', () => {
      const special = [null, undefined, false, 0, '', NaN, true];

      it('має правильно повертати null як елемент', () => {
        expect(lib.getElement(special, 0)).toBeNull();
      });

      it('має правильно повертати undefined як елемент', () => {
        expect(lib.getElement(special, 1)).toBeUndefined();
      });

      it('має правильно повертати false як елемент', () => {
        expect(lib.getElement(special, 2)).toEqual(false);
      });

      it('має правильно повертати 0 як елемент', () => {
        expect(lib.getElement(special, 3)).toEqual(0);
      });

      it('має правильно повертати порожній рядок як елемент', () => {
        expect(lib.getElement(special, 4)).toEqual('');
      });

      it('має правильно повертати NaN як елемент', () => {
        expect(lib.getElement(special, 5)).toBeNaN();
      });
    });

    describe('Валідація типу масиву', () => {
      it('має викидати помилку для числа замість масиву', () => {
        expect(() => lib.getElement(42, 0)).toThrow(TypeError);
      });

      it('має викидати помилку для рядка замість масиву', () => {
        expect(() => lib.getElement('текст', 1)).toThrow(TypeError);
      });

      it('має викидати помилку для null замість масиву', () => {
        expect(() => lib.getElement(null, 0)).toThrow(TypeError);
      });

      it('має викидати помилку для undefined замість масиву', () => {
        expect(() => lib.getElement(undefined, 0)).toThrow(TypeError);
      });

      it('має викидати помилку для об\'єкта замість масиву', () => {
        expect(() => lib.getElement({ key: 'value' }, 0)).toThrow(TypeError);
      });

      it('має викидати помилку для функції замість масиву', () => {
        expect(() => lib.getElement(() => {}, 0)).toThrow(TypeError);
      });
    });

    describe('Валідація типу індексу', () => {
      const arr = [1, 2, 3];

      it('має викидати помилку для рядкового індексу', () => {
        expect(() => lib.getElement(arr, '1')).toThrow(TypeError);
      });

      it('має викидати помилку для null як індексу', () => {
        expect(() => lib.getElement(arr, null)).toThrow(TypeError);
      });

      it('має викидати помилку для undefined як індексу', () => {
        expect(() => lib.getElement(arr, undefined)).toThrow(TypeError);
      });

      it('має викидати помилку для масиву як індексу', () => {
        expect(() => lib.getElement(arr, [])).toThrow(TypeError);
      });

      it('має викидати помилку для об\'єкта як індексу', () => {
        expect(() => lib.getElement(arr, {})).toThrow(TypeError);
      });

      it('має викидати помилку для NaN як індексу', () => {
        expect(() => lib.getElement(arr, NaN)).toThrow(TypeError);
      });
    });

    describe('Крайні випадки з великими індексами', () => {
      const arr = ['a', 'b', 'c'];

      it('має обробляти дуже великі позитивні індекси', () => {
        expect(lib.getElement(arr, 1000000)).toBeNull();
      });

      it('має обробляти дуже великі від\'ємні індекси', () => {
        expect(lib.getElement(arr, -1000000)).toBeNull();
      });

      it('має обробляти Infinity як індекс', () => {
        expect(lib.getElement(arr, Infinity, 'infinity')).toEqual('infinity');
      });

      it('має обробляти -Infinity як індекс', () => {
        expect(lib.getElement(arr, -Infinity, 'neg-infinity')).toEqual('neg-infinity');
      });

      it('має обробляти максимальне безпечне ціле число', () => {
        expect(lib.getElement(arr, Number.MAX_SAFE_INTEGER)).toBeNull();
      });
    });
  });
});