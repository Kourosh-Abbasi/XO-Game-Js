let turn = 1;
let is_started = false;
let cells = [];
const cells_win_color = '#368836'
const player_win_color = '#368836'
const player_turn_color = '#0b7a93'
const player_not_turn_color = '#b5afaf'
for (let i = 1; i <= 3; i++) {
    let temp = []
    for (let j = 1; j <= 3; j++) {
        let id = 'cell-' + i + j;
        let cell = document.getElementById(id);
        temp.push(cell);
    }
    cells.push(temp)
}
function start_game() {
    if(are_all_cells_empty()){
        let player1Turn = document.getElementById("player-1-turn");
        let player2Turn = document.getElementById("player-2-turn");
        player1Turn.innerHTML = "";
        player1Turn.style.backgroundColor = player_turn_color
        player2Turn.style.backgroundColor = player_not_turn_color
        player2Turn.innerHTML = "";
        is_started = true
    }
}

function reset_game() {
    location.reload();
}

function is_equal() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (cells[i][j].textContent === '') {
                return false;
            }
        }
    }
    return true;
}
function are_all_cells_empty(){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (cells[i][j].textContent !== '') {return false}
        }
    }
    return true;
}
function next_turn() {
    if (turn === 1) {
        turn = 2;
        let player1Turn = document.getElementById("player-1-turn");
        let player2Turn = document.getElementById("player-2-turn");
        player2Turn.style.backgroundColor = player_turn_color
        player1Turn.style.backgroundColor = player_not_turn_color
    } else {
        turn = 1;
        let player1Turn = document.getElementById("player-1-turn");
        let player2Turn = document.getElementById("player-2-turn");
        player1Turn.style.backgroundColor = player_turn_color
        player2Turn.style.backgroundColor = player_not_turn_color
    }
}

