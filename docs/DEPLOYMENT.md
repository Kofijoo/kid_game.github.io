# Deployment Guide

## SCORM Package Deployment

### Creating the Package
1. Run `create-scorm-package.bat`
2. This creates `quest-of-the-sky-scorm.zip`
3. Package includes all necessary files and manifest

### LMS Upload Instructions

#### Moodle
1. Go to course → Turn editing on
2. Add activity → SCORM package
3. Upload `quest-of-the-sky-scorm.zip`
4. Set completion criteria and grading options
5. Save and display

#### Canvas
1. Go to course → Assignments
2. Create new assignment
3. Submission type: External Tool
4. Upload SCORM package via Files
5. Configure grading and due dates

#### Blackboard
1. Course Tools → SCORM
2. Upload package
3. Set availability and grading options
4. Deploy to course content area

### Standalone Deployment
1. Upload entire folder to web server
2. Ensure `index.html` is accessible
3. No server-side requirements needed
4. Works with any HTTP server

## Configuration Options

### Content Customization
- Edit `content/fractions.json` to modify problems
- Add new JSON files for additional topics
- Update `imsmanifest.xml` for new resources

### Scoring Adjustment
- Modify star thresholds in game logic
- Update mastery score in manifest
- Customize grade mapping in SCORM wrapper

### Analytics Setup
- xAPI statements logged to console by default
- Integrate with Learning Record Store (LRS) for production
- Modify `xapi.js` to send to your LRS endpoint

## Troubleshooting

### Common Issues
- **SCORM not loading**: Check manifest file paths
- **Scores not syncing**: Verify LMS SCORM support
- **Content not loading**: Ensure JSON files are accessible
- **Analytics missing**: Check browser console for errors

### Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Mobile Support
- Responsive design works on tablets
- Touch interactions supported
- Optimized for 10+ inch screens