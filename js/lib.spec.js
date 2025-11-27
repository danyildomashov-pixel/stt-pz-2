const lib = require('./lib');

describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing subtraction function', () => {
    it('should return subtraction of two numbers', () => {
      expect(lib.subtraction(5, 2)).toEqual(3);
    });
  });

  describe('Функція отримання елемента масиву', () => {
    
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

    describe('Робота з різними типами даних у масиві', () => {
      it('має працювати з масивом об\'єктів', () => {
        const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
        expect(lib.getElement(objects, 1)).toEqual({ id: 2 });
      });

      it('має працювати з вкладеними масивами', () => {
        const nested = [[1, 2], [3, 4], [5, 6]];
        expect(lib.getElement(nested, -1)).toEqual([5, 6]);
      });

      it('має працювати з масивом функцій', () => {
        const fn1 = () => 'first';
        const fn2 = () => 'second';
        const funcs = [fn1, fn2];
        expect(lib.getElement(funcs, 0)).toEqual(fn1);
      });

      it('має працювати з масивом змішаних типів', () => {
        const mixed = [123, 'text', { key: 'val' }, [1, 2], true];
        expect(lib.getElement(mixed, 2)).toEqual({ key: 'val' });
      });
    });

    describe('Перевірка fallback за замовчуванням', () => {
      const arr = ['x', 'y', 'z'];

      it('має повертати null коли fallback не вказаний (позитивний індекс)', () => {
        const result = lib.getElement(arr, 10);
        expect(result).toBeNull();
      });

      it('має повертати null коли fallback не вказаний (від\'ємний індекс)', () => {
        const result = lib.getElement(arr, -10);
        expect(result).toBeNull();
      });

      it('має ігнорувати fallback коли індекс валідний', () => {
        expect(lib.getElement(arr, 1, 'fallback')).toEqual('y');
      });
    });

    describe('Тестування з масивом довжиною 1', () => {
      const single = ['only'];

      it('має повертати єдиний елемент за індексом 0', () => {
        expect(lib.getElement(single, 0)).toEqual('only');
      });

      it('має повертати єдиний елемент за індексом -1', () => {
        expect(lib.getElement(single, -1)).toEqual('only');
      });

      it('має повертати fallback для індексу 1', () => {
        expect(lib.getElement(single, 1, 'немає')).toEqual('немає');
      });

      it('має повертати fallback для індексу -2', () => {
        expect(lib.getElement(single, -2, 'поза межами')).toEqual('поза межами');
      });
    });
  });
});