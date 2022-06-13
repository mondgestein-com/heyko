export default function TextInput({
    name,
    label,
    placeholder
}) {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text"><strong>{label}</strong></span>
            </label>
            <input name={name} type="text" placeholder={placeholder} className="input input-bordered w-full" required/>
        </div>
    )
}
