/**
 * Kids Math Assistant - Mobile-First Enhanced Version
 * Optimized for perfect UX, persistent permissions, and smooth performance
 */

class MathAssistant {
    constructor() {
        // Enhanced configuration with mobile-first defaults
        this.CONFIG = {
            // Session settings
            MAX_ATTEMPTS: 3,
            SESSION_LENGTH: 10,
            PROBLEM_TIME_LIMIT: 30000, // 30 seconds
            
            // Visual effects
            CONFETTI_COUNT: 30,
            CONFETTI_DURATION: 2500,
            FEEDBACK_DURATION: 2500,
            TOAST_DURATION: 3000,
            
            // Speech settings
            SPEECH_RATE: 0.85,
            SPEECH_PITCH: 1.1,
            SPEECH_VOLUME: 1.0,
            VOICE_CONFIDENCE_THRESHOLD: 0.7,
            
            // Performance
            DEBOUNCE_DELAY: 150,
            ANIMATION_DURATION: 250,
            
            // Touch settings
            LONG_PRESS_DURATION: 200,
            TAP_THRESHOLD: 10,
            
            // Storage keys
            STORAGE_PREFIX: 'mathkids_',
            PERMISSION_KEY: 'mic_permission',
            SETTINGS_KEY: 'user_settings',
            ACHIEVEMENTS_KEY: 'achievements',
            STATS_KEY: 'stats',
            
            // Achievements
            ACHIEVEMENTS: {
                FIRST_CORRECT: {
                    name: "First Steps!",
                    description: "Got your first answer correct!",
                    icon: "🎯"
                },
                STREAK_5: {
                    name: "On Fire!",
                    description: "5 correct answers in a row!",
                    icon: "🔥"
                },
                STREAK_10: {
                    name: "Math Master!",
                    description: "10 correct answers in a row!",
                    icon: "👑"
                },
                SPEED_DEMON: {
                    name: "Lightning Fast!",
                    description: "Answered in under 3 seconds!",
                    icon: "⚡"
                },
                PERFECT_SESSION: {
                    name: "Perfect Score!",
                    description: "100% accuracy in a session!",
                    icon: "💯"
                },
                VOICE_MASTER: {
                    name: "Voice Champion!",
                    description: "Used voice input 10 times!",
                    icon: "🎤"
                }
            }
        };

        // Enhanced language support
        this.LANGUAGES = {
            en: {
                code: 'en-US',
                name: 'English',
                operations: {
                    add: 'plus',
                    subtract: 'minus',
                    multiply: 'times',
                    divide: 'divided by'
                },
                messages: {
                    correct: ['Awesome! 🎉', 'Perfect! ⭐', 'Brilliant! 🌟', 'Amazing! 🔥'],
                    incorrect: ['Try again! 💪', 'Not quite! 🤔', 'Keep going! 👍'],
                    hint: {
                        add: 'Count up from the first number',
                        subtract: 'Count down from the first number',
                        multiply: 'Add the first number that many times',
                        divide: 'How many groups can you make?'
                    },
                    listening: 'Listening... 🎤',
                    speak: 'Say your answer!',
                    welcome: 'Ready to learn math? 🚀',
                    sessionComplete: 'Great job! Session complete! 🎊'
                }
            },
            es: {
                code: 'es-ES',
                name: 'Español',
                operations: {
                    add: 'más',
                    subtract: 'menos',
                    multiply: 'por',
                    divide: 'dividido por'
                },
                messages: {
                    correct: ['¡Genial! 🎉', '¡Perfecto! ⭐', '¡Brillante! 🌟', '¡Increíble! 🔥'],
                    incorrect: ['¡Inténtalo! 💪', '¡Casi! 🤔', '¡Sigue! 👍'],
                    hint: {
                        add: 'Cuenta hacia arriba desde el primer número',
                        subtract: 'Cuenta hacia atrás desde el primer número',
                        multiply: 'Suma el primer número esas veces',
                        divide: '¿Cuántos grupos puedes hacer?'
                    },
                    listening: 'Escuchando... 🎤',
                    speak: '¡Di tu respuesta!',
                    welcome: '¿Listo para aprender? 🚀',
                    sessionComplete: '¡Buen trabajo! ¡Sesión completa! 🎊'
                }
            },
            fr: {
                code: 'fr-FR',
                name: 'Français',
                operations: {
                    add: 'plus',
                    subtract: 'moins',
                    multiply: 'fois',
                    divide: 'divisé par'
                },
                messages: {
                    correct: ['Génial! 🎉', 'Parfait! ⭐', 'Brillant! 🌟', 'Incroyable! 🔥'],
                    incorrect: ['Réessaye! 💪', 'Presque! 🤔', 'Continue! 👍'],
                    hint: {
                        add: 'Compte à partir du premier nombre',
                        subtract: 'Compte à rebours depuis le premier nombre',
                        multiply: 'Ajoute le premier nombre autant de fois',
                        divide: 'Combien de groupes peux-tu faire?'
                    },
                    listening: 'J\'écoute... 🎤',
                    speak: 'Dis ta réponse!',
                    welcome: 'Prêt à apprendre? 🚀',
                    sessionComplete: 'Bon travail! Session terminée! 🎊'
                }
            },
            de: {
                code: 'de-DE',
                name: 'Deutsch',
                operations: {
                    add: 'plus',
                    subtract: 'minus',
                    multiply: 'mal',
                    divide: 'geteilt durch'
                },
                messages: {
                    correct: ['Toll! 🎉', 'Perfekt! ⭐', 'Brillant! 🌟', 'Fantastisch! 🔥'],
                    incorrect: ['Nochmal! 💪', 'Fast! 🤔', 'Weiter! 👍'],
                    hint: {
                        add: 'Zähle von der ersten Zahl aufwärts',
                        subtract: 'Zähle von der ersten Zahl rückwärts',
                        multiply: 'Addiere die erste Zahl so oft',
                        divide: 'Wie viele Gruppen kannst du machen?'
                    },
                    listening: 'Ich höre zu... 🎤',
                    speak: 'Sag deine Antwort!',
                    welcome: 'Bereit zu lernen? 🚀',
                    sessionComplete: 'Gut gemacht! Sitzung beendet! 🎊'
                }
            },
            it: {
                code: 'it-IT',
                name: 'Italiano',
                operations: {
                    add: 'più',
                    subtract: 'meno',
                    multiply: 'per',
                    divide: 'diviso'
                },
                messages: {
                    correct: ['Ottimo! 🎉', 'Perfetto! ⭐', 'Brillante! 🌟', 'Fantastico! 🔥'],
                    incorrect: ['Riprova! 💪', 'Quasi! 🤔', 'Continua! 👍'],
                    hint: {
                        add: 'Conta dal primo numero',
                        subtract: 'Conta indietro dal primo numero',
                        multiply: 'Aggiungi il primo numero tante volte',
                        divide: 'Quanti gruppi puoi fare?'
                    },
                    listening: 'Sto ascoltando... 🎤',
                    speak: 'Di\' la tua risposta!',
                    welcome: 'Pronto per imparare? 🚀',
                    sessionComplete: 'Ottimo lavoro! Sessione completata! 🎊'
                }
            }
        };

        // Difficulty presets with progressive challenges
        this.DIFFICULTIES = {
            easy: {
                min: 1,
                max: 10,
                operations: ['add', 'subtract'],
                timeBonus: 15000, // 15 seconds
                scoreMultiplier: 1
            },
            medium: {
                min: 1,
                max: 25,
                operations: ['add', 'subtract', 'multiply'],
                timeBonus: 20000, // 20 seconds
                scoreMultiplier: 1.5
            },
            hard: {
                min: 1,
                max: 50,
                operations: ['add', 'subtract', 'multiply', 'divide'],
                timeBonus: 25000, // 25 seconds
                scoreMultiplier: 2
            },
            expert: {
                min: 10,
                max: 100,
                operations: ['add', 'subtract', 'multiply', 'divide'],
                timeBonus: 30000, // 30 seconds
                scoreMultiplier: 3
            }
        };

        // Initialize core systems
        this.initializeApp();
    }

