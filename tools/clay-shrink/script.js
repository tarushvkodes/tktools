document.addEventListener('DOMContentLoaded', () => {
    // Card 1: Shrinkage Rate
    const wetSizeInput = document.getElementById('wet-size');
    const firedSizeInput = document.getElementById('fired-size');
    const resPercent = document.getElementById('res-percent');

    // Card 2: Target Wet Size
    const targetSizeInput = document.getElementById('target-size');
    const shrinkageRateInput = document.getElementById('shrinkage-rate');
    const resThrow = document.getElementById('res-throw');

    // Listeners
    wetSizeInput.addEventListener('input', calculateRate);
    firedSizeInput.addEventListener('input', calculateRate);

    targetSizeInput.addEventListener('input', calculateTarget);
    shrinkageRateInput.addEventListener('input', calculateTarget);

    function calculateRate() {
        const wet = parseFloat(wetSizeInput.value);
        const fired = parseFloat(firedSizeInput.value);

        if (wet && fired && wet > 0) {
            // Formula: ((Wet - Fired) / Wet) * 100
            const shrinkage = ((wet - fired) / wet) * 100;
            resPercent.textContent = shrinkage.toFixed(2) + '%';
            
            // Optional: Auto-fill the second calculator if empty
            if (!shrinkageRateInput.value) {
                shrinkageRateInput.value = shrinkage.toFixed(2);
                calculateTarget();
            }
        } else {
            resPercent.textContent = '0.0%';
        }
    }

    function calculateTarget() {
        const target = parseFloat(targetSizeInput.value);
        const rate = parseFloat(shrinkageRateInput.value);

        if (target && rate !== undefined) {
            // Formula: Target / (1 - (Rate / 100))
            const decimalRate = rate / 100;
            if (decimalRate >= 1) {
                resThrow.textContent = 'Error';
                return;
            }
            const requiredWet = target / (1 - decimalRate);
            resThrow.textContent = requiredWet.toFixed(2);
        } else {
            resThrow.textContent = '0.0';
        }
    }
});