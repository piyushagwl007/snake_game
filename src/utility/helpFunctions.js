export const getMod = (number,modFrom) => {
    return ((number %modFrom)+modFrom)%modFrom
}

export const checkIfSnakeOverlapped = (snake, newHead) => {
   let found = snake.findIndex((snakeCell) => snakeCell.get("row") === newHead.row && snakeCell.get("column") === newHead.column)
   return found>-1? true:false
}