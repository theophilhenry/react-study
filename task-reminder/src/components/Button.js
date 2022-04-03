function Button({ color, text, onClickAdd }) {
    return (
        <button className="btn" style={{ backgroundColor: color }} onClick={onClickAdd}>{text}</button>
    )
}

export default Button
