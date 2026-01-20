document.addEventListener('DOMContentLoaded', () => {
    const dVol = document.getElementById('doubler-vol');
    const tNic = document.getElementById('target-nic');
    const bNic = document.getElementById('base-nic');
    const resNic = document.getElementById('res-nic-ml');
    const resPlain = document.getElementById('res-plain-ml');
    const resTotal = document.getElementById('res-total');

    function calc() {
        const vol = parseFloat(dVol.value) || 0;
        const target = parseFloat(tNic.value) || 0;
        const base = parseFloat(bNic.value) || 0;

        if (vol <= 0 || base <= 0) return;

        // Doublers are usually 50% concentrate. Final vol = vol * 2
        const total = vol * 2;
        const nicNeeded = (target * total) / base;
        const plainNeeded = vol - nicNeeded;

        resNic.textContent = nicNeeded.toFixed(2) + ' ml';
        resPlain.textContent = plainNeeded.toFixed(2) + ' ml';
        resTotal.textContent = total.toFixed(2) + ' ml';
    }

    [dVol, tNic, bNic].forEach(i => i.addEventListener('input', calc));
    calc();
});