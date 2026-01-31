import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './LivePreview.css'

function LivePreview({ code, deviceView }) {
    const iframeRef = useRef(null)

    useEffect(() => {
        if (iframeRef.current && code) {
            const iframe = iframeRef.current
            const doc = iframe.contentDocument || iframe.contentWindow.document

            doc.open()
            doc.write(code)
            doc.close()
        }
    }, [code])

    const getDeviceClass = () => {
        switch (deviceView) {
            case 'tablet':
                return 'live-preview--tablet'
            case 'mobile':
                return 'live-preview--mobile'
            default:
                return 'live-preview--desktop'
        }
    }

    return (
        <motion.div
            className={`live-preview ${getDeviceClass()}`}
            layout
            transition={{ duration: 0.3 }}
        >
            <div className="live-preview__device-frame">
                {deviceView !== 'desktop' && (
                    <div className="live-preview__notch"></div>
                )}
                <iframe
                    ref={iframeRef}
                    className="live-preview__iframe"
                    title="Website Preview"
                    sandbox="allow-scripts allow-same-origin"
                />
            </div>
        </motion.div>
    )
}

export default LivePreview
