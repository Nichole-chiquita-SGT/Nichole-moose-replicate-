import "./BenefitsSection.css"

import GreenTag from "@/app/components/GreenTag";

function BenefitsSection() {
    return (
        <section className="benefits-section section-benefits">
            <div className="benefits-content">
                <GreenTag imgIcon="green-star" text="Benefits"
                          title1="Experience " title2=" Future of Social Media" flex=""/>

                <div className="card-container-benefits">
                    <div className="benefits-card benefits-card-1">
                        <img src="/"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection