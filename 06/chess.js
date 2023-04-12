const $board = document.getElementById();

function createBoard() {
  // const $board = document.createElement('div');
  // $board.className = 'white';

  const div = `<div class="white"></div>`;
  return div;
}

function createRow(count = 4, startColor = 'white') {
  let row = '';
  for (let i = 0; i < count; i++) {
    let color = '';
    if (i % 2 == 0) {
      color = startColor === 'white' ? 'black' : 'white';
    }
    row += createBoard(startColor);
  }
  return row;
}

function createChessBoard(count = 4) {
  let board = '';
  for (let i = 0; i < count; i++) {
    const startColor = i % 2 === 0 ? 'black' : 'white';
    board += createRow(4, startColor);
  }
  board += createRow(4, 'white');
  board += createRow(4, 'black');
  board += createRow(4, 'white');
  board += createRow(4, 'black');

  return board;
}

let $prevTarget = '';
$board.addEventListener('click', event => {
    console.log(event.target);
    const $target = event.target;

    if($target === )
    $target.classlist.add('red');
    $prevTarget && $prevTarget.classList.classList.remove('red');
    $prevTarget = $target;
});

$board.innerHTML = createChessBoard();
