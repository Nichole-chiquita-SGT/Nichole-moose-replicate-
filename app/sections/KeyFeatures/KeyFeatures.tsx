"use client"

import "./KeyFeatures.css"
import GreenTag from "@/app/components/GreenTag";
import AnimatedDownloadText from "@/app/components/AnimatedDownloadText";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

function KeyFeatures () {
    useGSAP(() => {

        // card-1-image-aniation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-key-features",
                start: "20% center",
                end: "50%% center",
                toggleActions: "play reverse play reverse"
            }
        })
        tl.to(".center-img-content", {
            rotate: "0deg",
            duration: 1,
            ease: "power3.out",
        })

        tl.to(".icon-1", {
            y: 0,
            x: 0,
            duration: 1,
            ease: "power3.out",
            opacity: 1,
        }, "<")

        tl.to(".icon-2", {
            y: 0,
            x: 0,
            duration: 1,
            ease: "power3.out",
            opacity: 1,
        }, "<")

        tl.to(".icon-3", {
            y: 0,
            x: 0,
            duration: 1,
            ease: "power3.out",
            opacity: 1,
        }, "<")

        tl.to(".icon-4", {
            y: 0,
            x: 0,
            duration: 1,
            ease: "power3.out",
            opacity: 1,
        }, "<")

        tl.to(".icon-5", {
            y: 0,
            x: 0,
            duration: 1,
            ease: "power3.out",
            opacity: 1,
        }, "<")

        tl.to(".icon-6", {
            y: 0,
            x: 0,
            duration: 1,
            ease: "power3.out",
            opacity: 1,
        }, "<")

        tl.to(".line-for-icon", {
            opacity: 1,
            duration: 1,
        }, "<+=0.3")

        // card-2-image-aniation

        gsap.to(".image-stack-container", {
            y: 0,
            stagger: 0.2,
            opacity: 1,
            scrollTrigger: {
                trigger: ".section-key-features",
                start: "20% center",
                end: "40%% center",
                toggleActions: "play none none reverse"
            }
        })

        // text card 1 animation
        gsap.from(".card-1-key-features .title-card-key-features ", {
            y:100,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
                trigger: ".section-key-features",
                start: "29% center",
                end: "40%% center",

                toggleActions: "play none none reverse",
            }
        })

        gsap.from(".card-1-key-features .des-card-key-features ", {
            y:100,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
                trigger: ".section-key-features",
                start: "32% center",
                end: "40%% center",
                toggleActions: "play none none reverse",
            }
        })

        // text card 2 animation
        gsap.from(".card-2-key-features .title-card-key-features ", {
            y:100,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
                trigger: ".section-key-features",
                start: "10% center",
                end: "40%% center",

                toggleActions: "play none none reverse",
            }
        })

        gsap.from(".card-2-key-features .des-card-key-features ", {
            y:100,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
                trigger: ".section-key-features",
                start: "13% center",
                end: "40%% center",
                toggleActions: "play none none reverse",
            }
        })

        // text card 3 animation
        gsap.from(".card-3-key-features .title-card-key-features ", {
            y:100,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
                trigger: ".section-key-features",
                start: "45% center",
                end: "60%% center",
                toggleActions: "play none none reverse",
            }
        })

        gsap.from(".card-3-key-features .des-card-key-features ", {
            y:100,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
                trigger: ".section-key-features",
                start: "50% center",
                end: "60%% center",
                toggleActions: "play none none reverse",
            }
        })

        // text card 4 animation
        gsap.from(".card-4-key-features .title-key-features ", {
            y:100,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
                trigger: ".section-key-features",
                start: "65% center",
                end: "75% center",
                toggleActions: "play none none reverse",
            }
        })

        gsap.from(".card-4-key-features .download-now-btn-key-features ", {
            y:100,
            opacity: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
                trigger: ".section-key-features",
                start: "70% center",
                end: "75% center",
                toggleActions: "play none none reverse",
            }
        })

    }, []);

    return (
        <section id="key-features"  className="key-features-root section section-key-features">
            <GreenTag
                imgIcon="green-croun"
                text="Key Features"
                title1="Build for Real."
                title2="Designed for you."
                flex="" />

            <div className="key-features-grid-container">
                <div className="card-1-key-features card-key-features">
                    <img src="/key-features-grid/grid1/grid-1-bg.png" className="card-bg"/>
                    <div className="card-content">
                        <img src="/key-features-grid/grid1/line-icons.png" className="line-for-icon"/>

                        <div className="icons-container"><div/>
                            <div className="icons-content">
                                <img className="icon-1 icon" src="/key-features-grid/grid1/icon-1.png"/>
                                <img className="icon-2 icon" src="/key-features-grid/grid1/icon-2.png"/>
                                <img className="icon-3 icon" src="/key-features-grid/grid1/icon-3.png"/>
                                <img className="icon-4 icon" src="/key-features-grid/grid1/icon-4.png"/>
                                <img className="icon-5 icon" src="/key-features-grid/grid1/icon-5.png"/>
                                <img className="icon-6 icon" src="/key-features-grid/grid1/icon-6.png"/>
                            </div>
                        </div>

                        <div className="center-img-content">
                            <img src="/key-features-grid/grid1/grid-1-image.png"/>
                        </div>

                        <div className="text-container-key-features">
                            <div className="title-card-key-features ">
                                Trust What You See
                            </div>
                            <div className="des-card-key-features">
                                No fake profiles, no misleading content — just real people and real moments.
                                Moose ensures everything you see is authentic, so you can scroll and connect
                                without second guessing.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-2-key-features card-key-features">
                    <img src="/key-features-grid/grid2/grid-2-bg.png" className="card-bg"/>
                    <div className="card-content">
                        <div className="image-stack-container image-stack-container1">
                            <img className="image-1" src="/key-features-grid/grid2/grid-2-img.png"/>
                        </div>
                        <div className="image-stack-container image-stack-container2">
                            <img className="image-2" src="/key-features-grid/grid2/grid-2-img2.png"/>

                        </div>
                        <div className="image-stack-container image-stack-container3">
                            <img className="image-3" src="/key-features-grid/grid2/grid-2-img3.png"/>
                        </div>
                        <div className="text-container-key-features">
                            <div className="title-card-key-features">
                                Be Yourself, Without Pressure
                            </div>
                            <div className="des-card-key-features">
                                Forget the need to be perfect. Share your life as it is — unfiltered, unedited,
                                and real, in a space where authenticity matters more than appearance.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-3-key-features card-key-features">
                    <img src="/key-features-grid/grid3/grid-3-bg.png" className="card-bg"/>
                    <div className="card-content">
                        <div className="image-stack-container image-stack-container1">
                            <img src="/key-features-grid/grid3/grid-3-notification.png" className="image-1"/>
                        </div>
                        <div className="image-stack-container image-stack-container2" >
                            <img src="/key-features-grid/grid3/grid-3-phone.png" className="image-2"/>
                        </div>

                        <div className="text-container-key-features">
                            <div>
                                <div className="title-card-key-features">
                                    Connect for Real
                                </div>
                                <div className="des-card-key-features">
                                    Go beyond likes and curated personas. Connect with real people and build
                                    genuine relationships based on trust, not illusion.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-4-key-features card-key-features">
                    <img src="/key-features-grid/grid4/grid-4-bg.png" className="card-bg"/>
                    <div className="card-content">
                        <div className="image-stack-container">
                            <img src="/key-features-grid/grid4/logo-moose-hd.png"/>
                        </div>

                        <div className="text-container-key-features">
                            <div className="title-key-features">
                                Get the app
                            </div>
                            <button className="download-now-btn-key-features" aria-label="Download Now">
                                <AnimatedDownloadText text="Download Now" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyFeatures;
