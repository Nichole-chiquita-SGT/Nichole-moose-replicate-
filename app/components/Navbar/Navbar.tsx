"use client";

import Image from "next/image";
import "./Navbar.css"

import Link from "next/link";
import { useState } from "react";

import DownloadBtnBlack from "@/app/components/DownloadBtnBlack";

function Navbar () {
    const [activeLink, setActiveLink] = useState("home");

    const navLinks = [
        { id: "home", label: "Home", href: "#home" },
        { id: "about-us", label: "About Us", href: "#about-us" },
        { id: "key-features", label: "Key Features", href: "#key-features" },
        { id: "faq", label: "FAQ", href: "#faq" },
    ];

    return (
        <nav className="navbar-container" aria-label="Main navigation">

            <Link href="#home" className="navbar-brand" aria-label="Moose home" onClick={() => setActiveLink("home")}>
                <Image src="/moose-logo-with-text.png" alt="Moose" width={303} height={100} className="moose-logo-nav" priority />
            </Link>

            <div className="link-container-navbar">
                {navLinks.map(({ id, label, href }) => (
                    <Link
                        key={id}
                        href={href}
                        className={`nav-link${activeLink === id ? " is-current" : ""}`}
                        aria-current={activeLink === id ? "page" : undefined}
                        onClick={() => setActiveLink(id)}
                    >
                        {label}
                    </Link>
                ))}
            </div>


            <DownloadBtnBlack/>
        </nav>
    )
}

export default Navbar;
