import React from "react";
import ScoreBoard from "./components/ScoreBoard";
import GameOver from "./components/GameOver";
const index = () => {
  return (
    <div>
      <GameOver />
      <ScoreBoard />
    </div>
  );
};

export default index;
