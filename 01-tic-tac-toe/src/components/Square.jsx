// eslint-disable-next-line react/prop-types
export const Square = ({ children, updateBoard, index, isSelected }) => {
    const selectedClass = isSelected ? 'is-selected' : ''
    const handleClick = () => {
        updateBoard(index)

    }
    return (
        <div className={`square ${selectedClass}`} onClick={handleClick}>
            {children}
        </div>
    )
}