import Link from 'next/link';
import { getRandomGreeting } from '../helpers';
import Logo from './Logo';

export default function Start() {
    const hello = getRandomGreeting();
    return (
        <>

            <div class="logo">
                <Logo />
            </div>

            <h1 className="text-5xl font-bold mt-3">{hello}!</h1>
            <p className="pt-6 text-2xl">Wir sind <strong>HEYGENCY</strong>,<br /> Agentur für Web-, App und E-Commerce-Lösungen.</p>
            <p className="pt-3">Mit wenigen Klicks zu ihrem kostenlosen Beratungsgespräch und anschließendem Angebot.</p>

            <h2 className="text-xl py-6">Projektart wählen:</h2>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <Link href="/website">
                        <button className="btn btn-accent gap-2 btn-wide">
                            Webseite
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href="/online-shop">
                        <button className="btn btn-accent gap-2 btn-wide">
                            Online-Shop
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href="/app">
                        <button className="btn btn-accent gap-2 btn-wide">
                            App / SPA
                        </button>
                    </Link>
                </div>
                <div className="divider">ODER DIREKT</div>
                <div>
                    <Link href="/date">
                        <div className="indicator">
                            <span className="indicator-item badge badge-primary p-3">&#128293;</span>
                            <button className="btn btn-accent gap-2 btn-wide">
                                Termin Vereinbaren
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
