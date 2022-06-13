import RadioButtonsInput from '../../form/RadioButtonsInput';
import { getToDoWebsite } from '../../../helpers';
import TextInput from '../../form/TextInput';

export default function ToDo() {
    return (
        <>
            <hr className="py-3" />
            <TextInput label="Adresse der vorhandenen Webseite" />
            <RadioButtonsInput name="to-do" radios={getToDoWebsite()} />
        </>
    )
}
