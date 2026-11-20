import "./HomeSection.css"

import DownloadNowBtnWithArrow from "@/app/components/DownloadNowBtnWithArrow";

function HomeSection ({ id }: { id?: string }) {
    return (
        <section id={id}  className="home-section section section-home ">
            <div className="text-container-home">
                <div className="left-container">
                    <div className="left-text">
                        Start sharing
                        <br/>
                        real moments
                        <br/>
                        <span className="highlight">
                            <span className="gray-line"></span>
                            With Moose
                        </span>
                    </div>

                    <DownloadNowBtnWithArrow color="#F5F5F5"/>
                </div>

                <div className="image-container">
                    <img src="/phone-home-section.png"/>
                </div>

                <div className="right-container">
                    <div className="text-right">
                        Discover the
                        <br/>
                        Sosial Meida App That
                        <br/>
                        Values Authenticity
                    </div>
                </div>
            </div>

            <div className="green-black-container">
                <img src="/green-black-bg.png"/>

                <div className="green-black-text-container">
                    <div className="title-home">
                        <p>
                            <span>MOOSE SOCIAL MEDIA • </span>
                            <span>MOOSE SOCIAL MEDIA • </span>
                        </p>
                    </div>

                    <div className="home-white-line">
                        <img src="/home-white-line.png"/>
                    </div>

                    <div className="sub-title">
                        Connect with Real People and Share Genuine
                        <br/>
                        Moments Without Filtering or Editing Tools.
                    </div>

                    <div className="info-list">
                        <div className="list">
                            <p>Real</p>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="list">
                            <p>Unfiltered</p>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="list">
                            <p>Proven</p>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="list">
                            <p>Genuine</p>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="list">
                            <p>Authentic</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HomeSection
