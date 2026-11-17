import "./BlackGreenBoxInfo.css"

function BlackGreenBoxInfo () {
    return (
        <div className="box-outer">

            <img src="/green-black-bg.png" alt="green and black bg" className="green-black-bg"/>

            <div className="text-content-container">
                <p className="moose-social-media-text">● MOOSE SOCIAL MEDIA</p>

                <div className="white-line-container">
                    <img src="/white-line.png"/>
                </div>

                <p>
                    Connect with Real People and Share Genuine <br/>Moments Without Filters or Editing Tools.
                </p>

                <div className="bottom-text side-border">
                    <p>Real</p>
                </div>
                <div className="bottom-text side-border">
                    <p>Unfiltered</p>
                </div>
                <div className="bottom-text side-border">
                    <p>Proven</p>
                </div>
                <div className="bottom-text side-border">
                    <p>Genuine</p>
                </div>
                <div className="bottom-text">
                    <p>Authentic</p>
                </div>
            </div>
        </div>
    )
}

export default BlackGreenBoxInfo;