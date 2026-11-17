import "./KeyFeatures.css"

function KeyFeatures () {
    return (
        <section id="key-features" className="section-key-features section">
            <div className="tag-key-features">
                <div>
                    <img src="/green-croun.png"/>
                </div>
                <p>Key Features</p>
            </div>
            <div className="text-content-container-key-features">
                <p>Build for Real.</p>
                <p>Designed for You.</p>
            </div>
            <div className="key-features-grid-container">
                <div className="grid grid-1">
                    <img src="/key-features-grid/grid1/grid-1-bg.png"/>

                    <div className="grid-content  content-1">
                        <img src="/key-features-grid/grid1/grid-1-image.png"/>

                        <div className="grid-text-content">
                            <p>Trust What You See</p>
                            <p>No fake profiles, no misleading content — just real people and real moments. Moose ensures everything you see is authentic, so you can scroll and connect without second guessing.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-2">
                    <img src="/key-features-grid/grid2/grid-2-bg.png"/>

                    <div className="grid-content  content-2">
                        <div className="grid-text-content">
                            <p>Be Yourself, Without Pressure</p>
                            <p>Forget the need to be perfect. Share your life as it is — unfiltered, unedited, and real, in a space where authenticity matters more than appearance.</p>
                        </div>

                        <div className="grid-2-image-stack">
                            <div className="image-1">
                                <img  src="/key-features-grid/grid2/grid-2-img.png"/>
                            </div>
                            <div className="image-2">
                                <img  src="/key-features-grid/grid2/grid-2-img2.png"/>
                            </div>
                            <div className="image-3">
                                <img  src="/key-features-grid/grid2/grid-2-img3.png"/>
                            </div>
                        </div>
                    </div>



                </div>


                <div className="grid grid-3">
                    <img src="/key-features-grid/grid3/grid-3-bg.png"/>
                </div>

                <div className="grid grid-4">
                    <img src="/key-features-grid/grid4/grid-4-bg.png"/>
                </div>

            </div>
        </section>
    )
}

export default KeyFeatures;
