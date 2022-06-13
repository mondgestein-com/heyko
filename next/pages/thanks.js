import Confetti from 'react-dom-confetti';
import { useEffect, useState } from 'react';

export default function Thanks() {
    const [ex, setEx] = useState(false);

    const config = {
        angle: 180,
        spread: 720,
        startVelocity: 50,
        elementCount: 140,
        dragFriction: 0.12,
        duration: 5000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "1000px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const heygent = localStorage.getItem('heygency_heygent');
        localStorage.clear();
        if(heygent !== null) {
            localStorage.setItem('heygency_heygent', heygent);
        }
        setEx(true);
    })

    return (
        <>
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <Confetti active={ex} config={config} />
                        <h1 className="text-5xl font-bold">Danke!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-accent">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );

}
