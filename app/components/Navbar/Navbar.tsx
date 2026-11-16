import Image from "next/image";
import "./Navbar.css"

import Link from "next/link";

import DownloadBtnBlack from "@/app/components/DownloadBtnBlack";

function Navbar () {
    return (
        <nav className="navbar-container">
            <div>
                <Image src="/moose-logo-with-text.png" alt="Moose" width={179} height={59} />
            </div>

            <div className="link-container-navbar">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/" className="nav-link">About Us</Link>
                <Link href="/" className="nav-link">Key Features</Link>
                <Link href="/" className="nav-link">FAQ</Link>
            </div>


            <DownloadBtnBlack/>
        </nav>
    )
}

export default Navbar;