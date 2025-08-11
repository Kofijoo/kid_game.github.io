# Architecture Overview

## System Design

### Component Hierarchy
```
App (Main Container)
├── TeacherDashboard (Analytics View)
├── IslandMap (Game Selection)
└── GearGearsGame (Mini-Game)
    ├── Problem Display
    ├── Gear Selection
    ├── Hint System
    └── Feedback Loop
```

### Data Flow
1. **Content Loading**: JSON files → Game components
2. **User Interaction**: Click events → State updates
3. **Analytics**: Game events → xAPI statements
4. **LMS Integration**: SCORM API → Gradebook sync

## Key Technologies

### Frontend Stack
- **React 18**: Component-based UI
- **Babel Standalone**: JSX compilation in browser
- **CSS3**: Responsive styling with animations
- **HTML5**: Semantic structure

### Learning Standards
- **SCORM 2004**: LMS compatibility
- **xAPI (Tin Can)**: Learning analytics
- **JSON Content**: Modular learning materials

### State Management
- **React useState**: Component-level state
- **Local Storage**: Progress persistence
- **SCORM API**: LMS state synchronization

## Content Architecture

### JSON Structure
```json
{
  "pack_id": "unique_identifier",
  "locale": "en-US",
  "topic": "learning_objective",
  "items": [
    {
      "id": "item_id",
      "question": "Problem text",
      "fractions": ["1/2", "3/8"],
      "correct": 0,
      "hints": ["Progressive", "Help text"],
      "misconceptions": ["common_errors"]
    }
  ]
}
```

### Adaptive Logic
- **Performance Tracking**: Success rate per problem
- **Difficulty Adjustment**: Based on accuracy patterns
- **Hint Progression**: Scaffolded support system
- **Star Calculation**: Performance-based rewards

## Analytics Framework

### xAPI Events
- **answered**: Problem responses with timing
- **sought-hint**: Help-seeking behavior
- **completed**: Game completion with scores

### Data Points
- Response accuracy and timing
- Hint usage patterns
- Completion rates
- Learning progression

### Teacher Dashboard
- Real-time analytics display
- Performance summaries
- Activity timeline
- Export capabilities

## Security & Privacy

### Data Handling
- No personal data collection
- Anonymous learning analytics
- GDPR-compliant design
- Local storage only

### Browser Security
- Content Security Policy ready
- XSS protection
- Safe JSON parsing
- Input validation

## Scalability Considerations

### Content Expansion
- Modular JSON structure
- Easy topic addition
- Localization support
- Version management

### Performance
- Lightweight dependencies
- Efficient state updates
- Minimal DOM manipulation
- Responsive design

### Integration
- Standard SCORM compliance
- xAPI compatibility
- LTI readiness
- API extensibility