function insert_play(id) {
    let cell = document.getElementById(id);
    if (is_started && cell.innerText === '') {
        if (turn === 1) {
            cell.innerHTML = 'X';
        } else {
            cell.innerHTML = 'O';
        }
        next_turn();
        let w = who_won();
        if (w === 1) {
            document.getElementById("player-1-win").style.backgroundColor = player_win_color;
            document.getElementById("player-1-turn").style.backgroundColor = player_not_turn_color
            document.getElementById("player-2-turn").style.backgroundColor = player_not_turn_color
            document.getElementById("player-1-win").innerHTML = '';
            document.getElementById("player-2-win").innerHTML = '';
            end_game();
            return
        }
        if (w === 2) {
            document.getElementById("player-2-win").style.backgroundColor = player_win_color
            document.getElementById("player-1-turn").style.backgroundColor = player_not_turn_color
            document.getElementById("player-2-turn").style.backgroundColor = player_not_turn_color
            document.getElementById("player-1-win").innerHTML = '';
            document.getElementById("player-2-win").innerHTML = '';
            end_game();

        }
        if (is_equal()) {
            alert("Taw!");
            location.reload();
        }
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function end_game() {
    let b11 = cells[0][0].textContent === 'X' && cells[0][1].textContent === 'X' && cells[0][2].textContent === 'X';
    let b12 = cells[1][0].textContent === 'X' && cells[1][1].textContent === 'X' && cells[1][2].textContent === 'X';
    let b13 = cells[2][0].textContent === 'X' && cells[2][1].textContent === 'X' && cells[2][2].textContent === 'X';
    let b14 = cells[0][0].textContent === 'X' && cells[1][0].textContent === 'X' && cells[2][0].textContent === 'X';
    let b15 = cells[0][1].textContent === 'X' && cells[1][1].textContent === 'X' && cells[2][1].textContent === 'X';
    let b16 = cells[0][2].textContent === 'X' && cells[1][2].textContent === 'X' && cells[2][2].textContent === 'X';
    let b17 = cells[0][0].textContent === 'X' && cells[1][1].textContent === 'X' && cells[2][2].textContent === 'X';
    let b18 = cells[0][2].textContent === 'X' && cells[1][1].textContent === 'X' && cells[2][0].textContent === 'X';
    let b21 = cells[0][0].textContent === 'O' && cells[0][1].textContent === 'O' && cells[0][2].textContent === 'O';
    let b22 = cells[1][0].textContent === 'O' && cells[1][1].textContent === 'O' && cells[1][2].textContent === 'O';
    let b23 = cells[2][0].textContent === 'O' && cells[2][1].textContent === 'O' && cells[2][2].textContent === 'O';
    let b24 = cells[0][0].textContent === 'O' && cells[1][0].textContent === 'O' && cells[2][0].textContent === 'O';
    let b25 = cells[0][1].textContent === 'O' && cells[1][1].textContent === 'O' && cells[2][1].textContent === 'O';
    let b26 = cells[0][2].textContent === 'O' && cells[1][2].textContent === 'O' && cells[2][2].textContent === 'O';
    let b27 = cells[0][0].textContent === 'O' && cells[1][1].textContent === 'O' && cells[2][2].textContent === 'O';
    let b28 = cells[0][2].textContent === 'O' && cells[1][1].textContent === 'O' && cells[2][0].textContent === 'O';

    if (b11 || b21) {
        cells[0][0].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[0][1].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[0][2].style.backgroundColor = cells_win_color;
        is_started = false;
        return
    }
    if (b12 || b22) {
        cells[1][0].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[1][1].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[1][2].style.backgroundColor = cells_win_color;
        is_started = false;
        return
    }
    if (b13 || b23) {
        cells[2][0].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[2][1].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[2][2].style.backgroundColor = cells_win_color;
        is_started = false;
        return
    }
    if (b14 || b24) {
        cells[0][0].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[1][0].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[2][0].style.backgroundColor = cells_win_color;
        is_started = false;
        return
    }
    if (b15 || b25) {
        cells[0][1].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[1][1].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[2][1].style.backgroundColor = cells_win_color;
        is_started = false;
        return
    }
    if (b16 || b26) {
        cells[0][2].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[1][2].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[2][2].style.backgroundColor = cells_win_color;
        is_started = false;
        return
    }
    if (b17 || b27) {
        cells[0][0].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[1][1].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[2][2].style.backgroundColor = cells_win_color;
        is_started = false;
        return
    }
    if (b18 || b28) {
        cells[0][2].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[1][1].style.backgroundColor = cells_win_color;
        await delay(100);
        cells[2][0].style.backgroundColor = cells_win_color;
        is_started = false;
    }
}

function who_won() {
    let b11 = cells[0][0].textContent === 'X' && cells[0][1].textContent === 'X' && cells[0][2].textContent === 'X';
    let b12 = cells[1][0].textContent === 'X' && cells[1][1].textContent === 'X' && cells[1][2].textContent === 'X';
    let b13 = cells[2][0].textContent === 'X' && cells[2][1].textContent === 'X' && cells[2][2].textContent === 'X';
    let b14 = cells[0][0].textContent === 'X' && cells[1][0].textContent === 'X' && cells[2][0].textContent === 'X';
    let b15 = cells[0][1].textContent === 'X' && cells[1][1].textContent === 'X' && cells[2][1].textContent === 'X';
    let b16 = cells[0][2].textContent === 'X' && cells[1][2].textContent === 'X' && cells[2][2].textContent === 'X';
    let b17 = cells[0][0].textContent === 'X' && cells[1][1].textContent === 'X' && cells[2][2].textContent === 'X';
    let b18 = cells[0][2].textContent === 'X' && cells[1][1].textContent === 'X' && cells[2][0].textContent === 'X';
    if (b11 || b12 || b13 || b14 || b15 || b16 || b17 || b18) {
        return 1;
    }
    let b21 = cells[0][0].textContent === 'O' && cells[0][1].textContent === 'O' && cells[0][2].textContent === 'O';
    let b22 = cells[1][0].textContent === 'O' && cells[1][1].textContent === 'O' && cells[1][2].textContent === 'O';
    let b23 = cells[2][0].textContent === 'O' && cells[2][1].textContent === 'O' && cells[2][2].textContent === 'O';
    let b24 = cells[0][0].textContent === 'O' && cells[1][0].textContent === 'O' && cells[2][0].textContent === 'O';
    let b25 = cells[0][1].textContent === 'O' && cells[1][1].textContent === 'O' && cells[2][1].textContent === 'O';
    let b26 = cells[0][2].textContent === 'O' && cells[1][2].textContent === 'O' && cells[2][2].textContent === 'O';
    let b27 = cells[0][0].textContent === 'O' && cells[1][1].textContent === 'O' && cells[2][2].textContent === 'O';
    let b28 = cells[0][2].textContent === 'O' && cells[1][1].textContent === 'O' && cells[2][0].textContent === 'O';
    if (b21 || b22 || b23 || b24 || b25 || b26 || b27 || b28) {
        return 2;
    }
    return 3;
}