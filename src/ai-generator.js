// AI Question Generator using DeepSeek and OpenRouter APIs
class AIQuestionGenerator {
    constructor() {
        this.deepseekApiKey = null;
        this.openrouterApiKey = null;
        this.currentProvider = 'deepseek';
    }

    setApiKeys(deepseekKey, openrouterKey) {
        this.deepseekApiKey = deepseekKey;
        this.openrouterApiKey = openrouterKey;
    }

    async generateQuestions(topic, difficulty = 'A', count = 3) {
        if (!this.deepseekApiKey && !this.openrouterApiKey) {
            console.warn('No API keys configured, skipping AI generation');
            return null;
        }

        const prompt = this.createPrompt(topic, difficulty, count);
        
        try {
            if (this.currentProvider === 'deepseek' && this.deepseekApiKey) {
                return await this.callDeepSeek(prompt);
            } else if (this.openrouterApiKey) {
                return await this.callOpenRouter(prompt);
            }
        } catch (error) {
            console.error('AI generation failed:', error);
            return this.getFallbackQuestions(topic);
        }
    }

    createPrompt(topic, difficulty, count) {
        const topicPrompts = {
            fractions: `Generate ${count} fraction comparison questions for ages 9-11, difficulty level ${difficulty}. Include visual fractions like 1/2, 3/4, etc.`,
            vocabulary: `Generate ${count} vocabulary questions for ages 9-11, difficulty level ${difficulty}. Focus on synonyms, antonyms, and word meanings.`,
            geometry: `Generate ${count} geometry questions for ages 9-11, difficulty level ${difficulty}. Include shapes, sides, corners, and basic properties.`,
            arithmetic: `Generate ${count} arithmetic questions for ages 9-11, difficulty level ${difficulty}. Include addition, subtraction, multiplication within age-appropriate ranges.`,
            logic: `Generate ${count} logic and pattern questions for ages 9-11, difficulty level ${difficulty}. Use emojis and visual patterns.`,
            science: `Generate ${count} basic science questions for ages 9-11, difficulty level ${difficulty}. Cover simple concepts like gravity, plants, animals, states of matter.`
        };

        return `${topicPrompts[topic]}

Return ONLY a valid JSON object in this exact format:
{
  "items": [
    {
      "id": "${topic}_ai_001",
      "question": "Question text here?",
      "options": ["option1", "option2", "option3", "option4"],
      "correct": 0,
      "band": "${difficulty}",
      "hints": ["First hint", "Second hint"],
      "misconceptions": ["common_error"]
    }
  ]
}

Make questions engaging and age-appropriate. Use emojis for logic questions. Ensure correct answer index is accurate.`;
    }

    async callDeepSeek(prompt) {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.deepseekApiKey}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 1000
            })
        });

        const data = await response.json();
        const content = data.choices[0].message.content;
        return JSON.parse(content);
    }

    async callOpenRouter(prompt) {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.openrouterApiKey}`,
                'HTTP-Referer': window.location.origin,
                'X-Title': 'Quest of the Sky Coders'
            },
            body: JSON.stringify({
                model: 'anthropic/claude-3.5-sonnet',
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 1000
            })
        });

        const data = await response.json();
        const content = data.choices[0].message.content;
        return JSON.parse(content);
    }

    getFallbackQuestions(topic) {
        const fallbacks = {
            fractions: {
                items: [
                    {
                        id: "frac_fallback_001",
                        question: "Which fraction is larger?",
                        options: ["1/2", "1/4"],
                        correct: 0,
                        band: "A",
                        hints: ["Think about pizza slices", "1/2 means half, 1/4 means quarter"],
                        misconceptions: ["denominator_confusion"]
                    }
                ]
            },
            vocabulary: {
                items: [
                    {
                        id: "vocab_fallback_001",
                        question: "What does 'enormous' mean?",
                        options: ["Very big", "Very small", "Very fast", "Very slow"],
                        correct: 0,
                        band: "A",
                        hints: ["Think about size", "Enormous means extremely large"],
                        misconceptions: ["size_confusion"]
                    }
                ]
            }
        };
        
        return fallbacks[topic] || fallbacks.fractions;
    }

    switchProvider() {
        this.currentProvider = this.currentProvider === 'deepseek' ? 'openrouter' : 'deepseek';
        console.log(`Switched to ${this.currentProvider} provider`);
    }
}

window.aiGenerator = new AIQuestionGenerator();