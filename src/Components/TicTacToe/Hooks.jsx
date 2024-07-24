import { useState } from "react";
const initialBoard=()=>Array(9).fill(null);
export default function Hooks(){
    const [board,setBoard]=useState(initialBoard());
    const [isNext,setIsnext]=useState(true);

    const Winning_Pattern= [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

    const calculateWinner=(board)=>{
        for(let pattern of Winning_Pattern){
            const [a,b,c]=pattern;
            if(board[a] && board[a]===board[b] && board[a]===board[c]){
                return board[a];
            }
        }
        return null;
    };

    const handleClick=(index)=>{
        if(calculateWinner(board)||board[index]){
            return;
        }
        const newBoard=[...board];
        newBoard[index]=isNext ? "X" : "O";
        setBoard(newBoard);
        setIsnext(!isNext);
    };

    const getStatusMessage=()=>{
        const winner=calculateWinner(board);
        if(winner){
            return `Player ${winner} wins!`;
        }
        if(!board.includes(null)){
            return "It's a Draw!";
        }
        return `Player ${isNext ? "X" : "O"} turn`;
    }

    const resetGame=()=>{
        setBoard(initialBoard());
        setIsnext(true);
    };

    return {board,handleClick,calculateWinner,getStatusMessage,resetGame};
}