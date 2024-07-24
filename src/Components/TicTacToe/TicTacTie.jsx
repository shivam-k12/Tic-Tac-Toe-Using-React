import './TicTacToe.css';
import Hooks from './Hooks';
export default function TicTacToe(){
  let result=Hooks();
   return(
    <div className="container">
      <h1 className='title'>Tic Tac Toe Game in <span>React</span></h1>
      <div className='game'>
      <div className="status">
        <p className='result'>{result.getStatusMessage()}</p>
        <button className='reset' onClick={result.resetGame}>Reset</button>
      </div>
      <div className="board">
        {result.board.map((b,index)=>{
          return <button 
          className={`cell ${b === "X" ? "x-cell" : b === "O" ? "o-cell" : ""}`}
          key={index} 
          onClick={()=>(result.handleClick(index))} 
          disabled={b!==null}
          >
            {b}
            </button>
        })}
      </div>
    </div>
    </div>
   );
}
