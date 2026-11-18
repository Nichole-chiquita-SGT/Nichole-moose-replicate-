import "./AdditionalFeaturesSection.css"

function AdditionalFeaturesSection() {
    return (
        <section className="additionalFeatures-section section">
            <div className="additional-features-title">
                <span>...and </span>
                <span>more </span>
                <span>additional </span>
                <span>features</span>
            </div>

            <div className="card-container">
                <div className="card-1 card">
                    <div>
                        <img src="/additional-features/conversation.png"/>
                    </div>
                    <div className="text-con">
                        <p>Real Conversations</p>
                        <p>Chat instantly with real people — no bots, <br/> no fake accounts.</p>
                    </div>
                </div>
                <div className="card-2 card">
                    <div>
                        <img src="/additional-features/save-always-there.png"/>
                    </div>
                    <div className="text-con">
                        <p>Safe & Always There</p>
                        <p>Your moments are securely stored and always within reach.</p>
                    </div>
                </div>
                <div className="card-3 card">
                    <div>
                        <img src="/additional-features/shild.png"/>
                    </div>
                    <div className="text-con">
                        <p>Built on Trust</p>
                        <p>Advanced protection keeps fake profiles and content out.</p>
                    </div>
                </div>
                <div className="card-4 card">
                    <div>
                        <img src="/additional-features/verified.png"/>
                    </div>
                    <div className="text-con">
                        <p>Verified, For Real</p>
                        <p>Every user is verified, so you know who you’re connecting with.</p>
                    </div>
                </div>
                <div className="card-5 card">
                    <div>
                        <img src="/additional-features/real-people-location.png"/>
                    </div>
                    <div className="text-con">
                        <p>Real People Nearby</p>
                        <p>Discover and connect with people around you, effortlessly.</p>
                    </div>
                </div>
            </div>

            <div className="additional-features-phone-container">
                <div className="phone-text-con">
                    <div className="variety-text">
                        VARIETY
                    </div>
                    <div className="features-text">
                        FEATURES
                    </div>
                </div>

                <div className="additional-features-phone">
                    <img src="/additional-features/phone-moose.png"/>
                </div>


            </div>
        </section>
    )
}

export default AdditionalFeaturesSection