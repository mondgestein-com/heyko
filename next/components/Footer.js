import FooterLogo from "./FooterLogo";

export default function Footer() {
    return (
        <footer className="footer footer-center p-6 bg-primary text-primary-content">
            <FooterLogo />
            <div>
                <p className="text-xl">
                    <span className="font-bold text-2xl">HEYGENCY!</span><br />Agentur für Web-, App- und E-Commerce-Lösungen
                </p>
                <p>MO-DO 9-12 + 14-17 Uhr <br />06631/73936 | hey@heygency.de</p>
                <p>Inhaber: Erich Tag, Grünbergerstr. 35, 36304 Alsfeld, Deutschland.</p>
                <p className="pt-6">IMPRESSUM | AGB | DATENSCHUTZ</p>
            </div>
        </footer>
    )
}
