# Quest of the Sky Coders

An AI-adaptive learning game for ages 9-11 that teaches fractions through interactive floating island adventures.

## 🎮 Features

- **Interactive Learning**: Drag-and-drop fraction comparison games
- **Adaptive Difficulty**: AI adjusts challenge level based on performance
- **Progressive Hints**: Scaffolded support system
- **Teacher Dashboard**: Real-time learning analytics
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

### Islands
1. **Fraction Falls** - Compare fractions using gear mechanics
2. **Word Winds** - Vocabulary challenges (coming soon)
3. **Shape Shores** - Geometry puzzles (coming soon)
4. **Number Peaks** - Arithmetic practice (coming soon)
5. **Logic Lagoon** - Logic problems (coming soon)
6. **Science Skies** - Science concepts (coming soon)

## 🔍 Development

Built using step-by-step development approach with:
- Git version control for all changes
- Modular component architecture
- Data-driven content system
- Standards-compliant tracking

## 📝 License

MIT License - Educational use encouraged