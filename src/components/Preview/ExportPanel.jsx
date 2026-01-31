import { useState } from 'react'
import { motion } from 'framer-motion'
import './ExportPanel.css'

function ExportPanel({ code }) {
    const [downloading, setDownloading] = useState(false)

    const handleDownloadHTML = () => {
        if (!code) return

        setDownloading(true)

        const blob = new Blob([code], { type: 'text/html' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'my-website.html'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)

        setTimeout(() => setDownloading(false), 1000)
    }

    const handleCopyAll = async () => {
        if (!code) return

        try {
            await navigator.clipboard.writeText(code)
            alert('Complete code copied to clipboard!')
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    const handleOpenInNewTab = () => {
        if (!code) return

        const blob = new Blob([code], { type: 'text/html' })
        const url = URL.createObjectURL(blob)
        window.open(url, '_blank')
    }

    return (
        <div className="export-panel">
            <div className="export-panel__content">
                <div className="export-panel__info">
                    <h3 className="export-panel__title">Export Your Website</h3>
                    <p className="export-panel__description">
                        Download, copy, or preview your generated website
                    </p>
                </div>

                <div className="export-panel__actions">
                    <motion.button
                        className="btn btn-primary export-panel__btn"
                        onClick={handleDownloadHTML}
                        disabled={downloading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {downloading ? (
                            <>
                                <span className="spinner"></span>
                                <span>Downloading...</span>
                            </>
                        ) : (
                            <>
                                <span>📥</span>
                                <span>Download HTML</span>
                            </>
                        )}
                    </motion.button>

                    <motion.button
                        className="btn btn-secondary export-panel__btn"
                        onClick={handleCopyAll}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>📋</span>
                        <span>Copy All Code</span>
                    </motion.button>

                    <motion.button
                        className="btn btn-secondary export-panel__btn"
                        onClick={handleOpenInNewTab}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>🔗</span>
                        <span>Open in New Tab</span>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default ExportPanel
