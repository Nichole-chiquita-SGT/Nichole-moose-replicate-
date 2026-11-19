import "./CTASection.css"

function AboutUsSection(){
    return (
        <section className="CTA-section section-cta">
            <div className="cta-bg-container">
                <img src="/bg-cta.png"/>
            </div>

            <div className="content-cta">
                <div className="cta-title">
                    <span>Your </span>
                    <span>First </span>
                    <span>Step </span>
                    <span>To </span>
                    <span>Create</span>

                    <br/>

                    <span className="green-line">Content </span>
                    <span className="green-line">That</span>
                    <br/>
                    <span className="green-line">Values </span>
                    <span className="green-line">Authenticity</span>
                </div>

               <div className="cta-white-line">
                   <img src="/white-line.png"/>
               </div>

                <div className="cta-des">
                    Express yourself honestly and connect through moments <br/>
                    that truly matter.
                </div>

                <div className="cta-google-play">
                    <img src="/google-play.png"/>
                </div>

                <div className="card-container-cta">
                    <div className="card-cta fade-mask card-1-cta">
                        <img src="/card-1-cta.png"/>
                    </div>
                    <div className="card-cta fade-mask card-2-cta">
                        <img src="/card-2-cta.png"/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutUsSection;