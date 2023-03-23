// const title = 'jeju';
// const url = `https://1boon.kakao.com/${title}`;
// const url2 = `https://daum.net/${title}`;

// console.log(url, url2);

// function sum(x, y = 0) {
//   return x + y;
// }

// console.log(sum(10));

//화살표 함수
const result = [1, 2, 3].map((item) => item + 1);

console.log(result);

//전개 구문
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords);

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]

const obj = {
  a: 1,
  b: 2,
};
const newObj = { ...obj };
console.log(newObj);

//Rest Parameter
function func(...param) {
  console.log(param);
}

func(1, 2, 3);

//구조 분해 할당
//es5
// var team = obj.team;
// var area = obj.area;

// var col1 = cols[0];
// var col2 = cols[1];

// //es6
// const { team, area } = obj;
// const [col1, col2] = cols;
// const [, cols2] = cols;

// // es5
// function getArea(options) {
//   return options.width * options.height;
// }

// // es6
// function getArea({ width, height }) {
//   return width * height;
// }

// //향상된 객체 리터럴
// const number = 1234;

// const student = {
//   // number: number
//   number,
// };
