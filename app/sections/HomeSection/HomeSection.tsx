"use client"

import "./HomeSection.css"

import { useRef } from "react";
import DownloadNowBtnWithArrow from "@/app/components/DownloadNowBtnWithArrow";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HomeSection ({ id }: { id?: string }) {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const section = sectionRef.current;
        if (!section) return

        const isMobile = window.matchMedia("(max-width: 600px)").matches;
        const phoneImage = section.querySelector<HTMLElement>(
            isMobile ? ".image-container-mobile" : ".image-container"
        );
        if (!phoneImage) return;

        gsap.fromTo(phoneImage, {
            yPercent: 0
        }, {
            yPercent: isMobile ? -12 : -20,
            scrollTrigger: {
                trigger: section,
                start: "27.5% center",
                end: "bottom top",
                scrub: true,
            },
        })

        const xto = gsap.quickTo(phoneImage, "x", { duration: 1.2, ease: "power3.out" });
        const yto = gsap.quickTo(phoneImage, "y", { duration: 1.2, ease: "power3.out" });

        const follow = (e: MouseEvent) => {
            const rect = section.getBoundingClientRect()
            xto(((e.clientX - rect.left) / rect.width - 0.5) * -20)
            yto(((e.clientY - rect.top) / rect.height - 0.5) * -20)
        }

        if (!isMobile) section.addEventListener("mousemove", follow)
        return () => {
            if (!isMobile) section.removeEventListener("mousemove", follow)
        }
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id={id ?? "home"} className="home-section section section-home">
            <div className="content-desktop">
                <div className="text-container-home">
                    <div className="left-container">
                        <div className="left-text">
                            Start sharing
                            <br/>
                            real moments
                            <br/>
                            <span className="highlight">
                            <span className="gray-line"></span>
                            With Moose
                        </span>
                        </div>

                        <DownloadNowBtnWithArrow color="#F5F5F5"/>
                    </div>

                    <div className="image-container">
                        <img src="/phone-home-section.png" alt="Moose app displayed on a phone"/>
                    </div>

                    <div className="right-container">
                        <div className="text-right">
                            Discover the
                            <br/>
                            Social Media App That
                            <br/>
                            Values Authenticity
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-mobile">
                <div className="top-content-mb">
                    <div className="title-home-mb">
                        Start Sharing
                        <br />
                        Real Moments
                        <br />
                        With Moose
                    </div>
                    <DownloadNowBtnWithArrow color="#F5F5F5" />
                </div>
                <div className="icon-moose-mb">
                    <img src="/icon-moose-trasparant.png" alt="Moose" />
                </div>
                <div className="mobile-home-heading">
                    Discover the Social Media App<br />That Values Authenticity
                </div>
                <div className="image-container-mobile">
                    <img src="/phone-home-section.png" alt="Moose app displayed on a phone" />
                </div>
            </div>

            <div className="green-black-container">
                <img src="/green-black-bg.png"/>

                <div className="green-black-text-container">
                    <div className="title-home">
                        <p>
                            <span>MOOSE SOCIAL MEDIA • </span>
                            <span>MOOSE SOCIAL MEDIA • </span>
                        </p>
                    </div>

                    <div className="home-white-line">
                        <img src="/home-white-line.png"/>
                    </div>

                    <div className="sub-title">
                        Connect with Real People and Share Genuine
                        <br/>
                        Moments Without Filtering or Editing Tools.
                    </div>
                    <div className="sub-title mobile">
                        Connect with Real People <br/> and Share Genuine
                        Moments Without Filtering or Editing Tools.
                    </div>

                    <div className="info-list">
                        <div className="list">
                            <p>Real</p>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="list">
                            <p>Unfiltered</p>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="list">
                            <p>Proven</p>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="list">
                            <p>Genuine</p>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="list">
                            <p>Authentic</p>
                        </div>
                    </div>
                    <div className="info-list mobile">
                        <div className="list">
                            <div className="home-dot"></div>
                            <p>Real</p>
                        </div>
                        <div className="list">
                            <div className="home-dot"></div>
                            <p>Unfiltered</p>
                        </div>
                        <div className="list">
                            <div className="home-dot"></div>
                            <p>Proven</p>
                        </div>
                        <div className="list">
                            <div className="home-dot"></div>
                            <p>Genuine</p>
                        </div>
                        <div className="list">
                            <div className="home-dot"></div>
                            <p>Authentic</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HomeSection
