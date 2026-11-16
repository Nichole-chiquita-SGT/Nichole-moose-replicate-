import "./HomeSection.css"
import Image from "next/image";

import { MdArrowOutward } from "react-icons/md";

import BlackGreenBoxInfo from "@/app/sections/BlackGreenBoxInfo/BlackGreenBoxInfo";

function HomeSection () {
    return (
        <section className="home-section section">

            <div className="home-sections-phone-container">
                <Image src="/phone-home-section.png" alt="phone-with-moose-app" width={650} height={650} className="home-sectios-phone"/>
            </div>

            <div className="home-sections-contents">
                <div className="home-section-texts">
                    <div className="left-side">
                        <p>Start sharing
                            <br/>
                            real moments
                            <br/>
                            <span>
                            <span className="line"></span>
                            With Moose
                        </span>
                        </p>

                        <div className="download-now-button-home">
                            <button className="download-now-text-btn">Download Now</button>
                            <button className="black-circle-btn"><MdArrowOutward size={45}/></button>
                        </div>
                    </div>

                    <div className="right-side">
                        <p>Discover the <br/>Sosial Media Ap That<br/> Values Authenticity</p>
                    </div>
                </div>


                <BlackGreenBoxInfo/>
            </div>
        </section>
    )
}

export default HomeSection