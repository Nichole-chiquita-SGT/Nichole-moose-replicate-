import "./KeyFeatures.css"
import GreenTag from "@/app/components/GreenTag";

function KeyFeatures ({ id }: { id?: string }) {
    return (
        <section id={id}  className="key-features-root section section-key-features">
            <GreenTag
                imgIcon="green-croun"
                text="Key Features"
                title1="Build for Real."
                title2="Designed for you."
                flex="" />

            <div className="key-features-grid-container">
                <div className="card-1-key-features card-key-features">
                    <img src="/key-features-grid/grid1/grid-1-bg.png" className="card-bg"/>
                    <div className="card-content">
                        <img src="/key-features-grid/grid1/line-icons.png" className="line-for-icon"/>

                        <div className="icons-container"><div/>
                            <div className="icons-content">
                                <img className="icon-1 icon" src="/key-features-grid/grid1/icon-1.png"/>
                                <img className="icon-2 icon" src="/key-features-grid/grid1/icon-2.png"/>
                                <img className="icon-3 icon" src="/key-features-grid/grid1/icon-3.png"/>
                                <img className="icon-4 icon" src="/key-features-grid/grid1/icon-4.png"/>
                                <img className="icon-5 icon" src="/key-features-grid/grid1/icon-5.png"/>
                                <img className="icon-6 icon" src="/key-features-grid/grid1/icon-6.png"/>
                            </div>
                        </div>

                        <div className="center-img-content">
                            <img src="/key-features-grid/grid1/grid-1-image.png"/>
                        </div>

                        <div className="text-container-key-features">
                            <div className="title-card-key-features ">
                                Trust What You See
                            </div>
                            <div className="des-card-key-features">
                                No fake profiles, no misleading content — just real people and real moments.
                                Moose ensures everything you see is authentic, so you can scroll and connect
                                without second guessing.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-2-key-features card-key-features">
                    <img src="/key-features-grid/grid2/grid-2-bg.png" className="card-bg"/>
                    <div className="card-content">
                        <div className="image-stack-container image-stack-container1">
                            <img className="image-1" src="/key-features-grid/grid2/grid-2-img.png"/>
                        </div>
                        <div className="image-stack-container image-stack-container2">
                            <img className="image-2" src="/key-features-grid/grid2/grid-2-img2.png"/>

                        </div>
                        <div className="image-stack-container image-stack-container3">
                            <img className="image-3" src="/key-features-grid/grid2/grid-2-img3.png"/>
                        </div>
                        <div className="text-container-key-features">
                            <div className="title-card-key-features">
                                Be Yourself, Without Pressure
                            </div>
                            <div className="des-card-key-features">
                                Forget the need to be perfect. Share your life as it is — unfiltered, unedited,
                                and real, in a space where authenticity matters more than appearance.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-3 card-key-features">
                    <img src="/key-features-grid/grid3/grid-3-bg.png" className="card-bg"/>
                    <div className="card-content">
                        <div className="image-stack-container image-stack-container1">
                            <img src="/key-features-grid/grid3/grid-3-notification.png" className="image-1"/>
                        </div>
                        <div className="image-stack-container image-stack-container2" >
                            <img src="/key-features-grid/grid3/grid-3-phone.png" className="image-2"/>
                        </div>

                        <div className="text-container-key-features">
                            <div>
                                <div className="title-card-key-features">
                                    Connect for Real
                                </div>
                                <div className="des-card-key-features">
                                    Go beyond likes and curated personas. Connect with real people and build
                                    genuine relationships based on trust, not illusion.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-4 card-key-features">
                    <img src="/key-features-grid/grid4/grid-4-bg.png" className="card-bg"/>
                    <div className="card-content">
                        <div className="image-stack-container">
                            <img src="/key-features-grid/grid4/logo-moose-hd.png"/>
                        </div>

                        <div className="text-container-key-features">
                            <div className="title-key-features">
                                Get the app
                            </div>
                            <button className="download-now-btn-key-features">
                                Download Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyFeatures;
