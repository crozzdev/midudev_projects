import { useState, useEffect } from "react"
import { CAT_RANDOM_URI_PREFIX } from "../services/constants"


// custom Hook
export function useCatImage({ fact }) {
    const [imgUrl, setImgUrl] = useState('')

    // efecto para cargar la imagen
    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ')[0]
        const random_img_uri = `${CAT_RANDOM_URI_PREFIX}cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

        fetch(random_img_uri)
            .then(res => res.json())
            .then(data => {
                const { _id } = data
                const url = `/cat/${_id}/says/${firstWord}`
                setImgUrl(url)
            })
    }, [fact])

    return { imgUrl: `${CAT_RANDOM_URI_PREFIX}${imgUrl}` }

} // {imgeUrl: 'https://'}