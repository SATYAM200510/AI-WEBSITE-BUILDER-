import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import { extractCodeParts } from '../../services/gemini'
import './CodeDisplay.css'

function CodeDisplay({ code }) {
    const [activeTab, setActiveTab] = useState('html')
    const [copied, setCopied] = useState(false)
    const [codeParts, setCodeParts] = useState({ html: '', css: '', js: '' })

    useEffect(() => {
        if (code) {
            const parts = extractCodeParts(code)
            setCodeParts({
                html: code,
                css: parts.css || '/* No separate CSS found */',
                js: parts.js || '// No JavaScript found'
            })
        }
    }, [code])

    useEffect(() => {
        Prism.highlightAll()
    }, [codeParts, activeTab])

    const handleCopy = async () => {
        const textToCopy = activeTab === 'html' ? codeParts.html :
            activeTab === 'css' ? codeParts.css : codeParts.js

        try {
            await navigator.clipboard.writeText(textToCopy)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }

    const getLanguage = () => {
        switch (activeTab) {
            case 'css': return 'css'
            case 'js': return 'javascript'
            default: return 'markup'
        }
    }

    const getCurrentCode = () => {
        switch (activeTab) {
            case 'css': return codeParts.css
            case 'js': return codeParts.js
            default: return codeParts.html
        }
    }

    return (
        <div className="code-display">
            <div className="code-display__header">
                <div className="code-display__tabs">
                    <button
                        className={`code-display__tab ${activeTab === 'html' ? 'code-display__tab--active' : ''}`}
                        onClick={() => setActiveTab('html')}
                    >
                        HTML
                    </button>
                    <button
                        className={`code-display__tab ${activeTab === 'css' ? 'code-display__tab--active' : ''}`}
                        onClick={() => setActiveTab('css')}
                    >
                        CSS
                    </button>
                    <button
                        className={`code-display__tab ${activeTab === 'js' ? 'code-display__tab--active' : ''}`}
                        onClick={() => setActiveTab('js')}
                    >
                        JavaScript
                    </button>
                </div>

                <motion.button
                    className="code-display__copy-btn"
                    onClick={handleCopy}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {copied ? '✅ Copied!' : '📋 Copy Code'}
                </motion.button>
            </div>

            <div className="code-display__content">
                <pre className="code-display__pre">
                    <code className={`language-${getLanguage()}`}>
                        {getCurrentCode()}
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default CodeDisplay
