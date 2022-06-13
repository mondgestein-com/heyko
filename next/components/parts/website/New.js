import RadioButtonsInput from '../../form/RadioButtonsInput';
import { getNewWebsite } from '../../../helpers';

export default function New() {
    return (
        <>
            <RadioButtonsInput name="new" radios={getNewWebsite()} />
        </>
    )
}
