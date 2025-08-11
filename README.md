# Quest of the Sky Coders

A professional AI-adaptive learning game for ages 9-11 featuring interactive floating island adventures across multiple subjects.

## 🎮 Features

- **Interactive Home Menu**: Animated characters with sound effects and engaging catchphrases
- **6 Learning Islands**: Fractions, Vocabulary, Geometry, Arithmetic, Logic, and Science
- **Human Characters**: Professional educators and friendly guides on each island
- **Adaptive Difficulty**: AI adjusts challenge level based on performance
- **Progressive Hints**: Scaffolded support system with audio feedback
- **Sound Effects**: Interactive audio for clicks, success, errors, and hints
- **Mobile Responsive**: Optimized for phones, tablets, and desktops
- **Teacher Dashboard**: Real-time learning analytics and progress tracking
- **SCORM Compatible**: Deploy to any LMS (Moodle, Canvas, Blackboard)
- **xAPI Tracking**: Comprehensive learning analytics

## 🚀 Quick Start

### Standalone Version
1. Open `index.html` in any modern web browser
2. Click "Start Adventure" to begin learning
3. Access Teacher Dashboard for analytics

### LMS Deployment
1. Run `create-scorm-package.bat` to create SCORM package
2. Upload `quest-of-the-sky-scorm.zip` to your LMS
3. Students access through course assignments

## 🏗️ Architecture

```
Quest of the Sky/
├── index.html              # Main game interface
├── src/
│   ├── xapi.js             # Learning analytics tracking
│   └── scorm.js            # LMS integration
├── content/
│   └── fractions.json      # Learning content data
├── imsmanifest.xml         # SCORM package manifest
└── create-scorm-package.bat # Packaging script
```

## 🎯 Learning Objectives

- Compare fractions with like and unlike denominators
- Identify larger/smaller fractions using visual models
- Apply fraction concepts through interactive problem-solving

## 📊 Analytics

The game tracks:
- **Answer accuracy** and response time
- **Hint usage** patterns
- **Completion rates** and star achievements
- **Learning progression** across difficulty levels

## 🔧 Technical Stack

- **Frontend**: React (CDN), HTML5, CSS3
- **Standards**: SCORM 2004, xAPI (Tin Can API)
- **Content**: JSON-based modular system
- **Deployment**: Browser-based, LMS-compatible

## 📈 Scoring System

- **3 Stars**: 100% correct (Grade: 100%)
- **2 Stars**: 70%+ correct (Grade: 80%)
- **1 Star**: Completion (Grade: 60%)

## 🎨 Game Components

### Home Menu Characters
- **Luna** (👧) - Friendly girl guide who welcomes players
- **Max** (👦) - Enthusiastic boy companion
- **Professor Wise** (🧙♂️) - Wise mentor figure
- **Captain Smart** (🦸♀️) - Superhero learning leader

### Learning Islands
1. **Fraction Falls** (👩💻) - Compare fractions with interactive challenges
2. **Word Winds** (👨🏫) - Vocabulary and language learning
3. **Shape Shores** (👩🔬) - Geometry and spatial reasoning
4. **Number Peaks** (👨💼) - Arithmetic and math operations
5. **Logic Lagoon** (🧙♀️) - Critical thinking and patterns
6. **Science Skies** (👨🚀) - Scientific concepts and discovery

## 🔍 Development

Built using professional development practices:
- **React Components**: Modular, reusable UI components
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Sound Integration**: Web Audio API for interactive sound effects
- **Animation System**: CSS animations and transitions for engaging UX
- **Git Version Control**: Complete development history with meaningful commits
- **Data-Driven Content**: JSON-based content management system
- **Standards Compliance**: SCORM 2004 and xAPI (Tin Can API) support
- **Accessibility**: Kid-friendly fonts, colors, and interaction patterns

## 📝 License

MIT License - Educational use encouraged