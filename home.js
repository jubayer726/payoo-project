const pinNumber = 1234;

// Get innerText to available balance
function getInnerTex (id){
    const element = document.getElementById(id)
    const elementValue = parseInt(element.innerText)
    return elementValue;

}

//function for Toggling section
function handletoggle(id){
    const forms = document.getElementsByClassName('form')
   for(const form of forms){
    form.style.display = 'none';
   }
   document.getElementById(id).style.display = 'block';
}


document.getElementById('btn-add-money').
addEventListener('click', function(){
    
    const bank = document.getElementById('bank').value
    const account = document.getElementById('account').value
    const amount = parseInt(document.getElementById('amount').value)
    const pin = document.getElementById('pin').value;

    const availableBalance = elementValue('available-balance')
    
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
document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const outAmout = parseInt(document.getElementById('out-amount').value)

    const outAvailableBalance = elementValue('available-balance')
    //document.getElementById('available-balance').innerText;
    const outAccount = document.getElementById('out-account').value
    const outPin = document.getElementById('out-pin').value;

    if(outAccount.length < 11){
        alert('Please Enter valid Account Number')
        return;
    }
    if(pinNumber != outPin ){
        alert('Wrong account number or pin number')
        return;
    }

    const totalAvailableBalance = outAvailableBalance - outAmout;

    document.getElementById('available-balance').innerText = totalAvailableBalance;
}) 


// Toggling feature

document.getElementById('add-money-btn').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form')
//    for(const form of forms){
//     form.style.display = 'none';
//    }
//    document.getElementById('addmoney-section').style.display = 'block';
   handletoggle('addmoney-section');
})

document.getElementById('cash-out-btn').addEventListener('click', function(){
     handletoggle('cashout-section')
})

document.getElementById('transfer-btn').addEventListener('click', function(){
     handletoggle('transfer-section')
})

document.getElementById('bonus-btn').addEventListener('click', function(){
     handletoggle('bonus-section')
})