function updateDefaultConc() {
  const mode = document.getElementById('mode').value;
  const concInput = document.getElementById('concentration');
  
  if (mode === 'anesthesia') {
    concInput.value = 50;
  } else if (mode === 'euthanasia') {
    concInput.value = 250;
  }
  // If user has already typed a custom value, we don't overwrite it
}

function updateVolumeLabel() {
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const label = document.getElementById('volume-label');
  label.textContent = `Volume (${unit}):`;
}

function calculate() {
  const mode = document.getElementById('mode').value;
  const concentration = parseFloat(document.getElementById('concentration').value);
  const volumeInput = parseFloat(document.getElementById('volume').value);
  const unit = document.querySelector('input[name="unit"]:checked').value;

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (!mode) {
    resultDiv.innerHTML = '<p style="color: #e74c3c;">Select Anesthesia or Euthanasia.</p>';
    return;
  }

  if (isNaN(concentration) || concentration <= 0) {
    resultDiv.innerHTML = '<p style="color: #e74c3c;">Enter a valid concentration > 0 mg/L.</p>';
    return;
  }

  if (isNaN(volumeInput) || volumeInput <= 0) {
    resultDiv.innerHTML = '<p style="color: #e74c3c;">Enter a valid volume > 0.</p>';
    return;
  }

  const LITERS_PER_BUSHEL = 35.2;
  const volumeLiters = (unit === 'bushels') ? volumeInput * LITERS_PER_BUSHEL : volumeInput;

  const totalMg = concentration * volumeLiters;
  const totalGrams = (totalMg / 1000).toFixed(2);

  const unitDisplay = unit === 'bushels' ? `${volumeInput} bushel${volumeInput !== 1 ? 's' : ''} (${volumeLiters.toFixed(1)} L)` : `${volumeInput} L`;

  resultDiv.innerHTML = `
    <p>For <strong>${unitDisplay}</strong>:</p>
    <p><strong>${mode.charAt(0).toUpperCase() + mode.slice(1)} dose (${concentration} mg/L):</strong></p>
    <p style="font-size: 1.8rem; margin: 0.8rem 0; color: #c0392b;">
      Add <strong>${totalGrams} grams</strong> of MS-222
    </p>
    <p>(total: ${totalMg.toFixed(0)} mg)</p>
    <p><small>Buffer to neutral pH. Follow lab/IACUC protocol.</small></p>
  `;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  updateVolumeLabel();
});
