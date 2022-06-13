import TextInput from '../../form/TextInput';
import SelectInput from '../../form/SelectInput';
import { getCountrys } from '../../../helpers';

export default function PersonalInformation() {
    return (
        <>
            <p className="pt-3" >Ihre Kontaktdaten</p>
            <div>
                <TextInput name="company" label="Unternehmen" />
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <TextInput name="firstname" label="Vorname" />
                <TextInput name="lastname" label="Nachname" />
            </div>
            <div>
                <TextInput name="street" label="Straße" />
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <TextInput name="zip" label="Postleitzahl" />
                <TextInput name="city" label="Ort" />
            </div>
            <div>
                <SelectInput name="country" label="Land wählen" options={getCountrys()} />
            </div>
        </>
    )
}
