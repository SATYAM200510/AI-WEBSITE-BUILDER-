const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

const systemPrompt = `You are an expert web developer specializing in creating beautiful, modern websites. Generate complete, production-ready website code.

CRITICAL REQUIREMENTS:
1. Return ONLY valid HTML with embedded <style> and <script> tags - no markdown, no code blocks, no explanations
2. Use modern CSS (flexbox, grid, custom properties, animations)
3. Make it fully responsive (mobile-first approach)
4. Add smooth animations and micro-interactions (hover effects, transitions)
5. Use a cohesive, modern color palette
6. Include semantic HTML5 elements
7. Add realistic placeholder content that matches the theme
8. Use Google Fonts for beautiful typography
9. Include CSS variables for theming
10. Add subtle gradients, shadows, and glassmorphism effects where appropriate

DESIGN GUIDELINES:
- Use a dark or light theme based on the request (default to dark for modern look)
- Include hover states for all interactive elements
- Add smooth scroll behavior
- Use appropriate spacing (padding, margins)
- Make fonts legible and well-sized
- Add subtle animations for polish

OUTPUT FORMAT:
Return a single, complete HTML file with this exact structure:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Website Title]</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    /* All CSS here - use CSS variables, modern selectors */
  </style>
</head>
<body>
  <!-- All HTML content here -->
  <script>
    // All JavaScript here (if needed)
  </script>
</body>
</html>

REMEMBER: Output ONLY the HTML code, nothing else. No markdown formatting, no explanations.`

export async function generateWebsite(userPrompt) {
    if (!API_KEY) {
        throw new Error('Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your .env file.')
    }

    try {
        const response = await fetch(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                    'HTTP-Referer': 'https://github.com/Pritam-72/AI-website-builder', // Required by OpenRouter for free tier
                    'X-Title': 'AI Website Builder'
                },
                body: JSON.stringify({
                    model: 'google/gemini-1.5-flash', // Correct OpenRouter model slug
                    messages: [
                        {
                            role: 'system',
                            content: systemPrompt
                        },
                        {
                            role: 'user',
                            content: userPrompt
                        }
                    ],
                    temperature: 0.8,
                    top_p: 0.95,
                    max_tokens: 8192
                })
            }
        )

        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.error?.message || 'Failed to generate website')
        }

        const data = await response.json()

        if (!data.choices || data.choices.length === 0) {
            throw new Error('No response generated. Please try again.')
        }

        const generatedText = data.choices[0].message.content

        // Clean up the response - remove markdown code blocks if present
        let cleanedCode = generatedText
            .replace(/```html\n?/gi, '')
            .replace(/```\n?/gi, '')
            .trim()

        // Validate it's HTML
        if (!cleanedCode.includes('<!DOCTYPE html>') && !cleanedCode.includes('<html')) {
            // Try to find HTML content
            const htmlMatch = cleanedCode.match(/<html[\s\S]*<\/html>/i)
            if (htmlMatch) {
                cleanedCode = '<!DOCTYPE html>\n' + htmlMatch[0]
            } else {
                throw new Error('Generated content does not appear to be valid HTML')
            }
        }

        return cleanedCode
    } catch (error) {
        console.error('API Error:', error)
        throw error
    }
}

export function extractCodeParts(htmlCode) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlCode, 'text/html')

    // Extract CSS
    const styleElements = doc.querySelectorAll('style')
    const css = Array.from(styleElements)
        .map(el => el.textContent)
        .join('\n\n')

    // Extract JavaScript
    const scriptElements = doc.querySelectorAll('script')
    const js = Array.from(scriptElements)
        .map(el => el.textContent)
        .filter(text => text.trim())
        .join('\n\n')

    // Get HTML body content
    const bodyContent = doc.body?.innerHTML || ''

    return {
        html: htmlCode,
        css,
        js,
        bodyContent
    }
}
