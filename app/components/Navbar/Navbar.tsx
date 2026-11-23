
"use client";

import "./Navbar.css";
import DownloadBtnBlack from "@/app/components/DownloadBtnBlack";
import { useEffect, useRef, useState } from "react";

function AnimatedNavText({ text }: { text: string }) {
    return (
        <div className="nav-link-text-con" aria-hidden="true">
            {Array.from(text).map((letter, index) => {
                const visibleLetter = letter === " " ? "\u00a0" : letter;

                return (
                    <span
                        className="nav-letter"
                        key={`${letter}-${index}`}
                        style={{ transitionDelay: `${index * 25}ms` }}
                    >
                        <span className="nav-text">{visibleLetter}</span>
                        <span className="nav-text">{visibleLetter}</span>
                    </span>
                );
            })}
        </div>
    );
}

function BlurLayers() {
    return (
        <>
            {Array.from({ length: 8 }, (_, index) => (
                <div className="blur-layer" key={index} />
            ))}
        </>
    );
}

function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const previousScrollY = useRef(0);

    useEffect(() => {
        previousScrollY.current = window.scrollY;

        const updateActiveSection = () => {
            const sections = Array.from(
                document.querySelectorAll<HTMLElement>(
                    "#home, #about-us, #key-features, #faq"
                )
            );

            const visibleSections = sections.filter(
                (section) =>
                    section.getBoundingClientRect().top <=
                    window.innerHeight * 0.45
            );

            const currentSection = visibleSections[visibleSections.length - 1];

            setActiveSection(currentSection?.id ?? "home");
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - previousScrollY.current;

            updateActiveSection();

            if (currentScrollY <= 80) {
                setIsHidden(false);
                previousScrollY.current = currentScrollY;
                return;
            }

            if (scrollDifference > 6) {
                setIsHidden(true);
                previousScrollY.current = currentScrollY;
            } else if (scrollDifference < -6) {
                setIsHidden(false);
                previousScrollY.current = currentScrollY;
            }
        };

        updateActiveSection();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        setIsHidden(false);

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMenuOpen]);

    return (
        <div
            className={`navbar-container${isHidden ? " navbar-hidden" : ""}${isMenuOpen ? " menu-open" : ""}`}
        >
            {/* Progressive Blur */}
            <div className="blur-bg-nav">
                <div className="blur-section blur-section-top">
                    <BlurLayers />
                </div>

                <div className="blur-section blur-section-bottom">
                    <BlurLayers />
                </div>
            </div>

            <div className="navbar-inner">
                <div className="nav-logo-container">
                    <img src="/moose-logo-with-text.png" alt="Moose" />
                </div>

                <button
                    type="button"
                    className={`mobile-menu-toggle${isMenuOpen ? " open" : ""}`}
                    aria-label={
                        isMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav
                    className={`nav-links-bar${isMenuOpen ? " menu-open" : ""}`}
                    aria-label="Main navigation"
                >
                    <a
                        href="#home"
                        aria-label="Home"
                        onClick={() => setIsMenuOpen(false)}
                        className={`link link-1${activeSection === "home" ? " active" : ""}`}
                    >
                        <span className={`dot${activeSection === "home" ? " active" : ""}`}>
                            •
                        </span>
                        <AnimatedNavText text="Home" />
                        <div className="nav-link-text-replace">Home</div>
                    </a>

                    <a
                        href="#about-us"
                        aria-label="About Us"
                        onClick={() => setIsMenuOpen(false)}
                        className={`link link-1${activeSection === "about-us" ? " active" : ""}`}
                    >
                        <span className={`dot${activeSection === "about-us" ? " active" : ""}`}>
                            •
                        </span>
                        <AnimatedNavText text="About Us" />
                        <div className="nav-link-text-replace">About Us</div>
                    </a>

                    <a
                        href="#key-features"
                        aria-label="Key Features"
                        onClick={() => setIsMenuOpen(false)}
                        className={`link link-1${activeSection === "key-features" ? " active" : ""}`}
                    >
                        <span className={`dot${activeSection === "key-features" ? " active" : ""}`}>
                            •
                        </span>
                        <AnimatedNavText text="Key Features" />
                        <div className="nav-link-text-replace">Key Features</div>
                    </a>

                    <a
                        href="#faq"
                        aria-label="FAQ"
                        onClick={() => setIsMenuOpen(false)}
                        className={`link link-1${activeSection === "faq" ? " active" : ""}`}
                    >
                        <span className={`dot${activeSection === "faq" ? " active" : ""}`}>
                            •
                        </span>
                        <AnimatedNavText text="FAQ" />
                        <div className="nav-link-text-replace">FAQ</div>
                    </a>

                    <div className="nav-download-btn-mobile">
                        <DownloadBtnBlack />
                    </div>
                </nav>

                <div className="nav-download-btn">
                    <DownloadBtnBlack />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
