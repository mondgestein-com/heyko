export default function FormNavigation({handleClick}) {
    return (
        <div id="form-navigation">
            <div className="grid grid-cols-2 gap-6 p-6">
                <div>
                    <p name="nav-prev" className="btn btn-ghost btn-block" onClick={() => handleClick('prev')}>ZURÜCK</p>
                </div>
                <div>
                    <button name="nav-next" className="btn btn-accent btn-block" type="submit">WEITER</button>
                </div>
            </div>
        </div>
    )
}
