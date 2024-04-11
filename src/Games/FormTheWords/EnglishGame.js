import GameApp from "./components/GameApp";
import "./EnglishGame.css";
import "animate.css";
import { GameProvider } from "./context/GameContext";

function EnglishGame() {
  return (
    <div className='body'>
        <GameProvider>
      <div className="App">
        <GameApp />
      </div>
    </GameProvider>
    </div>
  );
}

export default EnglishGame;