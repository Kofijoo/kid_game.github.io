// Simple sound effects using Web Audio API
class SoundManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.enabled = true;
        this.initAudio();
    }

    initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
            this.enabled = false;
        }
    }

    // Create simple tones for game sounds
    createTone(frequency, duration, type = 'sine') {
        if (!this.enabled || !this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    // Play success sound
    playSuccess() {
        this.createTone(523.25, 0.2); // C5
        setTimeout(() => this.createTone(659.25, 0.2), 100); // E5
        setTimeout(() => this.createTone(783.99, 0.3), 200); // G5
    }

    // Play error sound
    playError() {
        this.createTone(220, 0.3, 'sawtooth'); // A3
    }

    // Play click sound
    playClick() {
        this.createTone(800, 0.1, 'square');
    }

    // Play hint sound
    playHint() {
        this.createTone(440, 0.2); // A4
        setTimeout(() => this.createTone(554.37, 0.2), 150); // C#5
    }

    // Play completion sound
    playCompletion() {
        const notes = [523.25, 587.33, 659.25, 698.46, 783.99]; // C-D-E-F-G
        notes.forEach((note, index) => {
            setTimeout(() => this.createTone(note, 0.3), index * 100);
        });
    }

    toggle() {
        this.enabled = !this.enabled;
    }
}

window.soundManager = new SoundManager();