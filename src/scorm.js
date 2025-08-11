// SCORM 2004 API wrapper
class SCORMWrapper {
    constructor() {
        this.api = null;
        this.initialized = false;
        this.findAPI();
    }

    findAPI() {
        let win = window;
        let attempts = 0;
        
        while (win && attempts < 10) {
            if (win.API_1484_11) {
                this.api = win.API_1484_11;
                break;
            }
            if (win.parent && win.parent !== win) {
                win = win.parent;
            } else {
                break;
            }
            attempts++;
        }
        
        if (!this.api) {
            console.log("SCORM API not found - running in standalone mode");
        }
    }

    initialize() {
        if (this.api && !this.initialized) {
            const result = this.api.Initialize("");
            this.initialized = result === "true";
            if (this.initialized) {
                this.setValue("cmi.completion_status", "incomplete");
                this.setValue("cmi.success_status", "unknown");
                console.log("SCORM initialized successfully");
            }
        }
        return this.initialized;
    }

    setValue(element, value) {
        if (this.api && this.initialized) {
            return this.api.SetValue(element, value) === "true";
        }
        return false;
    }

    getValue(element) {
        if (this.api && this.initialized) {
            return this.api.GetValue(element);
        }
        return "";
    }

    commit() {
        if (this.api && this.initialized) {
            return this.api.Commit("") === "true";
        }
        return false;
    }

    terminate() {
        if (this.api && this.initialized) {
            const result = this.api.Terminate("") === "true";
            this.initialized = false;
            return result;
        }
        return false;
    }

    setScore(score) {
        this.setValue("cmi.score.raw", score.toString());
        this.setValue("cmi.score.min", "0");
        this.setValue("cmi.score.max", "100");
        this.commit();
    }

    setCompletion(completed, passed) {
        this.setValue("cmi.completion_status", completed ? "completed" : "incomplete");
        this.setValue("cmi.success_status", passed ? "passed" : "failed");
        this.commit();
    }
}

window.scorm = new SCORMWrapper();