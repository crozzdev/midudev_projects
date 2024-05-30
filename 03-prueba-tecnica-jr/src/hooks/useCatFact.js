import { useState, useEffect } from "react"
import { getFact } from "../services/facts"

export const useCatFact = () => {
    const [fact, setFact] = useState('')

    const refreshRandomFact = () => {
        getFact().then(newFact => setFact(newFact))
    }

    // efecto para cargar el fact
    useEffect(refreshRandomFact, [])

    return { fact, refreshRandomFact }
}