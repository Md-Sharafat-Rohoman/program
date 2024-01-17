document.getElementById('btb-deposit').addEventListener('click',function(){
// step 1
    const depositField = document.getElementById('deposit-field');
    // step 2
    const newDepositFieldString = depositField.value;
    const newDepositAmount = parseFloat(newDepositFieldString);
    // step 3
    depositField.value = '';

    // step 4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //  step 5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step 6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceTotalString);

    // step 7
    const newBalanceTotal = previousBalanceAmount + newDepositTotal;
    balanceTotalElement.innerText = newBalanceTotal;
})