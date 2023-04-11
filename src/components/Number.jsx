export default function Number({num , clickNum}){

    return (
        <button value={num} onClick={() => clickNum(num)}>{num}</button>
    )
}