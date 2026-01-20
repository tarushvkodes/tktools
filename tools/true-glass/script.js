// Elements
const controls = {
    blur: document.getElementById('blur'),
    opacity: document.getElementById('opacity'),
    color: document.getElementById('color'),
    saturation: document.getElementById('saturation'),
    noiseOpacity: document.getElementById('noise-opacity'),
    noiseDensity: document.getElementById('noise-density')
};

const labels = {
    blur: document.getElementById('val-blur'),
    opacity: document.getElementById('val-opacity'),
    saturation: document.getElementById('val-sat'),
    noiseOpacity: document.getElementById('val-noise'),
    noiseDensity: document.getElementById('val-density')
};

const preview = document.getElementById('glass-preview');
const copyBtn = document.getElementById('copy-btn');
const copyFeedback = document.getElementById('copy-feedback');

// State
let state = {
    blur: 20,
    opacity: 0.25,
    color: '#ffffff',
    saturation: 180,
    noiseOpacity: 0.15,
    noiseDensity: 1.0
};

// Utils
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

function generateNoiseSVG(density, opacity) {
    // BaseFrequency acts as density. Steps: 0.5 -> 5.0 maps to roughly 0.6 -> 3.0?
    // Actually standard feTurbulence baseFrequency is usually around 0.5-2.0 for grain.
    // Let's map slider 0.5-5.0 to 0.4-1.5 range for good grain.
    const freq = (density * 0.2) + 0.3;

    const svg = `
<svg viewBox="0 0 200 200" xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='${freq}' 
      numOctaves='3' 
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='${opacity}'/>
</svg>`;

    return `url("data:image/svg+xml,${encodeURIComponent(svg.trim())}")`;
}

// Update Function
function updatePreview() {
    // Update Text Labels
    labels.blur.innerText = `${state.blur}px`;
    labels.opacity.innerText = state.opacity;
    labels.saturation.innerText = `${state.saturation}%`;
    labels.noiseOpacity.innerText = state.noiseOpacity;
    labels.noiseDensity.innerText = state.noiseDensity;

    // Calc Values
    const rgb = hexToRgb(state.color);
    const noiseImage = generateNoiseSVG(state.noiseDensity, state.noiseOpacity);

    // Apply Styles
    preview.style.backgroundColor = `rgba(${rgb}, ${state.opacity})`;
    preview.style.backdropFilter = `blur(${state.blur}px) saturate(${state.saturation}%)`;
    preview.style.webkitBackdropFilter = `blur(${state.blur}px) saturate(${state.saturation}%)`;

    // Noise Logic: We use a pseudo-element logic in CSS usually, but for inline styles we can create a background 
    // stack. We can't easily do pseudo-elements via inline styles. 
    // Hack: Set the background-image to noise. 
    // BUT, we need background-color too. 
    // CSS syntax: background: [image] [position] / [size], [color];
    preview.style.backgroundImage = noiseImage;
    preview.style.backgroundBlendMode = 'overlay'; // Ensure noise blends nicely
    preview.style.border = `1px solid rgba(${rgb}, 0.2)`;
    preview.style.boxShadow = `0 8px 32px 0 rgba(0, 0, 0, 0.3)`;
}

// Event Listeners
Object.keys(controls).forEach(key => {
    controls[key].addEventListener('input', (e) => {
        state[key] = e.target.value;
        updatePreview();
    });
});

// Drag Logic
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

preview.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragEnd);
document.addEventListener("mousemove", drag);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    if (e.target === preview || preview.contains(e.target)) {
        isDragging = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        preview.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    }
}

// Copy Logic
copyBtn.addEventListener('click', () => {
    const rgb = hexToRgb(state.color);
    const noiseSVG = generateNoiseSVG(state.noiseDensity, state.noiseOpacity);

    // We want the user to paste this into a class.
    const css = `.glass {
    /* From TKTools TrueGlass */
    background-color: rgba(${rgb}, ${state.opacity});
    backdrop-filter: blur(${state.blur}px) saturate(${state.saturation}%);
    -webkit-backdrop-filter: blur(${state.blur}px) saturate(${state.saturation}%);
    background-image: ${noiseSVG};
    background-blend-mode: overlay;
    border: 1px solid rgba(${rgb}, 0.2);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}`;

    navigator.clipboard.writeText(css).then(() => {
        copyFeedback.classList.add('visible');
        setTimeout(() => {
            copyFeedback.classList.remove('visible');
        }, 2000);
    });
});

// Init
updatePreview();
