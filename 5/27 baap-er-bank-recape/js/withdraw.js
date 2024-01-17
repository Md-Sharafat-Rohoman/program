document.getElementById('btb-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawFieldString);
    withdrawField.value = '';

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceElement.innerText;
    const previousBalanceTotal= parseFloat(previousBalanceAmountString);

    const newBalance = previousBalanceTotal - newWithdrawTotal;
     balanceElement.innerText= newBalance;
})