export function Cards({cards}){

    if(cards?.length === 0 || !Array.isArray(cards)) {
        console.log(cards)
        return <p>No hay resultados</p>
    }
    console.log(cards)
    return(
        <ul className="cards">
            {cards.map(card =>(
            <li className="card" key={card.id}>
                <h3>{card.title}</h3>
                <img src={card.image} alt={card.title}/>
            </li>
            ))}
        </ul>
    )
}