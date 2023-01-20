let statusPlayerTxt = document.getElementById('statusPlayer')
let restartBtn = document.getElementById('restartButton')
let boxes = Array.from(document.getElementsByClassName('box'))

//ho usato la variabile const per definire il valore sia della X che del O
const O_TxT = "O"
const X_TxT = "X"
let currentPlayer = X_TxT //il player iniziale inizia con la X
let spaces = Array(9).fill(null) //con la variabile spaces sto svuotando le celle Array che el nostro caso sono: 9

