export default function Operator({operator, handleClick}){
    return (
        <button value={operator} onClick={() => handleClick(operator)}>{operator}</button>
    )
}