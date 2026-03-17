import resumeUrl from '../assets/Vishnu Muthyalu - Complete Resume.pdf'

function ResumeModal({ onClose }) {
  return (
    <div className="resume-overlay" onClick={onClose}>
      <div className="resume-modal" onClick={e => e.stopPropagation()}>
        <div className="resume-modal-header">
          <span className="resume-modal-title">Vishnu Muthyalu — Complete Resume</span>
          <div className="resume-modal-actions">
            <a
              href={resumeUrl}
              download="Vishnu_Muthyalu_Resume.pdf"
              className="resume-download-btn"
            >
              ↓ Download
            </a>
            <button
              className="resume-close-btn"
              onClick={onClose}
              aria-label="Close resume"
            >
              ✕
            </button>
          </div>
        </div>
        <iframe
          src={resumeUrl}
          title="Vishnu Muthyalu Resume"
          className="resume-iframe"
        />
      </div>
    </div>
  )
}

export default ResumeModal
