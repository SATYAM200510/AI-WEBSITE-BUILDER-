import { motion } from 'framer-motion'
import './TemplateCards.css'

const templates = [
    {
        id: 'portfolio',
        icon: '🎯',
        title: 'Portfolio',
        description: 'Showcase your work',
        prompt: 'Create a modern portfolio website with a dark theme. Include a hero section with name and title, an about section with skills, a projects grid with hover effects showing 4 featured projects, and a contact section with a form. Use smooth animations and a minimal, elegant design.'
    },
    {
        id: 'landing',
        icon: '🚀',
        title: 'Landing Page',
        description: 'Promote your product',
        prompt: 'Create a stunning SaaS landing page with a gradient hero section, features grid with icons, pricing table with 3 tiers, testimonials section, and a CTA section. Use a modern dark theme with purple/blue accent colors and smooth scroll animations.'
    },
    {
        id: 'blog',
        icon: '📝',
        title: 'Blog',
        description: 'Share your thoughts',
        prompt: 'Create a clean, minimal blog website with a header, featured post section, grid of blog post cards with images and excerpts, sidebar with categories and about section, and a newsletter signup form. Use a light/dark theme toggle and elegant typography.'
    },
    {
        id: 'restaurant',
        icon: '🍽️',
        title: 'Restaurant',
        description: 'Delicious web presence',
        prompt: 'Create an elegant restaurant website with a fullscreen hero image, about section, menu section with categories (appetizers, mains, desserts), image gallery, reservations form, and location/hours info. Use warm colors and sophisticated typography.'
    },
    {
        id: 'ecommerce',
        icon: '🛒',
        title: 'E-commerce',
        description: 'Sell your products',
        prompt: 'Create a modern e-commerce product page with a product image gallery, product details section with title, price, description, size/color selectors, add to cart button, customer reviews section, and related products grid. Use a clean, minimal design.'
    },
    {
        id: 'agency',
        icon: '💼',
        title: 'Agency',
        description: 'Showcase your services',
        prompt: 'Create a creative agency website with an animated hero section, services grid with icons and descriptions, portfolio section with project cards, team section with member photos and roles, client logos, and a contact form. Use bold typography and vibrant accents.'
    }
]

function TemplateCards({ setPrompt }) {
    return (
        <div className="template-cards">
            <p className="template-cards__label">Or start with a template:</p>

            <div className="template-cards__grid">
                {templates.map((template, index) => (
                    <motion.button
                        key={template.id}
                        className="template-card glass-card"
                        onClick={() => setPrompt(template.prompt)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="template-card__icon">{template.icon}</span>
                        <span className="template-card__title">{template.title}</span>
                        <span className="template-card__description">{template.description}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    )
}

export default TemplateCards
