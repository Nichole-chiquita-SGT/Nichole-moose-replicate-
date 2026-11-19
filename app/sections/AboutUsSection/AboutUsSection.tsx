import "./AboutUsSection.css"

import DownloadNowBtnWithArrow from "@/app/components/DownloadNowBtnWithArrow";

function AboutUsSection ({ id }: { id?: string }) {
    return (
        <section id={id} className="about-us-section section-about-us">
            <div className="bubble-images-outer">
                <div className="bubble-images-inner">
                    <div className="bubble-image bubble-yellow">
                        <img src="/about-us-section/message.png"/>
                    </div>
                    <div className="bubble-image bubble-orange">
                        <img src="/about-us-section/camera-vidio.png"/>
                    </div>
                    <div className="bubble-image bubble-green">
                        <img src="/about-us-section/phone-scan.png"/>
                    </div>
                    <div className="bubble-image bubble-blue">
                        <img src="/about-us-section/location-earth.png"/>
                    </div>
                </div>

                <div className="text-contents-container">
                    <div className="title-bold">
                        <span>The all-in-one social</span>
                        <span>platform built on</span>
                        <span>authenticity.</span>
                    </div>

                    <div className="subtext-container">
                        <div className="white-green-line-1"></div>
                        <p>Feel at ease with a social space you can trust.</p>
                        <div className="white-green-line-2"></div>
                    </div>

                    <DownloadNowBtnWithArrow color="#00D776" />
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection;
