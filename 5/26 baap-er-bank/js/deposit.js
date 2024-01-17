document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('delposit button click');
    const depositField = document.getElementById('deposit-field');
    const newdepositAmountstring = depositField.value;
    const newdepositAmount = parseFloat(newdepositAmountstring)
    // console.log(typeof newdepositAmount);
    // console.log(depositField);
    // console.log(depositAmount);
    const depositAmountElement = document.getElementById('deposit-total');
    const previousDepositTotalstring = depositAmountElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalstring)
    // console.log(typeof previousDepositTotal)
    const currentDeposit = previousDepositTotal + newdepositAmount
    // console.log(depositTotal);
    depositAmountElement.innerText=currentDeposit;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newdepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;




    depositField.value = '';
})