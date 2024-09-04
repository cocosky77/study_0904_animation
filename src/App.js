import React, { useState } from "react";
import "./App.css";

function App() {
  const [animate, setAnimate] = useState(false);

  const startAnimation = () => {
    setAnimate(true);

    // 애니메이션이 끝나면 상태를 false로 돌리기
    setTimeout(() => {
      setAnimate(false);
    }, 1000); // 애니메이션의 지속 시간에 맞게 설정 (1초)
  };

  return (
    <div className="App">
      <div className="container">
      {/* 애니메이션 상태에 따라 drop-animation 클래스를 추가 */}
      <div className={`box ${animate ? 'drop-animation' : ""}`}></div>
      <button onClick={startAnimation} className="btn">애니메이션 시작</button>
      </div>

    </div>
  )
}
export default App;