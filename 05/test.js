// //window(가장 최상위 객체)
// window.outerWidth;

// window.name;

// window.open('http://www.daum.net');

// window.opener;

// window.close(); //보안 문제 때문에 지금은 지원하지 않는다.

// //location(url에 대한 정보)
// location.href = 'http://www.daum.net';

// location.reload();

// //history(브라우저 정보)
// history.back();
// history.go(1);

// //screen(화면에 대한 정보)
// screen.width;
// screen.availWidth;

// //navigator(브라우저 정보)
// navigator.userAgent;
// navigator.language;
// navigator.platform;

const $wrap = document.getElementById('wrap'); //DOM을 가져오고 DOM 객체에 접근할 때는 $변수를 쓰는 것이 좋다.
console.log($wrap);

const item = document.querySelector('#wrap > .item');
console.log(item);

const elements = document.querySelectorAll('div');
console.log(elements);

// const div = document.createElement('div');
// div.style.border = '1px solid red';
// div.innerHTML = 'hello!!';

// document.body.appendChild(div);

// const text = '<span>hello</span>';
// document.querySelector('#debug').innerHTML = text;

// const el = document.getElementById('div1');
// el.remove();

window.addEventListener('load', function () {
  alert('load');
});

window.addEventListener('click', () => {
  console.log('window load event');
});
