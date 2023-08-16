// 1. add event listener to the deposite button
// 2. get deposite amount from the depopsite input field
// 2.5 Convert string deposite amount to a number type
// 3. Clear the deposite input field after getting the value
// 4. Get the previous deposite total
// 5. calculate new deposit total and set the value the deposite total
// step 1
document.getElementById('btn-deposite').addEventListener('click', function(){
// step-2
    const depopsiteField = document.getElementById('deposit-field');
    const newDepositeAmountstring = depopsiteField.value
    const newDepositeAmount = parseFloat(newDepositeAmountstring);
    // step-3;
    depopsiteField.value = '';
    // step-4
    const depositeTotalELiment = document.getElementById('deposite-total')
    const previousDepositTotalString = depositeTotalELiment.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step 5
    const newDepositeTotal = previousDepositTotal + newDepositeAmount
})