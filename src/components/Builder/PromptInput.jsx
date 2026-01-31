import { useState } from 'react'
import { motion } from 'framer-motion'
import { generateWebsite } from '../../services/gemini'
import './PromptInput.css'

function PromptInput({ prompt, setPrompt, onGenerate, isGenerating, setIsGenerating }) {
    const [error, setError] = useState('')

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError('Please describe your website idea first!')
            return
        }

        if (prompt.trim().length < 20) {
            setError('Please provide more details about your website (at least 20 characters)')
            return
        }

        setError('')
        setIsGenerating(true)

        try {
            const generatedCode = await generateWebsite(prompt)
            onGenerate(generatedCode)
        } catch (err) {
            setError(err.message || 'Failed to generate website. Please try again.')
        } finally {
            setIsGenerating(false)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleGenerate()
        }
    }

    return (
        <div className="prompt-input">
            <div className="prompt-input__wrapper glass-card">
                <textarea
                    className="prompt-input__textarea"
                    placeholder="Describe your dream website... 

Example: 'Create a modern portfolio website with a dark theme, hero section with my name and title, a projects grid with hover effects, about section, and a contact form. Make it minimal and elegant with smooth animations.'"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isGenerating}
                />

                <div className="prompt-input__footer">
                    <div className="prompt-input__info">
                        <span className="prompt-input__char-count">
                            {prompt.length} characters
                        </span>
                        <span className="prompt-input__hint">
                            Ctrl + Enter to generate
                        </span>
                    </div>

                    <motion.button
                        className="btn btn-primary prompt-input__btn"
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isGenerating ? (
                            <>
                                <span className="spinner"></span>
                                <span>Generating...</span>
                            </>
                        ) : (
                            <>
                                <span>Generate Website</span>
                                <span className="prompt-input__btn-icon">✨</span>
                            </>
                        )}
                    </motion.button>
                </div>
            </div>

            {error && (
                <motion.div
                    className="prompt-input__error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    ⚠️ {error}
                </motion.div>
            )}
        </div>
    )
}

export default PromptInput
