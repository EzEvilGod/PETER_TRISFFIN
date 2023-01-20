let statusPlayerTxt = document.getElementById('statusPlayer')
let restartBtn = document.getElementById('restartButton')
let boxes = Array.from(document.getElementsByClassName('box'))

//console.log(boxes)

//ho usato la variabile const per definire il valore sia della X che del O
const O_TxT = "O"
const X_TxT = "X"
let currentPlayer = X_TxT //il player iniziale inizia con la X
let spaces = Array(9).fill(null) //con la variabile spaces sto svuotando le celle Array che el nostro caso sono: 9

//console.log(spaces)

function startGame(){ 
    boxes.forEach(box => box.addEventListener('click', boxClicked)) //per poter effettuare EventListener ad ogni cella ho usato un metodo che consente di ciclare tutti gli elementi in esso contenuti.
}

function boxClicked(e){
    ///console.log(e.target)
    let id = e.target.id
    if(!spaces[id])
    {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        currentPlayer = currentPlayer === X_TxT ? O_TxT : X_TxT//switch player
    }
}

restartBtn.addEventListener('click', restart)

function restart()
{
    spaces.fill(null)
    boxes.forEach(box => {
        box.innerText=""
    })

    currentPlayer = X_TxT
}

startGame()