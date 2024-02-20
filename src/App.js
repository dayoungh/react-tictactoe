import { useState } from "react";
import "./App.css"
import Board from "./components/Board";


function App() {

  const [history, setHistory] = useState([ {squares: Array(9).fill(null)} ])
  const [xIsNext, setXIsNext] = useState(true)
  const [stepNumber,setStepNumber] = useState(0)

  const calculateWinner = (squares) => {
   const lines = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
   ]
   for (let index = 0; index < lines.length; index++) {
     const [a, b, c] = lines[index];
     if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
       return squares [a]
     }
   }
   return null
 }

  const current = history[stepNumber]   // history안에 들어있는 length (개수)는 1,2,3 3개, 인덱스는 0,1,2로 2이기 때문에 -1해줌
  const winner = calculateWinner(current.squares)

  // 승자표시해주기
  let status
  if(winner) {
    status = 'Winner:' + winner
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`    //조건부 삼항연산자
  }


  // 누군가 승리하거나 Square가 이미 채워졌다면 handleClick함수가 클릭을 무시하도록.
  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1)
    const newCurrent = newHistory[newHistory.length - 1]
    const newSquares = newCurrent.squares.slice()
    if(calculateWinner(newSquares) || newSquares[i]) {
      return
    }

    newSquares[i] = xIsNext? 'X' : 'O'  //조건부 삼항연산자
    setHistory([...newHistory, {squares: newSquares}])
    setXIsNext(prev => !prev)
     // setXIsNext(!xIsNext)     // 위의 xIsNext 값을 뒤집는것.

     setStepNumber(newHistory.length)
  }

  const moves = history.map((step, move) => {
   const desc = move ? 'Go to move #' + move : 'Go to game start'
   return (
      <li key={move}>
       <button className="move-button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
   )
  })

  const jumpTo = (step) => {
   setStepNumber(step)
   setXIsNext((step % 2 === 0))   // 나머지연산자 사용해서 StepNumber가 짝수일때마다 setXIsNext를 true로 설정.
  }
 
  return (
    <div className="game">
       <div className="game-board">
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
       </div>
       <div className="game-info">
         <div className="status">{status}</div>
          <ol style={{listStyle: 'none'}}>{moves}</ol>
       </div>
    </div>
  );
}

export default App;
