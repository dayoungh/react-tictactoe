import React from "react";
import "./Square.css";

// class형 component. default넣어줌. export할 컴포넌트가 Square 하나라서. Square2,Square3 여러개라면 default 필요X
// export default class Square extends React.Component {
  

// class형 component 함수형으로 바꾸기.
  const Square = (props) => {
    return (
      <button
        className="square"
        onClick={() => {
          props.onClick();
        }}
      >
        {props.value}
      </button>
    )
  }


  // const Square = ({ onClick, value }) => {
  //   return (
  //     <button className="square" onClick={() => onClick}>
  //       {value}
  //     </button>
  //   )
  // }


// } 클래스형 컴퍼넌트 주석처리 부분.


export default Square