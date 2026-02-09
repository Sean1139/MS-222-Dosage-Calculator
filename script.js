function calculate() {
  const mode = document.getElementById('mode').value;
  const volumeBushel = parseFloat(document.getElementById('volume-bushel').value);

  const resultDiv = document.getElementById('result');

  // Clear previous result
  resultDiv.innerHTML = '';

  if (!mode) {
    resultDiv.innerHTML = '<p style="color: #e74c3c;">Please select Anesthesia or Euthanasia.</p>';
    return;
  }

  if (isNaN(volumeBushel) || volumeBushel <= 0) {
    resultDiv.innerHTML = '<p style="color: #e74c3c;">Please enter a valid volume greater than 0 bushels.</p>';
    return;
  }

  // Constants per your protocol
  const CONC_ANESTHESIA = 50;    // mg/L
  const CONC_EUTHANASIA = 250;   // mg/L

  const LITERS_PER_BUSHEL = 35.2;

  const volumeLiters = volumeBushel * LITERS_PER_BUSHEL;

  let concentration;
  let modeText;

  if (mode === 'anesthesia') {
    concentration = CONC_ANESTHESIA;
    modeText = 'Anesthesia';
  } else {
    concentration = CONC_EUTHANASIA;
    modeText = 'Euthanasia';
  }

  // Calculate total mg needed
  const totalMg = concentration * volumeLiters;
  const totalGrams = (totalMg / 1000).toFixed(2);

  // Also show equivalent in liters for convenience
  resultDiv.innerHTML = `
    <p>For <strong>${volumeBushel} bushel${volumeBushel !== 1 ? 's' : ''}</strong> (${volumeLiters.toFixed(1)} L):</p>
    <p><strong>${modeText} dose (${concentration} mg/L):</strong></p>
    <p style="font-size: 1.6rem; margin: 0.8rem 0;">
      Add <strong>${totalGrams} grams</strong> of MS-222
    </p>
    <p>(total: ${totalMg.toFixed(0)} mg)</p>
    <p><small>Remember to buffer to neutral pH and follow your lab protocol.</small></p>
  `;
}
