
import AnimatedDownloadText from "@/app/components/AnimatedDownloadText";

function DownloadBtnBlack () {

    const style = {
        alignItems: "center",
        backgroundColor: 'black',
        color: "#00d776",
        border: 'none',
        borderRadius: '100px',
        display: "flex",
        height: "min(5.186vh, 2.917vw)",
        fontSize: "min(1.975vh, 1.111vw)",
        justifyContent: "center",
        padding: '0 1vw',
        letterSpacing: '1px',
        textDecoration: "none",
    }

    return (
        <a
            aria-label="Download Now"
            style={style}
            className="download-now-btn"
            rel="noreferrer"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id&pli=1"
        >
            <AnimatedDownloadText text="Download Now" />
        </a>
    )
}

export default DownloadBtnBlack
