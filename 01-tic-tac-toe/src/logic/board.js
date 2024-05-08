import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a]

        }
    }
    // si no hay ganador retornamos null
    return null
}

export const checkEndGame = (finalBoard) => finalBoard.every(square => square !== null)