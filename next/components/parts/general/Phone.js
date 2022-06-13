import TextInput from '../../form/TextInput';

export default function Phone() {
    return (
        <>
            <hr className="pt-3" />
            <p>Tel.</p>
            <div>
                <TextInput name="Tel." label="Tel." placeholder="Tel." />
            </div>
        </>
    )
}