import { CAT_FACTS_URI } from "./constants"

export const getFact = () => {

    return fetch(CAT_FACTS_URI)
        .then(res => {
            if (!res.ok) throw new Error('Error fetching the fact')
            return res.json()
        })
        .then(data => {
            const fact = data.fact
            return fact
        }
        )
        .catch(err => {
            console.log(err)
        })
}

