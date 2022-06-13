import FormNavigation from "./FormNavigation";
import FormSteper from "./FormSteper";
import { useState } from "react";
import { getSteps } from '../services/steps';
import { useRouter } from 'next/router';

export default function FormWrapper() {
    const [step, setStep] = useState(0);
    const router = useRouter();
    const steps = getSteps(router.asPath);

    const handleClick = (action) => {
        switch (action) {
            case 'next':
                if (step < steps.length - 1) {
                    setStep(step + 1)
                } else {
                    router.push('/thanks');
                }
                break;
            case 'prev':
                if (step > 0) {
                    setStep(step - 1)
                } else {
                    router.push('/');
                }
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = [];
        for (const t of event.target) {
            data.push({
                'type': t.type,
                'name': t.name,
                'value': t.value,
                'checked': t.checked
            })
        }

        localStorage.setItem('heygency_form_data_' + data[0].value, JSON.stringify(data))

        handleClick('next');
        window.scrollTo(0, 0)
    };

    return (
        <>
            <form id="part-fields" onSubmit={handleSubmit} className="mx-auto md:w-2/3 w-full">
                <FormSteper step={step} steps={steps} />
                {steps[step].part()}
                <FormNavigation handleClick={handleClick} />
            </form>
        </>
    )
}
