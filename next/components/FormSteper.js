export default function FormStepper({ step, steps }) {
    var s = [];

    for (let i = 0; i < steps.length; i++) {
        s.push(
            i <= step
                ?
                <li key={i} className="step step-accent">{steps[i].title}</li>
                :
                <li key={i} className="step">{steps[i].title}</li>
        );
    }

    return (
        <>
            <input type="hidden" value={step} name="step" />
            {
                steps.length > 1
                    ?
                    <div id="form-stepper" className="p-3">
                        <ul className="steps">
                            {s}
                        </ul>
                    </div>
                    :
                    ''
            }
        </>
    )
}
