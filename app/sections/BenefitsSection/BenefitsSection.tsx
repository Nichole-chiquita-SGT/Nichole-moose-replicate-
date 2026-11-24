
"use client";

import "./BenefitsSection.css";

import GreenTag from "@/app/components/GreenTag";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function BenefitsSection() {

    useGSAP(() => {
        const mm = gsap.matchMedia();

        //desktop
        mm.add("(min-width: 601px)", () => {
            const cards = gsap.utils.toArray<HTMLElement>(".benefits-card");

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".card-container-benefits",
                    start: "top top+=100",
                    end: `+=${(cards.length - 1) * 100}%`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });


            cards.forEach((card, index) => {
                if (index === 0) return;

                const position = index - 1;

                // Card baru naik
                timeline.fromTo(
                    card,
                    {
                        y: "100vh",
                    },
                    {
                        y: 0,
                        duration: 1,
                        ease: "none",
                    },
                    position
                );

                // Card sebelumnya mengecil dan bergeser
                cards.slice(0, index).forEach((previousCard, previousIndex) => {

                    const distance = index - previousIndex;

                    // Efek stacking
                    timeline.to(
                        previousCard,
                        {
                            scale: 1 - 0.04 * distance,
                            y: 20 * distance,
                            duration: 1,
                            ease: "none",
                        },
                        position
                    );

                    // Menghilang ketika card baru hampir menutupi
                    timeline.to(
                        previousCard,
                        {
                            opacity: 0,
                            duration: 1,
                            ease: "none",
                        },
                        position + 0.5
                    );

                });
            });

        });

        // mobile
        mm.add("(max-width: 600px)", () => {
            const cards = gsap.utils.toArray<HTMLElement>(".benefits-card");

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".card-container-benefits",
                    start: "top top+=60",
                    end: `+=${(cards.length - 1) * 90}%`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });


            cards.forEach((card, index) => {
                if (index === 0) return;

                const position = index - 1;

                // Card baru naik
                timeline.fromTo(
                    card,
                    {
                        y: "100vh",
                    },
                    {
                        y: 0,
                        duration: 1,
                        ease: "none",
                    },
                    position
                );

                // Card sebelumnya mengecil dan bergeser
                cards.slice(0, index).forEach((previousCard, previousIndex) => {

                    const distance = index - previousIndex;

                    // Efek stacking
                    timeline.to(
                        previousCard,
                        {
                            scale: 1 - 0.04 * distance,
                            y: 20 * distance,
                            duration: 1,
                            ease: "none",
                        },
                        position
                    );

                    // Menghilang ketika card baru hampir menutupi
                    timeline.to(
                        previousCard,
                        {
                            opacity: 0,
                            duration: 1,
                            ease: "none",
                        },
                        position + 0.5
                    );

                });
            });

        });

        return () => mm.revert();

    }, []);

    const benefitsData = [
        {
            title: "Feel at Ease, Every Time You Scroll",
            des: "Enjoy a social experience where everything feels more certain and trustworthy. " +
                "Moose removes the doubt, so you can focus on what matters.",
            highlight1: "No fake profiles or misleading content",
            highlight2: "A space you can explore without second guessing",
            img: "1"
        },
        {
            title: "Be Yourself, Without the Pressure",
            des: "Share your life as it is, without the need to edit, impress, or keep up with unrealistic standards. Moose gives you the freedom to just be you.",
            highlight1: "No pressure to look perfect or curated",
            highlight2: "Authentic moments matter more than aesthetics",
            img: "2"
        },
        {
            title: "Build Real Connections That Matter",
            des: "Connect with people on a deeper level, where interactions feel genuine and meaningful. Moose is built for relationships, not just engagement.",
            highlight1: "Talk to real people, not curated personas",
            highlight2: "Create connections based on trust, not appearance",
            img: "3"
        },
        {
            title: "A Safer Space for Real People",
            des: "Feel more secure in a platform designed to protect its users and maintain authenticity. Moose prioritizes safety without compromising your experience.",
            highlight1: "Reduced risk of fake accounts and scams",
            highlight2: "Strong systems to keep the community trusted",
            img: "4"
        }
    ];

    return (
        <section className="benefits-section section">

            <div className="benefits-content">

                <GreenTag
                    imgIcon="green-star"
                    text="Benefits"
                    title1="Experience "
                    title2=" Future of Social Media"
                    flex=""
                />

                <div className="card-container-benefits">

                    {benefitsData.map((benefit, index) => (

                        <div
                            key={index}
                            className={`benefits-card benefits-card-${benefit.img}`}
                        >

                            <img
                                className="benefits-card-bg"
                                src="/benefits-section/bg.png"
                                alt=""
                            />

                            <div className="benefits-card-content">

                                <div className="benefits-image-container">
                                    <img
                                        src={`/benefits-section/card-${benefit.img}-benefits.png`}
                                        alt=""
                                    />
                                </div>

                                <div className="text-container-benefits">

                                    <div className="benefits-top-content">

                                        <div className="benefits-card-title">
                                            {benefit.title}
                                        </div>

                                        <div className="benefits-card-description">
                                            {benefit.des}
                                        </div>

                                    </div>

                                    <div className="benefits-bottom-content">

                                        <div className="benefits-highlight benefits-highlight-1">

                                            <div className="benefits-arrow-circle">
                                                <img src="/benefits-section/arrow.png" alt="" />
                                            </div>

                                            <p>{benefit.highlight1}</p>

                                        </div>

                                        <div className="benefits-highlight benefits-highlight-2">

                                            <div className="benefits-arrow-circle">
                                                <img src="/benefits-section/arrow.png" alt="" />
                                            </div>

                                            <p>{benefit.highlight2}</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default BenefitsSection;
