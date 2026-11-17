import "./HomeSection.css"
import Image from "next/image";

import BlackGreenBoxInfo from "@/app/sections/BlackGreenBoxInfo/BlackGreenBoxInfo";
import DownloadNowBtnWithArrow from "@/app/components/DownloadNowBtnWithArrow";

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

                        <DownloadNowBtnWithArrow color="#F5F5F5"/>
                    </div>

                    <div className="right-side">
                        <p>Discover the <br/>Sosial Media Ap That<br/> Values Authenticity</p>
                    </div>
                </div>


                <div className="black-green-box-outer">
                    <BlackGreenBoxInfo/>
                </div>
            </div>
        </section>
    )
}

export default HomeSection