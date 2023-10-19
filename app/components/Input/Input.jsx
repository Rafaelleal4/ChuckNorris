const Input = ({text, value, setValue}) => {
    return (
        <>
            <input type="text" placeholder={text} value={value}  onChange={e => {setValue(e.target.value)}}/>
        </>
    )
}

export default Input;