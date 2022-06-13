export default function RadioButtonsInput({
    name,
    radios,
    setSelected = () => {},
    required = true
}) {
    const r = [];
    for (const rad of radios) {
        r.push(
            <label key={rad.value} className="label cursor-pointer py-3" onClick={() => setSelected(rad.value)}>
                <span className="label-text"><strong>{rad.label}</strong></span>
                <input type="radio" value={rad.value} name={name} className="radio checked:radio-accent" required/>
            </label>
        )
    }

    return (
        <div className="form-control">
            {r}
        </div>
    )
}
