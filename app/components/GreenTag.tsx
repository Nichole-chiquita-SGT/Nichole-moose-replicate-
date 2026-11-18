type GreenTagProps = {
    imgIcon: any,
    text: string,
    title1: string,
    title2: string,
    flex: string
}

// style di global

function GreenTag({imgIcon, text, title1, title2, flex} : GreenTagProps) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="tag-key-features">
                <div>
                    <img src={`/green-tag/${imgIcon}.png`}/>
                </div>
                <p>{text}</p>
            </div>

            <div className="text-content-container-key-features" style={flex ? {flexDirection: flex, gap:"15px"} : {}}>
                <p>{title1}</p>
                <p>{title2}</p>
            </div>
        </div>
    )
}

export default GreenTag;