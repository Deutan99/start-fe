const { string } = require('prop-types');

//1 문자열 합치기
const year = 2022;
const month = 11;
const day = 03;

const dateString = `${year}-${month + 1}-${day}`;
console.log(dateString);

//2. 문자열 분리
const datestr = '2022-12-12';

const dateArray = datestr.split('-');

console.log(dateArray);

//3. 문자열 변경
const text = '나는 XX를 좋아해';
const item = 'JS';

const str = text.replace('XX', `${item}`);
console.log(str);

//4. 문자열 검색
const text2 = '안녕하세요. 나는 사람입니다.';
const searchText = '사람';

console.log(text2.includes('사람'));

//5. 모든 배열값 더하기
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];

const result = point1.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const result2 = point2.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

console.log(result + result2);

//6. 소수점 이하를 버리고 정수 구하기
const a = 1.2;
const b = 3.4;

const sum = Math.floor(a) + Math.floor(b);
console.log(sum);

//7. 렌덤 수 구하기
const min = 1;
const max = 10;

const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

//8. 배수 확인
const target = 10;
const num = 3;

if (target % num == 0) {
  console.log('true');
} else {
  console.log('false');
}

//9. 대문자로 변경
const nick = 'kakao'.toUpperCase();
console.log(nick);

//10. 원시타입 요소만 배열로 만들기
const items = [1, 'a', true, ['a'], { n: 1 }];
function isCheck(value) {
  return typeof value !== 'object';
}
console.log(items.filter(isCheck));

//11.배열값 나누기
const items2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const pageSize = 3;

// quiz
for (let i = pageSize; i < items2.length; i += pageSize + 1) {
  items2.splice(i, 0, '---');
}

console.log(items2.toString());
// pageSize에 따라 배열값 분리해서 출력s
// pageSize=2 일때는 맨끝에 --- 없어야함

// 출력: a,b,c---d,e,f---g,h,i---j

//12.배열값 나눠서 다시 배열로
const items3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const pageSize2 = 3;
// quiz
function isDivide(data = [], size = 1) {
  const arr = [];

  for (let i = 0; i < data.length; i += size) {
    arr.push(data.slice(i, i + size));
  }

  return arr;
}
console.log(isDivide(items3, pageSize2));

// pageSize에 따라 배열값 분리해서 출력

// 출력: [ [a,b,c], [d,e,f], [g,h,i], [j] ]

//13.페이지의 시작번호 구하기
const items4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const pageSize3 = 3;

const getStartIndexByPage = function (page) {
  // quiz
  const startIndex = (page - 1) * pageSize3;

  return startIndex;
};

// 출력
getStartIndexByPage(1); // 0
getStartIndexByPage(2); // 3
getStartIndexByPage(3); // 6

//14.전화번호 패턴 검사
const phoneNumber = '010-1234-1234';

var telRegex1 = /\d{3}-\d{4}-\d{4}/;

console.log(telRegex1.test(phoneNumber));

//15.객체값 변경
const user = { nick: 'nio', age: 20, location: '제주' };

// quiz
user['age'] = 21;
user['location'] = '부산';

console.log(user);
// 출력: {nick:'nio', age:21, name:'부산'}

//16.문자열을 객체형으로
const Text = '{"a":1, "b":2}';
const textObject = JSON.parse(Text);
// quiz
console.log(textObject);
// 출력: {a:1 , b:2}

//17.json을 문자열로
const user2 = { nick: 'nio', age: 20, location: '제주' };
const userString = JSON.stringify(user2);
// quiz
console.log(userString);
// 출력: string "{ nick: 'nio', age: 20, location: '제주' }"

//18. 새로운 배열 생성
const items5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//quiz
const newArr = items5.filter((num) => num % 2 === 0);

console.log(newArr);
//출력 : 짝수만 [2, 4, 6, 8, 10]

//19.배열 필터
const list = [
  {
    id: 1,
    title: 'JS',
    isPublic: true,
  },
  {
    id: 2,
    title: '기본',
    isPublic: true,
  },
  {
    id: 3,
    title: 'ecma',
    isPublic: true,
  },
  {
    id: 4,
    title: 'dom',
    isPublic: false,
  },
];

// quiz
// console.log(Object.values(list[1]));
const returnValue = [];

for (var i = 0; i < list.length; i++) {
  if (list[i].isPublic === true) {
    returnValue.push(list[i].title);
  }
}

console.log(returnValue);
// 출력: ['JS','기본','ecma']  isPublic=true 의  title만 뽑기

//20. 다음일 구하가
const dday = '2022-02-02';

//quiz
const date = new Date(dday);
date.setDate(date.getDate() + 1);

console.log(date.toISOString().slice(0, 10));
