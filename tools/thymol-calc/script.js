document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const tabBtns = document.querySelectorAll('.tab-btn');
    const groupCrystal = document.getElementById('group-crystal');
    const groupVolume = document.getElementById('group-volume');
    
    const inputCrystal = document.getElementById('input-crystal');
    const inputVolume = document.getElementById('input-volume');
    const inputSyrup = document.getElementById('input-syrup');

    const resCrystals = document.getElementById('res-crystals');
    const resIpa = document.getElementById('res-ipa');
    const resWater = document.getElementById('res-water');
    const resLecithin = document.getElementById('res-lecithin');
    const resYield = document.getElementById('res-yield');

    const dosingResult = document.getElementById('dosing-result');
    const resDoseAmount = document.getElementById('res-dose-amount');
    const resSyrupVol = document.getElementById('res-syrup-vol');

    // Constants
    const RATIO_IPA = 5 / 30;
    const RATIO_WATER = 140 / 30;
    const RATIO_LECITHIN = 3 / 30;
    const YIELD_PER_G = 175 / 30; // Approx 5.833...
    const DOSING_RATE = 5 / 4.54; // 5ml per 4.54L (1 UK Gallon)

    let mode = 'by-crystal'; // 'by-crystal' or 'by-volume'

    // Tab Switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Update
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            mode = btn.dataset.mode;
            
            if (mode === 'by-crystal') {
                groupCrystal.classList.remove('hidden');
                groupVolume.classList.add('hidden');
                calculateFromCrystal();
            } else {
                groupCrystal.classList.add('hidden');
                groupVolume.classList.remove('hidden');
                calculateFromVolume();
            }
        });
    });

    // Event Listeners
    inputCrystal.addEventListener('input', calculateFromCrystal);
    inputVolume.addEventListener('input', calculateFromVolume);
    inputSyrup.addEventListener('input', updateDosing);

    function calculateFromCrystal() {
        const thymolG = parseFloat(inputCrystal.value) || 0;
        updateRecipe(thymolG);
    }

    function calculateFromVolume() {
        const volumeMl = parseFloat(inputVolume.value) || 0;
        // Reverse calc: how much thymol for this volume?
        const thymolG = volumeMl / YIELD_PER_G;
        updateRecipe(thymolG, volumeMl);
    }

    function updateRecipe(thymolG, overrideYield = null) {
        // Calculate Ingredients
        const ipa = thymolG * RATIO_IPA;
        const water = thymolG * RATIO_WATER;
        const lecithin = thymolG * RATIO_LECITHIN;
        const totalYield = overrideYield !== null ? overrideYield : (thymolG * YIELD_PER_G);

        // Update DOM
        resCrystals.textContent = format(thymolG) + ' g';
        resIpa.textContent = format(ipa) + ' ml';
        resWater.textContent = format(water) + ' ml';
        resLecithin.textContent = format(lecithin) + ' g';
        resYield.textContent = '~' + format(totalYield) + ' ml';

        // Update Dosing (based on current yield/input context)
        updateDosing();
    }

    function updateDosing() {
        const syrupL = parseFloat(inputSyrup.value) || 0;
        
        if (syrupL > 0) {
            dosingResult.classList.remove('hidden');
            const doseNeeded = syrupL * DOSING_RATE;
            resDoseAmount.textContent = format(doseNeeded) + ' ml';
            resSyrupVol.textContent = format(syrupL) + ' L';
        } else {
            dosingResult.classList.add('hidden');
        }
    }

    function format(num) {
        return num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    }

    // Initial Calculation
    calculateFromCrystal();
});