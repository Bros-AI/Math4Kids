/**
 * Kids Math Assistant - State-of-the-Art UI/UX Enhanced Version
 * Optimized for perfect UX, PWA, accessibility, persistent permissions, and smooth performance.
 */

class MathAssistant {
    constructor() {
        this.CONFIG = {
            // Session settings
            MAX_ATTEMPTS: 3,
            SESSION_LENGTH: 10,
            PROBLEM_TIME_LIMIT: 30000, // 30 seconds
            
            // Visual effects
            CONFETTI_COUNT: 50, // More confetti!
            CONFETTI_DURATION: 3500,
            FEEDBACK_DURATION: 3000,
            TOAST_DURATION: 3500,
            
            // Speech settings
            SPEECH_RATE: 0.9, // Slightly more natural rate
            SPEECH_PITCH: 1.0,
            SPEECH_VOLUME: 1.0, // Max volume
            VOICE_CONFIDENCE_THRESHOLD: 0.65, // Slightly more lenient
            
            // Performance
            DEBOUNCE_DELAY: 200,
            ANIMATION_DURATION: 300, // Consistent animation speed
            
            // Touch settings
            LONG_PRESS_DURATION: 150, // Quicker long press
            TAP_THRESHOLD: 15, // Slightly larger tap threshold
            
            // Storage keys
            STORAGE_PREFIX: 'mathkids_v2_', // Version prefix for storage
            PERMISSION_KEY: 'mic_permission_v2',
            SETTINGS_KEY: 'user_settings_v2',
            ACHIEVEMENTS_KEY: 'achievements_v2',
            STATS_KEY: 'stats_v2',
            LAST_VISIT_KEY: 'last_visit_v2',
            
            // Achievements
            ACHIEVEMENTS: {
                FIRST_CORRECT: { name: "First Steps!", description: "Got your first answer correct!", icon: "🎯" },
                STREAK_5: { name: "On Fire!", description: "5 correct answers in a row!", icon: "🔥" },
                STREAK_10: { name: "Math Wiz!", description: "10 correct answers in a row!", icon: "👑" }, // Renamed
                SPEED_DEMON: { name: "Lightning Fast!", description: "Answered in under 3 seconds!", icon: "⚡" },
                PERFECT_SESSION: { name: "Perfect Score!", description: "100% accuracy in a session!", icon: "💯" },
                VOICE_MASTER: { name: "Voice Champion!", description: "Used voice input 10 times!", icon: "🎤" },
                LEVEL_UP_MEDIUM: { name: "Getting Tougher!", description: "Tried Medium difficulty!", icon: "📈" },
                LEVEL_UP_HARD: { name: "Challenge Accepted!", description: "Braved Hard difficulty!", icon: "🚀" },
            }
        };

        this.LANGUAGES = {
            en: {
                code: 'en-US', name: 'English',
                operations: { add: 'plus', subtract: 'minus', multiply: 'times', divide: 'divided by' },
                messages: {
                    correct: ['Awesome! 🎉', 'Perfect! ⭐', 'Brilliant! 🌟', 'Amazing! 🔥', 'You got it! 🤩'],
                    incorrect: ['Try again! 💪', 'Not quite! 🤔', 'Keep going! 👍', 'Almost there! 🧐'],
                    hint: { add: 'Count up from the first number', subtract: 'Count down from the first number', multiply: 'Add the first number that many times', divide: 'How many groups can you make?' },
                    listening: 'Listening... 🎤', speak: 'Hold to speak', welcome: 'Ready to learn math? 🚀', sessionComplete: 'Great job! Session complete! 🎊'
                }
            },
            es: {
                code: 'es-ES', name: 'Español',
                operations: { add: 'más', subtract: 'menos', multiply: 'por', divide: 'dividido por' },
                messages: {
                    correct: ['¡Genial! 🎉', '¡Perfecto! ⭐', '¡Brillante! 🌟', '¡Increíble! 🔥', '¡Lo tienes! 🤩'],
                    incorrect: ['¡Inténtalo de nuevo! 💪', '¡Casi! 🤔', '¡Sigue así! 👍', '¡Casi lo logras! 🧐'],
                    hint: { add: 'Cuenta hacia arriba desde el primer número', subtract: 'Cuenta hacia atrás desde el primer número', multiply: 'Suma el primer número esas veces', divide: '¿Cuántos grupos puedes hacer?' },
                    listening: 'Escuchando... 🎤', speak: 'Mantén para hablar', welcome: '¿Listo para aprender mates? 🚀', sessionComplete: '¡Buen trabajo! ¡Sesión completa! 🎊'
                }
            },
             fr: {
                code: 'fr-FR', name: 'Français',
                operations: { add: 'plus', subtract: 'moins', multiply: 'fois', divide: 'divisé par' },
                messages: {
                    correct: ['Génial! 🎉', 'Parfait! ⭐', 'Brillant! 🌟', 'Incroyable! 🔥', "C'est ça! 🤩"],
                    incorrect: ['Réessaye! 💪', 'Presque! 🤔', 'Continue! 👍', "Tu y es presque! 🧐"],
                    hint: { add: 'Compte à partir du premier nombre', subtract: 'Compte à rebours à partir du premier nombre', multiply: 'Ajoute le premier nombre autant de fois que le second', divide: 'Combien de groupes peux-tu former?' },
                    listening: 'J\'écoute... 🎤', speak: 'Maintenez pour parler', welcome: 'Prêt à apprendre les maths? 🚀', sessionComplete: 'Bravo! Session terminée! 🎊'
                }
            },
            de: {
                code: 'de-DE', name: 'Deutsch',
                operations: { add: 'plus', subtract: 'minus', multiply: 'mal', divide: 'geteilt durch' },
                messages: {
                    correct: ['Großartig! 🎉', 'Perfekt! ⭐', 'Brillant! 🌟', 'Fantastisch! 🔥', 'Du hast es! 🤩'],
                    incorrect: ['Versuch es nochmal! 💪', 'Nicht ganz! 🤔', 'Mach weiter! 👍', 'Fast geschafft! 🧐'],
                    hint: { add: 'Zähle von der ersten Zahl aufwärts', subtract: 'Zähle von der ersten Zahl abwärts', multiply: 'Addiere die erste Zahl so oft wie die zweite', divide: 'Wie viele Gruppen kannst du bilden?' },
                    listening: 'Höre zu... 🎤', speak: 'Gedrückt halten zum Sprechen', welcome: 'Bereit, Mathe zu lernen? 🚀', sessionComplete: 'Tolle Arbeit! Sitzung beendet! 🎊'
                }
            },
            it: {
                code: 'it-IT', name: 'Italiano',
                operations: { add: 'più', subtract: 'meno', multiply: 'per', divide: 'diviso' },
                messages: {
                    correct: ['Ottimo! 🎉', 'Perfetto! ⭐', 'Brillante! 🌟', 'Fantastico! 🔥', 'Ce l\'hai fatta! 🤩'],
                    incorrect: ['Riprova! 💪', 'Non proprio! 🤔', 'Continua così! 👍', 'Quasi ci sei! 🧐'],
                    hint: { add: 'Conta in avanti dal primo numero', subtract: 'Conta all\'indietro dal primo numero', multiply: 'Somma il primo numero tante volte quanto indicato dal secondo', divide: 'Quanti gruppi puoi formare?' },
                    listening: 'Sto ascoltando... 🎤', speak: 'Tieni premuto per parlare', welcome: 'Pronto per imparare la matematica? 🚀', sessionComplete: 'Ottimo lavoro! Sessione completata! 🎊'
                }
            }
        };
        this.DIFFICULTIES = {
            easy: { min: 1, max: 10, operations: ['add', 'subtract'], scoreMultiplier: 1 },
            medium: { min: 1, max: 25, operations: ['add', 'subtract', 'multiply'], scoreMultiplier: 1.5 },
            hard: { min: 10, max: 50, operations: ['add', 'subtract', 'multiply', 'divide'], scoreMultiplier: 2 },
            expert: { min: 10, max: 100, operations: ['add', 'subtract', 'multiply', 'divide'], scoreMultiplier: 3 }
        };

        this.initializeApp();
    }

