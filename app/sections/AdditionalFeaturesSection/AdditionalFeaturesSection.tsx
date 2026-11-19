import "./AdditionalFeaturesSection.css"

function AdditionalFeaturesSection() {
    return (
        <section className="additionalFeatures-section section-additional-features">
            <div className="additionalFeatures-content-container">
                <div className="title-additional-features">
                    <span>...and </span>
                    <span>more </span>
                    <span>additional </span>
                    <span>features</span>
                </div>

                <div className="card-container-additional-features">
                    <div className="card-1-additional-features card-additional-features">
                        <div className="img-container">
                            <img src="/additional-features/conversation.png"/>
                        </div>

                        <div className="text-container-additional-features">
                            <div className="title-card-additional-features">
                                Real Conversations
                            </div>
                            <div className="des-card-additional-features">
                                Chat instantly with real people — no bots,
                                <br/>
                                no fake accounts.
                            </div>
                        </div>
                    </div>
                    <div className="card-2-additional-features card-additional-features">
                        <div className="img-container">
                            <img src="/additional-features/save-always-there.png"/>
                        </div>

                        <div className="text-container-additional-features">
                            <div className="title-card-additional-features">
                                Safe & Always There
                            </div>
                            <div className="des-card-additional-features">
                                Your moments are securely stored and always within reach.
                            </div>
                        </div>
                    </div>
                    <div className="card-3-additional-features card-additional-features">
                        <div className="img-container">
                            <img src="/additional-features/shild.png"/>
                        </div>

                        <div className="text-container-additional-features">
                            <div className="title-card-additional-features">
                                Built on Trust
                            </div>
                            <div className="des-card-additional-features">
                                Advanced protection keeps fake profiles and content out.
                            </div>
                        </div>
                    </div>
                    <div className="card-4-additional-features card-additional-features">
                        <div className="img-container">
                            <img src="/additional-features/verified.png"/>
                        </div>

                        <div className="text-container-additional-features">
                            <div className="title-card-additional-features">
                                Verified, For Real
                            </div>
                            <div className="des-card-additional-features">
                                Every user is verified, so you know who you’re connecting with.
                            </div>
                        </div>
                    </div>
                    <div className="card-5-additional-features card-additional-features">
                        <div className="img-container">
                            <img src="/additional-features/real-people-location.png"/>
                        </div>

                        <div className="text-container-additional-features">
                            <div className="title-card-additional-features">
                                Real People Nearby
                            </div>
                            <div className="des-card-additional-features">
                                Discover and connect with people around you, effortlessly.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="phone-container-additional-feature">
                    <div className="variety-text">
                        VARIETY
                    </div>
                    <div className="features-text">
                        FEATURES
                    </div>
                    <img src="/additional-features/phone-moose.png" className="phone-additional-features"/>
                </div>
            </div>
        </section>
    )
}

export default AdditionalFeaturesSection
