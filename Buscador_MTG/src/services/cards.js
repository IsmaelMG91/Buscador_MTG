export const searchCards = async (search) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://api.magicthegathering.io/v1/cards?name=${encodeURIComponent(search)}`)
        const json = await response.json()
        console.log(json)

        const cards = json.cards
        console.log(cards)

        return cards?.map(card => ({
            id: card.multiverseid,
            title: card.name,
            image: card.imageUrl

        }))
    } catch (e) {
        throw new Error('Error searching cards')
    }
}