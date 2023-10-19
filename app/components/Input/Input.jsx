const Input = ({text, value, setValue, className}) => {
    return (
        <>
            <input className={className} type="text" placeholder={text} value={value}  onChange={e => {setValue(e.target.value)}}/>
        </>
    )
}

export default Input;