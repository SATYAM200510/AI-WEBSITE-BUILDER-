import { motion } from 'framer-motion'
import './Features.css'

const features = [
    {
        icon: '⚡',
        title: 'Instant Generation',
        description: 'Get complete website code in seconds, powered by Google\'s Gemini AI'
    },
    {
        icon: '🎨',
        title: 'Beautiful Designs',
        description: 'Modern, responsive layouts with smooth animations and polished aesthetics'
    },
    {
        icon: '📱',
        title: 'Fully Responsive',
        description: 'Every generated website works perfectly on desktop, tablet, and mobile'
    },
    {
        icon: '🔧',
        title: 'Clean Code',
        description: 'Production-ready HTML, CSS, and JavaScript that you can easily customize'
    },
    {
        icon: '📥',
        title: 'Easy Export',
        description: 'Download your website as a single file or copy specific code sections'
    },
    {
        icon: '🆓',
        title: '100% Free',
        description: 'Use the free Gemini API tier to generate unlimited website ideas'
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
}

function Features() {
    return (
        <section id="features" className="features">
            <div className="features__container container">
                <motion.div
                    className="features__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="features__title heading-lg">
                        Why Choose <span className="text-gradient">AI Builder</span>?
                    </h2>
                    <p className="features__subtitle text-lg text-muted">
                        Everything you need to bring your website ideas to life
                    </p>
                </motion.div>

                <motion.div
                    className="features__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            className="feature-card glass-card"
                            variants={itemVariants}
                        >
                            <span className="feature-card__icon">{feature.icon}</span>
                            <h3 className="feature-card__title">{feature.title}</h3>
                            <p className="feature-card__description">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* How it Works Section */}
                <motion.div
                    id="how-it-works"
                    className="how-it-works"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="features__title heading-lg">
                        How It <span className="text-gradient">Works</span>
                    </h2>

                    <div className="steps">
                        <motion.div
                            className="step"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="step__number">1</div>
                            <div className="step__content">
                                <h3 className="step__title">Describe Your Vision</h3>
                                <p className="step__description">
                                    Tell the AI what kind of website you want. Be as detailed as you like about colors, sections, and features.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="step"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="step__number">2</div>
                            <div className="step__content">
                                <h3 className="step__title">AI Generates Code</h3>
                                <p className="step__description">
                                    Gemini AI creates complete HTML, CSS, and JavaScript code tailored to your requirements.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="step"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="step__number">3</div>
                            <div className="step__content">
                                <h3 className="step__title">Preview & Export</h3>
                                <p className="step__description">
                                    See your website live in the preview, then download the code or copy it to use anywhere.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Features