    async initializeApp() {
        // Initialize critical elements first
        this.setDynamicViewportHeight();
        this.initializeElements(); // MUST be called before using this.elements
        
        this.showLoading(true); // Now this is safe
        try {
            this.initializeState();
            await this.loadSavedData();
            await this.initializeSpeechSystems();
            this.setupEventListeners();
            this.initializeUI();
            this.checkReturningUser();
            console.log('Math Assistant Initialized Successfully');
        } catch (error) {
            console.error('Critical Initialization Error:', error);
            this.showFeedback('Oops! Something went wrong. Please refresh the page.', 'error', 5000);
        } finally {
            this.showLoading(false);
        }
    }

    setDynamicViewportHeight() {
        const setVH = () => {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
            document.documentElement.style.setProperty('--dvh', `${window.innerHeight * 0.01}px`); 
            document.documentElement.style.setProperty('--vw', `${window.innerWidth * 0.01}px`);
        };
        setVH();
        window.addEventListener('resize', this.debounce(setVH, this.CONFIG.DEBOUNCE_DELAY));
        window.addEventListener('orientationchange', () => setTimeout(setVH, 100));
    }

    initializeElements() {
        this.elements = {
            appContainer: document.querySelector('.app-container'),
            loadingOverlay: document.getElementById('loadingOverlay'),
            settingsToggle: document.getElementById('settingsToggle'),
            settingsPanel: document.getElementById('settingsPanel'),
            languageSelect: document.getElementById('languageSelect'),
            difficultySelect: document.getElementById('difficultySelect'),
            modeSelect: document.getElementById('modeSelect'),
            operationSelect: document.getElementById('operationSelect'),
            score: document.getElementById('score'),
            streak: document.getElementById('streak'),
            accuracy: document.getElementById('accuracy'),
            timer: document.getElementById('timer'),
            problemCard: document.getElementById('problemCard'),
            problemDisplay: document.getElementById('problemDisplay'),
            problemTimer: document.getElementById('problemTimer'),
            timerProgress: document.getElementById('timerProgress'),
            answerArea: document.getElementById('answerArea'),
            voiceMode: document.getElementById('voiceMode'),
            voiceButton: document.getElementById('voiceButton'),
            voiceWave: document.getElementById('voiceWave'),
            voiceHintText: document.getElementById('voiceHintText'),
            choiceMode: document.getElementById('choiceMode'),
            choiceButtons: document.getElementById('choiceButtons'),
            feedback: document.getElementById('feedback'),
            achievementToast: document.getElementById('achievementToast'),
            achievementTitle: document.getElementById('achievementTitle'),
            achievementDesc: document.getElementById('achievementDesc'),
            hintBtn: document.getElementById('hintBtn'),
            startBtn: document.getElementById('startBtn'),
            startBtnText: document.getElementById('startBtn').querySelector('.action-btn-text'), // Corrected selector
            listenBtn: document.getElementById('listenBtn'),
            progressFill: document.getElementById('progressFill'),
            sessionProgress: document.getElementById('sessionProgress'),
            sessionProgressText: document.getElementById('sessionProgressText'),
            permissionModal: document.getElementById('permissionModal'),
            allowPermission: document.getElementById('allowPermission'),
            denyPermission: document.getElementById('denyPermission'),
            confettiContainer: document.getElementById('confetti-container')
        };
    }

    initializeState() {
        this.state = {
            language: 'en', difficulty: 'easy', mode: 'speech', operations: 'all',
            isPlaying: false, currentProblem: null, currentChoices: [],
            attemptsLeft: this.CONFIG.MAX_ATTEMPTS,
            problemStartTime: null, sessionStartTime: null,
            score: 0, streak: 0, bestStreak: 0, totalQuestions: 0, correctAnswers: 0,
            sessionQuestions: 0, voiceUsageCount: 0,
            isListening: false, isProcessing: false, settingsOpen: false,
            micPermissionGranted: false, hasAskedPermission: false,
            achievements: new Set(), newAchievements: [],
            currentTheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        };
        this.timers = { session: null, problem: null, feedback: null, achievement: null, voiceTimeout: null };
    }

    async loadSavedData() {
        const savedSettings = this.getLocalStorage(this.CONFIG.SETTINGS_KEY);
        if (savedSettings) Object.assign(this.state, savedSettings);
        
        const savedAchievements = this.getLocalStorage(this.CONFIG.ACHIEVEMENTS_KEY);
        if (savedAchievements) this.state.achievements = new Set(savedAchievements);
        
        const savedStats = this.getLocalStorage(this.CONFIG.STATS_KEY);
        if (savedStats) {
            this.state.bestStreak = savedStats.bestStreak || 0;
        }
        
        this.state.micPermissionGranted = this.getLocalStorage(this.CONFIG.PERMISSION_KEY) === 'granted';
        this.state.hasAskedPermission = !!this.getLocalStorage(this.CONFIG.PERMISSION_KEY);
    }

