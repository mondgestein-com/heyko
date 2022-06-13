export default function TextInput({
    name,
    label,
    options
}) {
    const o = [];
    for (const opt of options) {
        o.push(<option key={opt.value} value={opt.value}>{opt.name}</option>)
    }

    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text"><strong>{label}</strong></span>
            </label>
            <select name={name} className="select select-bordered w-full" required>
                <option disabled selected>{label}</option>
                {o}
            </select>
        </div>
    )
}
