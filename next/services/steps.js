import PersonalInformation from "../components/parts/general/PersonalInformation";
import NewOrRelaunch from '../components/parts/website/NewOrRelaunch';
import ConsultingDate from "../components/parts/general/ConsultingDate";
import Extras from "../components/parts/website/Extras";
import DescriptionArea from "../components/parts/general/DescriptionArea";


const getSteps = (site) => {
    const steps = {
        "/website": [
            {
                title: "Webseite",
                part: () => <NewOrRelaunch />
            },
            {
                title: "Zusätze",
                part: () => <Extras />
            },
            {
                title: "Info",
                part: () => <DescriptionArea />
            },
            {
                title: "Kontakt",
                part: () => <PersonalInformation />
            },
            {
                title: "Termin",
                part: () => <ConsultingDate />
            }
        ],
        "/online-shop": [
            {
                title: "Online Shop",
                part: () => <NewOrRelaunch />
            },
            {
                title: "Produkte",
                part: () => <Extras />
            },
            {
                title: "Zusätze",
                part: () => <Extras />
            },
            {
                title: "Kontakt",
                part: () => <PersonalInformation />
            },
            {
                title: "Termin",
                part: () => <ConsultingDate />
            }
        ],
        "/date": [
            {
                title: "Termin",
                part: () => <ConsultingDate />
            }
        ],
        "/app": [
            {
                title: "Termin",
                part: () => <ConsultingDate />
            }
        ],
    }

    return steps[site];
}

export {
    getSteps
}