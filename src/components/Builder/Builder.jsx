import { useState } from 'react'
import { motion } from 'framer-motion'
import LivePreview from '../Preview/LivePreview'
import CodeDisplay from '../Preview/CodeDisplay'
import ExportPanel from '../Preview/ExportPanel'
import PromptInput from './PromptInput'
import './Builder.css'

function Builder({ generatedCode, onBack, onRegenerate, isGenerating, setIsGenerating }) {
    const [activeTab, setActiveTab] = useState('preview')
    const [deviceView, setDeviceView] = useState('desktop')
    const [prompt, setPrompt] = useState('')

    return (
        <motion.section
            className="builder"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            <div className="builder__container container">
                {/* Header Controls */}
                <div className="builder__header">
                    <motion.button
                        className="builder__back-btn"
                        onClick={onBack}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        ← Back to Home
                    </motion.button>

                    <div className="builder__tabs">
                        <button
                            className={`builder__tab ${activeTab === 'preview' ? 'builder__tab--active' : ''}`}
                            onClick={() => setActiveTab('preview')}
                        >
                            👁️ Preview
                        </button>
                        <button
                            className={`builder__tab ${activeTab === 'code' ? 'builder__tab--active' : ''}`}
                            onClick={() => setActiveTab('code')}
                        >
                            💻 Code
                        </button>
                    </div>

                    {activeTab === 'preview' && (
                        <div className="builder__device-toggle">
                            <button
                                className={`builder__device-btn ${deviceView === 'desktop' ? 'builder__device-btn--active' : ''}`}
                                onClick={() => setDeviceView('desktop')}
                                title="Desktop view"
                            >
                                🖥️
                            </button>
                            <button
                                className={`builder__device-btn ${deviceView === 'tablet' ? 'builder__device-btn--active' : ''}`}
                                onClick={() => setDeviceView('tablet')}
                                title="Tablet view"
                            >
                                📱
                            </button>
                            <button
                                className={`builder__device-btn ${deviceView === 'mobile' ? 'builder__device-btn--active' : ''}`}
                                onClick={() => setDeviceView('mobile')}
                                title="Mobile view"
                            >
                                📲
                            </button>
                        </div>
                    )}
                </div>

                {/* Main Content */}
                <div className="builder__content">
                    {activeTab === 'preview' ? (
                        <LivePreview code={generatedCode} deviceView={deviceView} />
                    ) : (
                        <CodeDisplay code={generatedCode} />
                    )}
                </div>

                {/* Export Panel */}
                <ExportPanel code={generatedCode} />

                {/* Regenerate Section */}
                <div className="builder__regenerate">
                    <h3 className="builder__regenerate-title">Want something different?</h3>
                    <PromptInput
                        prompt={prompt}
                        setPrompt={setPrompt}
                        onGenerate={onRegenerate}
                        isGenerating={isGenerating}
                        setIsGenerating={setIsGenerating}
                    />
                </div>
            </div>
        </motion.section>
    )
}

export default Builder
