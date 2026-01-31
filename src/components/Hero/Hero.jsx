import { useState } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'
import PromptInput from '../Builder/PromptInput'
import TemplateCards from '../Builder/TemplateCards'
import './Hero.css'

function Hero({ onGenerate, isGenerating, setIsGenerating }) {
    const [prompt, setPrompt] = useState('')

    return (
        <section className="hero">
            <ParticleBackground />

            <div className="hero__glow hero__glow--1"></div>
            <div className="hero__glow hero__glow--2"></div>
            <div className="hero__glow hero__glow--3"></div>

            <div className="hero__container container">
                <motion.div
                    className="hero__content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="hero__badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="hero__badge-icon">🚀</span>
                        <span>Powered by Gemini AI</span>
                    </motion.div>

                    <motion.h1
                        className="hero__title heading-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Build Stunning Websites
                        <br />
                        <span className="text-gradient">With Just Words</span>
                    </motion.h1>

                    <motion.p
                        className="hero__description text-lg text-muted"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Describe your dream website, and watch AI transform your ideas into
                        beautiful, responsive code in seconds. No coding required.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <PromptInput
                            prompt={prompt}
                            setPrompt={setPrompt}
                            onGenerate={onGenerate}
                            isGenerating={isGenerating}
                            setIsGenerating={setIsGenerating}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <TemplateCards setPrompt={setPrompt} />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero__scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <span>Scroll to explore</span>
                    <div className="hero__scroll-arrow">↓</div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
