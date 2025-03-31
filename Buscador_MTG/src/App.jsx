import './App.css'
import responseMTG from './mocks/with_results.json';
import { searchCards } from './services/cards';
import { useEffect, useState } from 'react';
import { Cards } from './components/Cards';


function App() {
const [search, updateSearh] = useState('')
const [cards, setCards] = useState([])
//const cards = responseMTG.cards
const hasCards = cards?.length > 0

useEffect(()=>{
  async function fetchCards(){
    const cardsResponse = await searchCards(search)
    setCards(cardsResponse)
  }
  fetchCards()
})
const handleSubmit = (event) => {
  //evita comportamiento por defecto
  event.preventDefault()

}
const handleChange = (event) => {
  const newSearch = event.target.value
  updateSearh(newSearch)
  console.log(newSearch)
}
  return (
    <div className='mainPage'>
    <header>
      <h1>Buscador MTG</h1>
      <form onSubmit={handleSubmit}>
        <input name='query' onChange={handleChange} value={search}></input>
        <button type='submit'>Buscar</button>
      </form>
    </header>

    <main>
      <Cards cards={cards}></Cards>
    </main>
    </div>
  )
}

export default App
