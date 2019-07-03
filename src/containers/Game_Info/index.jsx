import React from "react";
import ScoreBoard from "./components/ScoreBoard";
import GameOver from "./components/GameOver";
import StartRestart from "./components/Start_Restart";
const index = () => {
  return (
    <div>
      <GameOver />
      <StartRestart />
      <ScoreBoard />
    </div>
  );
};

export default index;
