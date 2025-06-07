const ResumeButton = () => {
    return (
        <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-80 md:h-16 w-60 h-12 mx-auto md:mx-0 mt-8 md:mt-6 cta-wrapper"
        >
            <div className="cta-button group">
                <div className="bg-circle"/>
                <p className="text">Resume</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow"/>
                </div>
            </div>
        </a>
    )
}
export default ResumeButton