    async initializeSpeechSystems() {
        this.synth = window.speechSynthesis;
        if (!this.synth) {
            console.warn('Speech synthesis not supported. Listen feature will be disabled.');
            if (this.elements.listenBtn) this.elements.listenBtn.disabled = true;
        } else {
            this.loadVoices(); 
            this.synth.onvoiceschanged = () => this.loadVoices();
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.setupSpeechRecognition();
        } else {
            console.warn('Speech recognition not supported. Voice input mode will be unavailable.');
            this.recognition = null;
            if (this.state.mode === 'speech') {
                this.state.mode = 'choice3'; 
                if(this.elements.modeSelect) this.elements.modeSelect.value = 'choice3';
            }
            if(this.elements.modeSelect) {
                const speechOption = this.qs(this.elements.modeSelect, 'option[value="speech"]');
                if(speechOption) speechOption.disabled = true;
            }
        }
    }

    loadVoices() {
        if (!this.synth) return;
        this.voices = this.synth.getVoices();
        if (this.voices.length === 0 && this.synth.getVoices().length === 0) { 
             setTimeout(() => {
                this.voices = this.synth.getVoices();
                this.mapVoices();
             }, 200);
        } else {
            this.mapVoices();
        }
    }
    
    mapVoices() {
        this.voiceMap = {};
        Object.keys(this.LANGUAGES).forEach(langKey => {
            const langData = this.LANGUAGES[langKey];
            this.voiceMap[langKey] = 
                this.voices.find(voice => voice.lang === langData.code && voice.localService) ||
                this.voices.find(voice => voice.lang === langData.code) ||
                this.voices.find(voice => voice.lang.startsWith(langData.code.split('-')[0]) && voice.localService) ||
                this.voices.find(voice => voice.lang.startsWith(langData.code.split('-')[0])) ||
                this.voices.find(voice => voice.lang === 'en-US') || 
                this.voices[0]; 
        });
        if (this.state.language && this.voiceMap?.[this.state.language]) {
            console.log(`Selected voice for ${this.state.language}:`, this.voiceMap[this.state.language]?.name, `(${this.voiceMap[this.state.language]?.lang})`);
        }
    }


    setupSpeechRecognition() {
        if (!this.recognition) return;
        this.recognition.continuous = false;
        this.recognition.interimResults = true; 
        this.recognition.maxAlternatives = 3;
        this.recognition.lang = this.LANGUAGES[this.state.language].code;

        this.recognition.onstart = () => {
            this.state.isListening = true;
            this.elements.voiceButton.classList.add('listening');
            this.elements.voiceWave.classList.remove('hidden');
            this.elements.voiceHintText.textContent = this.getMessage('listening');
            this.triggerHapticFeedback('light');
            this.timers.voiceTimeout = setTimeout(() => {
                if (this.state.isListening) this.stopListening('timeout');
            }, 10000); 
        };
        
        this.recognition.onresult = (event) => {
            clearTimeout(this.timers.voiceTimeout);
            let finalTranscript = '';
            let bestConfidence = 0;
            const alternatives = [];

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                    bestConfidence = Math.max(bestConfidence, event.results[i][0].confidence);
                    alternatives.push({transcript: event.results[i][0].transcript.trim(), confidence: event.results[i][0].confidence || 0});
                }
            }
            
