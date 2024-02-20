// snippet 단축키 rcc 리액트 클래스 컴퍼넌트
import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

// 클래스 컴퍼넌트르르 함수형 컴퍼넌트로 바꾸기
const Board = ({squares, onClick}) => {

  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClick={() => onClick(i)} />
    )
  }

  

  // 클래스 컴퍼넌트르르 함수형 컴퍼넌트로 바꾸기. render없이 바로 return()
    return (
      <div className="board-wrapper">
        {/* jsx는 감싸주어야함*/}
        
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  
}


export default Board
