
function DownloadBtnBlack () {

    const style = {
        backgroundColor: 'black',
        color: "#00d776",
        border: 'none',
        borderRadius: '100px',
        height: "min(5.186vh, 2.917vw)",
        fontSize: "min(1.975vh, 1.111vw)",
        padding: '0 1.5vw',
        letterSpacing: '1px',
    }

    return (
        <button style={style}>
            Download Now
        </button>
    )
}

export default DownloadBtnBlack