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
// pageSize에 따라 배열값 분리해서 출력
// pageSize=2 일때는 맨끝에 --- 없어야함

// 출력: a,b,c---d,e,f---g,h,i---j
