const canvas = document.getElementById('skeleton-canvas');
const controls = {
    radius: document.getElementById('radius'),
    baseColor: document.getElementById('base-color'),
    highlightColor: document.getElementById('highlight-color'),
    speed: document.getElementById('speed')
};
const labels = {
    radius: document.getElementById('val-radius'),
    speed: document.getElementById('val-speed')
};

let selectedElement = null;
let elements = []; // Store state {id, type, x, y, w, h}

// CSS Updater
function updateCanvasStyles() {
    const r = controls.radius.value;
    const base = controls.baseColor.value;
    const highlight = controls.highlightColor.value;
    const speed = controls.speed.value;

    labels.radius.innerText = `${r}px`;
    labels.speed.innerText = `${speed}s`;

    // Update CSS Variables on Canvas for Preview
    canvas.style.setProperty('--base', base);
    canvas.style.setProperty('--highlight', highlight);

    // Update all items
    const items = document.querySelectorAll('.skeleton-item');
    items.forEach(item => {
        // Text lines usually have smaller radius or fixed.
        // Let's just apply global radius for now for simplicity, or override if circle.
        if (!item.classList.contains('circle')) {
            item.style.borderRadius = `${r}px`;
        } else {
            item.style.borderRadius = '50%';
        }

        item.style.animationDuration = `${speed}s`;

        // Re-apply gradient with new colors
        item.style.background = `linear-gradient(to right, ${base} 8%, ${highlight} 18%, ${base} 33%)`;
        item.style.backgroundSize = '800px 100%';
    });
}

// Event Listeners for Controls
Object.values(controls).forEach(input => {
    input.addEventListener('input', updateCanvasStyles);
});

// Element Creation
function addElement(type) {
    const el = document.createElement('div');
    el.classList.add('skeleton-item', 'shimmer');
    el.dataset.id = Date.now();

    // Defaults
    let w = 100, h = 100;

    if (type === 'rect') {
        w = 120; h = 80;
    } else if (type === 'circle') {
        w = 60; h = 60;
        el.classList.add('circle');
        el.style.borderRadius = '50%';
    } else if (type === 'text') {
        w = 200; h = 20;
    }

    el.style.width = `${w}px`;
    el.style.height = `${h}px`;
    el.style.left = '20px';
    el.style.top = '20px';

    // Resize Handle
    const handle = document.createElement('div');
    handle.classList.add('resize-handle');
    el.appendChild(handle);

    // Interaction
    el.addEventListener('mousedown', (e) => {
        if (e.target === handle) return; // Allow resize logic to take over
        selectElement(el);
        startDrag(e, el);
    });

    handle.addEventListener('mousedown', (e) => {
        e.stopPropagation(); // Don't trigger drag
        startResize(e, el);
    });

    canvas.appendChild(el);
    selectElement(el);
    updateCanvasStyles(); // Apply current styles
}

function selectElement(el) {
    if (selectedElement) selectedElement.classList.remove('selected');
    selectedElement = el;
    el.classList.add('selected');
}

// Drag Logic
function startDrag(e, el) {
    const startX = e.clientX;
    const startY = e.clientY;
    const rect = el.getBoundingClientRect();
    const offsetX = startX - rect.left;
    const offsetY = startY - rect.top;

    function move(e) {
        const canvasRect = canvas.getBoundingClientRect();
        let newX = e.clientX - canvasRect.left - offsetX;
        let newY = e.clientY - canvasRect.top - offsetY;

        // Boundary checks (optional, loose for now)
        el.style.left = `${newX}px`;
        el.style.top = `${newY}px`;
    }

    function stop() {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', stop);
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', stop);
}

// Resize Logic
function startResize(e, el) {
    const startX = e.clientX;
    const startY = e.clientY;
    const startW = parseInt(document.defaultView.getComputedStyle(el).width, 10);
    const startH = parseInt(document.defaultView.getComputedStyle(el).height, 10);

    function resize(e) {
        const w = startW + (e.clientX - startX);
        const h = startH + (e.clientY - startY);
        el.style.width = `${w}px`;
        el.style.height = `${h}px`;
    }

    function stop() {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stop);
    }

    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stop);
}

// Export Logic
document.getElementById('copy-btn').addEventListener('click', () => {
    const items = document.querySelectorAll('.skeleton-item');
    if (items.length === 0) return;

    // Generate CSS
    const base = controls.baseColor.value;
    const highlight = controls.highlightColor.value;
    const speed = controls.speed.value;
    const radius = controls.radius.value;

    let css = `
/* TrueSkeleton Generated Styles */
.skeleton-wrapper {
    position: relative;
    width: 100%; /* Or fixed width */
    height: 100%;
}
@keyframes shimmer {
    0% { background-position: -800px 0; }
    100% { background-position: 800px 0; }
}
.skeleton-box {
    position: absolute;
    background: #f6f7f8;
    background: linear-gradient(to right, ${base} 8%, ${highlight} 18%, ${base} 33%);
    background-size: 800px 100%;
    animation: shimmer ${speed}s linear infinite forwards;
    border-radius: ${radius}px;
}
.skeleton-box.circle { border-radius: 50%; }
`;

    // Generate HTML
    let html = `<div class="skeleton-wrapper">\n`;

    items.forEach(item => {
        const top = item.style.top;
        const left = item.style.left;
        const width = item.style.width;
        const height = item.style.height;
        const isCircle = item.classList.contains('circle');

        html += `  <div class="skeleton-box ${isCircle ? 'circle' : ''}" style="top: ${top}; left: ${left}; width: ${width}; height: ${height};"></div>\n`;
    });

    html += `</div>`;

    const fullCode = css + '\n\n' + html;

    navigator.clipboard.writeText(fullCode).then(() => {
        const fb = document.getElementById('copy-feedback');
        fb.classList.add('visible');
        setTimeout(() => fb.classList.remove('visible'), 2000);
    });
});

// Clear
document.getElementById('clear-btn').addEventListener('click', () => {
    canvas.innerHTML = '';
    selectedElement = null;
});
