// var words = ['a', 'b', 'c'];
// // ["c"]
// console.log(words.pop(), words);

// words.push("d");

// console.log(words); //['a', 'b', 'd']

// console.log(words.join('-')); //a-b-d

// var numbers = [1, 2, 3];

// console.log(words.concat(num));

// const words = ['a', 'b', 'c'];
// const newWords = words.unshift('z');

// console.log(words);


//foreach
var words = ['a', 'b', 'c'];
words.forEach(function(word) {
  console.log(word);
});

//map
var newWords = words.map(function(word) {
  return word + ' ok';
});
console.log(newWords);

//findIndex
var findIndex = words.findIndex(function(word) {
    return word === 'a';
  });
  console.log(findIndex);

var words = ['a', 'b', 'c', 'dd'];
var newWords = words.filter(function(word) {
    return word.length === 2;
});
console.log(newWords);

var nums = [1,2,3,4,5];
// var newNums = [];
// for(var i=0; i < nums.length; i++) {
//     if(nums[i] >= 3) {
//         newNums.push(nums[i]);
//     }
// }

// console.log(newNums);

var newNums = nums.filter(function (num) {
    return num >= 3;
});

console.log(newNums);