    async initializeApp() {
        try {
            // Set dynamic viewport height for mobile
            this.setDynamicViewportHeight();
            
            // Initialize DOM elements
            this.initializeElements();
            
            // Initialize state management
            this.initializeState();
            
            // Load saved data
            await this.loadSavedData();
            
            // Initialize speech systems
            await this.initializeSpeechSystems();
            
            // Set up event listeners
            this.setupEventListeners();
            
            // Initialize UI
            this.initializeUI();
            
            // Check for returning user
            this.checkReturningUser();
            
        } catch (error) {
            console.error('Initialization error:', error);
            this.showFeedback('Something went wrong. Please refresh.', 'error');
        }
    }

    setDynamicViewportHeight() {
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            document.documentElement.style.setProperty('--vw', `${window.innerWidth * 0.01}px`);
        };
        
        setVH();
        window.addEventListener('resize', this.debounce(setVH, 100));
        window.addEventListener('orientationchange', () => setTimeout(setVH, 100));
    }

    initializeElements() {
        this.elements = {
            // Header
            settingsToggle: document.getElementById('settingsToggle'),
            settingsPanel: document.getElementById('settingsPanel'),
            
            // Settings
            languageSelect: document.getElementById('languageSelect'),
            difficultySelect: document.getElementById('difficultySelect'),
            modeSelect: document.getElementById('modeSelect'),
            operationSelect: document.getElementById('operationSelect'),
            
            // Stats
            score: document.getElementById('score'),
            streak: document.getElementById('streak'),
            accuracy: document.getElementById('accuracy'),
            timer: document.getElementById('timer'),
            
            // Game area
            problemCard: document.getElementById('problemCard'),
            problemDisplay: document.getElementById('problemDisplay'),
            problemTimer: document.getElementById('problemTimer'),
            timerProgress: document.getElementById('timerProgress'),
            
            // Answer modes
            answerArea: document.getElementById('answerArea'),
            voiceMode: document.getElementById('voiceMode'),
            voiceButton: document.getElementById('voiceButton'),
            voiceWave: document.getElementById('voiceWave'),
            choiceMode: document.getElementById('choiceMode'),
            choiceButtons: document.getElementById('choiceButtons'),
            
            // Feedback
            feedback: document.getElementById('feedback'),
            
            // Actions
            hintBtn: document.getElementById('hintBtn'),
            startBtn: document.getElementById('startBtn'),
            listenBtn: document.getElementById('listenBtn'),
            
            // Progress
            progressFill: document.getElementById('progressFill'),
            sessionProgress: document.getElementById('sessionProgress'),
            
            // Modals and overlays
            achievementToast: document.getElementById('achievementToast'),
            achievementTitle: document.getElementById('achievementTitle'),
            achievementDesc: document.getElementById('achievementDesc'),
            permissionModal: document.getElementById('permissionModal'),
            allowPermission: document.getElementById('allowPermission'),
            denyPermission: document.getElementById('denyPermission'),
            loadingOverlay: document.getElementById('loadingOverlay'),
            confettiContainer: document.getElementById('confetti-container')
        };
    }

    initializeState() {
        this.state = {
            // Settings
            language: 'en',
            difficulty: 'easy',
            mode: 'speech',
            operations: 'all',
            
            // Game state
            isPlaying: false,
            currentProblem: null,
            currentChoices: [],
            attemptsLeft: this.CONFIG.MAX_ATTEMPTS,
            problemStartTime: null,
            sessionStartTime: null,
            
            // Statistics
            score: 0,
            streak: 0,
            bestStreak: 0,
            totalQuestions: 0,
            correctAnswers: 0,
            sessionQuestions: 0,
            voiceUsageCount: 0,
            
            // UI state
            isListening: false,
            isProcessing: false,
            settingsOpen: false,
            
            // Permissions
            micPermissionGranted: false,
            hasAskedPermission: false,
            
            // Achievements
            achievements: new Set(),
            newAchievements: []
        };
        
        // Timers and intervals
        this.timers = {
            session: null,
            problem: null,
            feedback: null,
            achievement: null
        };
    }

    async loadSavedData() {
        try {
            // Load settings
            const savedSettings = this.getLocalStorage(this.CONFIG.SETTINGS_KEY);
            if (savedSettings) {
                Object.assign(this.state, savedSettings);
                this.applySettings();
            }
            
            // Load achievements
            const savedAchievements = this.getLocalStorage(this.CONFIG.ACHIEVEMENTS_KEY);
            if (savedAchievements) {
                this.state.achievements = new Set(savedAchievements);
            }
            
            // Load stats
            const savedStats = this.getLocalStorage(this.CONFIG.STATS_KEY);
            if (savedStats) {
                this.state.bestStreak = savedStats.bestStreak || 0;
            }
            
            // Check microphone permission status
            this.state.micPermissionGranted = this.getLocalStorage(this.CONFIG.PERMISSION_KEY) === 'granted';
            
        } catch (error) {
            console.warn('Error loading saved data:', error);
        }
    }

    async initializeSpeechSystems() {
        // Initialize speech synthesis
        this.synth = window.speechSynthesis;
        this.loadVoices();
        
        // Initialize speech recognition
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.setupSpeechRecognition();
            
            // Check and request permission if needed
            if (this.state.mode === 'speech' && !this.state.micPermissionGranted && !this.state.hasAskedPermission) {
                // Delay permission request for better UX
                setTimeout(() => this.checkMicrophonePermission(), 1000);
            }
        } else {
            console.warn('Speech recognition not supported');
            this.recognition = null;
            // Switch to choice mode if speech not supported
            if (this.state.mode === 'speech') {
                this.state.mode = 'choice3';
                this.elements.modeSelect.value = 'choice3';
            }
        }
    }

    loadVoices() {
        const loadVoiceList = () => {
            this.voices = this.synth.getVoices();
            
            // Map voices by language
            this.voiceMap = {};
            Object.keys(this.LANGUAGES).forEach(lang => {
                const langCode = this.LANGUAGES[lang].code;
                this.voiceMap[lang] = this.voices.find(voice => 
                    voice.lang.startsWith(langCode.split('-')[0])
                ) || this.voices[0];
            });
        };
        
        loadVoiceList();
        this.synth.onvoiceschanged = loadVoiceList;
    }

    setupSpeechRecognition() {
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.maxAlternatives = 3;
        
        this.recognition.onstart = () => {
            this.state.isListening = true;
            this.elements.voiceButton.classList.add('listening');
            this.elements.voiceWave.classList.remove('hidden');
            this.showFeedback(this.getMessage('listening'), 'info');
            
            // Haptic feedback if available
            this.triggerHapticFeedback('light');
        };
        
        this.recognition.onresult = (event) => {
            const results = event.results[event.results.length - 1];
            
            if (results.isFinal) {
                const alternatives = Array.from(results).map(result => ({
                    transcript: result.transcript.trim(),
                    confidence: result.confidence || 0
                }));
                
                this.processVoiceResult(alternatives);
            }
        };
        
        this.recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.stopListening();
            
            if (event.error === 'not-allowed') {
                this.state.micPermissionGranted = false;
                this.setLocalStorage(this.CONFIG.PERMISSION_KEY, 'denied');
                this.showPermissionModal();
            } else {
                this.showFeedback('Could not hear you. Try again!', 'error');
            }
        };
        
        this.recognition.onend = () => {
            this.stopListening();
        };
    }

    setupEventListeners() {
        // Settings toggle
        this.elements.settingsToggle.addEventListener('click', () => this.toggleSettings());
        
        // Settings changes
        this.elements.languageSelect.addEventListener('change', () => this.updateSetting('language'));
        this.elements.difficultySelect.addEventListener('change', () => this.updateSetting('difficulty'));
        this.elements.modeSelect.addEventListener('change', () => this.updateSetting('mode'));
        this.elements.operationSelect.addEventListener('change', () => this.updateSetting('operations'));
        
        // Voice button - optimized for mobile
        this.setupVoiceButton();
        
        // Action buttons
        this.elements.startBtn.addEventListener('click', () => this.handleStartButton());
        this.elements.hintBtn.addEventListener('click', () => this.showHint());
        this.elements.listenBtn.addEventListener('click', () => this.speakProblem());
        
        // Permission modal
        this.elements.allowPermission?.addEventListener('click', () => this.handlePermissionGrant());
        this.elements.denyPermission?.addEventListener('click', () => this.handlePermissionDeny());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
        
        // Page visibility
        document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
        
        // Prevent pull-to-refresh on mobile
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 1) return;
            if (window.scrollY === 0) e.preventDefault();
        }, { passive: false });
    }

    setupVoiceButton() {
        let pressTimer = null;
        let startX = 0;
        let startY = 0;
        
        const startVoiceInput = (e) => {
            if (!this.state.isPlaying || !this.state.currentProblem) return;
            if (this.state.mode !== 'speech') return;
            
            e.preventDefault();
            
            // Store initial touch position
            if (e.type.includes('touch')) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }
            
            // Start recognition after short delay
            pressTimer = setTimeout(() => {
                this.startListening();
            }, this.CONFIG.LONG_PRESS_DURATION);
        };
        
        const endVoiceInput = (e) => {
            e.preventDefault();
            
            if (pressTimer) {
                clearTimeout(pressTimer);
                pressTimer = null;
            }
            
            if (this.state.isListening) {
                this.stopListening();
            }
        };
        
        const cancelVoiceInput = (e) => {
            // Check if touch moved too far (not a tap)
            if (e.type === 'touchmove') {
                const touch = e.touches[0];
                const deltaX = Math.abs(touch.clientX - startX);
                const deltaY = Math.abs(touch.clientY - startY);
                
                if (deltaX > this.CONFIG.TAP_THRESHOLD || deltaY > this.CONFIG.TAP_THRESHOLD) {
                    endVoiceInput(e);
                }
            } else {
                endVoiceInput(e);
            }
        };
        
        // Touch events for mobile
        this.elements.voiceButton.addEventListener('touchstart', startVoiceInput, { passive: false });
        this.elements.voiceButton.addEventListener('touchend', endVoiceInput, { passive: false });
        this.elements.voiceButton.addEventListener('touchcancel', cancelVoiceInput, { passive: false });
        this.elements.voiceButton.addEventListener('touchmove', cancelVoiceInput, { passive: false });
        
        // Mouse events for desktop
        this.elements.voiceButton.addEventListener('mousedown', startVoiceInput);
        this.elements.voiceButton.addEventListener('mouseup', endVoiceInput);
        this.elements.voiceButton.addEventListener('mouseleave', endVoiceInput);
    }

    initializeUI() {
        // Apply saved settings
        this.applySettings();
        
        // Update UI elements
        this.updateStats();
        this.updateProgress();
        
        // Show welcome message
        this.elements.problemDisplay.innerHTML = `<span class="welcome-message">${this.getMessage('welcome')}</span>`;
    }

    checkReturningUser() {
        const lastVisit = this.getLocalStorage('last_visit');
        const now = Date.now();
        
        if (lastVisit) {
            const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
            if (daysSinceLastVisit >= 1) {
                this.showFeedback(`Welcome back! Ready for more math? 🎯`, 'success');
            }
        }
        
        this.setLocalStorage('last_visit', now);
    }

    // Settings Management
    toggleSettings() {
        this.state.settingsOpen = !this.state.settingsOpen;
        this.elements.settingsPanel.classList.toggle('collapsed');
        this.elements.settingsToggle.classList.toggle('active');
        
        // Haptic feedback
        this.triggerHapticFeedback('light');
    }

    updateSetting(setting) {
        const value = this.elements[setting + 'Select'].value;
        this.state[setting] = value;
        
        // Save settings
        this.saveSettings();
        
        // Apply changes
        switch (setting) {
            case 'language':
                this.updateLanguage();
                break;
            case 'mode':
                this.updateMode();
                break;
            case 'difficulty':
                if (this.state.isPlaying) {
                    this.generateProblem();
                }
                break;
        }
        
        // Haptic feedback
        this.triggerHapticFeedback('selection');
    }

    applySettings() {
        this.elements.languageSelect.value = this.state.language;
        this.elements.difficultySelect.value = this.state.difficulty;
        this.elements.modeSelect.value = this.state.mode;
        this.elements.operationSelect.value = this.state.operations;
        
        this.updateMode();
    }

    saveSettings() {
        const settings = {
            language: this.state.language,
            difficulty: this.state.difficulty,
            mode: this.state.mode,
            operations: this.state.operations
        };
        
        this.setLocalStorage(this.CONFIG.SETTINGS_KEY, settings);
    }

    updateLanguage() {
        if (this.recognition) {
            this.recognition.lang = this.LANGUAGES[this.state.language].code;
        }
    }

    updateMode() {
        if (this.state.mode === 'speech') {
            this.elements.voiceMode.classList.remove('hidden');
            this.elements.choiceMode.classList.add('hidden');
            
            // Check microphone permission
            if (!this.state.micPermissionGranted && this.recognition) {
                this.checkMicrophonePermission();
            }
        } else {
            this.elements.voiceMode.classList.add('hidden');
            this.elements.choiceMode.classList.remove('hidden');
        }
    }

    // Game Logic
    handleStartButton() {
        if (!this.state.isPlaying) {
            this.startNewSession();
        } else {
            this.generateProblem();
        }
    }

    startNewSession() {
        // Reset session stats
        this.state.sessionQuestions = 0;
        this.state.sessionStartTime = Date.now();
        this.state.isPlaying = true;
        
        // Update UI
        this.elements.startBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5v14l11-7z"/>
            </svg>
            <span>Next</span>
        `;
        
        // Close settings if open
        if (this.state.settingsOpen) {
            this.toggleSettings();
        }
        
        // Generate first problem
        this.generateProblem();
        
        // Start session timer
        this.startSessionTimer();
        
        // Haptic feedback
        this.triggerHapticFeedback('impact');
    }

    generateProblem() {
        if (this.state.isProcessing) return;
        
        this.state.isProcessing = true;
        this.clearFeedback();
        
        // Stop any ongoing speech
        this.synth.cancel();
        
        // Generate problem based on settings
        const difficulty = this.DIFFICULTIES[this.state.difficulty];
        const availableOps = this.state.operations === 'all' ? 
            difficulty.operations : [this.state.operations];
        
        const operation = availableOps[Math.floor(Math.random() * availableOps.length)];
        const problem = this.createProblem(operation, difficulty);
        
        // Update state
        this.state.currentProblem = problem;
        this.state.attemptsLeft = this.CONFIG.MAX_ATTEMPTS;
        this.state.problemStartTime = Date.now();
        
        // Display problem
        this.displayProblem();
        
        // Setup answer mode
        if (this.state.mode.startsWith('choice')) {
            this.setupChoices();
        }
        
        // Start problem timer
        this.startProblemTimer();
        
        // Auto-speak problem
        setTimeout(() => this.speakProblem(), 300);
        
        this.state.isProcessing = false;
    }

    createProblem(operation, difficulty) {
        let operand1, operand2, answer;
        
        switch (operation) {
            case 'add':
                operand1 = this.randomInt(difficulty.min, difficulty.max);
                operand2 = this.randomInt(difficulty.min, difficulty.max);
                answer = operand1 + operand2;
                break;
                
            case 'subtract':
                operand1 = this.randomInt(difficulty.min + 5, difficulty.max);
                operand2 = this.randomInt(difficulty.min, Math.min(operand1, difficulty.max));
                answer = operand1 - operand2;
                break;
                
            case 'multiply':
                const maxMult = Math.min(12, Math.sqrt(difficulty.max));
                operand1 = this.randomInt(difficulty.min, maxMult);
                operand2 = this.randomInt(difficulty.min, maxMult);
                answer = operand1 * operand2;
                break;
                
            case 'divide':
                const divisor = this.randomInt(2, Math.min(12, difficulty.max / 2));
                answer = this.randomInt(difficulty.min, Math.min(12, difficulty.max / divisor));
                operand1 = divisor * answer;
                operand2 = divisor;
                break;
        }
        
        return { operand1, operand2, operation, answer };
    }

    displayProblem() {
        const { operand1, operand2, operation } = this.state.currentProblem;
        const symbols = {
            add: '+',
            subtract: '−',
            multiply: '×',
            divide: '÷'
        };
        
        this.elements.problemDisplay.innerHTML = `
            <span class="problem-text">${operand1} ${symbols[operation]} ${operand2} = ?</span>
        `;
        
        // Show problem timer
        this.elements.problemTimer.classList.remove('hidden');
        
        // Animate entrance
        this.elements.problemCard.style.animation = 'none';
        setTimeout(() => {
            this.elements.problemCard.style.animation = 'pulse 0.5s ease-out';
        }, 10);
    }

    setupChoices() {
        const choiceCount = this.state.mode === 'choice3' ? 3 : 5;
        const correctAnswer = this.state.currentProblem.answer;
        
        // Generate choices
        const choices = new Set([correctAnswer]);
        const range = Math.max(10, Math.floor(correctAnswer * 0.5));
        
        while (choices.size < choiceCount) {
            const variation = this.randomInt(1, range);
            const wrongAnswer = Math.random() > 0.5 ? 
                correctAnswer + variation : 
                Math.max(0, correctAnswer - variation);
            choices.add(wrongAnswer);
        }
        
        // Shuffle and store
        this.state.currentChoices = Array.from(choices).sort(() => Math.random() - 0.5);
        
        // Create choice buttons
        this.elements.choiceButtons.innerHTML = '';
        this.state.currentChoices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice;
            button.setAttribute('data-answer', choice);
            button.addEventListener('click', () => this.handleChoice(choice, button));
            
            // Animate entrance
            button.style.animationDelay = `${index * 50}ms`;
            
            this.elements.choiceButtons.appendChild(button);
        });
    }

    // Answer Handling
    startListening() {
        if (!this.recognition || this.state.isListening || !this.state.currentProblem) return;
        
        try {
            this.recognition.lang = this.LANGUAGES[this.state.language].code;
            this.recognition.start();
            
            // Track voice usage
            this.state.voiceUsageCount++;
            
        } catch (error) {
            console.error('Recognition start error:', error);
            this.showFeedback('Could not start listening', 'error');
        }
    }

    stopListening() {
        if (!this.recognition) return;
        
        this.state.isListening = false;
        this.elements.voiceButton.classList.remove('listening');
        this.elements.voiceWave.classList.add('hidden');
        
        try {
            this.recognition.stop();
        } catch (error) {
            console.error('Recognition stop error:', error);
        }
    }

    processVoiceResult(alternatives) {
        const correctAnswer = this.state.currentProblem.answer;
        let recognizedAnswer = null;
        
        // Try to extract number from alternatives
        for (const alt of alternatives) {
            const number = this.extractNumber(alt.transcript);
            if (number !== null) {
                recognizedAnswer = number;
                break;
            }
        }
        
        if (recognizedAnswer !== null) {
            this.checkAnswer(recognizedAnswer);
        } else {
            this.showFeedback(`I heard "${alternatives[0].transcript}". Please say just the number!`, 'error');
            this.state.attemptsLeft--;
            
            if (this.state.attemptsLeft <= 0) {
                this.handleIncorrect();
            }
        }
    }

    extractNumber(text) {
        // Clean and normalize text
        text = text.toLowerCase().trim();
        
        // Direct number parsing
        const directNumber = parseInt(text.replace(/[^\d-]/g, ''));
        if (!isNaN(directNumber)) return directNumber;
        
        // Number words mapping
        const numberWords = {
            'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
            'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
            'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13,
            'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17,
            'eighteen': 18, 'nineteen': 19, 'twenty': 20,
            'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60,
            'seventy': 70, 'eighty': 80, 'ninety': 90, 'hundred': 100
        };
        
        // Check for number words
        for (const [word, value] of Object.entries(numberWords)) {
            if (text.includes(word)) return value;
        }
        
        return null;
    }

    handleChoice(answer, button) {
        if (this.state.isProcessing) return;
        
        // Disable all buttons
        const buttons = this.elements.choiceButtons.querySelectorAll('.choice-btn');
        buttons.forEach(btn => btn.disabled = true);
        
        this.checkAnswer(answer, button);
    }

    checkAnswer(answer, buttonElement = null) {
        const correct = answer === this.state.currentProblem.answer;
        const responseTime = Date.now() - this.state.problemStartTime;
        
        // Stop problem timer
        this.stopProblemTimer();
        
        // Update stats
        this.state.totalQuestions++;
        
        if (correct) {
            this.handleCorrect(responseTime, buttonElement);
        } else {
            this.handleIncorrect(buttonElement);
        }
        
        // Update UI
        this.updateStats();
        this.updateProgress();
        
        // Check achievements
        this.checkAchievements();
        
        // Auto-advance
        setTimeout(() => this.nextProblem(), correct ? 2000 : 3000);
    }

    handleCorrect(responseTime, buttonElement) {
        this.state.correctAnswers++;
        this.state.streak++;
        
        // Calculate score
        const baseScore = 10;
        const timeBonus = Math.max(0, Math.floor((10000 - responseTime) / 1000));
        const streakBonus = Math.min(this.state.streak * 2, 20);
        const difficultyBonus = this.DIFFICULTIES[this.state.difficulty].scoreMultiplier;
        
        const points = Math.floor((baseScore + timeBonus + streakBonus) * difficultyBonus);
        this.state.score += points;
        
        // Update best streak
        if (this.state.streak > this.state.bestStreak) {
            this.state.bestStreak = this.state.streak;
        }
        
        // Visual feedback
        if (buttonElement) {
            buttonElement.classList.add('correct');
        }
        
        // Show feedback
        const messages = this.getMessages('correct');
        const message = messages[Math.floor(Math.random() * messages.length)];
        this.showFeedback(`${message} +${points} points!`, 'success');
        
        // Haptic feedback
        this.triggerHapticFeedback('success');
        
        // Confetti for streaks
        if (this.state.streak >= 3) {
            this.showConfetti();
        }
        
        // Check speed achievement
        if (responseTime < 3000) {
            this.unlockAchievement('SPEED_DEMON');
        }
    }

    handleIncorrect(buttonElement) {
        this.state.streak = 0;
        
        // Visual feedback
        if (buttonElement) {
            buttonElement.classList.add('incorrect');
            
            // Highlight correct answer
            setTimeout(() => {
                const correctBtn = Array.from(this.elements.choiceButtons.children)
                    .find(btn => parseInt(btn.dataset.answer) === this.state.currentProblem.answer);
                if (correctBtn) correctBtn.classList.add('correct');
            }, 500);
        }
        
        // Show feedback
        const messages = this.getMessages('incorrect');
        const message = messages[Math.floor(Math.random() * messages.length)];
        this.showFeedback(
            `${message} The answer was ${this.state.currentProblem.answer}`,
            'error'
        );
        
        // Haptic feedback
        this.triggerHapticFeedback('error');
    }

    nextProblem() {
        this.state.sessionQuestions++;
        
        if (this.state.sessionQuestions >= this.CONFIG.SESSION_LENGTH) {
            this.endSession();
        } else {
            this.generateProblem();
        }
    }

    endSession() {
        this.state.isPlaying = false;
        
        // Stop timers
        this.stopSessionTimer();
        this.stopProblemTimer();
        
        // Calculate session stats
        const accuracy = Math.round((this.state.correctAnswers / this.state.totalQuestions) * 100);
        const sessionTime = Math.floor((Date.now() - this.state.sessionStartTime) / 1000);
        
        // Check perfect session
        if (accuracy === 100 && this.state.sessionQuestions === this.CONFIG.SESSION_LENGTH) {
            this.unlockAchievement('PERFECT_SESSION');
        }
        
        // Save stats
        this.saveStats();
        
        // Show completion
        this.elements.problemDisplay.innerHTML = `
            <div class="session-complete">
                <h2>${this.getMessage('sessionComplete')}</h2>
                <div class="session-stats">
                    <div>Score: ${this.state.score}</div>
                    <div>Accuracy: ${accuracy}%</div>
                    <div>Best Streak: ${this.state.bestStreak}</div>
                </div>
            </div>
        `;
        
        // Reset button
        this.elements.startBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
            </svg>
            <span>New Session</span>
        `;
        
        // Hide problem timer
        this.elements.problemTimer.classList.add('hidden');
        
        // Celebration
        this.showConfetti();
        this.triggerHapticFeedback('success');
    }

    // Speech Functions
    speakProblem() {
        if (!this.state.currentProblem || !this.synth) return;
        
        const { operand1, operand2, operation } = this.state.currentProblem;
        const opWord = this.LANGUAGES[this.state.language].operations[operation];
        const text = `${operand1} ${opWord} ${operand2}`;
        
        // Cancel any ongoing speech
        this.synth.cancel();
        
        // Create utterance
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = this.voiceMap?.[this.state.language];
        utterance.rate = this.CONFIG.SPEECH_RATE;
        utterance.pitch = this.CONFIG.SPEECH_PITCH;
        utterance.volume = this.CONFIG.SPEECH_VOLUME;
        
        // Visual feedback
        this.elements.listenBtn.classList.add('loading');
        
        utterance.onend = () => {
            this.elements.listenBtn.classList.remove('loading');
        };
        
        utterance.onerror = () => {
            this.elements.listenBtn.classList.remove('loading');
            console.error('Speech synthesis error');
        };
        
        this.synth.speak(utterance);
    }

    showHint() {
        if (!this.state.currentProblem || !this.state.isPlaying) return;
        
        const { operation } = this.state.currentProblem;
        const hint = this.LANGUAGES[this.state.language].messages.hint[operation];
        
        this.showFeedback(`💡 ${hint}`, 'info');
        
        // Reduce score for using hint
        this.state.score = Math.max(0, this.state.score - 5);
        this.updateStats();
    }

    // UI Functions
    showFeedback(message, type = 'info') {
        // Clear existing feedback
        clearTimeout(this.timers.feedback);
        
        // Update content and style
        this.elements.feedback.textContent = message;
        this.elements.feedback.className = `feedback-display visible ${type}`;
        
        // Auto-hide
        this.timers.feedback = setTimeout(() => {
            this.clearFeedback();
        }, this.CONFIG.FEEDBACK_DURATION);
    }

    clearFeedback() {
        this.elements.feedback.classList.remove('visible');
        setTimeout(() => {
            this.elements.feedback.textContent = '';
            this.elements.feedback.className = 'feedback-display';
        }, 300);
    }

    updateStats() {
        this.elements.score.textContent = this.state.score;
        this.elements.streak.textContent = this.state.streak;
        
        const accuracy = this.state.totalQuestions > 0 ?
            Math.round((this.state.correctAnswers / this.state.totalQuestions) * 100) : 100;
        this.elements.accuracy.textContent = `${accuracy}%`;
    }

    updateProgress() {
        const progress = (this.state.sessionQuestions / this.CONFIG.SESSION_LENGTH) * 100;
        this.elements.progressFill.style.width = `${progress}%`;
        this.elements.sessionProgress.textContent = 
            `${this.state.sessionQuestions}/${this.CONFIG.SESSION_LENGTH}`;
    }

    // Timer Functions
    startSessionTimer() {
        this.timers.session = setInterval(() => {
            const elapsed = Date.now() - this.state.sessionStartTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            this.elements.timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    stopSessionTimer() {
        if (this.timers.session) {
            clearInterval(this.timers.session);
            this.timers.session = null;
        }
    }

    startProblemTimer() {
        const duration = this.CONFIG.PROBLEM_TIME_LIMIT;
        const startTime = Date.now();
        
        this.elements.timerProgress.style.transition = 'none';
        this.elements.timerProgress.style.width = '100%';
        
        setTimeout(() => {
            this.elements.timerProgress.style.transition = `width ${duration}ms linear`;
            this.elements.timerProgress.style.width = '0%';
        }, 50);
        
        this.timers.problem = setTimeout(() => {
            if (this.state.currentProblem) {
                this.handleIncorrect();
                this.nextProblem();
            }
        }, duration);
    }

    stopProblemTimer() {
        if (this.timers.problem) {
            clearTimeout(this.timers.problem);
            this.timers.problem = null;
        }
        
        // Stop animation
        const computedStyle = window.getComputedStyle(this.elements.timerProgress);
        const currentWidth = computedStyle.width;
        this.elements.timerProgress.style.transition = 'none';
        this.elements.timerProgress.style.width = currentWidth;
    }

    // Achievement System
    checkAchievements() {
        // First correct
        if (this.state.correctAnswers === 1) {
            this.unlockAchievement('FIRST_CORRECT');
        }
        
        // Streak achievements
        if (this.state.streak === 5) {
            this.unlockAchievement('STREAK_5');
        } else if (this.state.streak === 10) {
            this.unlockAchievement('STREAK_10');
        }
        
        // Voice master
        if (this.state.voiceUsageCount >= 10) {
            this.unlockAchievement('VOICE_MASTER');
        }
    }

    unlockAchievement(achievementId) {
        if (this.state.achievements.has(achievementId)) return;
        
        this.state.achievements.add(achievementId);
        this.state.newAchievements.push(achievementId);
        
        // Save achievements
        this.setLocalStorage(this.CONFIG.ACHIEVEMENTS_KEY, Array.from(this.state.achievements));
        
        // Show achievement
        this.showAchievement(achievementId);
    }

    showAchievement(achievementId) {
        const achievement = this.CONFIG.ACHIEVEMENTS[achievementId];
        
        this.elements.achievementTitle.textContent = achievement.name;
        this.elements.achievementDesc.textContent = achievement.description;
        
        // Show toast
        this.elements.achievementToast.classList.remove('hidden');
        setTimeout(() => {
            this.elements.achievementToast.classList.add('visible');
        }, 10);
        
        // Haptic feedback
        this.triggerHapticFeedback('success');
        
        // Auto-hide
        clearTimeout(this.timers.achievement);
        this.timers.achievement = setTimeout(() => {
            this.elements.achievementToast.classList.remove('visible');
            setTimeout(() => {
                this.elements.achievementToast.classList.add('hidden');
            }, 300);
        }, this.CONFIG.TOAST_DURATION);
    }

    // Visual Effects
    showConfetti() {
        // Clear existing
        this.elements.confettiContainer.innerHTML = '';
        
        // Create confetti
        for (let i = 0; i < this.CONFIG.CONFETTI_COUNT; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 1000 + 'ms';
            confetti.style.animationDuration = (2000 + Math.random() * 1000) + 'ms';
            this.elements.confettiContainer.appendChild(confetti);
        }
        
        // Clean up
        setTimeout(() => {
            this.elements.confettiContainer.innerHTML = '';
        }, this.CONFIG.CONFETTI_DURATION);
    }

    // Permissions
    async checkMicrophonePermission() {
        if (!this.recognition || this.state.hasAskedPermission) return;
        
        try {
            // Check if we can access permissions API
            if (navigator.permissions && navigator.permissions.query) {
                const result = await navigator.permissions.query({ name: 'microphone' });
                
                if (result.state === 'granted') {
                    this.state.micPermissionGranted = true;
                    this.setLocalStorage(this.CONFIG.PERMISSION_KEY, 'granted');
                } else if (result.state === 'denied') {
                    this.state.micPermissionGranted = false;
                    this.setLocalStorage(this.CONFIG.PERMISSION_KEY, 'denied');
                } else {
                    // Show permission modal
                    this.showPermissionModal();
                }
            } else {
                // Fallback: show modal if not already granted
                if (!this.state.micPermissionGranted) {
                    this.showPermissionModal();
                }
            }
        } catch (error) {
            console.warn('Permission check error:', error);
        }
    }

    showPermissionModal() {
        this.state.hasAskedPermission = true;
        this.elements.permissionModal.classList.remove('hidden');
    }

    handlePermissionGrant() {
        this.elements.permissionModal.classList.add('hidden');
        
        // Attempt to start recognition to trigger permission
        this.startListening();
        setTimeout(() => this.stopListening(), 100);
    }

    handlePermissionDeny() {
        this.elements.permissionModal.classList.add('hidden');
        this.state.micPermissionGranted = false;
        this.setLocalStorage(this.CONFIG.PERMISSION_KEY, 'denied');
        
        // Switch to choice mode
        this.state.mode = 'choice3';
        this.elements.modeSelect.value = 'choice3';
        this.updateMode();
    }

    // Event Handlers
    handleKeyboardShortcuts(e) {
        switch (e.key) {
            case ' ':
                e.preventDefault();
                if (this.state.mode === 'speech' && this.state.isPlaying) {
                    this.elements.voiceButton.dispatchEvent(new Event('mousedown'));
                }
                break;
            case 'Enter':
                if (!this.state.isPlaying) {
                    this.handleStartButton();
                }
                break;
            case 'h':
                if (this.state.isPlaying) {
                    this.showHint();
                }
                break;
            case 'l':
                if (this.state.isPlaying) {
                    this.speakProblem();
                }
                break;
        }
    }

    handleVisibilityChange() {
        if (document.hidden && this.state.isListening) {
            this.stopListening();
        }
    }

    // Utility Functions
    getMessage(key) {
        return this.LANGUAGES[this.state.language].messages[key];
    }

    getMessages(key) {
        return this.LANGUAGES[this.state.language].messages[key];
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    triggerHapticFeedback(type = 'light') {
        if ('vibrate' in navigator) {
            switch (type) {
                case 'light':
                    navigator.vibrate(10);
                    break;
                case 'selection':
                    navigator.vibrate(15);
                    break;
                case 'impact':
                    navigator.vibrate(30);
                    break;
                case 'success':
                    navigator.vibrate([20, 50, 20]);
                    break;
                case 'error':
                    navigator.vibrate([50, 30, 50]);
                    break;
            }
        }
    }

    // Storage Functions
    setLocalStorage(key, value) {
        try {
            localStorage.setItem(this.CONFIG.STORAGE_PREFIX + key, JSON.stringify(value));
        } catch (error) {
            console.warn('LocalStorage error:', error);
        }
    }

    getLocalStorage(key) {
        try {
            const item = localStorage.getItem(this.CONFIG.STORAGE_PREFIX + key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.warn('LocalStorage error:', error);
            return null;
        }
    }

    saveStats() {
        const stats = {
            bestStreak: this.state.bestStreak,
            totalScore: this.state.score,
            totalQuestions: this.state.totalQuestions,
            correctAnswers: this.state.correctAnswers
        };
        
        this.setLocalStorage(this.CONFIG.STATS_KEY, stats);
    }

    // Cleanup
    destroy() {
        // Stop all timers
        Object.values(this.timers).forEach(timer => {
            if (timer) clearTimeout(timer) || clearInterval(timer);
        });
        
        // Stop speech
        if (this.synth) this.synth.cancel();
        if (this.recognition) this.recognition.stop();
        
        // Remove event listeners
        window.removeEventListener('resize', this.setDynamicViewportHeight);
        window.removeEventListener('orientationchange', this.setDynamicViewportHeight);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.mathAssistant = new MathAssistant();
    });
} else {
    window.mathAssistant = new MathAssistant();
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration.scope))
            .catch(error => console.log('SW registration failed:', error));
    });
}

// Handle app lifecycle
window.addEventListener('beforeunload', () => {
    if (window.mathAssistant) {
        window.mathAssistant.destroy();
    }
});

// Simple service worker for offline support
const SW_CONTENT = `
const CACHE_NAME = 'mathkids-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
`;
