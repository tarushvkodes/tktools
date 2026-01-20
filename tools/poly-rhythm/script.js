document.addEventListener('DOMContentLoaded', () => {
    const beatAInput = document.getElementById('beat-a');
    const beatBInput = document.getElementById('beat-b');
    const bpmInput = document.getElementById('bpm');
    const bpmVal = document.getElementById('bpm-val');
    const playBtn = document.getElementById('play-btn');
    
    const dotsA = document.getElementById('dots-a');
    const dotsB = document.getElementById('dots-b');
    
    const canvas = document.getElementById('poly-canvas');
    const ctx = canvas.getContext('2d');

    let isPlaying = false;
    let audioCtx = null;
    let nextNoteTime = 0;
    let timerID = null;
    let countA = 0;
    let countB = 0;
    
    // Config
    let beatsA = 3;
    let beatsB = 4;
    let bpm = 60;
    
    // Animation
    let startTime = 0;
    let cycleDuration = 0;

    // Init UI
    function init() {
        renderDots();
        drawWheel(0);
        
        bpmInput.addEventListener('input', () => {
            bpm = parseInt(bpmInput.value);
            bpmVal.textContent = bpm + ' BPM';
            if(isPlaying) updateTiming();
        });

        [beatAInput, beatBInput].forEach(inp => {
            inp.addEventListener('input', () => {
                beatsA = parseInt(beatAInput.value);
                beatsB = parseInt(beatBInput.value);
                renderDots();
                if(isPlaying) updateTiming();
                else drawWheel(0);
            });
        });

        playBtn.addEventListener('click', togglePlay);
    }

    function togglePlay() {
        if (isPlaying) {
            isPlaying = false;
            playBtn.textContent = '▶ Play';
            playBtn.classList.remove('playing');
            cancelAnimationFrame(timerID);
            // Reset visuals
            drawWheel(0);
        } else {
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            isPlaying = true;
            playBtn.textContent = '⏹ Stop';
            playBtn.classList.add('playing');
            
            startTime = audioCtx.currentTime;
            updateTiming();
            scheduleLoop();
            animate();
        }
    }

    function updateTiming() {
        // Calculate the common cycle time
        // We want the SLOWER beat to define the measure or average them?
        // Let's say BPM defines quarter notes.
        // For polyrhythms, usually we set a base pulse.
        // Let's make "BPM" refer to the cycle duration for simplicity in this visualizer?
        // Or standard: BPM is beats per minute.
        // Let's treat BeatsA as the reference for BPM.
        
        const secondsPerBeat = 60.0 / bpm;
        cycleDuration = secondsPerBeat * beatsA; // One full cycle of the pattern
    }

    function scheduleLoop() {
        if (!isPlaying) return;
        
        const currentTime = audioCtx.currentTime;
        
        // Lookahead
        while (nextNoteTime < currentTime + 0.1) {
            // Determine which beats hit at this time?
            // Actually, better scheduler:
            // We have two independent loops.
            // Loop A interval: cycleDuration / beatsA
            // Loop B interval: cycleDuration / beatsB
            
            // This simple scheduler is tricky for polyrhythms.
            // Let's use the animation loop for visual sync + simple audio trigger for now
            // or separate schedulers.
            // Simplified: Re-calc next hit for A and B.
        }
        // requestAnimationFrame(scheduleLoop); // Using the main animate loop instead for simplicity
    }
    
    // Better Audio/Visual Loop
    function animate() {
        if (!isPlaying) return;

        const currentTime = audioCtx.currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = (elapsedTime % cycleDuration) / cycleDuration; // 0 to 1

        drawWheel(progress);
        checkHits(progress);

        timerID = requestAnimationFrame(animate);
    }

    let lastProgress = 0;
    
    function checkHits(progress) {
        if (progress < lastProgress) {
            // Wrapped around
            playTone(440, 'high'); // Cycle start
            flashDot(dotsA, 0);
            flashDot(dotsB, 0);
        }
        
        // Check A beats
        // Triggers at 0/A, 1/A, 2/A...
        for (let i = 1; i < beatsA; i++) {
            const trigger = i / beatsA;
            if (lastProgress < trigger && progress >= trigger) {
                playTone(330, 'low');
                flashDot(dotsA, i);
            }
        }

        // Check B beats
        for (let i = 1; i < beatsB; i++) {
            const trigger = i / beatsB;
            if (lastProgress < trigger && progress >= trigger) {
                playTone(200, 'low'); // Different tone
                flashDot(dotsB, i);
            }
        }

        lastProgress = progress;
    }

    function playTone(freq, type) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = type === 'high' ? 'triangle' : 'sine';
        osc.frequency.value = freq;
        
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    }

    function renderDots() {
        dotsA.innerHTML = '';
        dotsB.innerHTML = '';
        
        for(let i=0; i<beatsA; i++) {
            const d = document.createElement('div');
            d.className = 'dot';
            dotsA.appendChild(d);
        }
        
        for(let i=0; i<beatsB; i++) {
            const d = document.createElement('div');
            d.className = 'dot';
            dotsB.appendChild(d);
        }
    }

    function flashDot(container, index) {
        const dots = container.children;
        if(dots[index]) {
            dots[index].classList.add('active');
            setTimeout(() => dots[index].classList.remove('active'), 100);
        }
    }

    function drawWheel(progress) {
        ctx.clearRect(0,0,300,300);
        const cx = 150, cy = 150, r = 100;

        // Base Circle
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI*2);
        ctx.stroke();

        // Cursor
        const angle = (Math.PI * 2 * progress) - (Math.PI / 2); // Start at top
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(cx + Math.cos(angle)*r, cy + Math.sin(angle)*r, 5, 0, Math.PI*2);
        ctx.fill();

        // Markers A (Blue)
        for(let i=0; i<beatsA; i++) {
            const a = (Math.PI * 2 * (i/beatsA)) - (Math.PI / 2);
            ctx.fillStyle = '#74b9ff';
            ctx.beginPath();
            ctx.arc(cx + Math.cos(a)*r, cy + Math.sin(a)*r, 4, 0, Math.PI*2);
            ctx.fill();
        }

        // Markers B (Green)
        for(let i=0; i<beatsB; i++) {
            const a = (Math.PI * 2 * (i/beatsB)) - (Math.PI / 2);
            ctx.fillStyle = '#55efc4';
            ctx.beginPath();
            // Offset radius slightly to see overlap
            ctx.arc(cx + Math.cos(a)*(r-10), cy + Math.sin(a)*(r-10), 4, 0, Math.PI*2);
            ctx.fill();
        }
    }

    init();
});