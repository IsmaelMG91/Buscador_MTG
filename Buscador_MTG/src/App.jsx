import './App.css'
import responseMTG from './mocks/with_results.json';

function App() {
const cards = responseMTG.cards
const hasCards = cards?.lenght > 0
  return (
    <>
    <header>
      <h1>Buscador MTG</h1>
      <form>
        <input></input>
        <button type='submit'>Buscar</button>
      </form>
    </header>

    <main>
      {
      
          <ul>
            {cards.map(card =>(
              <li key={card.id}>
                <h3>{card.name}</h3>
                <img src={card.imageUrl}/>
              </li>
            ))}
          </ul>
      }
    </main>
    </>
  )
}

export default App
