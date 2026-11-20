"use client"

import "./FAQSection.css"
import GreenTag from "@/app/components/GreenTag";

import {useState} from "react";

function FAQSection ({ id }: { id?: string }) {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const questionData = [
        {
            question: "What makes MOOSE different from other social media apps?",
            answer: "MOOSE focuses on authenticity, allowing users to share genuine content without editing or filters. Our community values real connections and genuine interactions."
        },
        {
            question: "How does MOOSE ensure security and prevent fake accounts?",
            answer: "MOOSE uses facial recognition, device ID, and location verification during registration. This strict process ensures a trustworthy community where everyone is real."
        },
        {
            question: "Can I edit my posts after sharing?",
            answer: "You can edit captions and add additional context, but the original photos and videos remain unedited, preserving the authenticity of the content."
        },
        {
            question: "What if I need help or have technical issues?",
            answer: "Our customer support team is available 24/7 to assist you with any issues or questions you might have. Contact us through the app or on our website."
        },
        {
            question: "Is MOOSE free to use?",
            answer: "Yes, MOOSE is free to download and use. We offer additional premium features for a fee, but the basic functionality is always free."
        },
        {
            question: "How does MOOSE stand out among social media platforms?",
            answer: "MOOSE is dedicated to authenticity. Our no-fake content policy, comprehensive security measures, and unique features like location-based dating ensure a genuine experience."
        },
        {
            question: "Can I form or join groups on MOOSE?",
            answer: "Yes! MOOSE allows you to create or join group chats, making it easy to connect with others based on shared interests or locations."
        },
        {
            question: "What if I need help using the app?",
            answer: "Our dedicated customer support team is always here to assist you. Reach out via the app or on our website for any help you need."
        }
    ]
    return (
        <section id={id}  className="FAQ-section section section-faq">
            <GreenTag
                imgIcon="green-question-mark"
                text="FAQ"
                title1="Frequently Asked"
                title2="Questions"
                flex="row"
            />

            <div className="questions-box-container">
                {questionData.map((question, index) => (
                    <div key={index} className={activeQuestion === index ? "question-box active" : "question-box"}>
                        <div onClick={() => setActiveQuestion(activeQuestion === index ? null : index)} className="question-section">
                            <p >{question.question}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"
                                 role="button"
                                 aria-expanded={activeQuestion === index}
                                 aria-label={`Toggle answer: ${question.question}`}
                            >
                                <path fill="currentColor" d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512 340.864 831.872a30.59 30.59 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
                            </svg>
                        </div>

                        <div className="collapse-item">
                            <div>
                                <img src="/green-line.png"/>
                            </div>
                            <p className="answer">
                                {question.answer}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default FAQSection
