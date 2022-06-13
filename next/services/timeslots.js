const strapi = require('../strapi');
const availability = require('timeslot-availability');

const getSlots = (date) => {
    return [
        "09.00",
        "09.30",
        "10.00",
        "10.30",
        "11.00",
        "11.30",
        "14.00",
        "14.30",
        "15.00",
        "15.30",
        "16.00",
        "16.30"
    ]
}

const getAllTimesolts = async () => {
    const general = await strapi.get('general');
    const today = new Date();

    const start = new Date().setTime(general.open);
    const end = new Date().setTime(general.close);

    console.log(start);

    const timespan = 60 * general.size;

    const siestas = [
        {
            start: new Date().setTime(general.siesta_start),
            end: new Date().setTime(general.siesta_end),
        }
    ]

    const bookable = availability(start, end, timespan, siestas);

    console.log(bookable);

    return general;
}

export {
    getSlots,
    getAllTimesolts
}