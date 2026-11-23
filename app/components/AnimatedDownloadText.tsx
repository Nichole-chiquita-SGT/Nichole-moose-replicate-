function AnimatedDownloadText({ text }: { text: string }) {
    return (
        <span className="download-button-text" aria-hidden="true">
            {Array.from(text).map((letter, index) => {
                const visibleLetter = letter === " " ? "\u00a0" : letter;

                return (
                    <span
                        className="download-button-letter"
                        key={`${letter}-${index}`}
                        style={{ transitionDelay: `${index * 25}ms` }}
                    >
                        <span>{visibleLetter}</span>
                        <span>{visibleLetter}</span>
                    </span>
                );
            })}
        </span>
    );
}

export default AnimatedDownloadText;
