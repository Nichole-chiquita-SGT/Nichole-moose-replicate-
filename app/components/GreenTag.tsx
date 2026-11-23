'use client'

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type GreenTagProps = {
    imgIcon: any,
    text: string,
    title1: string,
    title2: string,
    flex: string
}

function renderAnimatedTitle(text: string, lineIndex: number) {
    return text.split(" ").map((word, wordIndex) => (
        <span className="green-tag-word" key={`${lineIndex}-${wordIndex}`}>
            {word}
        </span>
    )).reduce<React.ReactNode[]>((parts, word, index) => {
        if (index > 0) parts.push(" ");
        parts.push(word);
        return parts;
    }, []);
}

// style di global

function GreenTag({imgIcon, text, title1, title2, flex} : GreenTagProps) {
    const rootRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const root = rootRef.current;
        if (!root) return;

        gsap.from(".green-tag-entrance", {
            opacity: 0,
            y: 24,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: {
                trigger: root,
                start: "top 82%",
                toggleActions: "play none none reverse",
            },
        });

        gsap.from(".green-tag-title-line .green-tag-word", {
            opacity: 0,
            y: 50,
            delay: 0.55,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: root,
                start: "top 82%",
                toggleActions: "play none none reverse",
            },
        });
    }, { scope: rootRef });

    return (
        <div ref={rootRef} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="tag-key-features green-tag-entrance">
                <div>
                    <img src={`/green-tag/${imgIcon}.png`}/>
                </div>
                <p>{text}</p>
            </div>

            <div className="text-content-container-key-features" style={flex ? {flexDirection: flex, gap:"15px"} : {}}>
                <p className="green-tag-title-line" aria-label={title1}>
                    {renderAnimatedTitle(title1, 0)}
                </p>
                <p className="green-tag-title-line" aria-label={title2}>
                    {renderAnimatedTitle(title2, 1)}
                </p>
            </div>
        </div>
    )
}

export default GreenTag;
