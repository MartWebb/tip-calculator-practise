
// Glaobal DOM variables
const button = document.querySelector('button');
const total = document.querySelector('.total');
const tip = document.querySelector('.tip');
const bill = document.querySelector('.bill');
const perPersonDisplay = document.querySelector('.per-person');
const totalSheet = document.querySelector('.total-sheet');

// Calculate tip event  listener
button.addEventListener('click', () => {
    // Bill amount DOM elements
    let billInput = document.querySelector('.bill-input').value;
    const tipAmount = document.querySelector('.select').value;
    const shareInput = document.querySelector('.share-input').value;
    
    // Convert the strings to floats
    const realBillAmount = parseFloat(billInput);
    const realTipAmount = parseFloat(tipAmount);

    // Work out tip amount
    const totalAmount = (realBillAmount * realTipAmount);
    // Work out tip plus bill
    const billPlusTip = realBillAmount + totalAmount;

    // Display values
    tip.textContent = `$${totalAmount.toFixed(2)}`;
    bill.innerHTML =  `$${realBillAmount.toFixed(2)}`;
    total.innerHTML = `$${billPlusTip.toFixed(2)}`;
    totalSheet.style.display = "block";
    
    // Show standard amount if only 1 person is getting the bill
    if (shareInput > 1)  {
       const sharedAmount = billPlusTip / shareInput;
       perPersonDisplay.textContent = `$${sharedAmount.toFixed(2)}`;  
    } else {
        perPersonDisplay.textContent = `$${billPlusTip.toFixed(2)}`;
    }
    // Set the values to zero
    clearValues();
})

const clearValues = () => {
    billInput.value = '0'
    shareInput.value = '1'
} 