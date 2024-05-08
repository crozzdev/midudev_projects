import { Square } from "./Square";
import { TURNS } from "../constants";

// eslint-disable-next-line react/prop-types
export function ShowTurn({ turn }) {
    return (
        <section className="turn">
            <Square isSelected={turn === TURNS.X}>
                {TURNS.X}
            </Square>
            <Square isSelected={turn === TURNS.O}>
                {TURNS.O}
            </Square>
        </section>
    )
}