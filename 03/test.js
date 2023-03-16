// // const a = 'a'
// // console.log(a);
// // a = '11';
// // console.log(a);

// // const words = ['a', 'b', 'c'];
// // console.log(words.unshift('z'));
// // console.log(words);

// //aray create
// const todos = ['운동'];
// const todo = '게임';
// todos.push(todo);
// console.log(todos);

// // read

// todos.forEach(function (todo) {
//   console.log(todo);
// });

// //Update
// const updateTodo = '공부';
// const updateIndex = todos.findIndex(function (todo) {
//   return todo === updateTodo;
// });

// // todos[updateIndex] = '공부';
// // console.log(todos);

// // const newTodos = todos.map(function (todo) {
// //   if (todo === updateTodo) {
// //     return '공부';
// //   }
// //   return todo;
// // });

// // console.log(newTodos);

// // var a = 1;
// // var b = a;
// // b = 2;
// // console.log(a, b);

// // const a = [1];
// // const b = a;
// // b[0] = [2];
// // console.log(a, b);

// // for (var count = 0; count < 5; count++) {
// //   //총 5번 실행
// // }

// // var obj = { a: 1, b: 2 };

// // //느리다.비권장
// // for (var prop in obj) {
// //   console.log(prop, obj[prop]);
// // }

// // try{
// //     //이부분 실행시 예외발생할경우 catch 로 이동
// // }
// // catch(e){
// //     // 예외발생할 경우만 실행
// // }
// // filnally{
// //     //무조건 실행
// // }

// alert('alert');

// var who = prompt('당신은 누구세요?');

// var isDelete = confirm('정말 삭제합니까?');

// var enc = encodeURIComponent('카카오');
// decodeURIComponent(enc);

// isNaN('1'); //숫자 여부

// parseInt('12');
// parseInt('09', 10); //항상 두번째 인자 주는 습관
// parseFloat('10.33');

// //setTimeout, setInterval
// function test() {
//   console.log('test()');
// }

// var id = setTimeout(test, 1000); // 1초후 1번 실행
// var id = setInterval(test, 1000); //1초마다 게속 실행

// //setInterval보다 나은 방법
// function test() {
//   console.log('test()');
//   setTimeout(test, 1000);
// }

//clearTimeout(id);
//clearInterval(id);

// 유효 범위
var nick = 'aji'; //전역변수

function test() {
  var age = 30; //지역변수
  console.log(nick, age);
}

test();
console.log(age);

// 호이스팅 - Hoisting
var name = 'global';
function test() {
  console.log(name);
  var name = 'local';
  console.log(name);
}

//함수또한
test2();
function test2() {
  console.log('test');
}
