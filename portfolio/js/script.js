document.addEventListener('DOMContentLoaded', function() {
    // Modified intro animation to properly handle HTML
    const introText = document.querySelector('#intro-text .response');
    if (introText) {
        // Store the original HTML content
        const originalHTML = `
            <p>HELLO WORLD! I'M <span class="highlight">DMITRIY NOVOZHENOV</span></p>
            <p>FULL-STACK DEVELOPER | AI TAMER | BLOCKCHAIN ENTHUSIAST</p>
            <p>SYSTEM READY FOR INTERACTION...</p>
        `;
        
        // Clear the content initially
        introText.innerHTML = '';
        
        // Create text nodes for each line to be typed
        const lines = [
            'HELLO WORLD! I\'M DMITRIY NOVOZHENOV',
            'FULL-STACK DEVELOPER | AI TAMER | BLOCKCHAIN ENTHUSIAST',
            'SYSTEM READY FOR INTERACTION...'
        ];
        
        let lineIndex = 0;
        let charIndex = 0;
        const typingSpeed = 30; // milliseconds per character
        
        function typeWriter() {
            if (lineIndex < lines.length) {
                // If we're at the start of a line, create a new paragraph
                if (charIndex === 0) {
                    const p = document.createElement('p');
                    introText.appendChild(p);
                }
                
                const currentLine = lines[lineIndex];
                const currentP = introText.querySelector('p:last-child');
                
                if (charIndex < currentLine.length) {
                    // Special handling for the name highlight
                    if (lineIndex === 0 && charIndex === 17) { // Position where name starts
                        const nameSpan = document.createElement('span');
                        nameSpan.className = 'highlight';
                        nameSpan.textContent = 'DMITRIY NOVOZHENOV';
                        currentP.textContent = 'HELLO WORLD! I\'M ';
                        currentP.appendChild(nameSpan);
                        charIndex = currentLine.length; // Skip to end of line
                    } else if (lineIndex !== 0 || charIndex < 17) {
                        // Normal character typing for non-highlighted text
                        currentP.textContent += currentLine.charAt(charIndex);
                        charIndex++;
                    }
                    setTimeout(typeWriter, typingSpeed);
                } else {
                    // Move to next line
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeWriter, typingSpeed * 3); // Longer pause between lines
                }
            } else {
                // Add blinking cursor after typing is complete
                const lastP = introText.querySelector('p:last-child');
                const cursor = document.createElement('span');
                cursor.className = 'cursor';
                lastP.appendChild(cursor);
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Add terminal prompt cursor blinking effect to all terminal windows
    const terminalWindows = document.querySelectorAll('.terminal-window');
    terminalWindows.forEach(window => {
        const responseElements = window.querySelectorAll('.response');
        responseElements.forEach(response => {
            if (!response.querySelector('.cursor')) {
                const lastParagraph = response.querySelector('p:last-child');
                if (lastParagraph) {
                    const cursor = document.createElement('span');
                    cursor.className = 'cursor';
                    lastParagraph.appendChild(cursor);
                }
            }
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add CRT flicker effect before scrolling
            document.body.classList.add('crt-flicker');
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Add a small delay for the CRT effect
                setTimeout(() => {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Remove flicker effect after scrolling
                    setTimeout(() => {
                        document.body.classList.remove('crt-flicker');
                    }, 500);
                }, 200);
            }
        });
    });
    
    // Add retro hover sound effect to buttons
    const retroButtons = document.querySelectorAll('.retro-button');
    retroButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            playRetroSound('hover');
        });
        
        button.addEventListener('click', function() {
            playRetroSound('click');
        });
    });
    
    // Function to play retro sound effects
    function playRetroSound(type) {
        // This is a placeholder - in a real implementation, you would create and play actual sound effects
        // For now, we'll just log to console to avoid adding sound files
        console.log(`Playing ${type} sound effect`);
    }
    
    // CRT transition effect removed as per user request
    
    // Add scan line animation to terminal windows on hover
    terminalWindows.forEach(window => {
        window.addEventListener('mouseenter', function() {
            this.classList.add('scan-active');
        });
        
        window.addEventListener('mouseleave', function() {
            this.classList.remove('scan-active');
        });
    });
    
    // Add retro startup animation
    function playStartupAnimation() {
        const container = document.querySelector('.container');
        
        // Hide all content initially
        container.style.opacity = '0';
        
        // Create startup screen
        const startupScreen = document.createElement('div');
        startupScreen.className = 'startup-screen';
        startupScreen.innerHTML = `
            <div class="startup-content">
                <p class="startup-text">INITIALIZING SYSTEM...</p>
                <div class="loading-bar">
                    <div class="loading-progress"></div>
                </div>
                <p class="startup-info">RETRO-FUTURISTIC OS v1.0</p>
                <p class="startup-info">© 2025 DMITRIY NOVOZHENOV</p>
            </div>
        `;
        document.body.appendChild(startupScreen);
        
        // Animate loading bar
        setTimeout(() => {
            const loadingProgress = document.querySelector('.loading-progress');
            loadingProgress.style.width = '100%';
        }, 100);
        
        // Remove startup screen and show content after animation
        setTimeout(() => {
            startupScreen.classList.add('fade-out');
            
            setTimeout(() => {
                startupScreen.remove();
                container.style.opacity = '1';
                container.classList.add('fade-in');
            }, 500);
        }, 2500);
    }
    
    // Start the startup animation
    playStartupAnimation();
    
    // Add additional CSS for JavaScript-powered effects
    function addDynamicStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .crt-flicker {
                animation: flicker 0.3s infinite;
            }
            
            @keyframes flicker {
                0% { opacity: 1; }
                25% { opacity: 0.8; }
                50% { opacity: 0.9; }
                75% { opacity: 0.7; }
                100% { opacity: 1; }
            }
            
            .crt-transition {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #000;
                opacity: 0;
                pointer-events: none;
                z-index: 9999;
                transition: all 0.3s ease;
            }
            
            .crt-transition.active {
                opacity: 0.7;
            }
            
            .scan-active::before {
                background: repeating-linear-gradient(
                    0deg,
                    rgba(255, 255, 255, 0.1),
                    rgba(255, 255, 255, 0.1) 2px,
                    transparent 2px,
                    transparent 4px
                );
                animation: scan 0.5s linear infinite;
            }
            
            @keyframes scan {
                0% { background-position: 0 0; }
                100% { background-position: 0 100px; }
            }
            
            .startup-screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #000;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                transition: opacity 0.5s ease;
            }
            
            .startup-screen.fade-out {
                opacity: 0;
            }
            
            .startup-content {
                text-align: center;
                color: #4aff91;
                font-family: 'VT323', monospace;
            }
            
            .startup-text {
                font-size: 2rem;
                margin-bottom: 20px;
            }
            
            .loading-bar {
                width: 300px;
                height: 20px;
                background-color: #333;
                border: 2px solid #4aff91;
                margin: 0 auto 20px;
                overflow: hidden;
            }
            
            .loading-progress {
                height: 100%;
                width: 0;
                background-color: #4aff91;
                transition: width 2s ease-in-out;
            }
            
            .startup-info {
                font-size: 1rem;
                margin-bottom: 10px;
                opacity: 0.7;
            }
            
            .fade-in {
                animation: fadeIn 1s ease forwards;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(styleElement);
    }
    
    // Add dynamic styles
    addDynamicStyles();
});
