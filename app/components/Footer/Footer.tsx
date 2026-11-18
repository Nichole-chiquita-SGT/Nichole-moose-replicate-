import "./Footer.css"
import DownloadBtnBlack from "@/app/components/DownloadBtnBlack";

function Footer() {
    return (
        <div className="footer-section section">
            <div className="line-con">
                <img src="/green-line.png"/>
            </div>

            <div className="footer-content">
                <p>© 2025 Copyright - Moose <br/>Designed by SGT</p>
                <DownloadBtnBlack/>
            </div>
        </div>
    )
}

export default Footer;