            if (finalTranscript && alternatives.length > 0) {
                const sortedAlternatives = alternatives.sort((a, b) => (b.confidence || 0) - (a.confidence || 0));
                this.processVoiceResult(sortedAlternatives);
            }
        };
        
        this.recognition.onerror = (event) => {
            clearTimeout(this.timers.voiceTimeout);
            console.error('Speech recognition error:', event.error, event.message);
            this.stopListening('error');
            
            if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
                this.state.micPermissionGranted = false;
                this.setLocalStorage(this.CONFIG.PERMISSION_KEY, 'denied');
                this.showPermissionModal();
                this.showFeedback('Microphone access denied. Enable it in browser settings.', 'error', 4000);
            } else if (event.error === 'no-speech') {
                this.showFeedback("Didn't catch that. Please speak clearly.", 'info');
            } else {
                this.showFeedback('Voice input error. Try again.', 'error');
            }
        };
        
        this.recognition.onend = () => {
            clearTimeout(this.timers.voiceTimeout);
            if (this.state.isListening) { 
                this.stopListening('ended_unexpectedly');
            }
        };
    }

    setupEventListeners() {
        this.elements.settingsToggle.addEventListener('click', () => this.toggleSettings());
        ['languageSelect', 'difficultySelect', 'modeSelect', 'operationSelect'].forEach(id => {
            this.elements[id].addEventListener('change', (e) => this.updateSetting(id.replace('Select', ''), e.target.value));
        });
        
        this.setupVoiceButtonListeners();
        
        this.elements.startBtn.addEventListener('click', () => this.handleStartButton());
        this.elements.hintBtn.addEventListener('click', () => this.showHint());
        this.elements.listenBtn.addEventListener('click', () => this.speakProblem());
        
        this.elements.allowPermission?.addEventListener('click', () => this.handlePermissionGrant());
        this.elements.denyPermission?.addEventListener('click', () => this.handlePermissionDeny());
        
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
        
        document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
        window.addEventListener('focus', () => this.handleWindowFocus());
        window.addEventListener('blur', () => this.handleWindowBlur());

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            this.state.currentTheme = e.matches ? 'dark' : 'light';
            console.log('Theme changed to:', this.state.currentTheme);
        });
    }
    
    setupVoiceButtonListeners() {
        let pressTimer = null;
        let startX = 0, startY = 0;
        let movedTooFar = false;

        const onStart = (e) => {
            if (!this.state.isPlaying || !this.state.currentProblem || this.state.mode !== 'speech' || this.state.isListening || !this.recognition) return;
            e.preventDefault();
            movedTooFar = false;
            
            if (e.type.startsWith('touch')) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }
            this.elements.voiceButton.classList.add('active');
            pressTimer = setTimeout(() => {
                if (!movedTooFar) this.startListening();
            }, this.CONFIG.LONG_PRESS_DURATION);
        };

        const onEnd = (e) => {
            if (!this.recognition) return;
            // e.preventDefault(); // Removing this might help with some mobile browsers if issues persist
            this.elements.voiceButton.classList.remove('active');
            if (pressTimer) clearTimeout(pressTimer);
            pressTimer = null;
            if (this.state.isListening) this.stopListening('user_release');
        };

        const onMove = (e) => {
            if (!pressTimer || movedTooFar || !e.type.startsWith('touch')) return;
            const touch = e.touches[0];
            const deltaX = Math.abs(touch.clientX - startX);
            const deltaY = Math.abs(touch.clientY - startY);
            if (deltaX > this.CONFIG.TAP_THRESHOLD || deltaY > this.CONFIG.TAP_THRESHOLD) {
                movedTooFar = true;
                this.elements.voiceButton.classList.remove('active');
                if (pressTimer) clearTimeout(pressTimer);
                pressTimer = null;
                if (this.state.isListening) this.stopListening('user_dragged_off');
            }
        };

        this.elements.voiceButton.addEventListener('mousedown', onStart, { passive: true }); // passive true if preventDefault not needed
        this.elements.voiceButton.addEventListener('mouseup', onEnd, { passive: true });
        this.elements.voiceButton.addEventListener('mouseleave', onEnd, { passive: true });
        this.elements.voiceButton.addEventListener('touchstart', onStart, { passive: false }); // Keep false if preventDefault IS needed for touch
        this.elements.voiceButton.addEventListener('touchend', onEnd, { passive: false });
        this.elements.voiceButton.addEventListener('touchcancel', onEnd, { passive: false });
        this.elements.voiceButton.addEventListener('touchmove', onMove, { passive: false });
    }


    initializeUI() {
        this.applySettingsToUI();
        this.updateStats();
        this.updateProgress();
        this.elements.problemDisplay.innerHTML = `<span class="welcome-message">${this.getMessage('welcome')}</span>`;
        this.elements.appContainer.classList.add('loaded'); 
        this.elements.settingsPanel.setAttribute('aria-hidden', 'true');
    }

    checkReturningUser() {
        const lastVisit = this.getLocalStorage(this.CONFIG.LAST_VISIT_KEY);
        const now = Date.now();
        if (lastVisit) {
            const daysSince = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
            if (daysSince >= 1) {
                this.showFeedback(`Welcome back! Ready for more math fun? ✨`, 'info', 3000);
            }
        }
        this.setLocalStorage(this.CONFIG.LAST_VISIT_KEY, now);
    }

    toggleSettings() {
        this.state.settingsOpen = !this.state.settingsOpen;
        this.elements.settingsPanel.classList.toggle('collapsed');
        this.elements.settingsToggle.setAttribute('aria-expanded', this.state.settingsOpen.toString());
        this.elements.settingsPanel.setAttribute('aria-hidden', (!this.state.settingsOpen).toString());
        this.triggerHapticFeedback('light');
    }

    updateSetting(settingKey, value) {
        this.state[settingKey] = value;
        this.saveSettings();
        
        switch (settingKey) {
            case 'language': this.updateLanguage(); break;
            case 'mode': this.updateUIMode(); break;
            case 'difficulty':
                if (this.state.isPlaying) this.generateProblem();
                this.checkDifficultyAchievement(value);
                break;
        }
        this.triggerHapticFeedback('selection');
    }
    
    checkDifficultyAchievement(difficulty) {
        if (difficulty === 'medium') this.unlockAchievement('LEVEL_UP_MEDIUM');
        else if (difficulty === 'hard' || difficulty === 'expert') this.unlockAchievement('LEVEL_UP_HARD');
    }

    applySettingsToUI() {
        this.elements.languageSelect.value = this.state.language;
        this.elements.difficultySelect.value = this.state.difficulty;
        this.elements.modeSelect.value = this.state.mode;
        this.elements.operationSelect.value = this.state.operations;
        this.updateUIMode(); 
        this.updateLanguage(); 
    }

    saveSettings() {
        const settingsToSave = {
            language: this.state.language, difficulty: this.state.difficulty,
            mode: this.state.mode, operations: this.state.operations
        };
        this.setLocalStorage(this.CONFIG.SETTINGS_KEY, settingsToSave);
    }

    updateLanguage() {
        if (this.recognition) this.recognition.lang = this.LANGUAGES[this.state.language].code;
        this.elements.voiceHintText.textContent = this.getMessage('speak');
        if(!this.state.isPlaying && this.elements.problemDisplay) { // Check if problemDisplay exists
            this.elements.problemDisplay.innerHTML = `<span class="welcome-message">${this.getMessage('welcome')}</span>`;
        }
    }

    updateUIMode() {
        const isSpeechMode = this.state.mode === 'speech';
        this.elements.voiceMode.classList.toggle('hidden', !isSpeechMode);
        this.elements.choiceMode.classList.toggle('hidden', isSpeechMode);
        
        if (isSpeechMode && !this.state.micPermissionGranted && this.recognition && !this.state.hasAskedPermission) {
            setTimeout(() => this.checkMicrophonePermission(), 500);
        }
    }

    handleStartButton() {
        if (this.state.isProcessing) return;
        if (!this.state.isPlaying) {
            this.startNewSession();
        } else {
            this.clearFeedback();
            this.generateProblem();
        }
    }

    startNewSession() {
        this.state.sessionQuestions = 0;
        this.state.correctAnswers = 0; 
        this.state.totalQuestions = 0; 
        this.state.score = 0; 
        this.state.streak = 0; 
        this.state.sessionStartTime = Date.now();
        this.state.isPlaying = true;
        
        this.elements.startBtnText.textContent = 'Next';
        this.elements.startBtn.setAttribute('aria-label', 'Next problem');
        if (this.state.settingsOpen) this.toggleSettings();
        
        this.updateStats(); 
        this.updateProgress();
        this.generateProblem();
        this.startSessionTimer();
        this.triggerHapticFeedback('impact');
    }

    generateProblem() {
        if (this.state.isProcessing) return;
        this.state.isProcessing = true;
        this.showLoading(true, 100); 
        this.clearFeedback();
        if (this.synth) this.synth.cancel(); 
        
        if(this.elements.problemCard) this.elements.problemCard.classList.add('problem-card-out');

        setTimeout(() => {
            const difficulty = this.DIFFICULTIES[this.state.difficulty];
            const availableOps = this.state.operations === 'all' 
                ? difficulty.operations 
                : [this.state.operations];
            const operation = availableOps[Math.floor(Math.random() * availableOps.length)];
            
            this.state.currentProblem = this.createProblem(operation, difficulty);
            this.state.attemptsLeft = this.CONFIG.MAX_ATTEMPTS;
            this.state.problemStartTime = Date.now();
            
            this.displayProblem(); 
            if (this.state.mode.startsWith('choice')) this.setupChoices();
            
            this.startProblemTimer();
            if(this.elements.hintBtn) this.elements.hintBtn.disabled = false;
            if(this.elements.listenBtn) this.elements.listenBtn.disabled = !this.synth;

            setTimeout(() => this.speakProblem(), this.CONFIG.ANIMATION_DURATION + 100);
            
            this.state.isProcessing = false;
            this.showLoading(false);
            if(this.elements.problemCard) this.elements.problemCard.classList.remove('problem-card-out'); 
        }, this.CONFIG.ANIMATION_DURATION); 
    }

    createProblem(operation, difficulty) {
        let op1, op2, ans;
        const { min, max } = difficulty;
        switch (operation) {
            case 'add':
                op1 = this.randomInt(min, max); op2 = this.randomInt(min, max); ans = op1 + op2; break;
            case 'subtract':
                op1 = this.randomInt(min + Math.max(1, Math.floor(max * 0.2)), max); 
                op2 = this.randomInt(min, op1); ans = op1 - op2; break;
            case 'multiply':
                const maxMult = Math.min(12, Math.max(2, Math.floor(Math.sqrt(max))));
                op1 = this.randomInt(Math.max(1,min), maxMult); op2 = this.randomInt(Math.max(1,min), maxMult); ans = op1 * op2; break;
            case 'divide':
                const maxDivisor = Math.min(12, Math.max(2, Math.floor(max / 2)));
                op2 = this.randomInt(Math.max(1,min === 0 ? 1 : min), maxDivisor); 
                ans = this.randomInt(Math.max(1,min), Math.max(2, Math.floor(max / op2))); 
                op1 = op2 * ans; 
                if (op2 === 0) { 
                    return this.createProblem(operation, difficulty);
                }
                break;
            default: throw new Error(`Unknown operation: ${operation}`);
        }
        return { operand1: op1, operand2: op2, operation, answer: ans };
    }

    displayProblem() {
        const { operand1, operand2, operation } = this.state.currentProblem;
        const symbols = { add: '+', subtract: '−', multiply: '×', divide: '÷' };
        this.elements.problemDisplay.innerHTML = `
            <span class="problem-operand">${operand1}</span>
            <span class="problem-operator">${symbols[operation]}</span>
            <span class="problem-operand">${operand2}</span>
            <span class="problem-equals">= ?</span>
        `;
        this.elements.problemCard.classList.remove('hidden'); 
        this.elements.problemTimer.classList.remove('hidden');
        this.elements.problemCard.style.animation = 'none'; 
        requestAnimationFrame(() => { 
            this.elements.problemCard.style.animation = `scaleUpIn ${this.CONFIG.ANIMATION_DURATION}ms var(--ease-out-quad)`;
        });
    }

    setupChoices() {
        const choiceCount = this.state.mode === 'choice3' ? 3 : 5;
        const { answer } = this.state.currentProblem;
        const choices = new Set([answer]);
        const difficultyRange = Math.max(5, Math.floor(answer * 0.3) + this.DIFFICULTIES[this.state.difficulty].max * 0.1);

        while (choices.size < choiceCount) {
            let wrongAnswer;
            const plusMinus = Math.random() < 0.5 ? -1 : 1;
            if (answer < 10 && answer > -10) { 
                 wrongAnswer = answer + plusMinus * this.randomInt(1, 3);
            } else { 
                 wrongAnswer = answer + plusMinus * this.randomInt(1, Math.max(2,Math.floor(difficultyRange * Math.random() + 1)));
            }
            if (wrongAnswer !== answer && wrongAnswer >=0) choices.add(wrongAnswer); 
        }
        
        this.state.currentChoices = Array.from(choices).sort(() => Math.random() - 0.5);
        this.elements.choiceButtons.innerHTML = ''; 
        this.state.currentChoices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice;
            button.setAttribute('data-answer', choice);
            button.addEventListener('click', () => this.handleChoice(choice, button));
            button.style.setProperty('--animation-delay', `${index * 50}ms`);
            button.classList.add('animate-in'); 
            this.elements.choiceButtons.appendChild(button);
        });
    }

    startListening() {
        if (!this.recognition || this.state.isListening || !this.state.currentProblem || !this.state.micPermissionGranted) {
            if (!this.state.micPermissionGranted && this.recognition) this.checkMicrophonePermission(true); // Interactive check
            return;
        }
        try {
            this.recognition.lang = this.LANGUAGES[this.state.language].code; 
            this.recognition.start();
            this.state.voiceUsageCount++;
        } catch (error) {
            console.error('Recognition start error:', error);
            this.showFeedback('Could not start voice input.', 'error');
            this.stopListening('start_error');
        }
    }

    stopListening(reason = 'unknown') {
        if (!this.recognition) return;
        this.state.isListening = false;
        this.elements.voiceButton.classList.remove('listening', 'active');
        this.elements.voiceWave.classList.add('hidden');
        this.elements.voiceHintText.textContent = this.getMessage('speak');
        clearTimeout(this.timers.voiceTimeout);
        try {
             // Check if recognition is actually running before trying to stop
            if (this.recognition.readyState === 1 /* SpeechRecognition.LISTENING */ || 
                (this.recognition.readyState === undefined && this.state.isListening) /* Fallback for some browsers */) {
                this.recognition.stop();
            }
        } catch (error) { /* console.error('Recognition stop error:', error); */ }
    }


    processVoiceResult(alternatives) {
        const correctAnswer = this.state.currentProblem.answer;
        let recognizedAnswer = null;
        let highestConfidence = 0;

        for (const alt of alternatives) {
            const number = this.extractNumber(alt.transcript);
            if (number !== null) {
                if (alt.confidence > this.CONFIG.VOICE_CONFIDENCE_THRESHOLD && alt.confidence > highestConfidence) {
                    recognizedAnswer = number;
                    highestConfidence = alt.confidence;
                } else if (recognizedAnswer === null) { 
                    recognizedAnswer = number;
                }
            }
        }
        
        if (recognizedAnswer !== null) {
            this.checkAnswer(recognizedAnswer);
        } else {
            this.showFeedback(`Heard "${alternatives[0]?.transcript || 'nothing'}". Please say just the number.`, 'info', 3000);
            this.state.attemptsLeft--;
            if (this.state.attemptsLeft <= 0) this.handleIncorrect();
        }
    }

    extractNumber(text) {
        text = text.toLowerCase().trim().replace(/[,.]/g, ''); 
        
        const directNum = parseInt(text.match(/-?\d+/)?.[0]);
        if (!isNaN(directNum)) return directNum;

        const numWords = {
            'zero':0,'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9,'ten':10,
            'eleven':11,'twelve':12,'thirteen':13,'fourteen':14,'fifteen':15,'sixteen':16,'seventeen':17,
            'eighteen':18,'nineteen':19,'twenty':20,'thirty':30,'forty':40,'fifty':50,'sixty':60,
            'seventy':70,'eighty':80,'ninety':90,'hundred':100,'thousand':1000,
        };
        const words = text.split(/\s+/);
        for (const word of words) {
            if (numWords.hasOwnProperty(word)) return numWords[word];
        }
        return null;
    }

    handleChoice(answer, buttonElement) {
        if (this.state.isProcessing) return;
        this.state.isProcessing = true; 
        
        this.qsAll(this.elements.choiceButtons, '.choice-btn').forEach(btn => btn.disabled = true);
        this.checkAnswer(parseInt(answer), buttonElement); 
    }

    checkAnswer(answer, buttonElement = null) {
        const correct = answer === this.state.currentProblem.answer;
        const responseTime = Date.now() - this.state.problemStartTime;
        this.stopProblemTimer();
        
        this.state.totalQuestions++;
        if (correct) this.handleCorrect(responseTime, buttonElement);
        else this.handleIncorrect(buttonElement);
        
        this.updateStats();
        this.updateProgress();
        this.checkAchievements();
        
        const advanceDelay = correct ? (this.state.streak >=3 ? 1500 : 2000) : 3000;
        setTimeout(() => {
            this.nextProblem();
            this.state.isProcessing = false; 
        }, advanceDelay);
    }

    handleCorrect(responseTime, buttonElement) {
        this.state.correctAnswers++;
        this.state.streak++;
        
        const baseScore = 10;
        const timeBonus = Math.max(0, Math.floor((this.CONFIG.PROBLEM_TIME_LIMIT - responseTime) / 2000)); 
        const streakBonus = Math.min(this.state.streak * 2, 20);
        const difficultyMultiplier = this.DIFFICULTIES[this.state.difficulty].scoreMultiplier;
        const points = Math.floor((baseScore + timeBonus + streakBonus) * difficultyMultiplier);
        this.state.score += points;
        
        if (this.state.streak > this.state.bestStreak) this.state.bestStreak = this.state.streak;
        
        if (buttonElement) buttonElement.classList.add('correct');
        
        const messages = this.getMessages('correct');
        this.showFeedback(`${messages[this.randomInt(0, messages.length - 1)]} +${points} points!`, 'success');
        this.triggerHapticFeedback('success');
        
        if (this.state.streak >= 3 && this.state.streak % 3 === 0) this.showConfetti(); 
        if (responseTime < 3000) this.unlockAchievement('SPEED_DEMON');
        if (this.state.correctAnswers === 1) this.unlockAchievement('FIRST_CORRECT');
    }

    handleIncorrect(buttonElement = null) {
        this.state.streak = 0;
        if (buttonElement) {
            buttonElement.classList.add('incorrect');
            setTimeout(() => {
                const correctBtn = Array.from(this.elements.choiceButtons.children)
                    .find(btn => parseInt(btn.dataset.answer) === this.state.currentProblem.answer);
                if (correctBtn) {
                    correctBtn.classList.add('correct-reveal'); 
                    Array.from(this.elements.choiceButtons.children).forEach(btn => {
                        if (btn !== correctBtn && btn !== buttonElement) btn.classList.add('faded');
                    });
                }
            }, 800);
        }
        
        const messages = this.getMessages('incorrect');
        this.showFeedback(
            `${messages[this.randomInt(0, messages.length - 1)]} The answer was ${this.state.currentProblem.answer}.`,
            'error', 3000 
        );
        this.triggerHapticFeedback('error');
    }

    nextProblem() {
        this.state.sessionQuestions++;
        if (this.elements.choiceButtons) { 
             this.qsAll(this.elements.choiceButtons, '.choice-btn').forEach(btn => {
                btn.classList.remove('correct-reveal', 'faded');
                btn.disabled = false; 
             });
        }

        if (this.state.sessionQuestions >= this.CONFIG.SESSION_LENGTH) {
            this.endSession();
        } else {
            this.generateProblem();
        }
    }

    endSession() {
        this.state.isPlaying = false;
        this.stopSessionTimer();
        this.stopProblemTimer();
        
        const accuracy = this.state.totalQuestions > 0 ? Math.round((this.state.correctAnswers / this.state.totalQuestions) * 100) : 0;
        
        if (accuracy === 100 && this.state.sessionQuestions === this.CONFIG.SESSION_LENGTH) {
            this.unlockAchievement('PERFECT_SESSION');
        }
        this.saveStats();
        
        this.elements.problemDisplay.innerHTML = `
            <div class="session-complete">
                <h2>${this.getMessage('sessionComplete')}</h2>
                <div class="session-stats-summary">
                    <div><span>🏆 Score:</span> <strong>${this.state.score}</strong></div>
                    <div><span>🎯 Accuracy:</span> <strong>${accuracy}%</strong></div>
                    <div><span>🔥 Best Streak:</span> <strong>${this.state.bestStreak}</strong></div>
                </div>
                <p>Keep practicing to get even better!</p>
            </div>`;
        
        this.elements.startBtnText.textContent = 'New Session';
        this.elements.startBtn.setAttribute('aria-label', 'Start new session');
        this.elements.problemTimer.classList.add('hidden');
        if(this.elements.hintBtn) this.elements.hintBtn.disabled = true;
        if(this.elements.listenBtn) this.elements.listenBtn.disabled = true;
        
        this.showConfetti(100); 
        this.triggerHapticFeedback('success');
    }

    speakProblem() {
        if (!this.state.currentProblem || !this.synth || !this.voiceMap) {
            if (!this.synth) console.warn("SpeakProblem: Speech synthesis not available.");
            return;
        }
        
        const { operand1, operand2, operation } = this.state.currentProblem;
        const opWord = this.LANGUAGES[this.state.language].operations[operation];
        const textToSpeak = `${operand1} ${opWord} ${operand2}`;
        
        this.synth.cancel(); 
        
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        const selectedVoice = this.voiceMap[this.state.language];
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        } else {
            console.warn(`No specific voice found for ${this.state.language}. Using default.`);
        }
        
        utterance.lang = this.LANGUAGES[this.state.language].code; 
        utterance.rate = this.CONFIG.SPEECH_RATE;
        utterance.pitch = this.CONFIG.SPEECH_PITCH;
        utterance.volume = this.CONFIG.SPEECH_VOLUME; 

        this.elements.listenBtn.classList.add('loading');
        utterance.onend = () => {
            this.elements.listenBtn.classList.remove('loading');
        };
        utterance.onerror = (event) => {
            this.elements.listenBtn.classList.remove('loading');
            console.error('Speech synthesis error:', event.error, event.message);
            this.showFeedback('Sorry, could not speak the problem.', 'error');
        };
        
        this.synth.speak(utterance);
    }

    showHint() {
        if (!this.state.currentProblem || !this.state.isPlaying) return;
        const { operation } = this.state.currentProblem;
        const hint = this.LANGUAGES[this.state.language].messages.hint[operation];
        this.showFeedback(`💡 ${hint}`, 'info', 4000);
        this.state.score = Math.max(0, this.state.score - Math.floor(this.DIFFICULTIES[this.state.difficulty].scoreMultiplier * 2)); 
        this.updateStats();
        this.triggerHapticFeedback('light');
    }

    showFeedback(message, type = 'info', duration = this.CONFIG.FEEDBACK_DURATION) {
        clearTimeout(this.timers.feedback);
        this.elements.feedback.innerHTML = message; 
        this.elements.feedback.className = `feedback-display visible ${type}`;
        this.timers.feedback = setTimeout(() => this.clearFeedback(), duration);
    }

    clearFeedback() {
        this.elements.feedback.classList.remove('visible');
        setTimeout(() => {
            if (!this.elements.feedback.classList.contains('visible')) { 
                this.elements.feedback.textContent = '';
                this.elements.feedback.className = 'feedback-display';
            }
        }, this.CONFIG.ANIMATION_DURATION);
    }

    updateStats() {
        this.elements.score.textContent = this.state.score;
        this.elements.streak.textContent = this.state.streak;
        const accuracyVal = this.state.totalQuestions > 0 
            ? Math.round((this.state.correctAnswers / this.state.totalQuestions) * 100) 
            : 100;
        this.elements.accuracy.textContent = `${accuracyVal}%`;
    }

    updateProgress() {
        const progressPercent = (this.state.sessionQuestions / this.CONFIG.SESSION_LENGTH) * 100;
        this.elements.progressFill.style.width = `${progressPercent}%`;
        this.elements.progressFill.setAttribute('aria-valuenow', this.state.sessionQuestions.toString());
        this.elements.sessionProgress.textContent = `${this.state.sessionQuestions}/${this.CONFIG.SESSION_LENGTH}`;
    }
    
    showLoading(isLoading, delay = 0) {
        if (!this.elements.loadingOverlay) { // Guard against undefined element
            console.warn("showLoading: loadingOverlay element not found.");
            return;
        }
        if (isLoading) {
            this.elements.loadingOverlay.classList.remove('hidden');
        } else {
            setTimeout(() => this.elements.loadingOverlay.classList.add('hidden'), delay);
        }
    }

    startSessionTimer() {
        this.stopSessionTimer(); 
        this.elements.timer.textContent = '0:00'; 
        this.timers.session = setInterval(() => {
            if (!this.state.isPlaying || !this.state.sessionStartTime) {
                this.stopSessionTimer(); return;
            }
            const elapsed = Math.floor((Date.now() - this.state.sessionStartTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            this.elements.timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }
    stopSessionTimer() { if (this.timers.session) clearInterval(this.timers.session); this.timers.session = null; }

    startProblemTimer() {
        this.stopProblemTimer(); 
        const duration = this.CONFIG.PROBLEM_TIME_LIMIT;
        this.elements.timerProgress.style.transition = 'none'; 
        this.elements.timerProgress.style.width = '100%';
        this.elements.timerProgress.setAttribute('aria-valuenow', '100');
        
        requestAnimationFrame(() => { 
            this.elements.timerProgress.style.transition = `width ${duration}ms linear`;
            this.elements.timerProgress.style.width = '0%';
            this.elements.timerProgress.setAttribute('aria-valuenow', '0');
        });
        
        this.timers.problem = setTimeout(() => {
            if (this.state.currentProblem && this.state.isPlaying) { 
                this.showFeedback("Time's up! ⌛", "error");
                this.handleIncorrect(); 
                this.nextProblem();
            }
        }, duration);
    }
    stopProblemTimer() {
        if (this.timers.problem) clearTimeout(this.timers.problem);
        this.timers.problem = null;
        const currentWidth = window.getComputedStyle(this.elements.timerProgress).width;
        this.elements.timerProgress.style.transition = 'none';
        this.elements.timerProgress.style.width = currentWidth;
    }

    checkAchievements() {
        if (this.state.streak === 5) this.unlockAchievement('STREAK_5');
        else if (this.state.streak === 10) this.unlockAchievement('STREAK_10');
        if (this.state.voiceUsageCount >= 10) this.unlockAchievement('VOICE_MASTER');
    }

    unlockAchievement(id) {
        if (this.state.achievements.has(id) || !this.CONFIG.ACHIEVEMENTS[id]) return;
        this.state.achievements.add(id);
        this.setLocalStorage(this.CONFIG.ACHIEVEMENTS_KEY, Array.from(this.state.achievements));
        this.showAchievementToast(id); 
    }

    showAchievementToast(id) {
        const ach = this.CONFIG.ACHIEVEMENTS[id];
        this.elements.achievementTitle.textContent = ach.name;
        this.elements.achievementDesc.textContent = ach.description;
        this.qs(this.elements.achievementToast, '.achievement-icon').textContent = ach.icon;
        
        this.elements.achievementToast.classList.remove('hidden');
        requestAnimationFrame(() => this.elements.achievementToast.classList.add('visible')); 
        
        this.triggerHapticFeedback('success');
        clearTimeout(this.timers.achievement);
        this.timers.achievement = setTimeout(() => {
            this.elements.achievementToast.classList.remove('visible');
            setTimeout(() => this.elements.achievementToast.classList.add('hidden'), this.CONFIG.ANIMATION_DURATION);
        }, this.CONFIG.TOAST_DURATION);
    }

    showConfetti(count = this.CONFIG.CONFETTI_COUNT) {
        this.elements.confettiContainer.innerHTML = ''; 
        for (let i = 0; i < count; i++) {
            const c = document.createElement('div');
            c.className = 'confetti';
            c.style.left = `${Math.random() * 100}%`;
            c.style.animationDelay = `${Math.random() * 0.5}s`; 
            c.style.setProperty('--random', Math.random().toString()); 
            const hue = Math.random() * 360;
            c.style.backgroundColor = `hsl(${hue}, 90%, 65%)`;
            if (i % 3 === 0) c.style.borderRadius = '50%';
            if (i % 4 === 0) { c.style.width = '5px'; c.style.height = '15px'; }
            this.elements.confettiContainer.appendChild(c);
        }
        setTimeout(() => this.elements.confettiContainer.innerHTML = '', this.CONFIG.CONFETTI_DURATION + 500);
    }

    async checkMicrophonePermission(interactive = false) {
        if (!this.recognition) return; 
        if (this.state.micPermissionGranted) return; 
        
        try {
            if (navigator.permissions && navigator.permissions.query) {
                const permStatus = await navigator.permissions.query({ name: 'microphone' });
                if (permStatus.state === 'granted') {
                    this.onMicPermissionGranted();
                } else if (permStatus.state === 'denied' && !interactive) {
                    this.onMicPermissionDenied(false); 
                } else { 
                    if (interactive) this.requestMicPermission(); else this.showPermissionModal();
                }
                permStatus.onchange = () => { 
                    if (permStatus.state === 'granted') this.onMicPermissionGranted();
                    else this.onMicPermissionDenied(true); 
                };
            } else { 
                if (interactive) this.requestMicPermission(); else this.showPermissionModal();
            }
        } catch (error) {
            console.warn('Permission query error:', error);
            if (interactive) this.requestMicPermission(); 
            else this.showPermissionModal(); 
        }
    }
    
    async requestMicPermission() { 
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            stream.getTracks().forEach(track => track.stop()); 
            this.onMicPermissionGranted();
        } catch (err) { 
            console.warn('Microphone access denied by user or error:', err.name, err.message);
            this.onMicPermissionDenied(true);
        }
    }

    onMicPermissionGranted() {
        this.state.micPermissionGranted = true;
        this.state.hasAskedPermission = true;
        this.setLocalStorage(this.CONFIG.PERMISSION_KEY, 'granted');
        this.elements.permissionModal.classList.add('hidden');
        this.showFeedback('Microphone enabled! 🎤', 'success', 2000);
    }

    onMicPermissionDenied(switchModeIfNeeded) {
        this.state.micPermissionGranted = false;
        this.state.hasAskedPermission = true; 
        this.setLocalStorage(this.CONFIG.PERMISSION_KEY, 'denied');
        this.elements.permissionModal.classList.add('hidden');
        if (switchModeIfNeeded && this.state.mode === 'speech') {
            this.showFeedback('Voice input disabled. Switched to choice mode.', 'info', 3000);
            this.updateSetting('mode', 'choice3'); 
            if (this.elements.modeSelect) this.elements.modeSelect.value = 'choice3';
        }
    }

    showPermissionModal() {
        if (this.state.hasAskedPermission && !this.state.micPermissionGranted) { 
            this.showFeedback("Enable microphone in browser settings to use voice input.", "info", 4000);
            return;
        }
        this.elements.permissionModal.classList.remove('hidden');
    }

    handlePermissionGrant() { this.requestMicPermission(); }
    handlePermissionDeny() { this.onMicPermissionDenied(true); } 

    handleKeyboardShortcuts(e) {
        if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return; 

        if (e.key === ' ' && this.state.mode === 'speech' && this.state.isPlaying && this.recognition) {
            e.preventDefault();
            if (this.state.isListening) this.elements.voiceButton.dispatchEvent(new MouseEvent('mouseup')); 
            else this.elements.voiceButton.dispatchEvent(new MouseEvent('mousedown')); 
        } else if (e.key === 'Enter' && !this.state.isPlaying) {
            this.handleStartButton();
        } else if (this.state.isPlaying) {
            if (e.key === 'h' || e.key === 'H') this.showHint();
            else if (e.key === 'l' || e.key === 'L') this.speakProblem();
            else if (this.state.mode.startsWith('choice') && this.state.currentChoices.length > 0) {
                const numKey = parseInt(e.key);
                if (numKey >= 1 && numKey <= this.state.currentChoices.length) {
                    const choiceButtons = this.qsAll(this.elements.choiceButtons, '.choice-btn');
                    if (choiceButtons[numKey-1]) choiceButtons[numKey-1].click();
                }
            }
        }
    }
    handleVisibilityChange() { if (document.hidden && this.state.isListening) this.stopListening('visibility_hidden'); }
    handleWindowFocus() { }
    handleWindowBlur() { if (this.state.isListening) this.stopListening('window_blur'); }

    qs(parent, selector) { return parent.querySelector(selector); }
    qsAll(parent, selector) { return Array.from(parent.querySelectorAll(selector)); } // Ensure it's an array
    getMessage(key) { return this.LANGUAGES[this.state.language]?.messages?.[key] || key; }
    getMessages(key) { return this.LANGUAGES[this.state.language]?.messages?.[key] || [key]; }
    randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
    debounce(func, wait) {
        let timeout;
        return (...args) => {
            const later = () => { clearTimeout(timeout); func(...args); };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    triggerHapticFeedback(type = 'light') {
        if ('vibrate' in navigator && window.navigator.vibrate) {
            const patterns = {
                light: [10], selection: [15], impact: [30],
                success: [20, 50, 20], error: [50, 30, 50],
                doubletap: [0, 20, 50, 20]
            };
            try { navigator.vibrate(patterns[type] || patterns.light); } catch (e) { /* ignore */ }
        }
    }
    setLocalStorage(key, value) { try { localStorage.setItem(this.CONFIG.STORAGE_PREFIX + key, JSON.stringify(value)); } catch (e) { console.warn('LocalStorage set error:', e); } }
    getLocalStorage(key) { try { const i = localStorage.getItem(this.CONFIG.STORAGE_PREFIX + key); return i ? JSON.parse(i) : null; } catch (e) { console.warn('LocalStorage get error:', e); return null; } }
    saveStats() {
        this.setLocalStorage(this.CONFIG.STATS_KEY, {
            bestStreak: this.state.bestStreak, totalScore: this.state.score, 
        });
    }

    destroy() {
        console.log('Destroying MathAssistant instance');
        Object.values(this.timers).forEach(t => { if (t) clearTimeout(t) || clearInterval(t); });
        if (this.synth) this.synth.cancel();
        if (this.recognition) { 
            this.recognition.onstart = null; this.recognition.onresult = null; 
            this.recognition.onerror = null; this.recognition.onend = null;
            try { this.recognition.abort(); } catch(e) {/*ignore*/}
        }
    }
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        // Prevent SW registration on file:// protocol
        if (window.location.protocol === 'file:') {
            console.warn('[SW] Service Worker registration skipped. App is running on file:// protocol. Serve via HTTP/HTTPS for PWA features.');
            return;
        }
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js', { scope: '/' })
                .then(registration => {
                    console.log('[SW] Registered successfully. Scope:', registration.scope);
                    registration.onupdatefound = () => {
                        const installingWorker = registration.installing;
                        if (installingWorker) {
                            installingWorker.onstatechange = () => {
                                if (installingWorker.state === 'installed') {
                                    if (navigator.serviceWorker.controller) {
                                        console.log('[SW] New content is available and will be used when all tabs for this scope are closed.');
                                    } else {
                                        console.log('[SW] Content is cached for offline use.');
                                    }
                                }
                            };
                        }
                    };
                })
                .catch(error => {
                    console.error('[SW] Registration failed:', error);
                });
        });
    } else {
        console.log('[SW] Not supported by this browser.');
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.mathAssistant = new MathAssistant();
        registerServiceWorker();
    });
} else {
    window.mathAssistant = new MathAssistant();
    registerServiceWorker();
}

window.addEventListener('beforeunload', () => {
    if (window.mathAssistant) {
        window.mathAssistant.saveStats(); 
        // window.mathAssistant.destroy(); // Optional: explicit cleanup if needed for complex scenarios
    }
});
