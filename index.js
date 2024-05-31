//№1
const n = 10;

const array = Array.from({ length: n }, (_, index) => index);

const filteredElements = array
  .map((value, index) => ({ index, value }))
  .filter((item) => item.index % 3 === 0)
  .map((item) => item.value);

console.log(filteredElements);
//№2
const b = 10;

const arr = Array.from({ length: n }, (_, index) => index);

const evenElements = array.filter((value) => value % 2 === 0);

console.log(evenElements);
//№3
const a = ["В", "лесу", "родилась", "елочка"];
const result = a
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(result);
//№4
const s = "В лесу родилась елочка";

const res = s
  .split(" ")
  .map((word) => {
    if (word.length > 1) {
      return word[word.length - 1] + word.slice(1, -1) + word[0];
    } else {
      return word;
    }
  })
  .join(" ");

console.log(result);
//№5
const arrayy = [1.5, -2.3, 3.8, -4.2, 5.1, -6.4];

const positiveElements = array.filter((value) => value > 0);
console.log("Положительные элементы массива:", positiveElements);

const positiveCount = positiveElements.length;
console.log("Количество положительных элементов массива:", positiveCount);

const negativeProduct = array
  .filter((value) => value < 0)
  .reduce((product, value) => product * value, 1);
console.log("Произведение отрицательных элементов массива:", negativeProduct);
//№6
const arraay = [24, 35, 29, 44, 8, 22, 4];

const inversions = array
  .map((value, index) => {
    return array.slice(index + 1).filter((nextValue) => value > nextValue)
      .length;
  })
  .reduce((sum, current) => sum + current, 0);

console.log("Число инверсий:", inversions);
//№7
const team1 = [180, 190, 175, 200, 185];
const team2 = [170, 195, 180, 210, 190];

const sameHeightPlayers = team1.filter((height) => team2.includes(height));

console.log(
  "Игроки одинакового роста:",
  sameHeightPlayers.length > 0
    ? sameHeightPlayers
    : "Нет игроков одинакового роста"
);
//№8
const arrayyy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];

const hasDuplicates =
  arr.reduce((acc, value, index, array) => {
    if (array.indexOf(value) !== index) {
      acc.push(value);
    }
    return acc;
  }, []).length > 0;

console.log(
  "Есть ли в массиве совпадающие элементы:",
  hasDuplicates ? "Да" : "Нет"
);
//№9
const students = [
  { name: "Tirion", class: "B", mark: 3 },
  { name: "Keit", class: "A", mark: 3 },
  { name: "Ramsey", class: "A", mark: 4 },
  { name: "Mike", class: "B", mark: 5 },
  { name: "Alex", class: "C", mark: 2 },
];

// 1. Посчитайте средний балл, а также максимальный и минимальный. Посчитайте общую сумму оценок и количество студентов.
const stats = students.reduce(
  (acc, student) => {
    acc.sum += student.mark;
    acc.count += 1;
    acc.max = student.mark > acc.max ? student.mark : acc.max;
    acc.min = student.mark < acc.min ? student.mark : acc.min;
    return acc;
  },
  { sum: 0, count: 0, max: -Infinity, min: Infinity }
);

const average = stats.sum / stats.count;

console.log("Средний балл:", average);
console.log("Максимальный балл:", stats.max);
console.log("Минимальный балл:", stats.min);
console.log("Общая сумма оценок:", stats.sum);
console.log("Количество студентов:", stats.count);

// 2. Реализуйте функцию для группировки объектов по классу.
const groupByClass = (studentsArray) => {
  return studentsArray.reduce((acc, student) => {
    if (!acc[student.class]) {
      acc[student.class] = [];
    }
    acc[student.class].push(student);
    return acc;
  }, {});
};

const groupedStudents = groupByClass(students);

console.log("Группировка по классу:", groupedStudents);
//№10
const sites = [
  "http://google.com",
  "https://hexlet.io",
  "yandex.ru",
  "dzen.ru",
  "https://ya.ru",
  "https://github.com",
  "http://mail.ru",
];

const countByProtocol = (sites) => {
  return sites
    .map((site) => {
      let trimmedSite = site.trim();
      if (!trimmedSite.startsWith("http")) {
        trimmedSite = "http://" + trimmedSite;
      }
      return trimmedSite;
    })
    .reduce((acc, site) => {
      const protocol = site.split("://")[0];
      acc[protocol] = (acc[protocol] || 0) + 1;
      return acc;
    }, {});
};

const results = countByProtocol(sites);

console.log(result);
