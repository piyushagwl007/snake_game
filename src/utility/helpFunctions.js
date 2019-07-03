export const getMod = (number,modFrom) => {
    return ((number %modFrom)+modFrom)%modFrom
}

export const checkIfSnakeOverlapped = (snake, newHead) => {
   let found = snake.findIndex((snakeCell) => snakeCell.get("row") === newHead.row && snakeCell.get("column") === newHead.column)
   return found>-1? true:false
}

export const getNewFoodLocation = (snake, foodLoc) => {

    snake.forEach((snakePos)=>{
        if(snakePos.get("row") === foodLoc.row && snakePos.get("column") === foodLoc.column)
        {
            foodLoc.row= Math.floor(Math.random() * Math.floor(20));
            foodLoc.column= Math.floor(Math.random() * Math.floor(20));
        }
    })
    return foodLoc
}