const pinNumber = 1234;

document.getElementById('btn-add-money').
addEventListener('click', function(){
    
    const bank = document.getElementById('bank').value
    const account = document.getElementById('account').value
    const amount = parseInt(document.getElementById('amount').value)
    const pin = document.getElementById('pin').value;

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    
    if(account.length < 11 ){
        alert('Please input valid account number');
        return;
    }
    if(pin != pinNumber ){
        alert('Wrong account number or pin number')
        return;
    }

    const totalAvailableBalance = availableBalance + amount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;
})

// Cash Out Section

document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('cashout-section').style.display = 'none'
    document.getElementById('addmoney-section').style.display = 'block'
})

document.getElementById('cash-out-btn').
addEventListener('click', function(){
    document.getElementById('cashout-section').style.display = 'block'
    document.getElementById('addmoney-section').style.display = 'none'
})