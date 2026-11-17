import {MdArrowOutward} from "react-icons/md";

type DownloadNowBtnWithArrowProps = {
    color: string;
};

function DownloadNowBtnWithArrow ({color} : DownloadNowBtnWithArrowProps) {

    const style = {
        downloadButton: {
            width: "min(31.852vh, 17.917vw)",
            backgroundColor: color,
            borderRadius: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },

        downloadText: {
            backgroundColor: color,
            border: "none",
            fontSize: "min(2.469vh, 1.389vw)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            borderRadius: "100px",
            fontWeight: "bold",
        },

        blackCircle: {
            backgroundColor: "black",
            color: "#00d776",
            borderRadius: "100px",
            display: "flex",
            height: "min(7.408vh, 4.167vw)",
            width: "min(7.408vh, 4.167vw)",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
        },
    };

    return (
        <div style={style.downloadButton}>
            <button style={style.downloadText}>Download Now</button>
            <button style={style.blackCircle}><MdArrowOutward size={45}/></button>
        </div>
    )
}

export default DownloadNowBtnWithArrow