import "./BenefitsSection.css"

import GreenTag from "@/app/components/GreenTag";

function BenefitsSection() {
    return (
        <div className="benefits-section section">
            <GreenTag imgIcon="green-star" text="Benefits"
                      title1="Experience " title2=" Future of Social Media" flex=""/>
        </div>
    )
}

export default BenefitsSection