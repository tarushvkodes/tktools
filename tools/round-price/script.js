document.addEventListener('DOMContentLoaded', () => {
    // Inputs
    const taxRateInput = document.getElementById('tax-rate');
    const targetPriceInput = document.getElementById('target-price');
    
    // Result Elements
    const resBasePrice = document.getElementById('res-base-price');
    const resCheck = document.getElementById('res-check');

    // Generator Inputs
    const rangeStart = document.getElementById('range-start');
    const rangeEnd = document.getElementById('range-end');
    const rangeStep = document.getElementById('range-step');
    const priceTableBody = document.querySelector('#price-table tbody');

    // Listeners
    taxRateInput.addEventListener('input', updateAll);
    targetPriceInput.addEventListener('input', calculateSingle);
    rangeStart.addEventListener('input', generateTable);
    rangeEnd.addEventListener('input', generateTable);
    rangeStep.addEventListener('input', generateTable);

    function updateAll() {
        calculateSingle();
        generateTable();
    }

    function calculateSingle() {
        const taxRate = parseFloat(taxRateInput.value) || 0;
        const target = parseFloat(targetPriceInput.value) || 0;

        if (target <= 0) {
            resBasePrice.textContent = '$0.00';
            resCheck.textContent = '-';
            return;
        }

        const multiplier = 1 + (taxRate / 100);
        const base = target / multiplier;
        
        // We round the base to 2 decimal places because that's how currency works
        // BUT, we need to check if that rounded base actually hits the target.
        // Sometimes you need to tweak it by a penny.
        
        // Let's try standard rounding first
        let bestBase = Math.round(base * 100) / 100;
        let finalWithTax = bestBase * multiplier;
        // Standard rounding of the final price
        let roundedFinal = Math.round(finalWithTax * 100) / 100;

        // Visual feedback
        resBasePrice.textContent = '$' + bestBase.toFixed(2);
        resCheck.textContent = `Pre-tax: $${bestBase.toFixed(2)} + Tax ($${(finalWithTax - bestBase).toFixed(2)}) = $${finalWithTax.toFixed(4)}`;
    }

    function generateTable() {
        const taxRate = parseFloat(taxRateInput.value) || 0;
        const start = parseFloat(rangeStart.value) || 0;
        const end = parseFloat(rangeEnd.value) || 0;
        const step = parseFloat(rangeStep.value) || 1;

        if (start < 0 || end <= start || step <= 0) return;

        priceTableBody.innerHTML = '';
        const multiplier = 1 + (taxRate / 100);

        for (let target = start; target <= end; target += step) {
            // Logic similar to single calc
            let base = target / multiplier;
            let bestBase = Math.round(base * 100) / 100;
            let finalWithTax = bestBase * multiplier;
            let roundedFinal = Math.round(finalWithTax * 100) / 100;

            const row = document.createElement('tr');
            
            // Check delta
            const delta = Math.abs(roundedFinal - target);
            const isPerfect = delta < 0.01;
            
            row.innerHTML = `
                <td>$${target.toFixed(2)}</td>
                <td style="color: #55efc4; font-weight: bold;">$${bestBase.toFixed(2)}</td>
                <td style="${!isPerfect ? 'color: #fab1a0' : ''}">$${roundedFinal.toFixed(2)}</td>
            `;
            priceTableBody.appendChild(row);
        }
    }

    // Initial run
    updateAll();
});