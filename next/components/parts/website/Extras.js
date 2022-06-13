import CheckboxInput from '../../form/CheckboxInput';

export default function New() {
    return (
        <>
            <p className="pt-3" >Was noch benötigt wird</p>
            <CheckboxInput name="care" value="care" label="Forlaufende Pflege der Webseite" />
            <CheckboxInput name="content" value="content" label="Professionelle Inhalte" />
        </>
    )
}
