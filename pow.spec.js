describe("Тестирование функции pow1", function () {

  describe("Возводит x в степень 3", function () {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function () {
        assert.equal(pow1(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

});

describe("Тестирование функции pow2", function () {

  describe("Возводит x в степень 3", function () {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function () {
        assert.equal(pow2(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

});

describe("Тестирование функции pow2", function () {

  describe("Возводит x в степень 3", function () {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function () {
        assert.equal(pow2(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

});