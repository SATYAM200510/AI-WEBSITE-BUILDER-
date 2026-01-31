import { motion } from 'framer-motion'
import './Footer.css'

function Footer() {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="footer__container container">
                <div className="footer__brand">
                    <span className="footer__logo">
                        <span className="footer__logo-icon">✨</span>
                        AI<span className="text-gradient">Builder</span>
                    </span>
                    <p className="footer__tagline">
                        Transform your ideas into beautiful websites with AI
                    </p>
                </div>

                <div className="footer__links">
                    <div className="footer__section">
                        <h4 className="footer__section-title">Resources</h4>
                        <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer">
                            Get Gemini API Key
                        </a>
                        <a href="https://ai.google.dev/docs" target="_blank" rel="noopener noreferrer">
                            API Documentation
                        </a>
                    </div>

                    <div className="footer__section">
                        <h4 className="footer__section-title">Quick Links</h4>
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How it Works</a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {new Date().getFullYear()} AIBuilder. Built with ❤️ and Gemini AI.
                    </p>
                    <p className="footer__powered">
                        Powered by Google Gemini
                    </p>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer
