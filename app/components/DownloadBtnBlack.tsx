
function DownloadBtnBlack () {

    const style = {
        backgroundColor: 'black',
        color: "#00d776",
        border: 'none',
        borderRadius: '100px',
        height: "min(5.186vh, 2.917vw)",
        fontSize: "min(1.975vh, 1.111vw)",
        padding: '0 1vw',
        letterSpacing: '1px',
    }

    return (
        <button style={style} className="download-now-btn">
            <a style={{color: "var(--main-color)", listStyle: "none", textDecoration: "none"}} target="_blank" href="https://play.google.com/store/apps/details?id=com.moose_social&hl=id&pli=1"> Download Now</a>
        </button>
    )
}

export default DownloadBtnBlack