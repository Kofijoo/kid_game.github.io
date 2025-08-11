# Content Creation Guide

## Adding New Learning Content

### JSON File Structure
Create new files in the `content/` directory following this pattern:

```json
{
  "pack_id": "topic_level",
  "locale": "en-US",
  "topic": "subject.subtopic",
  "title": "Display Name",
  "items": [
    {
      "id": "unique_item_id",
      "question": "Problem statement",
      "fractions": ["option1", "option2"],
      "correct": 0,
      "band": "A",
      "hints": [
        "General guidance",
        "Specific help"
      ],
      "misconceptions": ["error_type"]
    }
  ]
}
```

### Difficulty Bands
- **Band A**: Basic concepts, simple comparisons
- **Band B**: Intermediate difficulty, mixed denominators
- **Band C**: Advanced problems, complex reasoning

### Writing Effective Hints
1. **First hint**: General strategy or concept
2. **Second hint**: Specific method or calculation
3. **Keep brief**: Maximum 15 words per hint
4. **Age-appropriate**: Language for 9-11 year olds

### Common Misconceptions
Track these error patterns:
- `compare_numerators_only`: Ignoring denominators
- `compare_denominators_only`: Ignoring numerators
- `part_whole_confusion`: Misunderstanding fraction meaning
- `visual_model_error`: Incorrect diagram interpretation

## Content Quality Guidelines

### Problem Design
- **Clear questions**: Unambiguous wording
- **Visual support**: Gear metaphor for fractions
- **Appropriate difficulty**: Age-appropriate challenges
- **Learning progression**: Scaffolded complexity

### Answer Options
- **Meaningful distractors**: Common wrong answers
- **Balanced difficulty**: Not obviously wrong
- **Educational value**: Learn from mistakes

### Hint Effectiveness
- **Progressive disclosure**: Build understanding step-by-step
- **Conceptual focus**: Why, not just how
- **Visual cues**: Reference game elements
- **Encouraging tone**: Supportive language

## Localization Support

### Adding Languages
1. Create locale-specific JSON files
2. Update file naming: `fractions_nb-NO.json`
3. Translate all text content
4. Maintain same structure

### Cultural Adaptation
- Use familiar contexts
- Appropriate examples
- Local curriculum alignment
- Cultural sensitivity

## Testing New Content

### Validation Checklist
- [ ] JSON syntax is valid
- [ ] All required fields present
- [ ] Correct answer index accurate
- [ ] Hints are helpful and progressive
- [ ] Age-appropriate language
- [ ] Difficulty progression logical

### Playtesting Protocol
1. Test with target age group (9-11)
2. Observe completion time (60-120 seconds)
3. Monitor hint usage patterns
4. Check for confusion points
5. Validate learning outcomes

## Content Management

### Version Control
- Use semantic versioning for content packs
- Document changes in commit messages
- Tag stable releases
- Maintain backward compatibility

### Performance Considerations
- Keep JSON files under 50KB
- Limit items per pack to 20
- Optimize for mobile loading
- Test on slow connections