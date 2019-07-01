// adding these to head to move the snake
const Directions = {
  LEFT: { row: 0, column: -1 ,value:"LEFT" , reverse:"RIGHT"},
  RIGHT: { row: 0, column: 1 ,value:"RIGHT" , reverse:"LEFT"},
  UP: { row: -1, column: 0 ,value:"UP", reverse: "DOWN"},
  DOWN: { row: 1, column: 0 ,value:"DOWN" , reverse:"UP"}
};

export default Directions