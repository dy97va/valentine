import { FiDownload, FiSearch } from "react-icons/fi";
import "./Resume.css"

export const Resume = () => {
    const cvUrl = "/assets/cv.pdf"

    const previewCV = () => {
        window.open(cvUrl, "_blank")
    }
    const downloadCV = () => {
        const downloadLink = document.createElement("a")
        downloadLink.href = cvUrl
        downloadLink.download = "Valentin Dyrda CV.pdf"
        downloadLink.click()
    }

    return (
        <div className="cv-buttons">
            <button className="cv-button" onClick={previewCV}> <div className="button-icon"> <FiSearch/></div> <p className="button-text"> Preview my CV </p></button>
            <button className="cv-button" onClick={downloadCV}> <div className="button-icon"> <FiDownload/></div> <p className="button-text"> Download my CV </p></button>
        </div>
    )
}