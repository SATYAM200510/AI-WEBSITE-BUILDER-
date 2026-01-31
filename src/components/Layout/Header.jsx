import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Header.css'

function Header({ onLogoClick }) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            className={`header ${scrolled ? 'header--scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="header__container container">
                <motion.button
                    className="header__logo"
                    onClick={onLogoClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="header__logo-icon">✨</span>
                    <span className="header__logo-text">
                        AI<span className="text-gradient">Builder</span>
                    </span>
                </motion.button>

                <nav className="header__nav">
                    <a href="#features" className="header__nav-link">Features</a>
                    <a href="#how-it-works" className="header__nav-link">How it Works</a>
                    <motion.a
                        href="https://aistudio.google.com/app/apikey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__nav-link header__nav-link--cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get API Key
                    </motion.a>
                </nav>
            </div>
        </motion.header>
    )
}

export default Header
