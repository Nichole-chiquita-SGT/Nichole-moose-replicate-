import "./FAQSection.css"
import GreenTag from "@/app/components/GreenTag";

function FAQSection () {
    return (
        <section className="FAQ-section section">
            <GreenTag
                imgIcon="green-question-mark"
                text="FAQ"
                title1="Frequently Asked"
                title2="Questions"
                flex="row"
            />

            <div className="questions-box-container">
                <div className="question-box">
                    <div className="question-section">
                        <p>What makes MOOSE different from other social media apps?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                            <path fill="currentColor" d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512 340.864 831.872a30.59 30.59 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
                        </svg>
                    </div>
                    <img src="/green-line.png"/>
                    <p className="answer">
                        MOOSE focuses on authenticity, allowing users to share genuine content without editing or filters. Our community values real connections and genuine interactions.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FAQSection