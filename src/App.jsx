import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Layout/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Builder from './components/Builder/Builder'
import Footer from './components/Layout/Footer'

function App() {
  const [generatedCode, setGeneratedCode] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [showBuilder, setShowBuilder] = useState(false)

  const handleGenerate = async (code) => {
    setGeneratedCode(code)
    setShowBuilder(true)
  }

  const handleBackToHome = () => {
    setShowBuilder(false)
    setGeneratedCode(null)
  }

  return (
    <div className="app">
      <Header onLogoClick={handleBackToHome} />

      <AnimatePresence mode="wait">
        {!showBuilder ? (
          <main key="home">
            <Hero
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              setIsGenerating={setIsGenerating}
            />
            <Features />
          </main>
        ) : (
          <main key="builder">
            <Builder
              generatedCode={generatedCode}
              onBack={handleBackToHome}
              onRegenerate={handleGenerate}
              isGenerating={isGenerating}
              setIsGenerating={setIsGenerating}
            />
          </main>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
