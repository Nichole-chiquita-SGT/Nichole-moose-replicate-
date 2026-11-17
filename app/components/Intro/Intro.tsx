
"use client";

import "./Intro.css";
import Image from "next/image";

import gsap from "gsap";
import { useEffect } from "react";

function Intro() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".intro-content", {
            }).from(".moose-logo-intro", {
                x: -100,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
            })
                .from(".letter-intro", {
                    opacity: 0,
                    x: -50,
                    stagger: 0.1,
                    filter: "blur(15px)",
                    duration: 0.7,
                    ease: "power3.out",
                })

                .to(".intro-content", {
                    x: 15,
                    opacity: 0.5,
                    duration: 0.5,
                }, ).to(".intro-splash-screen-container", {
                    clipPath: "inset(0 0 0 100%)",
                    duration: 1.2,
                    ease: "power4.inOut",
                }, "<");

        });

        return () => ctx.revert();
    }, []);

    return (
        <div id="home" className="intro-splash-screen-container">
            <div className="intro-moose">
                <div className="intro-content">

                    <div className="moose-logo-intro">
                        <img
                            src="/moose_logo.png"
                            alt="moose_logo"
                            className="moose-logo-image"
                        />
                    </div>

                    <div className="moose-text-intro">
                        <Image src="/text-image-moose/moose-text-m.png" alt="M" width={50} height={50} className="letter-intro" />
                        <Image src="/text-image-moose/moose-text-o.png" alt="O" width={50} height={50} className="letter-intro" />
                        <Image src="/text-image-moose/moose-text-o.png" alt="O" width={50} height={50} className="letter-intro" />
                        <Image src="/text-image-moose/moose-text-s.png" alt="S" width={50} height={50} className="letter-intro" />
                        <Image src="/text-image-moose/moose-text-e.png" alt="E" width={50} height={50} className="letter-intro" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Intro;
