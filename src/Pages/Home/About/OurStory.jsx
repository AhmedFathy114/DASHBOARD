import { useRef, useState } from "react";
import "./OurStory.css";

export default function OurStory() {
    const ref = useRef(null);
    const [coords, setCoords] = useState({ x: -999, y: -999 });

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        });
    };

    const handleMouseLeave = () => {
        setCoords({ x: -999, y: -999 });
    };

    return (
        <section className="py-5 my-5 container mx-auto ">
        <h2 class="display-5 fw-bolder text-center pb-4">
            <span class="text-gradient">Our Story</span>
        </h2>

        <div
            className="our-story p-md-5 fw-bold mx-md-5  "
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
            className="spotlight-overlay"
            style={{
                background: `radial-gradient(circle 150px at ${coords.x}px ${coords.y}px, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 80%)`,
            }}
            ></div>

            <div className="text-center p-3 story-text ">
            ORVICO was born from a small, passionate team of Front-End React developers
            from the Digital Egypt Pioneers Initiative – DEPI, working together on a
            full MERN Stack graduation project. We wanted to solve a problem we
            see every day around us. We noticed how hard it is for people 
            to find a trustworthy electrician, plumber, carpenter, 
            or any skilled handyman when they really need one. 
            Most of the time, it’s all about asking around, guessing, and hoping for the best.
            </div>

            <div className="text-center p-3 story-text">
            So we decided to build ORVICO – a simple,
            reliable bridge between customers and skilled handymen. 
            Through our platform, customers can post what they need, 
            receive offers from nearby professionals, compare their offers, 
            and choose the right person with confidence. 
            At the same time, ORVICO gives handymen a fair chance to showcase their work, 
            grow their reputation, and reach more clients.
            </div>

            <div className="text-center p-3 story-text">
            We started this journey as a student team, 
            but our vision is bigger: to make finding trusted help at home 
            as easy as sending a request online. ORVICO is where trust, skill, and technology meet.
            </div>
        </div>
        </section>
    );
    }
