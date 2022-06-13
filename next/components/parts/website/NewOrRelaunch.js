import RadioButtonsInput from '../../form/RadioButtonsInput';
import ToDo from './ToDo';
import { getRelaunchOrNewWebsite } from '../../../helpers';
import { useState } from "react";
import New from './New';

export default function NewOrRelaunch() {
    const [selected, setSelected] = useState('');
    return (
        <>
            <p className="pt-3" >Wo sie sich gerade befinden</p>
            <RadioButtonsInput setSelected={setSelected} name="new-or-relaunch" radios={getRelaunchOrNewWebsite()} />
            { selected == 'todo' ? <ToDo /> : ''}
        </>
    )
}
