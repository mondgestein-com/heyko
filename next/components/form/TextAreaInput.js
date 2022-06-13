export default function TextAreaInput({
    name,
    label,
    placeholder
}) {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <textarea name={name} className="textarea textarea-bordered h-24" placeholder={placeholder} required></textarea>
        </div>
    )
}
