function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <span>&#63;</span>
            <img src={item.img} alt="" />
        </div>
    )
}

export default Card