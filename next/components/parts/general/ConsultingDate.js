import RadioButtonsInput from "../../form/RadioButtonsInput";
import CheckboxInput from "../../form/CheckboxInput";
import { getMeetingLocations } from '../../../helpers';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { format } from 'date-fns';
import de from 'date-fns/locale/de';

import { useEffect, useState } from 'react';

import { getSlots, getAllTimesolts } from '../../../services/timeslots';
import Email from "./Email";
import Phone from "./Phone";

export default function ConsultingDate() {
    const [selected, setSelected] = useState(new Date());

    const slots = getSlots(selected);

    const s = [];

    for (const slot of slots) {
        s.push(
            <>
                <span key={slot} className="btn btn-accent">{slot}</span>
            </>
        )
    }

    let maxDate = new Date();
    maxDate = maxDate.setMonth(maxDate.getMonth() + 2)

    const seasonEmoji = {
        winter: '⛄️',
        spring: '🌸',
        summer: '🌻',
        autumn: '🍂'
    };

    const getSeason = (month) => {
        const monthNumber = month.getMonth();
        if (monthNumber >= 0 && monthNumber < 3) return 'winter';
        if (monthNumber >= 3 && monthNumber < 6) return 'spring';
        if (monthNumber >= 6 && monthNumber < 9) return 'summer';
        else return 'autumn';
    };

    const formatCaption = (month, options) => {
        const season = getSeason(month);
        return (
            <>
                <span role="img" aria-label={season}>
                    {seasonEmoji[season]}
                </span>{' '}
                {format(month, 'LLLL', { locale: options?.locale })}
            </>
        );
    };

    const disabledDays = (startDate, endDate) => {
        const dates = []
        let currentDate = startDate
        const addDays = function (days) {
            const date = new Date(this.valueOf())
            date.setDate(date.getDate() + days)
            return date
        }
        while (currentDate <= endDate) {
            if (currentDate.getDay() === 0 || currentDate.getDay() === 6 || currentDate.getDay() === 5) {
                dates.push(currentDate)
            }
            currentDate = addDays.call(currentDate, 1)
        }
        return dates
    }

    const [place, setPlace] = useState('');


    useEffect(() => {
        getAllTimesolts().then((data) => {
            console.log(data);
        })
    })

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <DayPicker
                        fromDate={new Date()}
                        toDate={maxDate}

                        mode="single"
                        selected={selected}
                        onSelect={setSelected}

                        formatters={{ formatCaption }}

                        disabled={disabledDays(new Date(), maxDate)}

                        locale={de}
                    />
                </div>
                <div className="md:mt-6">
                    <h2 className="mb-6 text-2xl font-bold">Verfügbare Zeitfenster:</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {s}
                    </div>
                    <p className="pt-3 text-xl font-bold">Termin am {format(selected, 'PP', { locale: de })} um </p>
                </div>
            </div>
            <p className="mt-3">Ort</p>
            <RadioButtonsInput setSelected={setPlace} name="meeting" radios={getMeetingLocations()} />
            {place == 'online' ? <Email /> : ''}
            {place == 'tel' ? <Phone /> : ''}
            <div className="mt-3">
                <CheckboxInput name="agb" label="AGB DIES DAS ANANAS!!" value="agb" required/>
            </div>
        </>
    )
}
