import TextInput from '../../form/TextInput';

export default function Email() {
    return (
        <>
            <hr className="pt-3" />
            <p>Email Adresse</p>
            <div>
                <TextInput name="email" label="Email" placeholder="Email" />
            </div>
        </>
    )
}
