"use client"

import "./AboutUsSection.css"
import DownloadNowBtnWithArrow from "@/app/components/DownloadNowBtnWithArrow";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function AboutUsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return;

        gsap.fromTo(section.querySelectorAll(".bubble"), {
            scale: 0,
        }, {
            scale: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "20% bottom",
                end: "70% center",
                toggleActions: "play none none reverse"
            },
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "20% bottom",
                end: "70% center",
                toggleActions: "play none none reverse"
            }
        })

        tl.from(".about-us-title span", {
            y: 100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.09,
        })
        tl.from(".about-us-sub-title", {
            y: 100,
            opacity: 0,
            duration: 0.5,
        }, "<")
        tl.from(".about-us-download-now-btn", {
            y: 100,
            opacity: 0,
            duration: 0.5,
        }, "<")

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="about-us" className="about-us-section section">
            <div className="about-us-content">
                <div className="bubble-bg">
                    <div className="bubble bubble-yellow">
                        <img src="/about-us-section/message%20(copy).png" alt="bubble" />
                    </div>
                    <div className="bubble bubble-orange">
                        <img src="/about-us-section/camera-vidio.png" alt="bubble" />
                    </div>
                    <div className="bubble bubble-green">
                        <img src="/about-us-section/phone-scan.png" alt="bubble" />
                    </div>
                    <div className="bubble bubble-blue">
                        <img src="/about-us-section/location-earth.png" alt="bubble" />
                    </div>
                </div>

                <div className="about-us-text-container">
                    <div className="about-us-title">
                        <span>The all-in-one social</span>
                        <span>platform built on</span>
                        <span>authenticity.</span>
                    </div>

                    <div className="about-us-sub-title">
                        <div className="white-green-line"></div>
                        <div className="sub-title">
                            Feel at ease with a social space you can trust.
                        </div>
                        <div className="white-green-line"></div>
                    </div>

                    <div className="about-us-download-now-btn">
                        <DownloadNowBtnWithArrow color="var(--main-color)"/>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default AboutUsSection;
