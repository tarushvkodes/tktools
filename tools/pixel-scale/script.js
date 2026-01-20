document.addEventListener('DOMContentLoaded', () => {
    // --- Scaler Logic ---
    const spriteW = document.getElementById('sprite-w');
    const spriteH = document.getElementById('sprite-h');
    const targetSelect = document.getElementById('target-res');
    const customGroup = document.getElementById('custom-res-group');
    const targetW = document.getElementById('target-w');
    const targetH = document.getElementById('target-h');
    
    const resScale = document.getElementById('res-scale');
    const resFinalDim = document.getElementById('res-final-dim');
    const resBorder = document.getElementById('res-border');

    function updateScaler() {
        const sw = parseFloat(spriteW.value) || 1;
        const sh = parseFloat(spriteH.value) || 1;
        let tw, th;

        if (targetSelect.value === 'custom') {
            customGroup.classList.remove('hidden');
            tw = parseFloat(targetW.value) || 1920;
            th = parseFloat(targetH.value) || 1080;
        } else {
            customGroup.classList.add('hidden');
            const [w, h] = targetSelect.value.split(',').map(Number);
            tw = w;
            th = h;
        }

        // Calculate max integer scale that fits
        const scaleW = Math.floor(tw / sw);
        const scaleH = Math.floor(th / sh);
        const scale = Math.min(scaleW, scaleH);

        if (scale < 1) {
            resScale.textContent = "Too Big!";
            resFinalDim.textContent = "Sprite larger than target";
            resBorder.textContent = "";
            return;
        }

        const finalW = sw * scale;
        const finalH = sh * scale;
        const borderW = tw - finalW;
        const borderH = th - finalH;

        resScale.textContent = scale + "x";
        resFinalDim.textContent = `Final Size: ${finalW} x ${finalH}`;
        resBorder.textContent = `Borders: ${borderW}px (W) / ${borderH}px (H)`;
    }

    // --- Print Logic ---
    const printH = document.getElementById('print-h');
    const aspectSelect = document.getElementById('aspect-ratio');
    const dpiInput = document.getElementById('dpi');
    const resCanvasPx = document.getElementById('res-canvas-px');
    const resPhysW = document.getElementById('res-phys-w');

    function updatePrint() {
        const heightIn = parseFloat(printH.value) || 0;
        const ratio = parseFloat(aspectSelect.value) || 1;
        const dpi = parseFloat(dpiInput.value) || 300;

        const widthIn = heightIn * ratio;
        const pxW = Math.round(widthIn * dpi);
        const pxH = Math.round(heightIn * dpi);

        resCanvasPx.textContent = `${pxW} x ${pxH} px`;
        resPhysW.textContent = `Physical Width: ${widthIn.toFixed(2)} in`;
    }

    // Events
    [spriteW, spriteH, targetW, targetH].forEach(el => el.addEventListener('input', updateScaler));
    targetSelect.addEventListener('change', updateScaler);
    
    [printH, aspectSelect, dpiInput].forEach(el => el.addEventListener('input', updatePrint));

    // Init
    updateScaler();
    updatePrint();
});