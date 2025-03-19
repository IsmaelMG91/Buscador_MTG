export const searchCards = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://api.magicthegathering.io/v1/cards?name=Arc%C3%A1ngel%20Avacyn&language=spanish`)
        const json = await response.json()

        const cards = json.search

        return cards?.map(card = ({
            //To Do
        }))
    } catch (e) {
        throw new Error('Error searching cards')
    }
}