import TextAreaInput from '../../form/TextAreaInput';

export default function DescriptionArea() {
    return (
        <>
            <p className="pt-3" >Ein paar Worte zum Anliegen</p>
            <div>
                <TextAreaInput name="description" label="Beschreibung" placeholder="Beschreibung" />
            </div>
        </>
    )
}
 