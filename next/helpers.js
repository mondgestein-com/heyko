const getCountrys = () => {
    return [
        {
            name: 'Deutschland',
            value: 'de'
        },
        {
            name: 'Österreich',
            value: 'a'
        },
        {
            name: 'Schweiz',
            value: 'ch'
        }
    ]
}

const getRelaunchOrNewWebsite = () => {
    return [
        {
            label: 'Ich starte ganz neu',
            value: 'new'
        },
        {
            label: 'Webseite vorhanden',
            value: 'todo'
        }
    ]
}

const getToDoWebsite = () => {
    return [
        {
            label: 'Vollständige Erneuerung',
            value: 'complete-new'
        },
        {
            label: 'Zusätzliche Webseite',
            value: 'additional-website'
        },
        {
            label: 'Anpassung/Erweiterung',
            value: 'adopt-extend'
        },
    ]
}

const getNewWebsite = () => {
    return [
        {
            label: 'Web-Visitenkarte',
            value: 'card-website'
        },
        {
            label: 'Buiseness Webseite',
            value: 'buiseness-website'
        }
    ]
}

const getMeetingLocations = () => {
    return [
        {
            label: 'Online',
            value: 'online'
        },
        {
            label: 'Telefon',
            value: 'tel'
        }
    ]
}

const getTimeSlots = () => {
    
}

const getRandomGreeting = () => {
    const greetings = [
        "Hallo",
        "Ola",
        "Hello",
        "Hi",
        "Hey"
    ]

    return greetings[Math.floor(Math.random()*greetings.length)];
}

const getRandomTheme = () => {
    const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];

    return themes[Math.floor(Math.random()*themes.length)];
}

export {
    getCountrys,
    getRelaunchOrNewWebsite,
    getToDoWebsite,
    getNewWebsite,
    getMeetingLocations,
    getRandomGreeting,
    getRandomTheme
}