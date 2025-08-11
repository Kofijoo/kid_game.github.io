// Simple xAPI tracking utility
class XAPITracker {
    constructor() {
        this.actor = {
            name: "Student",
            mbox: "mailto:student@example.com"
        };
        this.statements = [];
    }

    sendStatement(verb, object, result = null, context = null) {
        const statement = {
            actor: this.actor,
            verb: {
                id: `http://adlnet.gov/expapi/verbs/${verb}`,
                display: { "en-US": verb }
            },
            object: {
                id: `urn:quest:${object}`,
                definition: {
                    name: { "en-US": object }
                }
            },
            timestamp: new Date().toISOString()
        };

        if (result) {
            statement.result = result;
        }

        if (context) {
            statement.context = context;
        }

        this.statements.push(statement);
        console.log("xAPI Statement:", statement);
        
        // In real implementation, would send to LRS
        // fetch('/xapi/statements', { method: 'POST', body: JSON.stringify(statement) });
    }

    trackAnswered(itemId, response, correct, duration, hints = 0) {
        this.sendStatement("answered", `item/${itemId}`, {
            success: correct,
            response: response,
            duration: `PT${duration}S`
        }, {
            extensions: {
                "http://quest.example.com/hints": hints
            }
        });
    }

    trackHintSought(itemId, hintIndex) {
        this.sendStatement("sought-hint", `item/${itemId}`, null, {
            extensions: {
                "http://quest.example.com/hint-index": hintIndex
            }
        });
    }

    trackCompleted(activityId, score, stars) {
        this.sendStatement("completed", activityId, {
            score: { raw: score },
            completion: true,
            success: stars > 0
        }, {
            extensions: {
                "http://quest.example.com/stars": stars
            }
        });
    }
}

window.xapi = new XAPITracker();