"use client"

import "./CTASection.css"
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


function AboutUsSection(){

    useGSAP(()=>{
        gsap.from(".cta-title span", {
            stagger:0.1,
            opacity: 0,
            y: 30,
            scrollTrigger: {
                trigger: ".CTA-section",
                start: "0% center",
                end: "5% center",
                toggleActions: "play none none reverse",
            }
        })

        gsap.from(".card-1-cta", {
            opacity: 0,
            x: 100,
            scrollTrigger: {
                trigger: ".CTA-section",
                start: "23% center",
                end: "40% center",
                toggleActions: "play none none reverse",
            }
        })

        gsap.from(".card-2-cta", {
            opacity: 0,
            x: -100,
            scrollTrigger: {
                trigger: ".CTA-section",
                start: "23% center",
                end: "40% center",
                toggleActions: "play none none reverse",
            }
        })
    })

    return (
        <section className="CTA-section section">
            <div className="cta-content">
                <div className="bg-container">
                    <div className="cta-bg-container">
                        <img src="/bg-cta.png"/>
                    </div>

                    <div className="content-cta">
                        <div className="cta-title">
                            <span>Your </span>
                            <span>First </span>
                            <span>Step </span>
                            <span>To </span>
                            <span>Create</span>

                            <br/>

                            <span className="green-line">Content </span>
                            <span className="green-line">That</span>
                            <br/>
                            <span className="green-line">Values </span>
                            <span className="green-line">Authenticity</span>
                        </div>

                        <div className="cta-title mobile">
                            <span>Your </span>
                            <span>First </span>
                            <span>Step </span>
                            <span>To </span>
                            <span>Create</span>
                            <span className="green-line">Content </span>
                            <br/>
                            <span className="green-line">That</span>
                            <span className="green-line">Values </span>
                            <span className="green-line">Authenticity</span>
                        </div>

                        <div className="cta-white-line">
                            <img src="/white-line.png"/>
                        </div>

                        <div className="cta-des">
                            Express yourself honestly and connect through moments <br/>
                            that truly matter.
                        </div>

                        <div className="cta-des mobile">
                            Express yourself honestly and connect through moments
                            that truly matter.
                        </div>

                        <div className="cta-google-play">
                            <img src="/google-play.png"/>
                        </div>

                        <div className="card-container-cta">
                            <div className="card-cta fade-mask card-1-cta">
                                <img src="/card-1-cta.png"/>
                            </div>
                            <div className="card-cta fade-mask card-2-cta">
                                <img src="/card-2-cta.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutUsSection;
