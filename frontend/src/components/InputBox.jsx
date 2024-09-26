

export function InputBox({type,placeholder,onChange,value}) {
    return (
        <div className="py-3">
            <input className="border border-blue-600 w-full px-1 py-1 rounded-md"
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder} />
        </div>
    )
}