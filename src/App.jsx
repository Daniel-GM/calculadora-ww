import './App.css'
import CalcularXpEcho from './components/CalcularXpEcho'
import CalcularXpPersonagem from './components/CalcularXpPersonagem'


function App() {
  return (
    <div id="app-jsx">
      <div>
        <h2>Xp de personagem</h2>
        <CalcularXpPersonagem/>
      </div>

      <div>
        <h2>Xp de Echo</h2>
        <CalcularXpEcho />
      </div>
    </div>
  )
}

export default App