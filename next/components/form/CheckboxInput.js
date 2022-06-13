export default function CheckboxInput({
    name,
    label,
    value,
    required = false
}) {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text"><strong>{label}{required ? '*' : ''}</strong></span>
                <input name={name} value={value} type="checkbox" className="checkbox checkbox-accent" required={required}/>
            </label>
        </div>
    )
}
