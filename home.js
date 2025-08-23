document.getElementById('btn-add-money').
addEventListener('click', function(){
    
    const bank = document.getElementById('bank').value
    const account = document.getElementById('account').value
    const amount = parseInt(document.getElementById('amount').value)
    const pin = document.getElementById('pin').value;

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    
    const totalAvailableBalance = availableBalance + amount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;
})