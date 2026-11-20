"use client";

import "./Navbar.css"
import DownloadBtnBlack from "@/app/components/DownloadBtnBlack";
import { useEffect, useRef, useState } from "react";

function Navbar () {
    const [isHidden, setIsHidden] = useState(false);
    const previousScrollY = useRef(0);

    useEffect(() => {
        previousScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - previousScrollY.current;

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

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar-container${isHidden ? " navbar-hidden" : ""}`}>
            <div className="blur-bg-nav">
                <div className="background">
                    <div className="bg bg-1"></div>
                    <div className="bg bg-2"></div>
                    <div className="bg bg-3"></div>
                    <div className="bg bg-4"></div>
                    <div className="bg bg-5"></div>
                    <div className="bg bg-6"></div>
                    <div className="bg bg-7"></div>
                    <div className="bg bg-8"></div>
                </div>
                <div className="background">
                    <div className="bg bg-1"></div>
                    <div className="bg bg-2"></div>
                    <div className="bg bg-3"></div>
                    <div className="bg bg-4"></div>
                    <div className="bg bg-5"></div>
                    <div className="bg bg-6"></div>
                    <div className="bg bg-7"></div>
                    <div className="bg bg-8"></div>
                </div>
            </div>

            <div className="navbar-inner">
                <div className="nav-logo-container">
                    <img src="/moose-logo-with-text.png"/>
                </div>

                <div className="nav-links-bar">
                    <a href="#home" className="link link-1">
                        <span className="dot ">•</span>
                        <div className="nav-link-text-con">
                            <span className="nav-text">Home</span>
                            <span className="nav-text">Home</span>
                        </div>
                        <div className="nav-link-text-replace">
                            Home
                        </div>
                    </a>

                    <a href="#about-us" className="link link-1">
                        <span className="dot">•</span>
                        <div className="nav-link-text-con">
                            <span className="nav-text">About Us</span>
                            <span className="nav-text">About Us</span>
                        </div>
                        <div className="nav-link-text-replace">
                            About Us
                        </div>
                    </a>

                    <a href="#key-features" className="link link-1">
                        <span className="dot">•</span>
                        <div className="nav-link-text-con">
                            <span className="nav-text">Key Features</span>
                            <span className="nav-text">Key Features</span>
                        </div>
                        <div className="nav-link-text-replace">
                            Key Features
                        </div>
                    </a>

                    <a href="#faq" className="link link-1">
                        <span className="dot">•</span>
                        <div className="nav-link-text-con">
                            <span className="nav-text">FAQ</span>
                            <span className="nav-text">FAQ</span>
                        </div>
                        <div className="nav-link-text-replace">
                            FAQ
                        </div>
                    </a>
                </div>

                <div className="nav-download-btn">
                    <DownloadBtnBlack/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
